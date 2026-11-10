# Contexto · Mailing y automatizaciones de Shopify · Licorerías Unidas (LU)

**Corte:** 12/11/2026 · **Interlocutor:** Paolo (marketing)
Pega este documento al inicio de un chat nuevo. Léelo completo antes de responder y no vuelvas a pedir lo que ya está aquí.

---

## 1. La marca y el equipo

- **Licorerías Unidas (LU):** licorería en Lima, Perú. Tiendas físicas (Surco, San Isidro, Miraflores, La Molina) y web en `licoreriasunidas.pe` (Shopify).
- **Colecciones propias** (no son marcas de terceros):
  - **Private Cask (PC):** whiskies single malt, premium y rarezas.
  - **La Casa del Ron (LCDR):** rones, con la línea Rarezas.
  - **Wine Bank (WB):** vinos.
- **También venden:** espumantes, champagne, tequila, pisco, gin y packs.
- **Público:** adultos en Lima que compran para ellos, para regalar o para una reunión. Hay un segmento de alto valor (whisky premium, coleccionistas).

| Persona | Rol |
|---|---|
| Paolo | Marketing: planificación, copys, guiones, mailing. Interlocutor directo. |
| Cristhian Torres | Jefe. Aprueba y da el feedback final. |
| Jean Calderón | Diseño y edición de video. |
| Mariano Zegarra | Productos, inventario, precios y condiciones comerciales. |

## 2. Reglas de trabajo (siempre)

1. **No inventar** precios, stock, fechas, premios, descuentos ni cifras. Si falta un dato, poner `[DATO]`.
2. **Urgencia y escasez solo si son reales.** No llamar promoción a algo sin descuento real.
3. **Nunca mencionar grabado ni personalización gratis:** ese servicio ya no existe.
4. **Cuotas sin intereses (CSI) terminó el 04/11:** no mencionarlas.
5. **Black Friday es solo el 27/11.** Antes de esa fecha es "pre": sin precios.
6. **Cambiar solo lo que se pide.** No reescribir lo que no se tocó.
7. **Una recomendación clara**, con como mucho una alternativa.
8. **Español peruano natural**, sin cringe, sin clichés, sin redundancias. Fechas en `dd/mm` y moneda en `S/`.
9. **El inventario en Excel es una foto del momento:** validar con Mariano antes de publicar stock.
10. **Marca Insignia está descartada.**

## 3. Estrategia de mailing

### Frecuencia y tipos
- **3 envíos por semana a suscriptores:**
  - **Martes:** oferta (colección de la semana). Algunos martes los reemplaza Destino Mendoza.
  - **Jueves:** "El de los jueves", contenido que conecta.
  - **Viernes 4–5 pm:** oferta de fin de semana.
- **No subir a 5 por semana para toda la base.** Si se sube la frecuencia, que sea por segmento (los que abren o hacen clic) y vigilando bajas, quejas y entregabilidad.

### "El de los jueves" rota entre 5 formatos
1. Receta de 3 ingredientes.
2. El chisme detrás de la botella.
3. ¿Cuál cuesta más? (se revela al hacer clic).
4. El error que todos cometen (copa, temperatura, hielo).
5. El plan ya armado ("tu viernes en 3 botellas").

### Referencia de estilo: Temu
Asunto que deja algo sin resolver, se siente personal, precio a la vista, una idea, una imagen grande y un botón. Se lee en menos de 30 segundos en el celular.

### Regla del asunto (siempre)
**El asunto tiene que "chapar": que la persona necesite abrir el correo.** Se escribe antes que el cuerpo. No describe el contenido.
- **Sin resolver:** pregunta, "adivina" o un dato a medias.
- **Concreto:** un número, un precio ("desde S/ 55") o un "hoy".
- **Corto:** máximo 45 caracteres.
- **Personal:** "tu", "para ti" y, de preferencia, el nombre. En Shopify: botón **Personalize → First name**, con valor por defecto "Hola".
- **Emoji:** uno solo, al final.
- **Urgencia:** solo si es real.
- **Entrega:** siempre 3 opciones, una recomendada y dos para test A/B.
- **Ejemplo aprobado:** `{{First name}}, armamos tu previa del finde 👀`

