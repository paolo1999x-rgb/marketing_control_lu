# Nomenclatura de anuncios · Licorerías Unidas

Vigente desde el 05/11/2026. Se aplica a campañas, conjuntos, anuncios, archivos de video e imagen en Drive y UTM.

## Reglas generales
1. **MAYÚSCULAS, guion bajo `_` como separador**, sin espacios, tildes, ñ ni emojis. Así el nombre se puede filtrar en Ads Manager, se lee igual en el informe y no se rompe dentro de una URL.
2. **El orden de los bloques nunca cambia.** Si un bloque no aplica, se escribe `NA`.
3. **El código de un anuncio no se reutiliza.** Si se rehace, sube la versión (`V1`, `V2`…).
4. **El archivo en Drive se llama igual que el anuncio**, más la duración.
5. **La UTM se arma desde el mismo nombre**, en minúsculas.

## 1 · Campaña
`AAAA-MM_OBJETIVO_LINEA_ESTRUCTURA`

| Bloque | Valores |
|---|---|
| AAAA-MM | Mes de arranque: `2026-11` |
| OBJETIVO | `VENTAS` · `TRAFICO` · `ALCANCE` · `INTERAC` |
| LINEA | ver diccionario |
| ESTRUCTURA | `ABO` (presupuesto por conjunto) · `CBO` (presupuesto de campaña) · `ASC` (Advantage+ Shopping) |

Ejemplo: `2026-11_VENTAS_TST_ABO`

## 2 · Conjunto de anuncios
`LINEA_SEGMENTO_GEO_PUBLICO_OPTIM`

| Bloque | Valores |
|---|---|
| SEGMENTO | `PREM` · `ACC` · `RT` (retargeting) · `CLI` (clientes) · `NA` |
| GEO | `LIMA4D` (4 distritos) · `LIMA17D` · `LIMA` · `PE` |
| PUBLICO | `ADVPLUS` · `INTERESES` · `LAL` (similar) · `CUSTOM` |
| OPTIM | `PURCH` (compras) · `VALUE` (valor) · `ATC` (carrito) · `LPV` (vistas de página) |

Ejemplos:
- `TST_PREM_LIMA4D_ADVPLUS_PURCH`
- `TST_ACC_LIMA17D_ADVPLUS_PURCH`

## 3 · Anuncio
`LINEA_ID_ANGULO_PRODUCTO_FORMATO_RATIO_HOOK_VERSION`

| Bloque | Valores |
|---|---|
| ID | Código del planner: `P1`, `A2`, etc. |
| ANGULO | `MARCA` · `VARIEDAD` · `REGALO` · `PRECIO` · `EDU` (educativo) · `OCASION` · `LUJO` · `URGENCIA` |
| PRODUCTO | Marca o grupo corto: `JW`, `CHIVAS`, `ZACAPA`, `VINO`, `BURBUJAS`, `JW-GLENF` |
| FORMATO | `VID` · `IMG` · `CAR` (carrusel) · `COL` (colección) |
| RATIO | `9X16` · `4X5` · `1X1` |
| HOOK | `H1`, `H2`… (variantes de los primeros 3 segundos) |
| VERSION | `V1`, `V2`… |

Ejemplos:
- `TST_P1_MARCA_JW-GLENF_VID_9X16_H1_V1`
- `TST_P2_REGALO_CHIVAS_VID_9X16_H1_V1`
- `TST_P3_VARIEDAD_VINO_VID_9X16_H1_V1`
- `TST_A1_MARCA_JW_VID_9X16_H1_V1`
- `TST_A2_LUJO_ZACAPA_VID_9X16_H1_V1`
- `TST_A3_VARIEDAD_BURBUJAS_VID_9X16_H1_V1`

## 4 · Archivo en Drive
`AAAA-MM_` + nombre del anuncio + `_DURACION`

Ejemplo: `2026-11_TST_P2_REGALO_CHIVAS_VID_9X16_H1_V1_19S.mp4`
Portada: el mismo nombre con `_PORTADA.png`.

## 5 · UTM
| Parámetro | Valor | Ejemplo |
|---|---|---|
| utm_source | `meta` | meta |
| utm_medium | `paid_social` | paid_social |
| utm_campaign | campaña en minúsculas | `2026-11_ventas_tst_abo` |
| utm_content | segmento del conjunto | `prem` · `acc` |
| utm_term | ID + ángulo + producto + hook | `p2_regalo_chivas_h1` |

## Diccionario de líneas
| Código | Línea |
|---|---|
| `TST` | Testing LU |
| `JW` | Johnnie Walker |
| `CH` | Chivas |
| `WB` | Wine Bank |
| `ESP` | Espumantes |
| `LCR` | La Casa del Ron |
| `PC` | Private Cask |
| `INS` | Marca Insignia |
| `RT` | Retargeting |
| `BF` | Black Friday |
| `DM` | Destino Mendoza |
| `TRF` | Tráfico a tienda |
