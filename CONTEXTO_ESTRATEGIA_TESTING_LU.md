# Estrategia Testing LU · Contexto · Noviembre 2026

Datos de apoyo: `entregables/Testing_LU_datos_nov2026.xlsx` (tiene distritos, zonas, compras cruzadas, anuncios, videos y la distribución propuesta).

## 1. Qué es Testing LU

- Es una campaña de Meta de Licorerías Unidas (LU) para ventas web en Lima.
- Su objetivo es **saber qué compra cada grupo de distritos** y qué conviene mostrarle a cada uno.
- Funciona con **dos conjuntos de anuncios separados por distrito**:
  - **Premium:** distritos con ticket alto.
  - **Accesible:** distritos con ticket medio o bajo.
- Los videos de cada conjunto muestran productos pensados para ese público. Los anuncios Accesibles llevan el precio visible y cierran en una colección corta de la web.
- **Meta de rendimiento:** S/ 70 por compra y un retorno de 5x.
- **Lectura:** 21/11.

## 2. Datos de partida (octubre 2026)

### 2.1 Venta web total
- 275 pedidos y S/ 152,340 de venta.
- **Ticket promedio:** S/ 554.

### 2.2 Testing en octubre: 4 zonas dentro de la campaña

| Zona | Distritos | Gasto | Venta Meta | Compras | Retorno | Ticket web |
|---|---|---|---|---|---|---|
| A | Surco, San Borja, Surquillo | S/ 293 | S/ 887 | 1 | 3.0x | S/ 467 |
| B | San Isidro, Miraflores, Magdalena, Barranco | S/ 281 | S/ 533 | 3 | 1.9x | S/ 709 |
| **C** | Jesús María, Pueblo Libre, Breña, San Miguel, La Victoria, Lince | S/ 287 | **S/ 3,330** | **5** | **11.6x** | S/ 317 |
| D | La Molina, Santa Anita, Ate | S/ 330 | S/ 828 | 3 | 2.5x | S/ 787 |

- La zona con el ticket web más bajo (C) fue la que mejor respondió a los anuncios.
- Las zonas de ticket alto (B y D) compran bien en la web, pero poco por anuncio.
- Son solo 12 compras en total, así que es una señal y no una conclusión.

### 2.3 Qué se compró por anuncio en Testing
Lo identifiqué cruzando cada compra de Meta, por fecha y monto, con los pedidos de Shopify.

- **D (La Molina):** vinos Rutini, Alma Negra y Marqués de Riscal.
- **D (Santa Anita):** 2 Jägermeister Cold Brew.
- **B (San Isidro):** Escorihuela Malbec y Sottano Chardonnay.
- **B (Magdalena):** Ron Pampero.
- **A (Surco):** probablemente 12 Catena Malbec.
- **C:** pendiente. Hay que revisarlo en LU Orders.

En las zonas Premium, lo que se compró por anuncio fue **vino**, no whisky.

### 2.4 Anuncios de LU que mejor rindieron en octubre (toda la cuenta)

| Anuncio | Retorno |
|---|---|
| JW Imagen Blue | 22x |
| CH 18 Personalizado | 13.7x |
| JW, conjunto completo | 14x |
| Private Cask, regalo con grabado | 8.8x |
| Wine Bank "Bienvenidos" | 7.1x |
| La Casa del Ron | 3.7x |

Los anuncios de Wine Bank centrados en íconos o en una sola bodega no vendieron.

### 2.5 Qué compra cada zona en la web
- **B:** whisky (Chivas, JW, Glenfiddich).
- **D:** vino (39 %).
- **A:** JW y Zacapa.
- **C:** JW, tequila 1800 y Portón.

## 3. Videos de Testing para noviembre

| Conjunto | # | Video | Productos | Sale | Estado |
|---|---|---|---|---|---|
| Premium | P1 | Whisky marcas | JW Blue Label y Glenfiddich | 02/11 | Publicado |
| Premium | P2 | Chivas y whisky de colección | Chivas 18, Ultis y 25, Royal Salute 21 (grabado gratis) | 07/11 | Guion listo |
| Premium | P3 | Vino premium, con el ángulo "elegir bien" | Catena Zapata, El Enemigo, Juvé & Camps Gran Juvé | 09/11 | Por guionizar |
| Accesible | A1 | Whisky de entrada | Jack Daniel's N.º 7, JW Black, Gold y Green | 07/11 | Guion listo |
| Accesible | A2 | Ron Zacapa | Zacapa y Barceló Imperial | — | Hecho |
| Accesible | A3 | Tequila 1800 y más | 1800 Silver, Reposado y Cristalino, Pisco Portón | 09/11 | Por guionizar |

**Descartados:** Ron Botrán, Ron variedad (Premium y Accesible), Ron marcas accesible y Whisky variedad accesible.

## 4. Distribución de distritos

### 4.1 Problemas de la distribución actual
- **Magdalena** (ticket S/ 210) y **Barranco** (S/ 379) están en Premium.
- **Ate** (S/ 177) y **Santa Anita** (S/ 234) están en Premium. La Zona D solo se ve premium por La Molina, que tiene un ticket de S/ 1,379.
- **Surco** (S/ 533, con compras de JW Blue, Macallan y Yamazaki) está en Accesible.
- **Hay distritos con venta que no están en ninguna zona:**
  - San Martín de Porres: S/ 2,519, con 77 % whisky.
  - Cercado de Lima.
  - Callao.
  - Chorrillos.
  - Los Olivos.

### 4.2 Distribución propuesta: 2 conjuntos, sin subdividir

| Conjunto | Distritos | Venta web oct | Pedidos | Ticket | % de la venta web |
|---|---|---|---|---|---|
| **Premium** | San Isidro, Miraflores, Surco, La Molina | S/ 102,736 | 135 | S/ 761 | 67 % |
| **Accesible** | San Borja, Surquillo, Barranco, Magdalena, Jesús María, Pueblo Libre, Lince, San Miguel, La Victoria, Breña, Ate, Santa Anita, San Martín de Porres, Cercado de Lima, Callao, Chorrillos, Los Olivos | S/ 35,182 | 113 | S/ 311 | 23 % |

**Cómo se aplica:**
- Se cambia en Meta el **07/11**, junto con los videos nuevos, porque Meta reinicia el aprendizaje igual.
- La UTM `utm_content` pasa a ser `premium` y `accesible`.
- Los dos conjuntos arrancan con el mismo presupuesto. El 21/11 se mueve hacia el que rinda más.
- La lectura por distrito se hace con la dirección de envío en LU Orders, no con conjuntos separados.

**Riesgos:**
- Es un solo mes de datos.
- Hay pocas compras por conjunto.
- Provincia (S/ 8,950) queda fuera porque no se puede segmentar por distrito.

---

**¿Qué opinas de esta distribución?**