### Estructura de cada mailing
1. **Asunto y preheader.** El preheader complementa el asunto, no lo repite.
2. **Cabecera visual.**
3. **Cuerpo corto:** 1 título y 2 líneas, que entre en la mente ("date el gusto"). Sin nombrar cada botella; los nombres y precios van en las tarjetas.
4. **Tarjetas de producto:** 3 lado a lado, con categoría, nombre, nota corta, precio y botón "Comprar".
5. **Un botón principal.** Puede ser un link de carrito que agrega las 3 botellas: `/cart/VARIANTE:1,VARIANTE:1,VARIANTE:1`.
6. **Pie:** logo LU, redes (WhatsApp `wa.me/51975369311`, Facebook `licoreriasunidas.peru`, Instagram `licoreriasunidas`, LinkedIn `company/licorer%C3%ADas-unidas`), franja legal, política de privacidad y baja.

**Ejemplo de cuerpo aprobado:**
> **Para la previa del finde bastan tres botellas.**
> Toda la semana pensando en pendientes, reuniones y tráfico.
> Este finde, date el gusto: abre algo que de verdad valga la pena.

### Pie legal obligatorio
- "Tomar bebidas alcohólicas en exceso es dañino."
- "Prohibida la venta de bebidas alcohólicas a menores de 18 años."
- Enlace de baja (Ley 29733).
- No asociar el alcohol con éxito social ni con conducir.

### Diseño
- **Tipografía:** Montserrat (respaldo Arial). Títulos en bold sans serif.
- **Paleta usada en noviembre:** crema `#F8E7D2`, café oscuro `#2B1D12`, acentos dorados.
- **Plantilla de referencia en el repo:** `entregables/mailing_nov/2026-11-07_previa.html`. Hay otra en el mismo folder, la de Luis Miguel (`2026-11-05_luis-miguel_v2.html`).

### Reglas técnicas de Shopify Email ("Code your own")
- `{{ unsubscribe_link }}` va **suelto**, dentro de un `<span>`, nunca dentro de otro `<a>`. Shopify lo convierte en un link que dice "Unsubscribe".
- `{{ open_tracking_block }}` va justo antes de `</body>`.
- **Ningún `&` suelto**, ni en links ni en el link de Google Fonts: escribir `&amp;`. Shopify agrega sus propias UTM.
- **Imágenes:** subirlas a Shopify (Contenido → Archivos) y usar su link de `cdn.shopify.com`.
- **Estructura:** tablas, 600 px de ancho, texto real (no todo en imagen).
- **Fondos en Outlook:** Outlook de escritorio no muestra imágenes de fondo, así que siempre hay que poner un color de respaldo.
- **Siempre enviarse una prueba** antes de programar.

### Rendimiento histórico (Shopify Email)
| Mailing | Apertura | Clics | Ventas | Qué tenía |
|---|---|---|---|---|
| Descuentos (10/03) | 31 % | 3.3 % | S/ 3,035 | Descuento |
| Cuotas sin intereses (30/10) | 25.6 % | 3.0 % | S/ 2,561 | Cuotas |
| El regalo (16/12) | 29.6 % | 5.1 % | S/ 1,982 | Regalo de temporada |
| Black Friday (27/11) | 27.8 % | 5.5 % | S/ 1,702 | Oferta |
| Luis Miguel (05/11/2026) | 17 % | 0.73 % | S/ 0 | Novedad sin razón para comprar; asunto descriptivo y cortado |

**Aprendizaje:** venden los mailings que traen una razón para comprar ya (descuento, cuotas, regalo, oferta). Los de aviso o novedad no venden. Referencias internas: apertura buena por encima de 30 % y clics buenos por encima de 3 %. La apertura está inflada por la privacidad de Apple, así que conviene mirar más los clics.

