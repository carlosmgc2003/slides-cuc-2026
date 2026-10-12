# Clase 2 — Auditoría previa a la implementación

**Estado:** fases 1 y 2; pendiente de aprobación. No autoriza cambios en el deck.
**Base inspeccionada:** commit `e977099`, workspace `tuskfish`; Git estaba limpio al iniciar.
**Responsable:** coordinador Astra (`gpt-6-astra`, proveedor `openai-codex`). Apoyo técnico de solo lectura: Codex mediante Orca.

## 1. Alcance y evidencia

Se leyeron completos `slides-clase-1.md`, `slides-clase-2.md`, `guion-clase-1.md`, `estilo_orador.md`, `cuestionario-clase-1.md`, `links-clase-1.txt`, `README.md`, `slides.md`, `style.css`, `uno.config.ts`, `components/StrideGrid.vue`, `setup/mermaid.ts`, `package.json` y `scripts/build-site.mjs`. Se inventarió `public/` y se inspeccionaron directamente las imágenes `image5.png`, `image7.png` e `image19.png`.

- **Clase 2: 76 diapositivas**, confirmadas con `@slidev/parser` y contrastadas con títulos de nivel 1; numeración actual identificada como **O01–O76** en este documento. Layouts: 70 `default` y 6 `section`. Los números no son los separadores `---`, que también delimitan frontmatter.
- **Clase 1: 36 diapositivas**, incluida la de examen; el guion llega a la 35. No modificar ninguno de esos archivos.
- El PowerPoint solicitado `Shift Left or Get Hacked - Ini.pptx` **no apareció** en la búsqueda de archivos `.pptx` en `/home/comunicarlos/orca/workspaces/slides-cuc-2026`. `tmp/` estaba vacío al iniciar. No se reconstruyó ni se inventó su contenido.
- El README menciona otro nombre, `tmp/Shift left or get hacked.pptx`, y una integración histórica de 56 diapositivas. Esa referencia no prueba disponibilidad del original. La clase 2 actual no conserva la transcripción integral numerada que describe el README. Las imágenes extraídas son evidencia parcial, no sustituyen el PowerPoint.
- Las observaciones visuales son **de composición en código y de tres imágenes fuente**, no una inspección de diapositivas renderizadas. No se ejecutaron build, servidor, exportación ni capturas del deck en esta fase.
- No se verificó externamente el contenido de las fuentes enlazadas. El plan explicita qué referencias necesitan contraste antes de implementar afirmaciones.

## 2. Diagnóstico ejecutivo

Hay una base valiosa: caso bancario coherente con la clase anterior, prudencia sobre beneficios, distinción delivery/deployment, seguridad del pipeline, límites del SBOM, tratamiento de secretos expuestos y advertencias contra confundir herramientas con seguridad. **Conviene editar y reorganizar, no sustituir indiscriminadamente.**

El principal desajuste con la misión no es falta de contenido técnico: es la **ausencia de evolución ágil como explicación causal**, sumada a una sucesión extensa de mapas, tarjetas y recapitulaciones muy parecidas. Se enseña Shift Left antes de dar contexto suficiente sobre cómo y por qué cambió el desarrollo. La cultura aparece tarde, después de un catálogo operativo largo.

Propuesta derivada: recuperar el hilo de la clase 1, agregar el puente desarrollo por etapas → iteración y Agile → integración/entrega → límite de la revisión final; concentrar las definiciones repetidas; alternar caso, explicación, decisión y recuperación; pasar catálogos avanzados a anexos consultables.

## 3. Organización actual y tiempo

