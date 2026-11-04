# Informe de Ads LU · versión independiente

`index.html` es una copia completa del informe publicado (versión del 03/11, 22:39). Funciona sola: se abre en cualquier navegador, sin Claude y sin internet (solo las fuentes se cargan de Google).

## Cómo abrirlo
Doble clic en `index.html`, o:
```
cd apps/informe-ads
python3 -m http.server 8081
```
y entra a `http://localhost:8081`.

## Dónde están los datos
Los datos van dentro del mismo HTML, en variables de JavaScript (por ejemplo `MESES`, `CAMP`, `ADS`, `ADS_M`, `META_DIA`, `CR`, `CRH`). No dependen de ningún servidor.

## Pendiente para actualizarlo sin Claude
Hoy, para poner datos nuevos hay que editar esas variables. El siguiente paso es:
1. Sacar los datos a un archivo `data.json` aparte.
2. Agregar un botón **Subir datos de Meta** que lea el CSV exportado del Administrador de anuncios y regenere `data.json`.
3. Agregar un botón **Subir compras** para el export de pedidos de Shopify.

Las columnas de Meta que hay que exportar están en `apps/README.md`.
