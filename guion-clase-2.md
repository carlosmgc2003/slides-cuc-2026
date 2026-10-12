# Guion de conducción · Clase 2 — Shift Left or Get Hacked!

**DevSecOps Unlocked · FIE · Clase 2** · Duración planificada: **112 minutos de contenido + 8 de reserva = 120 min (19:00–21:00)**.

Este guion es la conducción del docente en voseo: indica qué hacer, qué decir, qué señalar y cómo pasar de una diapositiva a la otra. Las **notas de cada slide** de `slides-clase-2.md` son el parlamento canónico en primera persona; este archivo las **amplía**, no las contradice ni las duplica de forma divergente. Para el material de estudio del estudiante: diapositivas + grabación + este guion (público). La **clave del cuestionario no se incluye aquí**: vive únicamente en `cuestionario-clase-2.md` (material docente, no se publica).

---

## 1. Cronograma 19:00–21:00

Los tiempos de cada slide ya incluyen explicación, transición y participación prevista. **No** se agregan minutos de actividades aparte; los 8 de reserva no son contenido nuevo.

| Horario | Bloque | Slides | Min | Punto de control |
|---|---|---|---|---:|
| 19:00–19:08 | A · Apertura y caso | S01–S04 | 8 | Identificar qué regla debe sobrevivir al cambio. |
| 19:08–19:30 | B · Introducción al ciclo de desarrollo | S05–S11 | 22 | Relacionar Agile, CI/CD y DevOps y conectar el ciclo con seguridad. |
| 19:30–19:51 | C · Shift Left y controles sobre el código | S12–S19 | 21 | Relacionar controles y feedback con el cambio. |
| 19:51–20:15 | D · De dependencias a producción | S20–S27 | 24 | Aplicar controles sobre la versión y su despliegue. |
| 20:15–20:36 | E · Cultura que permite actuar | S28–S35 | 21 | Responsabilidad compartida con dueño y capacidad. |
| 20:36–20:47 | F · DevSecOps y cumplimiento | S36–S39 | 11 | Relacionar requisitos, alcance, controles y evidencia; ISO y PCI DSS. |
| 20:47–20:50 | G · Auditoría y evidencia | S40–S41 | 3 | Explicar SOC 2 y recorrer el registro de evidencia. |
| 20:50–20:58 | Preguntas / reserva | Sobre S42 | 8 | Dos o tres preguntas agrupadas, o absorción de demora. |
| 20:58–20:59 | Recap y saludo | S42 | 1 | Recuperar el recorrido y despedir la clase. |
| 20:59–21:00 | Evaluación | S43 | 1 | Ventana del examen y accesos por comisión pendientes. |
| **Total** | | | **120** | **112 programados + 8 flexibles** |

Suma por diapositivas: S01 1 · S02 1 · S03 3 · S04 3 · S05 3 · S06 3 · S07 2 · S08 4 · S09 4 · S10 3 · S11 3 · S12 3 · S13 3 · S14 2 · S15 2 · S16 3 · S17 3 · S18 2 · S19 3 · S20 3 · S21 3 · S22 3 · S23 3 · S24 3 · S25 3 · S26 3 · S27 3 · S28 2 · S29 3 · S30 3 · S31 2 · S32 3 · S33 3 · S34 3 · S35 2 · S36 3 · S37 2 · S38 3 · S39 3 · S40 2 · S41 1 · S42 1 · S43 1 = **112**.

---

## 2. Conducción masiva (más de 400 personas) y grabación

- **Regla general:** ejemplos, tablas y registros se leen en voz alta y quedan visibles. Quien ve la grabación puede pausar y reconstruir la relación entre control, resultado y decisión.
- **Participación mínima viable:** S04 diagnóstico breve (30 s, hasta dos respuestas por chat/mano); S33 pregunta sobre la respuesta a un reporte; S35 recuperación de la cadena comprobar–actuar–decidir. Las S36–S41 desarrollan cumplimiento con ejemplos visibles. No se requieren salas ni herramientas externas.
- **Grabación:** repetir consignas y respuestas modelo antes de responder; el docente lee la idea para que quede contexto en la grabación. Recap y saludo en S42; información del examen en S43.
- **Contingencias:** si hay demora, usar primero la reserva antes del cierre (hasta 8 min) para absorberla reduciendo la cantidad de intervenciones, **sin** eliminar respuestas modelo ni temas obligatorios. Si la demora supera los 8 minutos, abreviar los ejemplos opcionales de S21/S23/S31 y registrarlo. No omitir contenidos evaluables sin ajustar el cuestionario. Si sobra tiempo, profundizar una pregunta del caso.

---

## 3. Caso y vocabulario canónico

**Caso fijo:** la app de banca de clase 1 (cliente, servicios de autenticación/extractos/pagos, cuentas y movimientos, proveedor de notificaciones). En esta clase el equipo agrega la **descarga del extracto mensual**; la persona solo debería obtener movimientos de una cuenta sobre la que tiene permiso.

**Regla estable:** en cada consulta/descarga el servidor verifica la autorización sobre la cuenta; si falta permiso, **rechaza sin entregar saldo ni movimientos**. No equiparar autenticación con autorización.

- Escenario A (principal): identidad válida solicita el extracto de otra cuenta → contrastar caso permitido/denegado.
- Escenario B (apoyo): aviso sobre una biblioteca del servicio de extractos → inventario y versión ayudan a localizarla; el aviso no demuestra explotación.
- Escenario C (apoyo): token de despliegue expuesto en un cambio → borrar no invalida: revocar/rotar y revisar uso.

**Vocabulario a definir en castellano antes de usar:** repositorio (código e historial compartidos), pipeline (flujo de tareas automáticas), producción (entorno de la app que usan las personas), desplegar (llevar una versión a ese entorno), cambio registrado (*commit*), solicitud de revisión e integración (*PR/MR*), construcción de un paquete (*build/artefacto*) y operación. Siglas SAST, DAST, SCA y SBOM siempre con función; IaC se explica en S23; imágenes se explican en S22. No se exige programar, instalar nada ni conocer Scrum.

---

## 4. Índice del recorrido