| Bloque actual | Diapositivas | Cantidad | Observación |
|---|---|---:|---|
| Apertura y continuidad | O01–O06 | 6 | Buen puente, sin resultados observables; repite el cierre de clase 1. |
| Shift Left, principios y beneficios | O07–O17 | 11 | Varias versiones de la misma comparación y de los mismos beneficios. |
| Flujo CI/CD y controles por etapa | O18–O40 | 23 | La explicación de CI/CD llega después de usar PR, build y deploy. |
| Automatización, gates, pipeline y secretos | O41–O48 | 8 | Contenido útil; secretos aparece tres veces y se retoma protección del pipeline. |
| DevSecOps y cultura | O49–O59 | 11 | Conceptos pertinentes, pero reiterados y con poca decisión situada. |
| Evidencia y normas | O60–O62 | 3 | ISO compite con los objetivos centrales de una clase introductoria. |
| Adopción | O63–O70 | 8 | Un piloto y cuatro fases ocupan más espacio que la aplicación efectiva. |
| Síntesis y cierre | O71–O76 | 6 | Seis cierres sucesivos; no explicita evaluación ni logística. |

**No hay tiempos por diapositiva ni cronograma de 120 minutos.** Como simulación de planificación, 70 diapositivas sustantivas a 1,5–2 minutos demandarían 105–140 minutos; agregar apertura/transiciones y 20–30 minutos de intercambios daría aproximadamente **130–180 minutos**. No es una medición ni una regla basada en cantidad: algunas tarjetas podrían pasar rápido, pero las decisiones y actividades requieren pausas. Un pase rápido en 120 minutos es posible; no demuestra comprensión ni deja margen realista.

## 4. Cobertura y precisión pedagógica

### Evolución ágil — brecha alta

No hay una explicación visible de Agile, valores del Manifiesto, iteración/incremento ni desarrollo por lotes; DevOps tampoco se define antes de DevSecOps. O19 explica bien CI, entrega y despliegue continuos, pero falta la razón de su aparición y su relación con las decisiones de seguridad. La mención de «sprint» en O74 presupone vocabulario no enseñado.

Agregar una **evolución de modos de trabajo**, no una historia inevitable ni una cronología de modas. Agile no equivale a Scrum, CI/CD o ausencia de planificación; un ciclo secuencial puede integrar seguridad temprana y un equipo ágil puede dejarla para el final.

### Shift Left — cobertura amplia, distinción incompleta

O07 define directamente Shift Left como feedback de seguridad. Conviene separar el principio general de adelantar actividades/feedback de su aplicación específica, **Shift Left Security**. O07/O09/O11/O24 conservan verificaciones posteriores: es una fortaleza que no debe perderse.

O12–O17 reiteran principios y beneficios. Preservar la prudencia: no hay multiplicadores universales de costo ni garantías de evitar vulnerabilidades. O10 usa curvas cualitativas sin valores, con una caída al final que puede sugerir menos necesidad de pruebas tardías. Reemplazar la figura, no el concepto.

### Cultura DevSecOps — presente, poco ejercitada

O49–O59 separan personas, acuerdos y tecnología. Falta mostrar un conflicto resuelto: alerta sin responsable, presión por publicar, autoridad para aceptar riesgo y aprendizaje sin culpabilización. «Responsabilidad compartida» debe coexistir con tareas y autoridad explícitas; no significa que toda persona haga todo ni que seguridad desaparezca.

O54 propone cuatro pilares útiles, pero debe llamarlos **marco didáctico de esta clase**, no taxonomía normativa universal. O55 representa roles en una cadena unidireccional; puede reforzar los mismos silos que intenta cuestionar. Reemplazar por un caso en el centro y aportes/feedback bidireccionales.

### Audiencia y estudio autónomo

