# Aplicaciones de LU fuera de Claude

Cómo cada herramienta cumple con la independencia del ecosistema C.O.O.P.E.R.: Claude se usa para crearlas, pero no para que funcionen.

## Estado por artefacto

| Artefacto | Plataforma (funciona sin Claude) | Proveedor de IA | Infraestructura (datos tuyos) | Estado |
|---|---|---|---|---|
| **Planificador** (`apps/planificador`) | Sí: HTML + JS, se abre en el navegador | No usa IA | Sí: datos en tu navegador y respaldo en JSON | Listo |
| **Informe de Ads** (`apps/informe-ads`) | Sí: HTML con los datos dentro | No usa IA | Sí: todo en el archivo | Funciona solo; falta subir datos nuevos sin Claude |
| **Plantillas de mailing** (`entregables/mailing_nov`) | Sí: son imágenes PNG | — | Sí | Listo |

## Cómo se hizo el planificador (y cómo se hará el resto)

1. **El código vive en este repositorio**, no solo en Claude. Cualquier cambio se hace sobre `index.html`.
2. **Una sola capa conecta con los datos** (`local-backend.js`). Hoy guarda en el navegador; mañana se puede cambiar por un servidor propio sin tocar el resto.
3. **Los datos se exportan en JSON abierto**, para guardarlos donde quieras y moverlos entre equipos.
4. **No depende de la API de Claude.** Si en el futuro una función necesita IA, se conecta por una capa aparte que pueda usar cualquier proveedor.

## Informe de Ads: cómo se independiza

El informe hoy muestra datos que yo cargo desde Meta. Para que no dependa de mí:

1. **Botón "Subir datos de Meta"** en el informe: exportas desde el Administrador de anuncios un CSV con columnas fijas y el informe se actualiza solo.
2. **Botón "Subir compras"** para el export de pedidos de Shopify (distritos, productos, ticket promedio).
3. **Misma capa de datos** que el planificador: respaldo en JSON y versión local en `apps/informe-ads`.

Columnas de Meta a exportar (Administrador de anuncios → Informes → Exportar, por día):
`Día · Nombre de la campaña · Nombre del conjunto de anuncios · Nombre del anuncio · Importe gastado (PEN) · Impresiones · Alcance · Clics en el enlace · Visitas a la página de destino · Artículos agregados al carrito · Pagos iniciados · Compras · Valor de conversión de compras · Reproducciones de video al 100 %`

## Opciones de despliegue

| Opción | Cuándo conviene |
|---|---|
| **Web local** (abrir `index.html` o `python3 -m http.server`) | Uso personal, sin costo |
| **Escritorio con Tauri o Electron** | Si quieres un ícono en la compu y abrirla como programa |
| **Servidor propio** (Netlify, Vercel o tu hosting) + base de datos (Supabase) | Si varias personas tienen que ver y editar lo mismo |
