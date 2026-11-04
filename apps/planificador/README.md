# Planificador LU · versión independiente

Esta es la misma aplicación que el planificador publicado en Claude, pero funciona sola en tu computadora, sin abrir Claude y sin internet (solo las fuentes tipográficas se cargan de Google; sin internet usa las del sistema).

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación completa (diseño, lógica y vista previa de mailings). |
| `local-backend.js` | Reemplaza las funciones de Claude: guarda los datos en tu navegador (IndexedDB), da los botones de exportar e importar y descarga archivos. |

## Cómo usarlo

1. **Respalda los datos desde Claude.** Abre el planificador publicado y toca **Exportar datos** (abajo a la izquierda). Se descarga `planificador-lu-AAAA-MM-DD.json` con todas las tareas, posts, mailings, fechas, bitácora e imágenes.
2. **Abre la versión local.** Doble clic en `index.html`, o mejor, sírvela con un servidor local:
   ```
   cd apps/planificador
   python3 -m http.server 8080
   ```
   y entra a `http://localhost:8080`.
3. **Carga tus datos.** Toca **Importar datos** y elige el JSON del paso 1.
4. **Trabaja normal.** Todo lo que cambies se guarda en ese navegador. Para pasarlo a otra computadora o guardarlo, toca **Exportar datos** y guarda el JSON (por ejemplo, en Drive o en este repositorio).

## Qué funciona y qué no

| Función | Versión local |
|---|---|
| Tablero, contenido, calendario, mailings, vista previa, línea de tiempo, bitácora | Sí |
| Subir imágenes a las piezas | Sí (se guardan dentro de los datos) |
| Varios usuarios viendo lo mismo en vivo | No: cada navegador tiene su copia. Se comparte pasando el JSON. |
| Buscar personas del equipo | No (no hay cuentas) |

## Formato de datos

El respaldo es un JSON abierto, legible por cualquier herramienta:

```json
{ "version": 1, "exportedAt": "…", "collections": { "posts": { "<id>": { … } }, "tasks": { … }, … } }
```

Colecciones: `posts`, `tasks`, `comments`, `dates`, `blog`, `trash`, `adDays`, `meetings`, `log`, `weeks`, `config`, `meta`, `media`.

## Siguiente paso (opcional)

Para que varias personas trabajen sobre los mismos datos sin Claude, `local-backend.js` se puede cambiar por uno que guarde en un servidor propio (por ejemplo Supabase, Firebase o un archivo en un servidor). El resto de la aplicación no cambia, porque solo habla con `db.doc()` y `db.collection()`.