- El caso bancario baja la abstracción. Conviene fijar un único requisito: **cada consulta verifica en el servidor que la identidad esté autorizada para la cuenta; si no, no entrega saldo ni movimientos**.
- O71 pasa de autorizar una transferencia a probar lectura de movimientos: esa prueba no demuestra aquel requisito. Corregir la trazabilidad manteniendo una sola operación.
- PR aparece en O07 y se explica en O09; pipeline y security gates se usan antes de desarrollarlos; SCA/IaC, IAST, WAF/RASP y runner agregan carga. Definir primero en castellano; reservar profundización para anexos.
- La banca no debe convertirse en requisito previo ni en normativa sectorial. Ejemplos hipotéticos claramente rotulados; versiones inventadas de bibliotecas no son avisos reales.
- No hay objetivos observables ni cuestionario de clase 2. Las preguntas actuales invitan a participar, pero casi ninguna tiene tiempo asignado, consigna verificable y solución visible para quien mira la grabación.
- No basar evaluación en nombres de productos, siglas marginales, códigos ISO o información que solo figure en notas privadas.

## 5. Diseño visual y notas

### Identidad que debe preservarse

Ambas clases usan tema Slidev `default`, esquema oscuro, IBM Plex Sans, JetBrains Mono y transición `slide`. `style.css` aporta fondo verde casi negro, línea superior, títulos monoespaciados en mayúsculas y acentos cian/neón/alerta. `uno.config.ts` define `card` y `card-strong` con bordes sobrios. Clase 1 combina tarjetas, iconos Carbon, SVG locales, Mermaid y `two-cols-header`.

La clase 2 ya pertenece a esa familia. El problema no se resuelve cambiando tema: necesita **menos monotonía, mayor jerarquía y relaciones visuales más exactas**.

### Riesgos observables en código

- Predominio de `default` y rejillas de tarjetas; incluso separadores `section` incluyen tres o cuatro tarjetas. Poca variación entre idea, práctica, síntesis y ejercicio.
- O24/O36/O48/O62 concentran tablas/listas y siglas. Mover detalle o reducirlo, no resolver achicando tipografía.
- Flujos O07/O18/O21/O44/O45/O60/O63/O75 usan `text-xs` y hasta seis etapas. Las etiquetas esenciales pueden resultar pequeñas al proyectar. Confirmar a tamaño de presentación antes de declarar legibilidad.
- O09 tiene una fila izquierda sin envoltura dentro de media diapositiva; candidato a revisar por desborde, **no desborde confirmado**.
- O39 declara siete columnas pero contiene ocho hijos directos (cuatro tarjetas y cuatro flechas): el último nodo puede pasar a otra fila. El retorno no está conectado explícitamente al origen.
- O42 se llama «Bucle» pero representa una cadena y deja el retorno solo en texto. O63 usa una flecha de retorno junto a «Escalar» que no representa claramente qué se revisa.
- O75 intenta cerrar con dos niveles, nueve nodos principales y conexiones pequeñas. Reutilizar contenido en una síntesis mucho más simple.
- O10: `image5.png`/`image7.png` tienen textos en inglés, fondo blanco y curvas de prueba sin escala. Suprimir esa representación en clase 2 y dibujar actividades distribuidas, sin simular datos.
- O15/O26: candado y persona programando no explican la relación causal. O26 agrega cuatro miniaturas, incluidas dos GIF; no se inspeccionó su animación.
- O32: `image19.png` muestra beneficios genéricos de SBOM en inglés. La tabla de inventario de O31 ya explica mejor su utilidad.
- Las licencias y autoría de las imágenes extraídas no están documentadas en los archivos revisados. No asumir permiso para nuevos usos; priorizar diagramas originales locales. No borrar recursos compartidos con clase 1.

### Notas del orador

La clase 2 tiene comentarios útiles con ejemplos, transiciones y numerosas URLs, pero mucho más breves y menos desarrollados que los parlamentos de clase 1. **O01, O23 y O47 no tienen notas**. No hay un sistema de tiempos; la plantilla «Notas para presentar» se repite sin aportar información. No todos los comentarios incluyen explicación oral, ejemplo, transición y error a anticipar.

