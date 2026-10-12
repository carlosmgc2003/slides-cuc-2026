# Validación independiente · Clase 2 (contrato-validacion.md)

> **Alcance histórico:** las verificaciones de este informe corresponden a la versión del 11-10-2026. Durante la edición interactiva posterior se modificaron las placas 5–41 y se fusionaron las antiguas 11 y 12; el recorrido actual tiene 43 placas principales, sin anexos, y termina con recap y evaluación. Los anexos se reemplazaron inicialmente por management y contenedores y luego se eliminaron a pedido del usuario (placas 44 y 45); las menciones A01–A06 del informe corresponden a la versión histórica. Las referencias S13–S42 de este informe corresponden ahora a S12–S41. El 12-10-2026 se revisó visualmente el nuevo cierre en Slidev y se comprobó la numeración consecutiva, la existencia de 43 notas y la suma de 112 minutos de contenido; esas comprobaciones no revalidan todas las conclusiones históricas de este documento.

**Ejecutor:** worker PT único de validación · **Modelo:** deepseek-v4-flash (opencode-go).
**Objeto:** `slides-clase-2.md` (48 slides: S01–S42 + A01–A06).

---

## REVALIDACIÓN tras fixes de PI — 11-10-2026 · sesión `tmp/clase-2/revalidacion-rv20261011-195207`

**Deck final:** `sha256 b9d1a730e297620873fc7637067d2a088df1cc839e4bbbc0bf549db943f2be0c` (mtime 19:49). Build explícito temporal propio (`npm run build:clase-2 -- --out …/build-2`) → `✓ built in 2.92s`, 48 módulos.

> **Resultado: APROBADO en lo técnico/visual, con observaciones menores y límites declarados.** Los 3 cierres reclamados por PI quedan **verificados de forma independiente**: **A-1** (S05/S08/S18/S41), **A-2** (S22), **M-2** (A01–A06) y además **S30**. DOM 980/1920 sin desborde, contraste sin fallas, 12 slides afectadas revisadas visualmente sin nuevas superposiciones. Se mantiene el bloqueo de la vía **oficial** de PDF (falta `playwright-chromium`; instalación prohibida); el PDF alternativo se regeneró a **980×551 px** por CDP. **Persiste como pendiente externo la logística de evaluación (48 h, fecha, canal, QR) y el PPTX ausente** — no corresponde cerrarlos por validación.

### R1. Cierres verificados (build del deck final)

| Hallazgo previo | Slide(s) | Antes | Ahora (medido en el deck final) | Estado |
|---|---|---|---|---|
| A-1 rótulos SVG a 88/96 px | S05, S08, S18, S41 | 88/96 px, recortados | `style="font-size:22px/24px"`; sin reglas UnoCSS attributify; sin desborde | **Cerrado** |
| A-2 línea SBOM/SCA recortada | S22 | `<p>` en y=560–584 fuera del canvas | línea visible dentro de 980×551 (confirmado en render y en capa de texto del PDF) | **Cerrado** |
| M-2 anexos a 17,6 px | A01–A06 | 17,6 px | **18 px** (mín. HTML por slide = 18) | **Cerrado** |
| Tamaño efectivo SVG | S30 | 17,15 px | subtítulos **21,18 px**, títulos 23,10 px (≥18) | **Cerrado** |

- **Verificación raíz A-1:** `rg '\[font-size~=' …/build-2/assets/index-*.css` → **NONE**; `rg 'font-size="[0-9.]+"' slides-clase-2.md` → **ninguno** (todos con `px`/`style`). Coincide con lo reportado por PI.
- **Tamaños efectivos SVG medidos** (computedFontSize × escala viewBox→render, sesión propia): S05 27,23 · S08 19,06 · S18 19,06 (guía) / 20,79 (nodos) · S25 22,53 · S30 21,18 · S41 19,06 px — todos ≥18.
- **Desborde DOM** (`boundingClientRect` con escala): `canvasOverflow=svgOverflow=cardOverflow=textClipped=0` en **980 y 1920**. Sin nuevas superposiciones.
- **Contraste WCAG efectivo:** 0 fallas en ambas vistas (cuerpo 18 px sobre fondos oscuros, ROI > 7:1).