### Mailings de noviembre (nombre de trabajo en el planificador)
| Fecha | Mailing | Estado |
|---|---|---|
| 05/11 | Luis Miguel · tequila | Enviado, bajo rendimiento |
| 06–07/11 | `{NOMBRE}, armamos tu previa del finde 👀` · Gold Label S/ 185, Zacapa 23 S/ 188, Riccadonna Moscato Rosé S/ 55 | Terminado (en el planificador figura con fecha 13/11) |
| 10/11 | El ron que los maestros roneros guardan para ellos 🥃 (LCDR Rarezas) | Idea |
| 11/11 | El regalo de fin de año, resuelto antes que todos 🎁 | Idea |
| 12/11 | El whisky que se hizo para una reina 👑 (Royal Salute 21 vs Blue Label) | Idea |
| 17/11 | Tu nombre puede estar en dos pasajes a Mendoza ✈️ | Idea · bases y fechas `[DATO]` |
| 19/11 | Lo estás tomando en la copa equivocada 🍷 | Idea |
| 20/11 | ¿Brindis de S/ 55 o de S/ 600? Los dos valen 🥂 | Idea |
| 24/11 | 🔒 Algo se desbloquea el viernes 27 | Idea · sin precios |
| 26/11 | Mañana es el día. ¿Ya tienes tu carrito listo? 🛒 | Idea |
| 27/11 | Ya empezó. Hasta las 23:59 | Idea · condiciones `[DATO]` |

### Datos de venta útiles
- **Venta web de octubre:** S/ 152,341. Whisky 38.9 %, vino 21.4 %, ron 14.3 %, espumantes 6.3 %, tequila 4.9 %, licores 3.6 %, pisco 2.5 %.
- **Día de la semana (julio a octubre):**
  - Miércoles es el mejor día por venta promedio (S/ 4,661).
  - Jueves tiene más pedidos (164) pero el ticket más bajo (S/ 454).
  - Domingo no hay despacho.
  - Los días 11 al 15 del mes suelen ser flojos.
- **Precios verificados en la web al 06/11** (validar antes de usar):

| Producto | Precio |
|---|---|
| JW Black | S/ 96 |
| JW Gold Label Reserve | S/ 185 |
| JW Blue | S/ 870 |
| Zacapa 23 | S/ 188 |
| Zacapa XO | S/ 445 |
| Chandon Extra Brut / Demi Sec | S/ 62 |
| Chandon Rosé | S/ 75 |
| Riccadonna (Asti, Ruby, Moscato Rosé, Prosecco) | S/ 55 c/u (antes S/ 65) |
| Chivas 18 | S/ 235 |
| Royal Salute 21 | S/ 699 |

---

## 4. Shopify Messaging: auditoría de automatizaciones

La empezó Paolo con ChatGPT, que encontró el error y no siguió. Esto es lo que se sabe.

### Datos confirmados (capturas de Shopify)
- **Suscriptores:** el segmento `email_subscription_status = SUBSCRIBED` tiene **6,838 clientes**, el 40.56 % de la base.
- **Automatizaciones, últimos 12 meses:**

| Automatización | Estado | Enviados | Clics | Pedidos | Ventas |
|---|---|---:|---:|---:|---:|
| Abandoned cart | Active | 476 | 10 % | 6 | S/ 2,630 |
| Recuperar un pedido abandonado | Active | 448 | 4 % | 2 | S/ 879 |
| Pedido abandonado | Active | 447 | 5 % | 3 | S/ 1,495 |
| Abandoned checkout | Active, con advertencia | Sin datos | — | — | — |
| Primera venta adicional | Active, con advertencia | Sin datos | — | — | — |
| Envío de descuento a Cliente | Active | 5 | 0 % | 0 | — |
| Carrito abandonado | Inactive | — | — | — | — |

  Total: 1,376 envíos, 11 pedidos y S/ 5,004 atribuidos.

- **Flujo `Abandoned cart`:**
  1. Disparador: el cliente salió de la tienda sin comprar, con tipo de abandono `CART`.
  2. Espera de 4 horas.
  3. Sigue solo si no agregó otro producto, no inició checkout y no compró.
  4. Sigue solo si no recibió otro correo de abandono en 14 días.
  5. Sigue solo si hay stock.
  6. Envía el email.
- **Flujo `Abandoned checkout`:**
  1. Disparador: `Customer abandons checkout`, en la tienda online, con total mayor a 0.
  2. Espera de 10 horas.
  3. Sigue solo si no compró ni abandonó otro checkout.
  4. Sigue solo si hay stock.
  5. Envía el email.