Principal (S01–S43, 112 min): S01 Shift Left or Get Hacked! · S02 Decisiones de esta clase · S03 Cada cuenta, con permiso · S04 La descarga nueva y la autorización · S05 Probar tarde y costo del cambio · S06 Iteración e incremento · S07 Agile: una forma de trabajar · S08 CI · Continuous Integration · S09 CI/CD · de la versión a producción · S10 DevOps: desarrollo y operación · S11 Agile, CI/CD y DevOps en conjunto · S12 Shift Left: probar y revisar antes · S13 Shift Left dentro del pipeline · S14 Shift Left en el equipo · S15 Controles a lo largo del pipeline · S16 Desarrollo: código y pruebas · S17 Pre-commit: secretos · S18 Repositorio: cambios revisados · S19 CI: análisis estático con SAST · S20 CI: dependencias y SCA · S21 Build: construir la versión · S22 Imágenes y SBOM · S23 Infraestructura como código · S24 Pruebas de API y DAST · S25 Firma y registro de artefactos · S26 Despliegue: políticas y permisos · S27 Runtime: observar y responder · S28 Hallazgos: de abiertos a resueltos · S29 DevSecOps: romper los silos · S30 DevSecOps: roles y cruces · S31 Security Champion en desarrollo · S32 Hallazgo en CI: qué hacemos · S33 Reportar y responder en equipo · S34 Medir controles y correcciones · S35 Del control a la entrega · S36 DevSecOps y cumplimiento · S37 Tres referencias habituales · S38 ISO/IEC 27001: gestión de seguridad · S39 PCI DSS: datos de tarjetas · S40 SOC 2: controles del servicio · S41 Del requisito a la evidencia · S42 Recap: seguridad en cada cambio · S43 Examen de la clase.

---

# Diapositivas principales

## Diapositiva 1 · S01 · Shift Left or Get Hacked!

**Tiempo:** 1 min. Abrí con el puente: en la clase anterior diseñamos decisiones sobre qué proteger y cómo responder. Hoy observamos cómo sobreviven cuando el software cambia seguido. Presentá Shift Left como acercar cierto feedback a las decisiones y cambios; **no** lo definas como garantía ni como herramienta, y **no** lo reduzcas a una lista de productos. Señalá que el ciclo vuelve de la operación al próximo cambio.

**Ampliación:** el rótulo institucional ya está en pantalla; no hace falta anunciarlo. La tesis de la clase: acortar el ciclo de cambios también exige acortar el ciclo de aprendizaje sobre seguridad.

**Transición:** «Primero voy a mostrar qué decisiones vamos a practicar y cómo se conecta el recorrido».

## Diapositiva 2 · S02 · Decisiones de esta clase

**Tiempo:** 1 min. Presentá las cinco acciones: distinguir prácticas, explicar feedback temprano, elegir una comprobación, coordinar una respuesta y explicar el aporte al cumplimiento. El mismo caso recorre la clase; ejemplos y registros quedan visibles para la grabación. No se exige memorizar marcas.

**Transición:** «Para empezar, recuperemos la regla que diseñamos en clase 1 sobre cuentas y movimientos».

## Diapositiva 3 · S03 · Cada cuenta, con permiso

**Tiempo:** 3 min. El ejemplo es una app de banca didáctica; no hace falta saber finanzas. Leé los dos lados como resultados observables bajo **el mismo control**: cuenta autorizada devuelve el extracto; identidad válida sin permiso recibe rechazo sin datos. Preguntá: «Si cambio el identificador de cuenta en una solicitud, ¿qué debe decidir el servidor?». Respuesta evaluable: verifica la autorización para esa cuenta y rechaza sin datos si falta permiso. Separar autenticación (quién se presenta) de autorización (qué puede consultar). No mostrar credenciales reales.

**Transición:** «Ahora agregamos una descarga nueva: ¿qué puede poner a prueba esa autorización?»

## Diapositiva 4 · S04 · La descarga nueva y la autorización

**Tiempo:** 3 min. La descarga del extracto mensual es una función nueva del mismo sistema; una ruta nueva, una biblioteca y una configuración son partes del episodio, no casos nuevos. Da 30 segundos para pensar qué regla de autorización se conserva; recogé hasta dos respuestas y leé la regla completa para la grabación: cada solicitud se autoriza en el servidor y el rechazo no contiene datos. Aclarar que un cambio **no** demuestra que exista una vulnerabilidad.

**Transición:** «¿Qué pasa con el costo de un cambio si dejamos las pruebas y la revisión de seguridad para el final?»

## Diapositiva 5 · S05 · Probar tarde y costo del cambio

**Tiempo:** 3 min. Abrí con la pregunta de las notas: «¿Qué tenemos que volver a hacer si recién al final descubrimos que la descarga permite leer una cuenta ajena?». Recorré la fila superior y señalá que las pruebas y la revisión de seguridad quedaron concentradas al final. En este ejemplo, la omisión viene del diseño de la autorización, y varias partes ya se construyeron sobre esa decisión.

Seguí la flecha naranja y las tres tareas inferiores: **revisar el diseño, corregir el código y repetir integración y pruebas**. Conectá esas tareas con la coordinación entre quienes conocen cada parte. Explicá el costo como trabajo que hay que repetir y personas que tienen que volver a ponerse de acuerdo. Contrastá con detectar la misma omisión al diseñar, cuando todavía no se construyó lo que depende de ella. El dibujo ilustra el mecanismo; el alcance del retrabajo depende del defecto y del sistema. Conservá las pruebas finales como parte del ciclo.