### R2. Evidencia de esta revalidación

`tmp/clase-2/revalidacion-rv20261011-195207/`

- Estructura/protegidos: `verify-final.out.txt`, `hashes.out.txt`, `build-2.log.txt`, `build-2/`
- DOM/tamaños: `dom-980.jsonl`, `dom-1920.jsonl`, `eff-980.jsonl`, `eff-1920.jsonl`, `dom-check.mjs`, `effective-scan.mjs`
- Capturas: `shots/980/S01..S48.png`, `shots/1920/S01..S48.png`
- Sheets completos: `sheets/980-sheet-01..06.png`, `sheets/1920-sheet-01..06.png`; foco afectadas: `sheets/afectadas-980.png`, `sheets/afectadas-1920.png`
- PDF final + páginas: `pdf/clase-2.pdf` (48 pág, 735,12×414 pt = 980×551 px, 7 enlaces), `pdf/pages/S01..S48.pdf`; generador `cdp-pdf.mjs`
- Servidor propio: `serve-spa.mjs`, `servers-pids.txt` (puerto 3050)

### R3. PDF (alternativa mejorada, sin dependencias)

- Vía **oficial** (`slidev export`): sigue **bloqueada** — `Error: … please install it via npm i -D playwright-chromium`. **No se instaló nada.**
- Alternativa regenerada con la versión final vía **CDP `Page.printToPDF`** con `paperWidth=980/96in`, `paperHeight=551/96in`, márgenes 0 y `printBackground` (Node global `WebSocket` + `agent-browser get cdp-url`, sin dependencias nuevas). Resultado: **48 páginas de 980×551 px, fondo oscuro completo, sin letterbox**, 7 anotaciones `/URI` (enlaces A06). Texto de S22 (línea SBOM/SCA) presente en la capa de texto.

### R4. Revisión visual (12 afectadas, 980 y 1920)

S05, S08, S18, S22, S30, S41 y A01–A06 revisadas individualmente y en `sheets/afectadas-*.png`: S18 ahora **legible** (antes ilegible), S05/S08/S41 con rótulo de retorno separado de la curva, S22 con la línea SBOM/SCA visible, anexos a 18 px. Sin superposiciones nuevas.

### R5. Observaciones y límites que subsisten

- **BAJA–1:** kicker de S01 a 14 px (`text-sm`, etiqueta decorativa «DevSecOps Unlocked · FIE · Clase 2»); único texto < 18 px del deck. Sin impacto en conceptos evaluables.
- **Límite PDF:** la vía oficial no puede ejecutarse sin `playwright-chromium` (prohibido instalar). El PDF entregado es **alternativa CDP** (equivalente visual, con enlaces; tamaño 980×551 logrado).
- **Pendientes externos (no de validación):** logística de evaluación «48 h»/fecha/canal/QR y PPTX ausente; fuentes con alcance parcial ya declarado. **No se afirma ensayo humano cronometrado.**
- **Regresión clase 1:** hashes de protegidos idénticos a baseline (verificado en esta revalidación); sin cambios.

---

## Historial — validación previa (sesión `tmp/clase-2/validacion-v20261011-190745/`, deck `fb203b25…`)

> Las secciones 1–10 siguientes corresponden a la **primera validación**, ejecutada **antes** de los fixes de PI. Se conservan como evidencia histórica: allí se detectaron A-1, A-2 y M-2 (ya cerrados arriba). El PDF de esa sesión era **Letter**; el de la revalidación es **980×551**.

---

## 1. Comandos y salidas reales