`estilo_orador.md` distingue indicaciones con voseo y, específicamente para clase 1, notas listas para leer en primera persona (techo de 2.558 caracteres). El plan propone esa continuidad oral para clase 2, con tiempo e idea central breves al inicio; el guion alojará instrucciones de facilitación y desarrollo ampliado. No importar contradicciones del guion viejo: por ejemplo, su diapositiva 26 dice que cubrir STRIDE confirma intuición completa, mientras las notas revisadas correctamente niegan exhaustividad.

## 6. Inventario de decisiones sobre las 76 diapositivas

Destinos **S01–S42**: recorrido propuesto; **A01–A06**: anexos. «Fusionar» conserva la sustancia indicada, no exige conservar el HTML. «Eliminar» se refiere a la diapositiva redundante o al recurso, no a borrar archivos compartidos. Detalle de cada destino en el plan maestro.

| Origen | Título actual | Acción y destino | Motivo |
|---|---|---|---|
| O01 | Shift Left | Transformar → S01 | Nombre completo, identidad del curso y tesis. |
| O02 | Recorrido | Transformar → S02 | Sustituir agenda operativa por resultados y ruta causal. |
| O03 | En la clase anterior… | Conservar núcleo → S03 | Puente con requisito de consulta de clase 1. |
| O04 | Pero el software no queda quieto | Fusionar → S04 | Un cambio concreto evita repetir cierre anterior. |
| O05 | Cada cambio puede introducir un problema | Fusionar → S04 | Ejemplo y matiz, no otra lista. |
| O06 | ¿Esperamos hasta producción para comprobarlo? | Mover/transformar → S11 | El problema se entiende después del cambio de cadencia. |
| O07 | Shift Left | Transformar → S13 | Separar principio general y seguridad. |
| O08 | ¿Qué cambia con Shift Left? | Fusionar → S13/S29 | No confundir momento del feedback con cultura completa. |
| O09 | Antes vs. después | Transformar → S14 | Dos carriles sobre el mismo ciclo. |
| O10 | Tradicional vs. Shift Left | Fusionar concepto → S14; eliminar curvas | Comparación redundante, visual ambiguo. |
| O11 | Shift Left no significa “hacer antes el pentest” | Conservar núcleo → S18 | Límite indispensable. |
| O12 | Principios de Shift Left | Fusionar → S20 | Recuperación activa en lugar de separador repetido. |
| O13 | Tres principios para llevarlo a la práctica | Fusionar → S15/S20 | Llevarlos al requisito y a decisiones. |
| O14 | ¿Qué beneficios buscamos? | Fusionar → S19 | Una explicación causal con límites. |
| O15 | Reducir debilidades que llegan a producción | Fusionar → S19; eliminar candado | Beneficio condicionado, no promesa. |
| O16 | Detectar antes puede evitar retrabajo | Conservar/transformar → S19 | Buen matiz; comparar tareas del mismo defecto. |
| O17 | Entregas más predecibles | Fusionar → S26 | Vincular previsibilidad con política y respuesta. |
| O18 | Del código al software en producción | Mover/fusionar → S08/S09 | Introducir vocabulario antes de controles. |
| O19 | Automatizar ese camino: CI/CD | Mover/conservar núcleo → S08/S09 | Distinción técnica valiosa. |
| O20 | El pipeline | Mover/fusionar → S08/S25 | Definir y luego mostrar feedback real. |
| O21 | Seguridad en CI/CD | Fusionar → S24 | Una escena de integridad del proceso. |
| O22 | El pipeline también puede ser atacado | Conservar/transformar → S24 | Producto y cadena de construcción no son lo mismo. |
| O23 | ¿En qué etapas podemos verificar seguridad? | Fusionar → S21 | Una pregunta por control. |
| O24 | Mapa de controles | Transformar → S21/A02 | Mapa pequeño principal y detalle opcional. |
| O25 | Seguridad desde el código | Fusionar → S16/S17 | Revisión y prueba ligadas al requisito. |
| O26 | Habilitar a quienes desarrollan | Mover/transformar → S33 | Soporte efectivo, sin miniaturas decorativas. |
| O27 | Controles en código fuente | Fusionar → S16/S24/A02 | Separar lógica de aplicación y protección del repo. |
| O28 | Seguridad durante la construcción | Fusionar → S22/S24 | Entradas, dependencias y artefacto. |
| O29 | Controles en build | Mover/fusionar → S22/A02 | IaC y contenedores como profundización. |
| O30 | Nuestro software contiene software de otros | Conservar núcleo → S22 | Dependencias directas/transitivas. |
| O31 | Saber qué componentes tenemos | Conservar núcleo → S22 | Inventario más aviso, sin garantía. |
| O32 | Gestión segura de dependencias | Fusionar → S22/A03 | Detalle de registros/formatos a anexo; retirar imagen. |
| O33 | Seguridad durante las pruebas | Fusionar → S17 | Probar autorizado y no autorizado. |
| O34 | Controles en test | Transformar → S16/A02 | No agrupar DAST e IAST como equivalentes. |
| O35 | Elegir el control por la pregunta | Conservar/transformar → S16/S37 | Buena lógica, convertirla en aplicación. |
| O36 | Herramientas: elegir por propósito | Mover → A01 | Productos no son objetivo de memorización. |
| O37 | Seguridad antes de desplegar | Fusionar → S21/A02 | «Último control» no debe implicar fin de seguridad. |
| O38 | Controles en deploy | Fusionar → S18/S21/A02 | Rollout no prueba seguridad. |
| O39 | Y después del despliegue… | Conservar/transformar → S18 | Cerrar flecha de aprendizaje. |
| O40 | Controles en producción | Fusionar → S18/A02 | Monitoreo y respuesta centrales; siglas opcionales. |
| O41 | Automation First | Transformar → S25 | Automatizar señales útiles, no todo por principio. |
| O42 | Bucle de feedback automatizado | Fusionar → S25 | Retorno explícito a quien corrige. |
| O43 | Security Gates | Conservar/transformar → S26 | Política, responsable y excepción. |
| O44 | El pipeline también necesita controles propios | Fusionar → S24/A03 | Repetición con O21–22. |
| O45 | Del hallazgo a una decisión | Conservar núcleo → S27 | Severidad no es riesgo situado. |
| O46 | Contraseñas y claves también forman parte del software | Conservar núcleo → S23 | Borrar no invalida una credencial. |
| O47 | Gestionar secretos de forma segura | Fusionar → S23 | Eliminar repetición; agregar notas. |
| O48 | Gestión segura de secretos | Mover/fusionar → S23/A03 | Tabla de consulta, no nueva exposición. |
| O49 | Las herramientas no alcanzan | Conservar/transformar → S29 | Conflicto: alerta que nadie atiende. |
| O50 | DevSecOps | Conservar/transformar → S30 | Definición después de DevOps. |
| O51 | Colaboración DevSecOps | Fusionar → S31 | Diagrama local de interacción, no suma de logos. |
| O52 | Cultura DevSecOps | Fusionar → S30/S34 | Hábitos e incentivos observables. |
| O53 | Seguridad como responsabilidad compartida | Conservar/transformar → S31 | Agregar autoridad para aceptar riesgo. |
| O54 | Cuatro pilares que sostienen DevSecOps | Fusionar → S30/S36 | Marco didáctico, no estándar atribuido. |
| O55 | Romper silos y colaborar | Fusionar → S31 | Evitar cadena secuencial de pases. |
| O56 | Referentes de seguridad: un puente en cada equipo | Conservar núcleo → S32 | Rol puente y límites. |
| O57 | Qué hace un Security Champion | Fusionar → S32 | Un ejemplo con responsabilidades. |
| O58 | Un control útil tiene que poder usarse | Conservar/transformar → S33 | Antes/después de una alerta accionable. |
| O59 | Automatizar sin frenar | Fusionar → S34 | Incentivos y tiempos acordados, no promesa de fricción cero. |
| O60 | Evidencia y cumplimiento | Conservar/transformar → S40 | Traza verificable; no certificación automática. |
| O61 | ISO/IEC 27001:2022 y DevSecOps | Mover → A04 | Fuera del núcleo evaluable. |
| O62 | Controles ISO relacionados con el desarrollo | Mover/validar → A04 | Verificar edición y controles, no inventar obligación. |
| O63 | Empezar pequeño y mejorar | Fusionar → S39 | Piloto con criterio de éxito. |
| O64 | Hoja de ruta práctica | Fusionar → S39/A05 | No seis diapositivas para una misma secuencia. |
| O65 | Fase 1 · Evaluar y concientizar | Mover/fusionar → A05 | Lista de consulta. |
| O66 | Fase 2 · Planificar | Mover/fusionar → S39/A05 | Riesgo, responsable y decisión antes de herramienta. |
| O67 | Fase 3 · Pilotar y refinar | Mover/fusionar → S35/S39/A05 | Medir utilidad, no contar alertas. |
| O68 | Fase 4 · Escalar y mejorar | Mover/fusionar → A05 | Escalar según evidencia. |
| O69 | Condiciones para implementar | Fusionar → S34/S39 | Capacidad y patrocinio explícitos. |
| O70 | Obstáculos y respuestas | Fusionar → S33/S34/A05 | Fricciones en escenas concretas. |
| O71 | De Secure by Design a Shift Left | Transformar → S15/S41 | Corregir salto entre transferencia y consulta. |
| O72 | Un futuro digital seguro por diseño | Eliminar como slide; núcleo → S41 | Cierre repetido. |
| O73 | Una guía para el próximo cambio | Fusionar → S37/S41 | Preguntas convertidas en tarea. |
| O74 | La llamada a la acción | Fusionar → S39/S42 | Evitar «sprint» sin definición. |
| O75 | El ciclo completo | Transformar → S41 | Simplificar a una cadena causal legible. |
| O76 | ¡Muchas gracias! | Transformar → S42 | Cierre y evaluación sin enlaces heredados. |

