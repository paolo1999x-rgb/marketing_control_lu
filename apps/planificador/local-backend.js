/* Backend local del planificador LU.
   Reemplaza las funciones de Claude (db, user, assets, downloads) por versiones
   que guardan todo en este navegador (IndexedDB). No necesita internet ni Claude.
   Formato de respaldo: { version:1, exportedAt, collections: { posts: {id: data}, ... } } */
(function(){
  var DBNAME="lu-planificador",STORE="kv",KEY="data";
  var data={};            // { coleccion: { id: doc } }
  var subs=[];            // listeners
  function idb(){return new Promise(function(res,rej){var r=indexedDB.open(DBNAME,1);r.onupgradeneeded=function(){r.result.createObjectStore(STORE);};r.onsuccess=function(){res(r.result);};r.onerror=function(){rej(r.error);};});}
  function load(){return idb().then(function(db){return new Promise(function(res){var t=db.transaction(STORE).objectStore(STORE).get(KEY);t.onsuccess=function(){res(t.result||{});};t.onerror=function(){res({});};});}).catch(function(){return {};});}
  var saveT=null;function save(){clearTimeout(saveT);saveT=setTimeout(function(){idb().then(function(db){db.transaction(STORE,"readwrite").objectStore(STORE).put(data,KEY);});},300);}
  function clone(x){return x==null?x:JSON.parse(JSON.stringify(x));}
  function split(p){var a=p.split("/");return {c:a.slice(0,-1).join("/"),id:a[a.length-1]};}
  function snapDoc(c,id){var d=(data[c]||{})[id];return {id:id,exists:d!==undefined,data:function(){return clone(d);}};}
  function notify(){subs.forEach(function(s){try{s();}catch(e){console.error(e);}});}
  function write(c,id,d){(data[c]=data[c]||{})[id]=d;save();notify();return Promise.resolve();}
  function Doc(path){var s=split(path);return {id:s.id,
    get:function(){return Promise.resolve(snapDoc(s.c,s.id));},
    set:function(d,o){var cur=(data[s.c]||{})[s.id];return write(s.c,s.id,o&&o.merge&&cur?Object.assign(clone(cur),clone(d)):clone(d));},
    update:function(d){var cur=(data[s.c]||{})[s.id];if(cur===undefined)return Promise.reject(new Error("no existe"));var n=clone(cur);for(var k in d){if(d[k]&&d[k].__delete__)delete n[k];else n[k]=clone(d[k]);}return write(s.c,s.id,n);},
    delete:function(){if(data[s.c])delete data[s.c][s.id];save();notify();return Promise.resolve();},
    onSnapshot:function(cb){var f=function(){cb(snapDoc(s.c,s.id));};subs.push(f);f();return function(){subs=subs.filter(function(x){return x!==f;});};}};}
  function Query(c,w,o,l){var q={
    where:function(f,op,v){return Query(c,w.concat([[f,op,v]]),o,l);},
    orderBy:function(f,dir){return Query(c,w,[f,dir||"asc"],l);},
    limit:function(n){return Query(c,w,o,n);},
    doc:function(id){return Doc(c+"/"+id);},
    _run:function(){var m=data[c]||{};var rows=Object.keys(m).map(function(id){return {id:id,d:m[id]};});
      w.forEach(function(x){var f=x[0],op=x[1],v=x[2];rows=rows.filter(function(r){var a=r.d&&r.d[f];return op===">="?a>=v:op===">"?a>v:op==="<="?a<=v:op==="<"?a<v:op==="!="?a!==v:a===v;});});
      if(o)rows.sort(function(a,b){var x=(a.d||{})[o[0]],y=(b.d||{})[o[0]];return (x<y?-1:x>y?1:0)*(o[1]==="desc"?-1:1);});
      if(l)rows=rows.slice(0,l);
      return {docs:rows.map(function(r){return {id:r.id,exists:true,data:function(){return clone(r.d);}};}),size:rows.length,empty:!rows.length};},
    get:function(){return Promise.resolve(q._run());},
    onSnapshot:function(cb){var f=function(){cb(q._run());};subs.push(f);f();return function(){subs=subs.filter(function(x){return x!==f;});};}};return q;}
  var db={doc:Doc,collection:function(c){return Query(c,[],null,null);}};
  var user={me:function(){return Promise.resolve({id:"local",name:"Paolo",isOwner:true});},can:function(){return Promise.resolve(true);},profiles:function(){return Promise.resolve([]);},search:function(){return Promise.resolve([]);}};
  var downloads={save:function(o){var b=new Blob([o.data],{type:o.mimeType||"text/plain"});var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=o.filename||"archivo";a.click();setTimeout(function(){URL.revokeObjectURL(a.href);},2000);return Promise.resolve();}};
  var ready=load().then(function(d){data=d||{};});
  window.claude={use:function(n){return ready.then(function(){return {db:db,user:user,downloads:downloads}[n]||null;});}};
  // ---- Respaldo: exportar / importar ----
  window.LU_LOCAL={
    exportar:function(){downloads.save({filename:"planificador-lu-"+new Date().toISOString().slice(0,10)+".json",data:JSON.stringify({version:1,exportedAt:new Date().toISOString(),collections:data}),mimeType:"application/json"});},
    importar:function(file){return file.text().then(function(t){var j=JSON.parse(t);if(!j.collections)throw new Error("Archivo no válido");data=j.collections;save();notify();location.reload();});}
  };
  document.addEventListener("DOMContentLoaded",function(){
    var bar=document.createElement("div");bar.style.cssText="position:fixed;left:12px;bottom:12px;z-index:9999;display:flex;gap:6px;font:600 12px system-ui";
    var st="background:#1d1d22;color:#eee;border:1px solid #333;border-radius:999px;padding:7px 12px;cursor:pointer";
    var ex=document.createElement("button");ex.textContent="Exportar datos";ex.style.cssText=st;ex.onclick=window.LU_LOCAL.exportar;
    var im=document.createElement("button");im.textContent="Importar datos";im.style.cssText=st;
    var inp=document.createElement("input");inp.type="file";inp.accept=".json";inp.style.display="none";
    inp.onchange=function(){if(inp.files[0]&&confirm("¿Reemplazar los datos de este navegador con este archivo?"))window.LU_LOCAL.importar(inp.files[0]).catch(function(e){alert(e.message);});};
    im.onclick=function(){inp.click();};bar.append(ex,im,inp);document.body.appendChild(bar);
  });
})();