| Paso | Comando | Resultado |
|---|---|---|
| Verificador estructural | `node tmp/clase-2/verify-final.mjs` | OK · `{slides:48, notes:48, idsValid:true, minutes:112, reserve:8, total:120, maxNoteChars:2014, quizItems:10, protectedFilesUnchanged:true}` |
| Parser | `@slidev/parser` `parseSync` | 48 slides; IDs `S01…S42,A01…A06` únicos y en orden; 48 notas no vacías; suma S=112 |
| Build clase 2 | `npm run build:clase-2 -- --out tmp/clase-2/validacion-v20261011-190745/build-2` | OK `✓ built in 3.44s`; 48 módulos `md-*.js` |
| Build clase 1 | `npm run build:clase-1 -- --out tmp/clase-2/validacion-v20261011-190745/build-1` | OK; 36 slides (parser)/35 módulos |
| Servido | `node <sesión>/serve-spa.mjs <build> <puerto>` (127.0.0.1: 3042 clase 2, 3043 clase 1) | OK. Se usó un servidor Node con *fallback* SPA porque el build usa `router-mode: history` y `python http.server` no resuelve rutas `/N` (devuelve 404). Solo se levantaron procesos propios, PID registrados en `<sesión>/servers-pids.txt`. |
| Render/screenshots | `agent-browser` (sesión única, Chrome for Testing 150) | 48 PNG @980×551 + 48 PNG @1920×1080 + contact sheets de 8 |
| PDF oficial | `npm run export:clase-2 -- --output …/clase-2.pdf --dark --executable-path /usr/bin/google-chrome` | **FALLÓ**: `Error: The exporting for Slidev is powered by Playwright, please install it via npm i -D playwright-chromium`. Instalar dependencias está prohibido por el contrato. |
| PDF alternativo | `agent-browser pdf` (CDP `Page.printToPDF`) por slide + `pdfunite` | OK · `tmp/clase-2/validacion-v20261011-190745/pdf/clase-2.pdf` · `Pages: 48`, `Page size: 792 x 612 pts (letter)`, 7 anotaciones `/URI` (enlaces A06) |
| Regresión hash | baseline `tmp/clase-2/baseline/sha256.txt` | OK: `slides-clase-1.md`, `style.css`, `uno.config.ts`, `package.json`, `package-lock.json`, `components/StrideGrid.vue`, `setup/mermaid.ts` coinciden; `slides-clase-2.md` cambió por ser el objeto |

Artboard nativo del deck: **980×551 px** (escala medida 1.95652 @1920). Los chequeos DOM se hicieron con esa escala; en la vista 980 la escala es ≈1 (1:1).

## 2. Verificación estructural y de contenido (APROBADO)

- **48 slides**, IDs únicos y en orden `S01…S42, A01…A06`, `class: c2-slide` y `slideId` en todas.
- **48 notas** no vacías (máx. 2014 caracteres ≤ techo 2558); **tiempos 112 + 8 reserva = 120**.
- **Sin claves del cuestionario** en deck/notas: 0 coincidencias de `**Correcta:`/`Correcta:` en `slides-clase-2.md`; el guion tampoco las contiene.
- **Sin rutas internas** `tmp/clase-2/…` ni menciones a fuentes candidatas en notas.
- **Recursos:** no hay `src/href="/…"` locales (el deck es SVG/markup inline); A06 usa **7 enlaces externos** (Agile, 2× Fowler, NIST SSDF, 2× OWASP, DORA) — externos, ya registrados P0; no se navegó a ellos. No hay enlaces locales que puedan romperse.
- **Baseline:** archivos protegidos sin cambios (idénticos a `baseline/sha256.txt`).

## 3. Render y revisión visual (48 @980 y @1920)

Se capturaron las 48 slides en **ambas vistas** y se revisaron las 12 contact sheets (8 slides c/u) más close-ups. Nota de método: la revisión de píxeles se hizo con visión real sobre los PNG; además se ejecutó una revisión **computacional** de DOM (`boundingClientRect` con escala, `getBBox`, `computedStyle`, contraste WCAG con opacidad) para respaldar cuantitativamente cada hallazgo.

### 3.1 HALLAZGO ALTA-1 · Rótulos SVG gigantes y recortados (S05, S08, S18, S41)