**Nuevas piezas necesarias:** objetivos explícitos; evolución Agile; DevOps; integración con lenguaje llano; recapitulaciones con respuesta visible; métricas contextualizadas; actividad integradora con solución; indicaciones de estudio/evaluación; índice de lecturas. No se agrega otro caso de negocio.

## 7. Compatibilidad y reutilización técnica

- `slides.md` es una portada independiente de Ciberdefensa y sigue siendo la entrada de `npm run dev`. **No es un índice que importe la clase 2.** `npm run dev:clase-2` sí apunta al archivo correcto.
- `npm run build` llama a `scripts/build-site.mjs`, borra `dist/` y construye ambas clases más el sitio. No usarlo como validación inocua: ya hay artefactos en `dist/`.
- Los scripts `build:clase-2` y `export:clase-2` apuntan explícitamente al deck. En fase 4, pasar salida temporal única con `--out`/`--output` tras comprobar la ayuda de la versión instalada.
- Hay dependencias locales instaladas. No se necesita introducir biblioteca de diagramas: HTML/SVG y Mermaid existente bastan. Las fuentes usan proveedor Google; verificar fallback y disponibilidad al exportar.
- `StrideGrid.vue` está especializado en STRIDE. **No generalizarlo ni modificarlo para esta clase.** Es referencia de componente con CSS scoped, etiquetas accesibles y props simples. No hace falta repetir STRIDE como bloque.
- Reusar patrones `card`, `card-strong`, SVG y `two-cols-header`. Si se extrae un flujo repetido, crear un componente propio de clase 2 y mantener estilos encapsulados; no cambiar shortcuts globales para resolver una diapositiva.
- El parser local procesó ambas presentaciones: clase 2, 76 slides con notas ausentes en 1/23/47; clase 1, 36 slides con notas completas. La revisión independiente de las 11 rutas únicas de imágenes HTML de clase 2 encontró todos los archivos bajo `public/`. Esto acredita estructura y existencia, no compilación, carga real, layout ni exportación.