**Fuente:** OWASP WSTG v4.2, [Test Early and Test Often](https://wstg.owasp.org/v4.2/2-Introduction/#test-early-and-test-often) y [The Web Security Testing Framework](https://wstg.owasp.org/stable/3-The_OWASP_Testing_Framework/0-The_Web_Security_Testing_Framework/). Sustenta comprobar durante el ciclo y corregir antes con menor costo; el ejemplo no asigna cifras ni multiplicadores.

**Transición:** «Para tener oportunidades de probar y ajustar antes, podemos trabajar en ciclos e incrementos. Veamos qué significa cada uno».

## Diapositiva 6 · S06 · Iteración e incremento

**Tiempo:** 3 min. Preguntá «¿Qué cambia de un paso al siguiente en cada fila?» y recorré las ilustraciones de izquierda a derecha. Arriba se refina una primera versión; abajo se agregan partes. Traducí el globo de la fila superior como «una mujer en un paisaje». Hacé explícito que iterar incluye evaluar y ajustar a partir del feedback: repetir una tarea sin revisar lo aprendido no alcanza para explicar la idea.

Conectá con la app: sumar la descarga mensual es un incremento; probarla, escuchar cómo les resultó a quienes la usaron y ajustar cómo se usa es iterar. Definí **feedback** como la información que vuelve para ayudarnos a mejorar. En software, el incremento agrega una **capacidad utilizable**: la porción de pintura es una analogía de sumar partes. Cerrá con la posibilidad de combinar ambas prácticas y recordá que revisar una versión no obliga a hacerla disponible de inmediato para todas las personas usuarias.

**Fuente de las ilustraciones y la explicación:** Jeff Patton (21-01-2008), [Don’t Know What I Want, But I Know How to Get It](https://jpattonassociates.com/dont_know_what_i_want/) (F14). Copias de las imágenes conservadas por Steven Thomas en [Revisiting the Iterative Incremental Mona Lisa](https://itsadeliverything.com/revisiting-the-iterative-incremental-mona-lisa); se usan las dos secuencias de Patton, sin modificaciones.

**Transición:** «Vimos cómo sumar una parte y cómo revisarla para mejorar. Ahora veamos cómo organizar el trabajo del equipo alrededor de esas ideas: ahí aparece Agile».

## Diapositiva 7 · S07 · Agile: una forma de trabajar

**Tiempo:** 2 min. Abrí con la pregunta de las notas: «¿Cómo organizamos un proyecto si al ver los primeros resultados podemos descubrir que necesitamos algo distinto?». Definí **Agile / desarrollo ágil** con la frase visible y conectá con S06: sumar una capacidad y revisarla son prácticas que ayudan a desarrollar de esta manera.

Recorré las tres tarjetas con el caso: primero consultar movimientos, después descargar; quienes necesitan la función y quienes la construyen revisan juntos el resultado; si cuesta elegir el período, ajustan el trabajo siguiente. Conservá la autorización como requisito de cada avance. Presentá el Manifiesto de 2001 como el documento que reúne los valores, y sus principios como orientación para la práctica. Planificación y documentación siguen teniendo valor.

**Ampliación opcional, si surge Scrum:** es un marco concreto para organizar el trabajo dentro de los enfoques ágiles. Agile abarca más prácticas; conocer Scrum no es requisito para seguir esta clase.

**Fuentes:** [Manifiesto Ágil](https://agilemanifesto.org/iso/es/manifesto.html) y [principios](https://agilemanifesto.org/iso/es/principles.html) (F1). Las tarjetas son una síntesis didáctica.

**Transición:** «Ahora pensemos en quienes construyen la app: si varias personas hacen cambios, ¿cómo los juntamos y comprobamos que funcionan juntos? Esa práctica se llama CI».

## Diapositiva 8 · S08 · CI · Continuous Integration

**Tiempo:** 4 min. Abrí con «¿Dónde juntamos los cambios de las personas que construyen la app y cómo sabemos si funcionan juntos?». Definí código como las instrucciones del software; repositorio como el lugar donde el equipo conserva y comparte código e historial; integrar como combinar los cambios con la versión compartida. Presentá CI como hacerlo seguido y comprobar el resultado con automatización.

Recorré el diagrama: compartir un cambio activa el pipeline configurado; una máquina obtiene el código, prepara una versión con el **build** y ejecuta las pruebas. Señalá que las tareas y sus disparadores los define el equipo; sus instrucciones pueden estar versionadas junto al código. Usá la prueba de cuenta ajena para explicar «pasó / falló» y seguí el retorno al equipo. El paquete producido se llama artefacto.

**Vocabulario complementario en las notas:** commit registra un cambio; PR/MR propone revisarlo e integrarlo. Diferenciá la ejecución de comprobaciones de la integración efectiva: abrir una solicitud o ejecutar un pipeline no garantiza que los cambios se hayan combinado. El dibujo muestra un ejemplo sencillo; las tareas reales pueden variar o ejecutarse en paralelo.

**Fuentes:** [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html) (F2); GitHub Docs, [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) y [Understanding GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions) (F15). GitHub aporta un ejemplo documentado de automatización, sin exigir esa plataforma para la clase.

**Transición:** «El pipeline ya preparó y probó una versión. ¿Cómo seguimos hasta que esa versión llega a quienes usan la app? Ahí distinguimos Continuous Delivery y Continuous Deployment».

## Diapositiva 9 · S09 · CI/CD · de la versión a producción

**Tiempo:** 4 min. Retomá repositorio, build y pruebas desde S08. Explicá **producción** como el entorno de la app que usan las personas y **desplegar** como llevar una versión a ese entorno. El pipeline puede extenderse para preparar y desplegar versiones. Estar listo para publicar puede requerir comprobaciones y preparativos adicionales a los de CI.

Seguí las dos columnas desde la misma versión lista: en **Continuous Delivery**, publicar puede esperar una aprobación y el pipeline puede ejecutar el despliegue una vez aprobada; en **Continuous Deployment**, también se automatiza el avance a producción al cumplir las condiciones. La aprobación dibujada es un ejemplo de Delivery, cuya definición es mantener la versión lista. Aplicá ambas posibilidades a la descarga mensual.

Preguntá «Si alguien autoriza el último paso, ¿dejó de ser Continuous Delivery?» y leé la respuesta: **no**, la versión sigue lista; el paso a producción espera esa decisión. Recapitulá la relación de CI/CD con el pipeline: integra y comprueba, prepara para publicar y, según el enfoque, automatiza también la publicación. La cobertura de las comprobaciones sigue teniendo un alcance concreto. Fuentes: F2 y F15.

**Transición:** «Ya vimos el recorrido automático. Ahora veamos cómo colaboran las personas que construyen la app y quienes la mantienen funcionando».

## Diapositiva 10 · S10 · DevOps: desarrollo y operación

**Tiempo:** 3 min. Abrí con «¿Qué hacemos con lo que aprendemos una vez que la app está funcionando?» y definí DevOps con la frase visible. Explicá Dev como desarrollo y Ops como operación. Recorré el infinito desde **Planificar → Código → build → Pruebas → Release → Desplegar → Operar → Monitorear → Planificar**. Release identifica una versión para publicar; operar mantiene el servicio funcionando y monitorear observa sus señales.

Conectá build, pruebas y despliegue con el pipeline de S08–S09. Para mostrar el retorno, usá el rechazo inesperado a una cuenta autorizada: quienes observan el servicio y quienes lo construyen comparten información, investigan y orientan la corrección. Señalá «Colaboración» en el cruce y explicá que atraviesa todo el ciclo. Los colores agrupan actividades; las personas pueden participar en ambos lados y las tareas pueden solaparse. CI/CD automatiza tareas dentro de ese trabajo compartido.

**Fuente:** [What is DevOps?](https://www.atlassian.com/devops), secciones «How does DevOps work?» y «The DevOps lifecycle» (F16). El infinito es una elaboración propia, adaptada al vocabulario de la clase.

**Transición:** «Juntemos lo que vimos sobre Agile, CI/CD y DevOps en el recorrido de una misma función».

## Diapositiva 11 · S11 · Agile, CI/CD y DevOps en conjunto

**Tiempo:** 3 min. Recorré la fila con la descarga mensual: necesidad, cambio compartido en el repositorio, pipeline, producción y aprendizaje. Seguí la flecha de retorno y explicá que también aprendemos y comprobamos antes de publicar. Las tarjetas presentan tres aspectos del mismo trabajo: Agile organiza avances y adaptación; CI/CD conecta integración, comprobaciones y preparación o publicación de versiones; DevOps sostiene la colaboración durante todo el ciclo.

Recordá brevemente la diferencia entre Continuous Delivery y Continuous Deployment desde S09: una versión lista puede esperar una decisión humana; el paso a producción también puede automatizarse bajo condiciones. Vinculá el recorrido con S05: dejar toda la comprobación para el final aumenta el trabajo que puede haber que repetir. Aplicá la regla de acceso a la descarga y cerrá con la pregunta visible «¿Cómo sumamos seguridad a este ciclo?». La siguiente placa desarrolla cuándo adelantar comprobaciones, conservando las posteriores.

**Fuentes:** F1, F2, F16 y F4, ya presentadas en el bloque. La fila y las tarjetas sintetizan el mismo caso.

**Transición:** «Veamos cómo adelantar pruebas y revisión del código, y cómo CI nos ayuda a repetirlas: ese es el principio de Shift Left».

## Diapositiva 12 · S12 · Shift Left: probar y revisar antes

**Tiempo:** 3 min. Definí Shift Left como adelantar pruebas y revisión del código para recibir feedback cerca del cambio. Recorré el gráfico desde diseño hasta operación: el eje vertical representa la distribución del esfuerzo en comprobaciones, **no** el costo de corregir. La curva naranja concentra trabajo después de construir; la celeste adelanta parte a diseño, código y CI. Ambas conservan controles posteriores. El dibujo es cualitativo: no tiene cifras medidas, ni su área permite comparar esfuerzo total o calcular ahorro.

Aplicá la descarga: acordar permisos al diseñar, probar la lógica de autorización mientras se escribe, repetir controles al integrar y comprobar el servicio completo después. Presentá **Shift Left Security** como aplicar ese principio a seguridad. CI permite repetir controles sobre cambios; algunas comprobaciones también pueden ejecutarse localmente antes de compartir código.

**Fuentes:** [Shift testing left with unit tests](https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable) y [Architecture strategies for testing](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/testing) (F17); [DORA: Pervasive security](https://dora.dev/capabilities/pervasive-security/) (F18). El gráfico es una elaboración propia, no una serie de datos de estas fuentes.

**Transición:** «Veamos qué tareas y herramientas podemos agregar al recorrido del código y al pipeline de CI».

## Diapositiva 13 · S13 · Shift Left dentro del pipeline

**Tiempo:** 3 min. Leé la tabla como un recorrido: código local, cambio compartido / PR, build y app ejecutándose en un entorno de prueba. Definí cada control por su función antes de detenerte en sus ejemplos. Las ubicaciones son orientativas: los controles pueden repetirse en varios momentos y ejecutarse en paralelo. Para que exista CI, los cambios también deben integrarse seguido.

- **Código local:** linter para reglas y errores del código; pruebas unitarias para lógica aislada. Ejemplos: [Ruff](https://docs.astral.sh/ruff/) y [pytest](https://docs.pytest.org/en/stable/getting-started.html).
- **CI al compartir un cambio / PR:** revisión humana, SAST y detección de secretos. Ejemplos: [Semgrep](https://docs.semgrep.dev/semgrep-code/overview) y [Gitleaks](https://github.com/gitleaks/gitleaks).
- **CI en build:** avisos sobre dependencias y pruebas de integración entre partes. Ejemplos: [pip-audit](https://github.com/pypa/pip-audit) y pytest.
- **CI con la app de prueba:** pruebas del servicio y DAST sobre la aplicación en ejecución. Ejemplos: pruebas escritas con pytest y [OWASP ZAP](https://www.zaproxy.org/docs/automate/automation-framework/).

Leé la regla visible y conectala con la evidencia: con permiso, extracto; sin permiso, rechazo sin datos. Un escáner genérico se complementa con pruebas que expresen esa autorización. Seguí el resultado hasta el autor del cambio y una nueva ejecución. No se exige memorizar productos ni instalar herramientas. Fuentes: F19, F6 y F15.

**Transición:** «Tener estas señales cerca del cambio le da más capacidad de actuar a quien lo escribe. Veamos qué necesita el equipo para aprovecharla».

## Diapositiva 14 · S14 · Shift Left en el equipo

**Tiempo:** 2 min. Recorré **ver → entender → corregir → volver a probar** y explicá la autonomía como capacidad concreta del ingeniero para actuar sobre su cambio. Ejemplo: la prueba de la descarga muestra un permiso mal aplicado; quien escribió el código puede investigar y verificar la corrección.

Relacioná las tres columnas: buscamos feedback temprano y menos retrabajo; necesitamos pruebas mantenidas, criterios en CI, tiempo y formación; debemos gestionar pruebas inestables, alertas que no aplican, lentitud e inversión inicial. Pruebas y seguridad colaboran con desarrollo para acordar controles y criterios, interpretar resultados y sostener la calidad de las señales. Podés empezar con cambios nuevos y controles rápidos pertinentes. Los beneficios dependen del contexto y de la capacidad de responder. Fuentes: F17 y F18.

**Transición:** «Recorramos el pipeline con una pregunta práctica: qué comprobamos en cada tramo y qué hacemos con el resultado».

## Diapositiva 15 · S15 · Controles a lo largo del pipeline

**Tiempo:** 2 min. Recorré las seis agrupaciones sobre la descarga. Para cada control, sostené la relación control → feedback → acción → evidencia. Mostrá que CI incluye tanto el análisis como la construcción y las pruebas de la versión. Explicá que las categorías se adaptan a la arquitectura y que varias tareas pueden repetirse o correr en paralelo. Los productos son ejemplos secundarios.

**Fuentes:** F4, NIST SSDF; F15, automatización en CI; F7, seguridad de la cadena de entrega. Enlaces y alcance en el registro de fuentes.

**Transición:** «Empecemos con lo que puede comprobar quien escribe el código, antes de compartirlo.».

## Diapositiva 16 · S16 · Desarrollo: código y pruebas

**Tiempo:** 3 min. Compará las dos filas: el linter y el análisis integrado en el editor localizan problemas de calidad o seguridad; una prueba unitaria contrasta una lógica con un resultado esperado. Señalá archivo/línea y esperado/obtenido como feedback que permite corregir. Conectá los casos de permiso con el requisito y aclarale a la audiencia que el equipo escribe la prueba.

**Fuentes:** F28, SonarQube for IDE; F19, pytest; F5, autorización por solicitud; F17, pruebas por niveles. Enlaces y alcance en el registro de fuentes.

**Transición:** «Antes de registrar y compartir el cambio, también podemos revisar si se nos escapó una credencial.».

## Diapositiva 17 · S17 · Pre-commit: secretos

**Tiempo:** 3 min. Definí commit y pre-commit antes de recorrer las dos situaciones. Secret scanning señala una posible credencial; el equipo valida la coincidencia. Mostrá prevención con una referencia a un gestor y respuesta a una exposición confirmada: invalidar/rotar y revisar uso. Leé la frase visible sobre borrar el archivo. Una excepción al pipeline no vuelve válida una credencial expuesta.

**Fuentes:** F19, Gitleaks; F9, OWASP Secrets Management; F20, Vault. Enlaces y alcance en el registro de fuentes.

**Transición:** «Ahora compartimos el cambio: el repositorio puede exigir una revisión y comprobaciones antes de integrarlo.».

## Diapositiva 18 · S18 · Repositorio: cambios revisados

**Tiempo:** 2 min. Retomá la definición de repositorio y PR. Mostrá la revisión pendiente o la prueba fallida como feedback del repositorio, y la corrección/revisión como respuesta. Diferenciá proteger las condiciones de integración de analizar el código: las reglas del repositorio requieren configuración y permisos adecuados.

**Fuentes:** F20, GitHub rulesets y reglas disponibles; F15, eventos y tareas de CI. Enlaces y alcance en el registro de fuentes.

**Transición:** «Entre las comprobaciones que puede exigir el repositorio está el análisis de seguridad del código: SAST.».

## Diapositiva 19 · S19 · CI: análisis estático con SAST

**Tiempo:** 3 min. Definí SAST por su operación antes de nombrar Semgrep. Leé el feedback como un ejemplo ilustrativo, traduciendo inyección SQL: una entrada podría modificar la instrucción enviada a la base. Mostrá la acción verificable de parametrizar y repetir análisis/pruebas. La autorización por cuenta se comprueba con pruebas específicas, además del análisis estático.

**Fuentes:** F19, Semgrep; F6, análisis de código; F27, OWASP SQL Injection Prevention. Enlaces y alcance en el registro de fuentes.

**Transición:** «El código propio es una parte de la versión. También incorporamos bibliotecas de terceros: revisemos esas dependencias.».

## Diapositiva 20 · S20 · CI: dependencias y SCA

**Tiempo:** 3 min. Explicá dependencia directa y transitiva con el servicio de extractos. Recorré paquete/versión/aviso como feedback, y actualización más regresión como acción. Confirmar uso, exposición y compatibilidad precede la decisión; la severidad por sí sola no fija una prioridad universal. Conservá versión y fecha del análisis.

**Fuentes:** F6, OWASP Component Analysis; F19, pip-audit; F21, Trivy; F10, evaluación de riesgo. Enlaces y alcance en el registro de fuentes.

**Transición:** «Con el código y las dependencias revisados, construimos una versión identificable del servicio.».

## Diapositiva 21 · S21 · Build: construir la versión

**Tiempo:** 3 min. Definí artefacto con un paquete o una imagen. BuildKit construye; los controles sobre entradas, permisos, ejecución y secretos los configura el equipo. Usá la dependencia que solo estaba instalada localmente como fallo del build: declarar dependencia y versión en el repositorio, reconstruir y guardar el identificador producido. Explicá que un montaje temporal tampoco evita que una tarea mal diseñada copie el secreto.

**Fuentes:** F21, BuildKit y secretos del build; F7, riesgos de CI/CD; F15, ejecución automatizada. Enlaces y alcance en el registro de fuentes.

**Transición:** «La versión puede incluir una imagen con bibliotecas y sistema base: comprobemos su contenido y conservemos el inventario.».

## Diapositiva 22 · S22 · Imágenes y SBOM

**Tiempo:** 3 min. Compará las dos columnas sin tratarlas como sinónimos: escaneo para avisos; SBOM para inventario. Mostrá actualizar/reconstruir/repetir y guardar inventario por identificador de imagen como acciones. El componente ficticio puede estar en el sistema base o llegar transitivamente. Usar un formato de SBOM no convierte inventario en análisis de vulnerabilidades.

**Fuentes:** F21, Trivy y Syft; F8, CISA SBOM; F13, formatos de inventario. Enlaces y alcance en el registro de fuentes.

**Transición:** «El paquete también necesita una configuración para ejecutarse: esa configuración se puede revisar antes de desplegar.».

## Diapositiva 23 · S23 · Infraestructura como código

**Tiempo:** 3 min. Definí IaC como archivos que describen infraestructura, y Kubernetes como una opción para ejecutar contenedores. Leé recurso/propiedad/regla como feedback. Mostrá reducir privilegios y accesos y volver a analizar. Conectá la repetición con evidencia de reglas; diferenciá esos reportes de una certificación normativa.

**Fuentes:** F22, Checkov y Kubescape; F4, criterios y evidencia durante el ciclo. Enlaces y alcance en el registro de fuentes.

**Transición:** «Ahora levantamos la versión en un entorno de prueba para observar qué hace la app de verdad.».

## Diapositiva 24 · S24 · Pruebas de API y DAST

**Tiempo:** 3 min. Definí API antes de usar el término. Contrastá contrato/casos del negocio con escaneo dinámico. Schemathesis genera pruebas del contrato; la autorización requiere casos escritos expresamente. Leé ambos resultados esperados y usá la respuesta del servidor como evidencia. Si hay datos de una cuenta ajena, corregir y repetir ambos casos antes de entregar.

**Fuentes:** F23, Schemathesis; F19, ZAP; F5, autorización; F6, pruebas web. Enlaces y alcance en el registro de fuentes.

**Transición:** «Con la versión comprobada, necesitamos preservar su identidad y controlar cómo se publica el artefacto.».

## Diapositiva 25 · S25 · Firma y registro de artefactos

**Tiempo:** 3 min. Definí registry, firma, digest y procedencia con la misma versión. Mostrá una verificación contra identidad/clave y procedencia esperadas; una firma de identidad inesperada detiene el recorrido del ejemplo. Cosign aporta verificación; Harbor almacenamiento/control y escaneo configurado. Diferenciá integridad, identidad y procedencia de la ausencia de vulnerabilidades.

**Fuentes:** F24, Cosign y Harbor; F13, SLSA; F7, cadena de entrega. Enlaces y alcance en el registro de fuentes.

**Transición:** «El artefacto está identificado. Al desplegarlo también comprobamos políticas, permisos y comunicaciones.».

## Diapositiva 26 · S26 · Despliegue: políticas y permisos

**Tiempo:** 3 min. Definí policy as code y gate como reglas y condición de paso. En el ejemplo, revisá regla/recurso como feedback y ajuste/repetición como acción. Kyverno valida según su modo; Cilium aplica políticas de comunicaciones configuradas. Los permisos y los secretos dependen de identidades definidas. Una excepción necesita autoridad y seguimiento; nunca reemplaza invalidar una credencial expuesta.

**Fuentes:** F22, Kyverno y Cilium; F9, secretos; F10, decisión contextual de riesgo. Enlaces y alcance en el registro de fuentes.

**Transición:** «La app ya funciona en producción. Necesitamos observar su comportamiento y poder responder a señales nuevas.».

## Diapositiva 27 · S27 · Runtime: observar y responder

**Tiempo:** 3 min. Traducí runtime como ejecución real. Diferenciá señales de calidad y eventos de seguridad. OpenTelemetry produce/exporta señales al sistema de observación; Falco evalúa reglas de eventos. Mostrá servicio/versión/contexto como datos para investigar y contener/corregir/verificar como respuesta. Leé el límite visible: cobertura parcial de pruebas previas y necesidad de observar producción.

**Fuentes:** F25, OpenTelemetry y Falco; F4, respuesta y aprendizaje durante el ciclo. Enlaces y alcance en el registro de fuentes.

**Transición:** «Todas estas herramientas producen señales. Cerremos el recorrido con qué hacemos para que un hallazgo llegue a resolverse.».

## Diapositiva 28 · S28 · Hallazgos: de abiertos a resueltos

**Tiempo:** 2 min. Recorré validar/decidir/cerrar con el aviso de una biblioteca. La prioridad usa severidad y contexto; una excepción requiere autoridad, motivo, alcance y revisión. Leé detectado ≠ resuelto y la condición del token. Conectá la evidencia de cierre con una versión y un control repetido. DefectDojo organiza información; el equipo realiza y decide las acciones.

**Fuentes:** F26, DefectDojo; F10, evaluación de riesgo; F9, credenciales; F4, respuesta a hallazgos. Enlaces y alcance en el registro de fuentes.

**Transición:** «Ya vimos las herramientas y las acciones. Ahora veamos cómo desarrollo, seguridad y operación sostienen ese trabajo en conjunto.».

## Diapositiva 29 · S29 · DevSecOps: romper los silos

**Tiempo:** 3 min. Introducí DevSecOps como la integración de seguridad en la colaboración entre desarrollo y operación durante todo el ciclo. Explicá «silos» como áreas con poca coordinación. Leé las frases ilustrativas: desarrollo presionado por entregar y seguridad revisando al final. Sumá oralmente la preocupación de operación por sostener el servicio. Relacioná la tensión con objetivos separados, revisión tardía y falta de capacidad; reconocé el valor de las tres preocupaciones. Pasá a acuerdos tempranos, tiempo para corregir y reportes sin culpabilización. El pipeline ejecuta controles acordados y produce evidencia; el equipo revisa, decide y aprende.

**Fuentes:** F18, [DORA: Pervasive security](https://dora.dev/capabilities/pervasive-security/); F29, [Atlassian: DevSecOps](https://www.atlassian.com/devops/devops-tools/devsecops-tools). La escena es ilustrativa, no una afirmación sobre todas las organizaciones.

**Transición:** «Ahora voy a mostrar dónde se cruzan las incumbencias de desarrollo, seguridad y operación».

## Diapositiva 30 · S30 · DevSecOps: roles y cruces

**Tiempo:** 3 min. Recorré el Venn desde los aportes de cada especialidad hacia los cruces: desarrollo–seguridad acuerdan requisitos; desarrollo–operación coordinan la entrega; seguridad–operación coordinan la respuesta. Usá la descarga de extractos para concretar cada uno. El centro representa acuerdos compartidos que se traducen en controles, feedback y acciones durante el ciclo. Aclaración oral: los cruces destacan ejemplos; las áreas pueden colaborar en todas esas actividades.

Con la alerta de una dependencia, desarrollo corrige y prueba, seguridad aporta contexto, operación despliega y observa; un **dueño del hallazgo** coordina hasta verificar el cierre. La **autoridad definida por la organización** decide excepciones, con motivo, alcance y revisión. No la hereda automáticamente un especialista o un champion. La distribución se adapta a cada organización.

**Fuentes:** F18 y F29 para colaboración; F4 para responsabilidades y respuesta a hallazgos; F10 para decisión contextual de riesgo. El Venn es una síntesis didáctica propia, no una taxonomía normativa.

**Transición:** «Un referente dentro del equipo puede facilitar el acceso a ayuda especializada».

## Diapositiva 31 · S31 · Security Champion en desarrollo

**Tiempo:** 2 min. Definí al Security Champion como una persona del equipo de desarrollo que impulsa prácticas de seguridad y conecta con especialistas. Su formación puede crecer en el rol. Recorré las señales para identificarlo: interés voluntario, curiosidad por los riesgos del producto, capacidad para compartir y ayudar. En los extractos, reconocé a quien pregunta por una cuenta ajena, propone una prueba de permisos y reúne contexto para consultar. Esas señales orientan una conversación; no son una evaluación formal ni dependen únicamente del seniority.

Para fomentarlo, proponé una invitación abierta y un acuerdo de tareas y expectativas. La organización reserva tiempo dentro de la planificación, ofrece formación y acceso a especialistas, promueve una comunidad y reconoce aportes concretos. Como primer paso didáctico, acordá que facilite la revisión de permisos y comparta una prueba; después revisá apoyo y aprendizaje con esa persona. La coordinación del programa puede requerir un referente propio, distinto de cada champion.

Conservá los límites: la responsabilidad sigue en el equipo; el champion **no** reemplaza especialistas ni aprueba todos los cambios. La autoridad depende del mandato acordado; el título **no** habilita a aceptar riesgos por defecto.

**Fuentes:** F11, [OWASP Security Champions Guide](https://securitychampions.owasp.org/): [participación voluntaria e interés](https://securitychampions.owasp.org/principles/01_Be_passionate_about_security/), [respaldo de la gestión](https://securitychampions.owasp.org/principles/03_Secure_management_support/), [expectativas y mandato](https://securitychampions.owasp.org/principles/05_Trust_your_champions/) e [inversión en formación y tiempo](https://securitychampions.owasp.org/principles/09_Invest_in_your_champions/). Los comportamientos y el primer paso del caso son propuestas didácticas.

**Transición:** «Ahora veamos qué información necesita una alerta para que el equipo pueda actuar».

## Diapositiva 32 · S32 · Hallazgo en CI: qué hacemos

**Tiempo:** 3 min. Mostrá el reporte ilustrativo del pipeline: servicio de extractos, versión v1.4.0, prueba de autorización. Recorré ambos casos: cuenta propia entrega permitida; cuenta ajena esperaba rechazo sin datos, pero recibió un extracto. La versión y los resultados son ficticios y usan datos de prueba. Conectá resultado con impacto posible, una persona de desarrollo asignada para reproducir/corregir y apoyo de seguridad para evaluar alcance. El dueño del hallazgo mantiene el seguimiento.

La prueba es una condición de despliegue configurada en este ejemplo. La versión fallida queda fuera de la entrega; después de corregir se construye una nueva y se repiten ambos casos. Una prueba exitosa se lee junto con los demás controles y criterios. El hallazgo en pruebas no acredita exposición ni explotación en producción; hay que revisar si el problema afecta otras versiones o rutas.

**Fuentes:** F4, NIST SSDF para responsabilidades y respuesta; F5, [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) para autorización en cada solicitud. Reporte y condición de despliegue: propuestas didácticas.

**Transición:** «Tenemos una fecha de entrega y alguien comunica este problema. Veamos cómo responde el equipo».

## Diapositiva 33 · S33 · Reportar y responder en equipo

**Tiempo:** 3 min. Continuá con el mismo fallo de permisos y leé la conversación visible. Señalá tres acciones: coordinar, corregir/verificar y aprender. Asigná un dueño; desarrollo reproduce y corrige, seguridad evalúa alcance, operación aporta contexto y prepara la entrega. La persona que coordina la publicación comunica el cambio de plan. La autoridad de decisión sigue siendo la definida por la organización.

La respuesta reconoce el reporte y ofrece apoyo. Revisá si afecta solo al cambio o también a versiones desplegadas; ante indicios de incidente, seguí el proceso correspondiente. Después de corregir, repetí ambos casos en la nueva versión y revisá los demás criterios de entrega. Para aprender, identificá una mejora concreta con responsable y seguimiento; el champion puede facilitar consultas y compartirla. Preguntá qué pasaría con el próximo aviso si se castigara a quien trajo el problema. La escena es ilustrativa.

**Fuentes:** F30, [DORA: Generative organizational culture](https://dora.dev/capabilities/generative-organizational-culture/); F4, NIST SSDF para respuesta y mejora.

**Transición:** «Para saber si sostenemos esa respuesta, miremos qué comprobamos y cuánto tardamos en corregir».

## Diapositiva 34 · S34 · Medir controles y correcciones

**Tiempo:** 3 min. Mostrá los ejemplos ficticios de una semana de cambios en la descarga. **Cobertura del control:** diez cambios debían ejecutar la prueba de permisos y ocho la ejecutaron (8 ÷ 10 = 80 %). Los dos bloques naranjas indican controles faltantes; revisá qué pasó con esos cambios. La medida cuenta ejecuciones, con independencia de su resultado, y requiere mantener el criterio de elegibilidad durante el período. No es cobertura de líneas ni porcentaje de seguridad.

**Tiempo hasta corregir:** un hallazgo validado el lunes a las 9 h tuvo su corrección verificada el martes a las 9 h: 24 horas de calendario. Vinculá el cierre a la nueva versión. Validación previa y publicación quedan fuera de ese intervalo y pueden medirse aparte. Para actuar, revisá esperas, investigación, corrección y verificación y reservá capacidad donde haga falta. Con varios hallazgos, segmentá por prioridad y contexto; el ejemplo no fija un objetivo universal ni representa un promedio.

Más alertas puede reflejar más cobertura y ningún indicador resume el riesgo total. Acordá período, criterio, fuente de datos y quién revisará las decisiones que surgen de la medición.

**Fuentes:** F3 y F4 como contexto de capacidades y prácticas; las medidas, cifras y acciones ilustrativas son una propuesta docente.

**Transición:** «Ahora recuperemos cómo conectamos el control, la respuesta y la decisión de entrega».

## Diapositiva 35 · S35 · Del control a la entrega

**Tiempo:** 2 min. Recorré comprobar → actuar → decidir usando el fallo de permisos: CI detectó, el equipo corrigió y verificó, la entrega considera ese resultado y los demás criterios. Recuperá el tiempo y apoyo necesarios para responder. Herramientas ejecutan controles; personas interpretan y corrigen; acuerdos organizan responsables y autoridad. La cadena prepara la relación entre controles, evidencia y cumplimiento.

Señalá las cuatro decisiones para el próximo cambio: qué comprobar, qué resultado esperar, quién actuará y qué observar después. Conectá esas decisiones con los requisitos aplicables y la evidencia que permitiría mostrar qué ocurrió.

**Fuentes:** F3 y F4 para capacidades, colaboración y respuesta; la cadena es una síntesis didáctica.

**Transición:** «Ahora conectemos estas decisiones con el cumplimiento: qué requisitos corresponden y cómo demostramos lo que ocurrió».

## Diapositiva 36 · S36 · DevSecOps y cumplimiento

**Tiempo:** 3 min. Recorré requisito → control → evidencia → revisión. Definí cumplimiento como aplicar requisitos correspondientes y demostrar cómo se sostienen. Relacioná pipeline y cultura: ejecuciones repetibles, detección de desvíos, responsables y registros de decisiones. La evidencia se genera durante el trabajo. El alcance también puede incluir políticas, accesos, formación y proveedores; una ejecución verde no certifica conformidad.

**Fuentes:** F4 y F18 para prácticas integradas y evidencia; F12, F31 y F32 para los marcos que se introducen. La cadena es una síntesis didáctica.

**Transición:** «Voy a distinguir qué evalúa cada referencia antes de dar los ejemplos».

## Diapositiva 37 · S37 · Tres referencias habituales

**Tiempo:** 2 min. Compará ISO/IEC 27001 (norma de gestión), PCI DSS (estándar de tarjetas) y SOC 2 (marco de auditoría). Son referencias habituales elegidas para la clase; no un ranking ni obligaciones universales. Antes de relacionar controles, delimitá servicio, datos y requisitos aplicables. SOC 2 produce un informe; su naturaleza es diferente de una certificación de sistema de gestión. No se afirma obligación legal argentina.

**Fuentes:** F12, [ISO/IEC 27001](https://www.iso.org/standard/27001); F31, [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/); F32, [AICPA: Trust Services Criteria](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022).

**Transición:** «Empecemos por cómo desarrollo aporta a un sistema de gestión».

## Diapositiva 38 · S38 · ISO/IEC 27001: gestión de seguridad

**Tiempo:** 3 min. Introducí SGSI en voz alta y usá el riesgo de extractos ajenos. Recorré diseño/revisión, pruebas en CI y seguimiento: cada práctica aporta un registro ligado al requisito, versión y resultado. Desarrollo, seguridad, operación y gestión del SGSI sostienen tratamiento y revisión del riesgo. La tabla es una propuesta de contribución y no una lista de requisitos ISO. La suficiencia se evalúa en todo el alcance correspondiente.

**Fuentes:** F12 para el propósito del SGSI y la certificación dentro del alcance; F4 y F5 para desarrollo seguro y autorización. La ficha pública ISO estuvo accesible el 12-10-2026. No se citan números de controles ni se reproduce el texto normativo completo.

**Transición:** «Ahora veamos el contexto de datos de tarjetas».

## Diapositiva 39 · S39 · PCI DSS: datos de tarjetas

**Tiempo:** 3 min. Definí PCI DSS y agregá una condición explícita: el servicio de pagos maneja datos de tarjetas o puede afectar su entorno. Ser una app bancaria no determina por sí solo ese alcance. Mostrá ejemplos en código, dependencias y entrega: qué control se integra, qué acción sigue y qué registro se conserva. Es una propuesta de aportes, no una matriz de requisitos PCI. Los plazos y procedimientos concretos deben cotejarse en el estándar y el alcance aplicable.

**Fuentes:** F31, [propósito y alcance](https://www.pcisecuritystandards.org/standards/pci-dss/), [biblioteca con v4.0.1](https://www.pcisecuritystandards.org/document_library/?category=pcidss) y [publicación de v4.0.1](https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1). El PDF completo respondió 403; no se atribuyen requisitos numerados. F19 y F21 respaldan las capacidades de análisis.

**Transición:** «Seguimos con cómo un proveedor puede demostrar sus controles mediante SOC 2».

## Diapositiva 40 · S40 · SOC 2: controles del servicio

**Tiempo:** 2 min. Presentá SOC 2 como auditoría de controles de servicios según criterios AICPA. Las categorías mencionadas no implican que todas estén incluidas en cada informe. Suponé un proveedor del servicio de extractos con un control de revisión y pruebas antes de entregar. Recorré la historia ilustrativa: v1.4.0 falló y quedó fuera de la entrega; v1.4.1 verificó el arreglo; cambios siguientes conservaron registros. Relacioná cada resultado con responsable y respuesta. El control de ejemplo es propuesto, no una redacción normativa de un criterio.

La fecha o período, alcance, criterios y suficiencia de la evidencia se determinan en el trabajo de auditoría. Los reportes CI son insumos; también puede hacer falta evidencia de accesos, incidentes y proveedores. SOC 2 produce un informe de evaluación.

**Fuentes:** F32, AICPA: [criterios](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), [SOC suite](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services) y [consideraciones de evaluación](https://www.aicpa-cima.com/professional-insights/video/maintaining-high-standards-for-soc-engagements). No se atribuyen números de criterios sin leer el documento completo.

**Transición:** «Cierro con un registro que conecta requisito, ejecución y decisión».

## Diapositiva 41 · S41 · Del requisito a la evidencia

**Tiempo:** 1 min. Recorré el registro ilustrativo: regla, v1.4.1, resultados de cuenta propia y ajena, responsable, cierre y decisión de entrega. En un registro real vinculá fechas y referencias a ejecución/revisión/decisión, con acceso y conservación apropiados. Usá datos de prueba y protegé la evidencia. Su pertinencia y suficiencia se evalúan según control y alcance.

**Fuentes:** F4, F12, F31 y F32. La ficha es una propuesta didáctica.

**Transición:** «Ahora recupero las ideas que nos llevamos y cierro la clase».

## Diapositiva 42 · S42 · Recap: seguridad en cada cambio

**Tiempo:** 1 min. Recuperá los tres grupos: Agile/CI/CD para cambios y feedback; Shift Left/DevSecOps para seguridad durante el ciclo y colaboración; cumplimiento para controles y evidencia según alcance. Cerrá con qué comprobar, quién actúa y qué evidencia queda. Indicá slides, grabación y guía para repasar, agradecé la participación y pasá al examen.

**Reserva:** hasta 8 minutos separados del contenido, para preguntas o demoras. Repetí los aportes antes de responder para la grabación.

**Fuentes:** F1, F2, F4, F18, F12, F31 y F32.

**Transición:** «Ahora dejo la información del examen para que puedan organizarse».

## Diapositiva 43 · S43 · Examen de la clase

**Tiempo:** 1 min. Informá la ventana confirmada: **viernes 16-10-2026, 08:00 GMT-3 → sábado 17-10-2026, 08:00 GMT-3**, para Taller y CUC. Se replica la disponibilidad de 24 horas de la clase 1. Los dos bloques conservan el diseño de su última placa y muestran espacios pendientes para QR y enlaces propios de esta clase. Cuando se incorporen, recordá verificar la comisión antes de empezar.

**Fuente:** F34, indicación docente de esta conversación y horarios de la última placa de clase 1. No se han creado, configurado ni publicado formularios. Los destinos y QR siguen pendientes. Dejá la placa de evaluación como cierre de la clase.

---

## Glosario de conducción

- **CI · Continuous Integration:** integrar cambios con frecuencia y comprobar el resultado, a menudo con automatización. No equivale a publicar. No usar «integración continua» como nombre.
- **Continuous Delivery:** mantener software en estado listo para publicar; la publicación puede esperar aprobación. No usar «entrega continua» como nombre.
- **Continuous Deployment:** el paso a producción también se automatiza bajo condiciones. No usar «despliegue continuo» como nombre. CD solo no separa estas dos prácticas.
- **DevOps:** forma de colaborar de desarrollo y operación al construir, desplegar y sostener servicios; no es Agile, CI/CD ni una herramienta.
- **SAST:** análisis de código (estático) para encontrar clases de defectos sin ejecutar.
- **DAST:** pruebas contra una aplicación en ejecución, observando respuestas (solo lo que alcanza a probar).
- **SCA:** análisis de componentes/dependencias para inventario, versiones y avisos conocidos.
- **SBOM:** inventario formal (declarado) de los componentes de una pieza de software; no es análisis de seguridad.
- **Procedencia / provenance:** información sobre el origen y proceso de construcción de un artefacto; no equivale a ausencia de vulnerabilidades.
- **IaC:** infraestructura definida como código, que permite revisar configuración (S23).
- **Imagen de contenedor:** paquete con código, dependencias y entorno de ejecución; es el artefacto que construimos y distribuimos (S22).
- **Contenedor:** proceso aislado iniciado desde una imagen; la ejecución requiere un entorno compatible.
- **Registro de imágenes:** almacena y distribuye imágenes (S25).
- **Gate:** punto donde se aplica un criterio acordado (continuar / pausar / revisar); la excepción no sustituye invalidar una credencial comprometida.
- **Security Champion:** referente del equipo con formación y tiempo que facilita consultas; no reemplaza especialistas ni acepta riesgo por defecto.
- **SGSI · ISO/IEC 27001 / SoA:** sistema de gestión de seguridad de la información y declaración de aplicabilidad (S37–S38; sin códigos de control).
- **PCI DSS:** estándar de seguridad de datos de tarjetas; su aplicación requiere determinar qué sistemas o entidades manejan esos datos o pueden afectar su entorno (S37, S39).
- **SOC 2:** marco de auditoría de controles de servicios basado en criterios de confianza de AICPA; produce un informe sobre el alcance evaluado (S37, S40).
- **Cumplimiento:** aplicación de requisitos correspondientes y evidencia de cómo se sostienen; se evalúa según el alcance definido (S36–S41).

---

## Referencias

La bibliografía consolidada, con autor, título, versión, URL, fecha de consulta, sección, afirmación, IDs y estado, está en **`fuentes-clase-2.md`** (material docente). En las notas de cada slide se cita la fuente breve por código (F1–F34). Estados importantes: **F1–F6, F8, F9 y F11 verificadas; F7, F10, F12 y F13 de alcance parcial según el registro**; F12 (ISO/IEC 27001) sin texto normativo completo (fichas públicas ISO/IEC y nota de comité); F31 (PCI DSS) verificado en fuentes oficiales públicas, con PDF completo inaccesible; F32 (SOC 2) verificado en fichas y recursos públicos AICPA, sin criterios numerados; F8 usa la publicación conjunta CISA **2026** (el PDF 2025 era borrador público). No se atribuyen cifras, curvas, normas ni garantías que las fuentes no sostienen.

## Logística de evaluación

- **Ventana confirmada:** viernes 16 de octubre de 2026 a las 08:00 GMT-3 hasta sábado 17 de octubre de 2026 a las 08:00 GMT-3, igual para Taller y CUC. Fecha indicada por el usuario y horarios/ventana replicados de la clase 1.
- **Pendiente:** destinos de los dos formularios y sus QR; espacios explícitos en S43.
- **Implementación:** la placa comunica el cronograma previsto; no configura ni publica los formularios. La clave permanece en `cuestionario-clase-2.md`, material docente privado.