### El error encontrado
- El workflow **`Abandoned checkout` está Active**, pero su mensaje **`You left items at checkout` está en Draft**.
- Las ejecuciones pasan el disparador y las condiciones, y fallan en el paso `Send marketing email` con este mensaje:
  ```text
  Exception: Cannot deliver an automation email. Email automation step needs to be active. Current status is draft.
  ```
- Hay muchas ejecuciones `Completed` con `1 error`, al menos desde el 28–30/10. Paolo vio errores desde cerca del 22/10. Shopify borra los registros a los 14 días.
- **En resumen, el recordatorio de checkout abandonado no le está llegando a nadie.** Es el que debería recuperar más, porque esa persona ya estaba pagando.

### Lectura de lo que no quedó claro
- **El valor `1.7976931348623157e+308`** en `hours since last abandoned checkout` es el número más grande que maneja un sistema. Muy probablemente significa "este cliente no tiene un checkout abandonado anterior" (infinitas horas), y por eso pasa la condición "mayor a 24". Es probable, no está confirmado, pero no parece ser la causa del error.
- **Riesgo de correos dobles al arreglarlo:** "Recuperar un pedido abandonado" y "Pedido abandonado" tienen cifras casi iguales (448 y 447 envíos). Es probable que también se disparen con el checkout abandonado. Si se activa el mensaje de `Abandoned checkout` sin revisar esos dos, una misma persona podría recibir 2 o 3 correos por el mismo abandono. **No está probado:** hay que abrir los dos flujos y comparar su disparador antes de activar nada.

### Siguiente paso (solo lectura, un paso a la vez)
1. Abrir `Recuperar un pedido abandonado` y `Pedido abandonado` y anotar de cada uno: disparador, espera, condiciones, mensaje conectado y su estado.
2. Armar la matriz comparativa de los 5 flujos de abandono: disparador, tipo de abandono, espera, exclusiones, control de stock, mensaje y estado.
3. Con la matriz, decidir **un solo flujo por evento:**
   - Para el carrito: `Abandoned cart`, que ya funciona y tiene la regla de 14 días.
   - Para el checkout: `Abandoned checkout`, con su mensaje activado, o uno de los otros dos si ya cubre ese evento.
4. Recién entonces abrir el mensaje `You left items at checkout`. Revisar remitente, asunto, contenido, links y pie con la regla del asunto y las reglas de la sección 2. Activarlo y apagar el flujo que quede duplicado.

**Permisos:** activar o apagar flujos lo hace Paolo, y solo cuando él lo autorice. Si su usuario no tiene permiso para publicar, preparar un resumen corto para el administrador.

**Exportaciones:** no pedir exportaciones de clientes ni de pedidos. Una vez la exportación le llegó por correo a Mariano. Trabajar con capturas, ocultando los datos personales.

### Automatizaciones a construir después (cuando el abandono esté limpio)
1. **Bienvenida a nuevos suscriptores:** 2–3 correos (quiénes somos, colecciones, primera compra).
2. **Post-compra:** gracias, maridaje o cóctel con lo que compró y, a los X días, una recomendación de la misma categoría.
3. **Reactivación:** clientes sin compra en 90 días.
4. **Navegación abandonada:** vio un producto y no lo agregó al carrito.

Cada una con la regla de frecuencia de los flujos de abandono (no más de un correo automático cada X días por persona) y solo a contactos `SUBSCRIBED`.

### Meta y Shopify no son lo mismo
- **Export de Meta, 01/04–06/11:** 1,895 agregados al carrito, 736 pagos iniciados y 277 compras. Son **eventos**, no personas ni carritos únicos.
- **Valor del carrito:** los S/ 753,381.67 "agregados al carrito" no son ventas recuperables.

---

## 5. Qué espero de ti
1. Seguir la auditoría desde el paso 1 de "Siguiente paso", guiándome un paso a la vez.
2. Separar lo confirmado de lo que es hipótesis.
3. No cambiar nada en Shopify sin mi ok explícito.
4. Para los mailings: asunto (3 opciones), preheader, cuerpo, CTA y productos, con las reglas de este documento.