## 8. Riesgos y decisiones pendientes

| Severidad | Riesgo | Resolución propuesta |
|---|---|---|
| Alta | Falta uno de los tres temas obligatorios: evolución ágil. | Bloque causal S05–S12. |
| Alta | No hay alineación objetivos–enseñanza–evaluación ni tiempos verificables. | Cinco objetivos, matriz de 10 ítems, 112 minutos programados + 8 de reserva. |
| Alta | Transferir y consultar se mezclan en una cadena de trazabilidad. | Mantener autorización de consulta como garantía transversal. |
| Media | Formas repetidas y mucha densidad de siglas. | 42 slides principales y 6 anexos; patrones visuales acotados. |
| Media | Notas insuficientes para impartir dos horas sin improvisación. | Parlamentos por slide con explicación, ejemplo, límite y transición; tiempos en guion. |
| Media | Curvas, flechas y cadena de equipos comunican relaciones equívocas. | Diagramas locales originales con retorno y roles explícitos. |
| Media | Fuentes genéricas usadas para sustentar detalles específicos. | Validación por afirmación, versión y sección; no atribuir a SSDF comparativas comerciales. |
| Media | Origen/licencias de imágenes extraídas no documentado. | No agregar reutilizaciones; sustituir en clase 2 lo no indispensable. |
| Media | Calendario del examen ambiguo. | Confirmación docente de qué significa la instancia vinculada a las 48 horas. |
| Baja | README no coincide con estado actual de notas/PPTX. | Registrar limitación ahora; cualquier corrección documental futura será acotada. |