Las etiquetas SVG escritas con **atributo sin unidad** `font-size="22"` (y `font-size="24"` en S18) se renderizan a **88 px / 96 px** en lugar de 22/24 px, con anchos de hasta ~3150 px (canvas = 980), por lo que quedan enormes, superpuestas y recortadas por el `overflow:hidden` del SVG.

- **Causa raíz (reproducida):** UnoCSS (attributify) escanea el fuente y emite `[font-size~="22"]{font-size:5.5rem}` y `[font-size~="24"]{font-size:6rem}` (5.5rem/6rem = 88/96 px a 16 px raíz). Esas reglas existen **solo en el build de clase 2** (no en clase 1), porque solo el deck de clase 2 contiene los atributos literales. Comprobado: `rg '\[font-size~=' build-2/assets/index-*.css` → 2 reglas; mismo `rg` en build-1 → 0. `uno.config.ts` está intacto (no es regresión de globales).
- **Elementos y geometría (vista 980, coords locales):**
  - S05 `<text>` rótulo retorno: computed 88 px, rect `l=-1087 r=2067` (ancho 3154). Línea fuente: `slides-clase-2.md:159`.
  - S08 rótulo retorno: 88 px, rect `l=-519 r=1499`. Línea `:262`.
  - S18 diagrama: 14 nodos a 96 px y rótulo inferior a 88 px; p. ej. `Señal y respuesta` 96 px `l=636 r=1007`; `Aprender del uso…` 88 px `l=-275 r=1272`. Líneas `:577`, `:587`. **Slide ilegible** (los cuatro rótulos del diagrama central se pisan entre sí y se salen).
  - S41 rótulo retorno: 88 px, rect `l=-231 r=1211`. Línea `:1347`.
- **Exento:** S25 usa `style="font-size:26px"` (inline, con unidad) y su rótulo se ve correcto — confirma el mecanismo.
- **Evidencia visual:** `shots/980/S05.png`, `S08.png`, `S18.png`, `S41.png`; `shots/1920/S05.png`… y sheets `sheets/980-sheet-0{1,3,6}.png`, `sheets/1920-sheet-0{1,3,6}.png`. Datos: `svg-scan.jsonl`, `dom-980.jsonl`, `dom-1920.jsonl`.
- **Corrección sugerida (la aplica el integrador, no este PT):** usar `font-size="22px"` (con unidad) o `style="font-size:22px"`, o mover el rótulo a tamaño vía clase. No tocar `uno.config.ts`.

### 3.2 HALLAZGO ALTA-2 · Línea requerida recortada en S22

El `<p>` final de S22 (línea 732: «**SBOM** describe qué incluye · **SCA** analiza señales: no son lo mismo ni garantizan seguridad.») se posiciona en `y=560…584`, **por debajo del canvas** de 551 px, con contenedor `overflow:hidden` → **no se ve** en la slide (ni en PDF). Es contenido exigido por el plan (distinción SBOM/SCA). Evidencia: `shots/980/S22.png` (la línea no aparece), `dom-980.jsonl["S22"].canvasOverflow`.

### 3.3 Desborde / recorte detectado por DOM (resumen)

`dom-980.jsonl` y `dom-1920.jsonl` coinciden: `canvasOverflow`: **S05, S08, S18, S22, S41**; `cardOverflow`/`svgOverflow` derivados, todos de esos mismos casos. Ninguna otra slide presenta texto fuera del canvas con tolerancia 1.5 px. `textClipped` (nowrap excedido): 0.

### 3.4 Legibilidad y contraste (APROBADO con observaciones)

- **Contraste WCAG** sobre fondo efectivo (incluyendo `opacity` y composición de fondos): **0 fallas** entre 525+ textos medidos en 980 y 1920. Cuerpo `#E7E9E6` sobre `#121212`/`#151E1A` ≈ 13–15:1; rótulos `#9AA39C` ≈ 7.8:1; cian `#3EC8D8` sobre superficies oscuras > 7:1.
- **Tamaños (distribución 980):** 36 px (48 títulos h1), 30 px (19 h2), 24 px (28), 20 px (39), **18 px (355 = cuerpo esencial)**, 14 px (1 = kicker de S01).
- **Observación BAJA:** los anexos A01–A06 tienen viñetas a **17.6 px** (`1.1rem` heredado) — ligeramente por debajo del mínimo 18 declarado para texto esencial. El kicker 14 px de S01 es una etiqueta (aceptable). Sin impacto en conceptos evaluables.
- No se detectó dependencia exclusiva del color para distinguir conceptos.