La clase 1 muestra una ventana concreta de examen de 24 horas en octubre. **No copiarla a clase 2 ni deducir de ella las 48 horas de la misión.** Falta confirmar si son plazo, momento de apertura u otra instancia, además de fecha, zona horaria, comisiones y URL.

## 9. Operaciones realizadas y límite del resultado

Se ejecutaron `git status --short`, listados y búsquedas de archivos, conteo de líneas, extracción de títulos con Python, lectura de configuración y consulta a Orca (`status`, guías, creación de Run y tarea técnica). Se consultó orientación local de accesibilidad sobre contraste; no se generó otro sistema visual. El apoyo técnico dejó su evidencia en `tmp/clase-2/reporte-tecnico.md` (archivo temporal ignorado por Git); los hallazgos relevantes están incorporados aquí.

Comprobaciones independientes del coordinador: script Node inline con `parse` de `@slidev/parser` para cantidad/notas de ambos decks; script Python para existencia de las 11 rutas únicas `<img src>` de clase 2; validación de documentos: **76 filas de origen, 42 fichas principales, 6 anexos y 112 + 8 = 120 minutos**.

El Run `run_77d58a422d27` lanzó una sola tarea técnica acotada (`task_c5bf09d32584`), sin permiso de editar decks. La selección efectiva reportada fue agente `codex`, sin modelo ni esfuerzo explicitados por Orca: **no se afirma que sea un modelo concreto ni que haya ahorro monetario medido**. La economía de esta fase consiste en limitar la delegación al inventario; el razonamiento global se hace una sola vez. Pi y OpenCode tienen CLI presente; eso no verifica catálogo, autenticación ni precios y no se lanzaron.

La tarea técnica terminó con `outcome: succeeded`; se revisó el reporte y se contrastaron los conteos. El worker fue liberado y Orca confirmó cero terminales pendientes de decisión. No quedan implementadores trabajando en segundo plano.

**Esta auditoría no es una validación final.** El plan siguiente establece las pruebas posteriores y el punto de aprobación obligatorio.