## 4. PDF

- **Vía oficial:** bloqueada. `slidev export` exige `playwright-chromium`; no está instalado y el contrato prohíbe instalar dependencias/navegadores. **No se declara export oficial exitoso.**
- **Alternativa reproducible:** 48 páginas generadas con el navegador existente vía CDP (`agent-browser pdf`, `@page` a 980×551 y `margin:0`) y unificadas con `pdfunite` → `pdf/clase-2.pdf` (48 páginas). Verificado: 48 páginas, gráficos/estado final correctos (se revisó A06 con sus 6 enlaces subrayados), **7 anotaciones de enlace** (`/URI`). Limitación: la caja de página es **Letter landscape** (792×612 pt) con la slide centrada, porque agent-browser no expone tamaño de papel (la vía `slidev export` daría 980×551). El defecto ALTA-1 de S05/S18/S41 **también se reproduce en PDF**.
- El deck no usa animaciones de clicks intencionales; no se usó `--with-clicks`.

## 5. Notas y vista presentador (APROBADO)

- Las **48 notas** existen en el parser. Muestras S01/S18/S37/S42: no vacías (1004–1415 caract.), incluyen `Tiempo: N min`, **sin claves Q#**, sin enlaces a `tmp/` ni a fuentes.
- Vista presentador (`/presenter`) operativa: slide actual + siguiente + panel de notas; contador **1/48**; el panel muestra el texto de la nota de S01. Evidencia: `notes/presenter.png`.

## 6. Regresión clase 1 (APROBADO)

- Hashes de archivos compartidos idénticos a baseline (§1). `slides-clase-1.md`, `style.css`, `uno.config.ts`, componentes y `setup/mermaid.ts` intactos.
- `build:clase-1` compila (36 slides). Capturas comparables portada/diagrama/tarjetas/examen: `shots/clase1/` + `sheets/clase1-sheet.png` — misma identidad visual; los SVG de clase 1 **no** tienen el defecto attributify (no usan atributos sin unidad). No se modificó nada de clase 1 aun si hubiera fallas preexistentes.

## 7. Tabla de checks

| # | Check | Resultado | Evidencia |
|---|---|---|---|
| 1 | Parser 48 IDs/notas/orden | **Aprobado** | `verify-final.out.txt`, §1 |
| 2 | Tiempos 112+8 | **Aprobado** | `verify-final.out.txt` |
| 3 | Enlaces locales/recursos | **Aprobado** (0 locales) | §2 |
| 4 | Claves Q# fuera de deck/guion | **Aprobado** | §2 |
| 5 | Baseline protegidos | **Aprobado** | §1 |
| 6 | Build explícito temporal clase 2 | **Aprobado** | `build-2.log.txt` |
| 7 | Build explícito temporal clase 1 | **Aprobado** | `build-1.log.txt` |
| 8 | Render 48 (980 y 1920) | **Aprobado con hallazgos** | `shots/`, `sheets/` |
| 9 | Desborde/legibilidad DOM | **Falló (ALTA 1 y 2)** | §3 |
| 10 | Contraste WCAG efectivo | **Aprobado** (0 fallas) | `dom-*.jsonl` |
| 11 | Tamaños de texto | **Parcial** (anexos 17.6 px) | §3.4 |
| 12 | PDF 48/gráficos/links | **No probado (oficial bloqueado)** + alternativa 48 pág/7 links | §4 |
| 13 | Vista presentador/notas | **Aprobado** | `notes/` |
| 14 | Regresión clase 1 | **Aprobado** | §6 |
| 15 | Logística 48 h / PPTX / fuentes | **Pendiente** (fuera de alcance PT) | §8 |

## 8. Riesgos y limitaciones

**ALTOS (bloquean cierre):**
- **A-1** S05, S08, S18, S41: rótulos SVG a 88/96 px, recortados/superpuestos (S18 ilegible). Causa: UnoCSS attributify sobre `font-size="22|24"` sin unidad. Corrige el integrador (con `px`/`style`).
- **A-2** S22: línea SBOM/SCA recortada fuera del canvas (invisible).

**MEDIOS:**
- **M-1** PDF oficial no ejecutable por falta de `playwright-chromium`; la alternativa pierde tamaño de página 980×551 (usa Letter) y capa de texto/estructura del export real.
- **M-2** Anexos A01–A06 con texto a 17.6 px (< 18 declarado). Cosmético/legibilidad.

**BAJOS:**
- **B-1** Kicker de S01 a 14 px (etiqueta). **B-2** Fuentes IBM Plex Sans / JetBrains Mono dependen de disponibilidad (no se evaluó en presentación sin red).

**Limitaciones metodológicas:**
- El cronograma 112+8 es una **suma mecánica**; **no** se realizó ni se afirma un ensayo cronometrado humano. La logística de evaluación («48 horas», fecha, zona, canal, Google Forms/QR) **sigue pendiente** de indicación docente; S42 la declara neutral. **PPTX ausente.** Fuentes **parcialmente** consultadas por P0 (alcance documentado; no re-verificado por este PT con lectura de PDF completo).
- Revisión visual hecha con visión real sobre PNG; la verificación de contraste/tamaños/desborde es computacional, no colorimetría de pantalla física.
- Mensaje previo de este worker (`msg_8ff5bf1ec07b`) declarando ausencia de visión de imágenes fue **erróneo y queda retractado** (`msg_e4d5b58888d2`).

## 9. Archivos de evidencia (rutas absolutas, cwd del run)

cwd: `/home/comunicarlos/orca/workspaces/slides-cuc-2026/tuskfish`

- `tmp/clase-2/validacion-v20261011-190745/verify-final.out.txt`
- `…/build-2.log.txt`, `…/build-1.log.txt`, `…/build-2/`, `…/build-1/`
- `…/dom-980.jsonl`, `…/dom-1920.jsonl`, `…/svg-scan.jsonl`, `…/notes-check.out.txt`, `…/clase1-struct.txt`
- `…/shots/980/S01..S48.png`, `…/shots/1920/S01..S48.png`, `…/shots/clase1/`
- `…/sheets/980-sheet-01..06.png`, `…/sheets/1920-sheet-01..06.png`, `…/sheets/clase1-sheet.png`
- `…/pdf/clase-2.pdf` (+ `…/pdf/pages/S01..S48.pdf`), `…/export-clase-2.log.txt`
- `…/notes/presenter.png`, `…/notes/presenter-S18.png`
- `…/serve-spa.mjs`, `…/servers-pids.txt` (procesos propios, 3042/3043)

## 10. Conclusión (validación previa)

La ejecución de la validación se completó con hallazgos. La **tarea de validación es un éxito** (se corrieron todos los pasos del contrato y se documentó con evidencia real); en ese momento el **producto quedaba NO aprobado** por los hallazgos A-1 y A-2. Estructura, builds, tiempos, contraste, notas y regresión estaban conformes. El PDF se entregó por vía alternativa (Letter) ante el bloqueo de `slidev export`.

---

## Conclusión de la revalidación (estado actual)

Ejecutada la revalidación independiente sobre el deck final (`b9d1a730…`), los cierres **A-1, A-2, M-2 y S30** quedan **verificados**. DOM 980/1920 sin desborde, contraste sin fallas, revisión visual de las 12 slides afectadas correcta, PDF alternativo a 980×551 con enlaces. **Veredicto: APROBADO** (técnico y visual) con una observación leve (kicker S01 14 px) y los límites declarados (PDF oficial bloqueado por `playwright-chromium`; logística de evaluación y PPTX pendientes de docencia). No se modificó ningún producto/global ni se hicieron commits; se levantaron y detuvieron solo servicios propios.
