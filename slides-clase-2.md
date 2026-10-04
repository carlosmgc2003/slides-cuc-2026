---
theme: default
title: Shift Left
info: CUC · Software Seguro · Clase 2
colorSchema: dark
transition: slide
mdc: true
fonts:
  sans: IBM Plex Sans
  mono: JetBrains Mono
  weights: '400,500,600,700'
  provider: google
---

# Shift Left
## De las decisiones de seguridad a la práctica cotidiana

<div class="mt-10 mx-auto max-w-5xl" role="img" aria-label="El ciclo de vida mantiene seguridad desde el diseño, a través de cambios, construcción y pruebas, hasta la operación">
  <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-sm">
    <div class="card px-2 py-4">Diseño</div><span aria-hidden="true">→</span>
    <div class="card-strong px-2 py-4">Cambio</div><span aria-hidden="true">→</span>
    <div class="card px-2 py-4">Build</div><span aria-hidden="true">→</span>
    <div class="card px-2 py-4">Pruebas</div><span aria-hidden="true">→</span>
    <div class="card px-2 py-4">Operación</div>
  </div>
  <p class="mt-4 text-center text-sm opacity-75">El feedback empieza cerca del cambio y continúa después del despliegue.</p>
</div>

---

# Recorrido

<div class="mt-5 grid grid-cols-5 gap-3 text-center text-sm">
  <section class="card px-3 py-5"><strong>01</strong><p class="mt-2">Feedback temprano</p></section>
  <section class="card px-3 py-5"><strong>02</strong><p class="mt-2">Controles por etapa</p></section>
  <section class="card px-3 py-5"><strong>03</strong><p class="mt-2">Pipeline confiable</p></section>
  <section class="card px-3 py-5"><strong>04</strong><p class="mt-2">Colaboración</p></section>
  <section class="card px-3 py-5"><strong>05</strong><p class="mt-2">Evidencia y mejora</p></section>
</div>

<!--
Notas para presentar:

Usá el recorrido para anticipar el hilo: primero veremos por qué el feedback temprano ayuda; después, dónde ubicar comprobaciones y cómo integrarlas con las personas y procesos.

Transición: retomemos las decisiones de seguridad de la clase anterior.
-->

---

# En la clase anterior…

<p class="mt-3 text-center text-sm opacity-75">La clase anterior definió qué cuidar y cómo diseñar una respuesta.</p>

<div class="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Clase 1 · Diseñar</p><strong class="mt-2 block">Activos → Riesgo → Requisitos → Diseño</strong><p class="mt-2 text-sm">Proteger los movimientos y autorizar cada transferencia.</p></section>
  <span aria-hidden="true" class="text-2xl">→</span>
  <section class="card-strong px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Clase 2 · Sostener</p><strong class="mt-2 block">Cambios → Verificaciones → Operación</strong><p class="mt-2 text-sm">Revisar si esa autorización sigue cumpliéndose al cambiar el software.</p></section>
</div>

<!--
Notas para presentar:

Recuperá el modelo de la app de banca digital: activos, escenarios de amenaza, riesgo, requisitos y diseño. La clase de hoy pregunta cómo sostener esas decisiones cuando cambia una dependencia o se modifica el servicio de pagos.

Transición: el software sigue cambiando después del diseño.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Pero el software no queda quieto

Después del diseño cambian tanto el código como lo que lo rodea.

<div class="mt-5 grid grid-cols-4 gap-3 text-center text-sm">
  <section class="card px-3 py-5"><strong>Código</strong><p class="mt-2">Cambia una regla de autorización.</p></section>
  <section class="card px-3 py-5"><strong>Dependencias</strong><p class="mt-2">Se actualiza una librería.</p></section>
  <section class="card px-3 py-5"><strong>Configuración</strong><p class="mt-2">Se ajusta un permiso.</p></section>
  <section class="card px-3 py-5"><strong>Infraestructura</strong><p class="mt-2">Se expone un servicio nuevo.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Cada cambio puede alterar el comportamiento, la exposición o los permisos del sistema.</p>

<!--
Notas para presentar:

Nombrá cambios habituales en la app bancaria: actualizar una biblioteca, modificar un endpoint de pagos o ajustar permisos del pipeline. El análisis de diseño necesita acompañar esas modificaciones.

Transición: cada cambio puede alterar lo que el sistema permite hacer.
-->

---

# Cada cambio puede introducir un problema

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Cambio de código</p><strong class="mt-2 block">Permitir consultar un extracto</strong><p class="mt-2 text-sm">¿Se conserva la validación de titularidad?</p></section>
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Cambio de dependencia</p><strong class="mt-2 block">Actualizar una librería</strong><p class="mt-2 text-sm">¿Qué versión y origen se incorporan?</p></section>
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Cambio de configuración</p><strong class="mt-2 block">Modificar permisos</strong><p class="mt-2 text-sm">¿Quién obtiene acceso con la nueva regla?</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">No todo cambio introduce una vulnerabilidad; cada cambio merece la comprobación adecuada.</p>

<!--
Usá un ejemplo cercano —por ejemplo, actualizar una librería o cambiar un permiso— para mostrar que el riesgo puede aparecer en distintos tipos de cambio. No implica que todo cambio introduzca una vulnerabilidad.
Transición: si el riesgo evoluciona con el sistema, ¿cuándo conviene buscar señales de problema?
-->

---

# ¿Esperamos hasta producción para comprobarlo?

<p class="mt-2 text-center">Un cambio en la app permite consultar extractos. ¿Cuándo conviene revisar que solo el titular vea sus movimientos?</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr] items-stretch gap-4 text-center">
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Antes de integrar</p><strong class="mt-2 block">El cambio y su contexto están a la vista</strong><p class="mt-2 text-sm">Se puede revisar la autorización junto con el código y corregir antes de combinarlo.</p></section>
  <span aria-hidden="true" class="self-center text-2xl">→</span>
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Después del despliegue</p><strong class="mt-2 block">Ya intervienen otras dependencias</strong><p class="mt-2 text-sm">Hay que reproducir el problema, identificar alcance y coordinar la corrección.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Encontrarlo antes puede reducir retrabajo; el esfuerzo depende del problema y del sistema.</p>

<!--
Hacé una pausa tras la pregunta y escuchá dos o tres respuestas. Pedí que expliquen qué información o dependencias cambian entre corregir un commit y corregir un sistema desplegado.
Transición: Shift Left busca dar feedback mientras todavía hay contexto, sin prometer que todo problema se detectará antes.
-->

---

# Shift Left

<p class="mt-2 text-center text-lg"><strong>Shift Left</strong> acerca el feedback de seguridad al cambio y lo mantiene durante el ciclo.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1 text-center text-xs" role="img" aria-label="La seguridad recibe feedback desde diseño y código, y continúa en build, pruebas, despliegue y operación">
  <div class="card-strong px-1 py-4">Diseño</div><span aria-hidden="true">→</span>
  <div class="card-strong px-1 py-4">Cambio / PR</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Build</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Test</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Deploy</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Operación</div>
</div>

<p class="mt-4 text-center text-sm opacity-75">Empezar antes suma oportunidades de corregir; no reemplaza las comprobaciones posteriores.</p>

<!--
Recorré el eje desde diseño hasta operación. El foco está en sumar feedback cerca del cambio, mientras continúan pruebas y monitoreo; “temprano” depende del flujo y del tipo de control.
-->

---

# ¿Qué cambia con Shift Left?

No alcanza con adelantar una prueba: cambia **cuándo**, **cómo** y **quiénes** participan de la seguridad.

| Dimensión | En la práctica |
|---|---|
| Momento | Feedback durante el desarrollo, no solo al final |
| Forma de trabajo | Controles integrados al flujo habitual |
| Responsabilidad | Desarrollo, seguridad y operaciones colaboran |

Shift Left extiende a seguridad una idea usada antes en testing: detectar y corregir cerca del origen del problema.

<!--
Notas para presentar:

Explicá las tres dimensiones sin repetir la definición: cambia el momento del feedback, la forma en que se integra al trabajo y quiénes participan. En la app de banca, una revisión del cambio de autorización puede involucrar a desarrollo y seguridad antes de desplegar.

Transición: ahora comparemos cómo se distribuye ese feedback en el ciclo.

Fuente: NIST SSDF, que integra prácticas de seguridad en cada ciclo de vida.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Antes vs. después

<div class="grid grid-cols-2 gap-4 mt-5 text-center">
  <section class="card px-4 py-5">
    <strong>Verificación concentrada al final</strong>
    <div class="mt-4 flex items-center justify-center gap-2 text-sm">
      <span>Diseño</span><span>→</span><span>Construcción</span><span>→</span><span class="rounded border border-cyber-cyan px-2 py-1">Pruebas</span><span>→</span><span>Operación</span>
    </div>
    <p class="mt-3 text-sm opacity-75">El feedback de seguridad llega tarde en el ciclo.</p>
  </section>
  <section class="card px-4 py-5">
    <strong>Feedback distribuido</strong>
    <div class="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
      <span>Diseño</span><span>·</span><span>Solicitud de cambio</span><span>·</span><span>Build</span><span>·</span><span>Pruebas</span><span>·</span><span>Operación</span>
    </div>
    <p class="mt-3 text-sm opacity-75">Cada etapa aporta comprobaciones adecuadas a su objetivo.</p>
  </section>
</div>

<p class="mt-4 text-center text-sm opacity-70">Es un esquema de trabajo: los controles dependen del sistema y del riesgo.</p>
<p class="mt-2 text-center text-xs opacity-70">PR (pull request) y MR (merge request) son solicitudes para revisar e integrar cambios.</p>

<!--
Notas para presentar:

Compará los dos cuadros como modelos simplificados. El de la izquierda concentra el feedback de seguridad en una etapa tardía; el de la derecha lo distribuye a lo largo del ciclo. No implica que todos los equipos trabajen igual ni que deban eliminar pruebas posteriores.

Transición: Shift Left no es simplemente adelantar una actividad.
-->

---

# Tradicional vs. Shift Left

<div class="grid grid-cols-2 gap-6 text-center">
<div>

**Tradicional**

<img src="/pptx-images/image5.png" alt="Gráfico ilustrativo: la mayor intensidad de pruebas de seguridad aparece hacia el final del ciclo" class="mt-3 h-48 w-full rounded-lg bg-white p-2 object-contain" />

</div>
<div>

**Shift Left**

<img src="/pptx-images/image7.png" alt="Gráfico ilustrativo: las pruebas de seguridad comienzan temprano y continúan durante el ciclo" class="mt-3 h-48 w-full rounded-lg bg-white p-2 object-contain" />

</div>
</div>

<!--
Notas para presentar:

Señalá que estos dibujos son esquemas cualitativos, no mediciones de esfuerzo. En el modelo de Shift Left se empieza a comprobar antes y se mantienen controles de pruebas, despliegue y operación.

Preguntá qué revisión del caso bancario sería útil en un PR y cuál necesita una aplicación en ejecución.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Shift Left no significa “hacer antes el pentest”

<div class="mt-4 grid grid-cols-2 gap-4 text-center">
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Una prueba puntual</p><strong class="mt-2 block">Se adelanta una revisión</strong><p class="mt-2 text-sm">Aporta una señal en un momento del ciclo.</p></section>
  <section class="card-strong px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Shift Left</p><strong class="mt-2 block">Se integra seguridad al trabajo</strong><p class="mt-2 text-sm">Decisiones, cambios, build, pruebas y operación generan feedback.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Un pentest sigue siendo útil; no reemplaza las comprobaciones adecuadas a cada etapa.</p>

<!--
Notas para presentar:

Diferenciá una prueba puntual del hábito de recibir feedback en requisitos, código, build, pruebas y operación. Un pentest puede seguir siendo útil, pero no reemplaza el resto del ciclo.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---
layout: section
---

# Principios de Shift Left

<div class="mt-5 grid grid-cols-3 gap-3 text-center">
  <section class="card px-4 py-5"><strong>Feedback temprano</strong><p class="mt-2 text-sm">Encontrar la señal cerca del cambio.</p></section>
  <section class="card px-4 py-5"><strong>Controles proporcionales</strong><p class="mt-2 text-sm">Elegir qué comprobar según riesgo y etapa.</p></section>
  <section class="card px-4 py-5"><strong>Responsabilidad compartida</strong><p class="mt-2 text-sm">Hacer llegar el hallazgo a quien puede actuar.</p></section>
</div>

<!--
Abrí esta sección retomando la idea anterior: no se trata de mover una prueba aislada, sino de cambiar el flujo de trabajo. Anticipá que vamos a ver tres decisiones: feedback temprano, controles proporcionales al riesgo y responsabilidad compartida.
-->

---

# Tres principios para llevarlo a la práctica

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Revisar temprano</strong><p class="mt-2 text-sm">En el cambio de autorización, comparar el código con el requisito de titularidad.</p></section>
  <section class="card px-4 py-5"><strong>Elegir el control</strong><p class="mt-2 text-sm">Usar análisis de código para patrones y pruebas para validar comportamiento.</p></section>
  <section class="card px-4 py-5"><strong>Acordar la respuesta</strong><p class="mt-2 text-sm">Desarrollo corrige; seguridad ayuda a evaluar; operaciones observa el despliegue.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La automatización sostiene comprobaciones repetibles; las personas priorizan y resuelven.</p>

<!--
Señalá la progresión de los tres principios. Preguntá qué problema aparece si falta cada uno; pedí que justifiquen la respuesta con un ejemplo del ciclo de desarrollo.
Transición: estos principios buscan beneficios concretos, pero no garantizan por sí solos que todo problema se detecte.
-->

---
layout: section
---

# ¿Qué beneficios buscamos?

<div class="mt-5 grid grid-cols-3 gap-3 text-center">
  <section class="card px-4 py-5"><strong>Menos exposición evitable</strong><p class="mt-2 text-sm">Revisar autorización antes de publicar.</p></section>
  <section class="card px-4 py-5"><strong>Menos retrabajo posible</strong><p class="mt-2 text-sm">Corregir mientras el cambio conserva contexto.</p></section>
  <section class="card px-4 py-5"><strong>Decisiones más previsibles</strong><p class="mt-2 text-sm">Llegar al release con resultados revisados.</p></section>
</div>

<!--
Presentá los beneficios como resultados esperados, no como garantías. En el bloque siguiente, vinculá cada uno con el mecanismo que podría producirlo y con sus límites.
-->

---

# Reducir debilidades que llegan a producción

<div class="grid grid-cols-[3fr_2fr] gap-6 items-center">
<div>

- Detectar y remediar problemas antes del despliegue puede reducir exposiciones evitables.
- La cobertura continua permite encontrar problemas en más de una etapa.
- La reducción efectiva del riesgo depende de la priorización, la corrección y los controles restantes.

</div>
<img src="/pptx-images/image14.png" alt="Ilustración de personas protegiendo una computadora con un candado" class="mx-auto max-h-64 w-full object-contain" />
</div>

<!--
Notas para presentar:

Mostrá el candado como metáfora, no como una garantía. Para una transferencia, una comprobación temprana de autorización puede revelar un problema antes de que el cambio se despliegue; después siguen haciendo falta pruebas y monitoreo.

Transición: detectar temprano puede evitar que una corrección involucre más equipos y dependencias.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Detectar antes puede evitar retrabajo

Una corrección tardía puede involucrar desarrollo, nuevas pruebas, operaciones y coordinación con otros equipos.

Encontrarlo cerca del cambio **puede reducir parte de ese retrabajo**; el efecto depende del sistema y del problema.

<div class="mt-5 grid grid-cols-5 items-stretch gap-2 text-center text-sm" role="img" aria-label="Diagrama cualitativo: cuanto más tarde se descubre un problema, más equipos, pruebas y dependencias pueden intervenir en la corrección">
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Pull request</strong><p class="mt-2">Contexto del cambio</p></section>
  <span class="self-center text-xl opacity-60">→</span>
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Pruebas</strong><p class="mt-2">Revalidar el comportamiento</p></section>
  <span class="self-center text-xl opacity-60">→</span>
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Producción</strong><p class="mt-2">Coordinar equipos y dependencias</p></section>
</div>

<p class="mt-3 text-center text-sm opacity-70">La secuencia muestra posibles tareas; no asigna un costo numérico universal.</p>

<!--
Notas para presentar:

Recorré el diagrama de izquierda a derecha. Si una validación de una transferencia falla en el PR, el equipo suele tener más contexto que después de desplegarla, cuando pueden intervenir operaciones, atención al cliente y otros servicios.

El ejemplo muestra tareas que pueden sumarse con el tiempo; no representa un costo fijo ni una proporción universal.

Fuente: NIST SSDF señala que abordar seguridad antes en el ciclo puede reducir esfuerzo, según el contexto.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Entregas más predecibles

<div class="grid grid-cols-[3fr_2fr] gap-6 items-center">
<div>

Las verificaciones integradas y los **criterios de seguridad acordados** (*security gates*) pueden reducir sorpresas cerca de una entrega.

El objetivo es que cada versión llegue con resultados revisados y un camino claro para resolver hallazgos.

</div>
<div class="space-y-3 text-center text-sm" role="img" aria-label="Tres pasos de una entrega predecible: integrar el cambio, revisar resultados y decidir su publicación">
  <section class="card px-3 py-3"><strong>Integrar el cambio</strong></section>
  <div aria-hidden="true" class="opacity-60">↓</div>
  <section class="card px-3 py-3"><strong>Revisar resultados</strong></section>
  <div aria-hidden="true" class="opacity-60">↓</div>
  <section class="card-strong px-3 py-3"><strong>Decidir la publicación</strong></section>
</div>
</div>

<!--
Notas para presentar:

Señalá el flujo de tres pasos. No afirmes que automatizar gates acelera toda entrega: el beneficio posible es detectar hallazgos con tiempo y acordar cómo resolverlos antes del release.

Transición: veamos el recorrido que convierte un cambio de código en una versión operativa.

Fuente: NIST SP 800-218 y SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/218/final
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# Del código al software en producción

<p class="mt-2 text-center text-sm opacity-75">Cada versión atraviesa etapas que transforman y verifican el cambio.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1 text-center text-xs" role="img" aria-label="Flujo del cambio a producción: código, construcción, pruebas, paquete, despliegue y uso">
  <div class="card px-1 py-4">Código<br />fuente</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Construcción<br />artefacto</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Pruebas<br />resultados</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Paquete<br />versión</div><span aria-hidden="true">→</span>
  <div class="card px-1 py-4">Despliegue<br />configuración</div><span aria-hidden="true">→</span>
  <div class="card-strong px-1 py-4">Producción<br />servicio</div>
</div>

<!--
Notas para presentar:

Recorré las etapas con un cambio del servicio de transferencias: el código se compila, se prueba, se empaqueta y se despliega. Cada transformación puede producir artefactos que conviene identificar y proteger.

Transición: automatizar este recorrido da lugar al pipeline.
-->

---

# Automatizar ese camino: CI/CD

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Integración continua</strong><p class="mt-1 text-xs opacity-70">CI</p><p class="mt-2 text-sm">Combinar cambios frecuentes y ejecutar comprobaciones.</p></section>
  <section class="card px-4 py-5"><strong>Entrega continua</strong><p class="mt-1 text-xs opacity-70">Continuous delivery</p><p class="mt-2 text-sm">Mantener una versión validada y lista para desplegar.</p></section>
  <section class="card-strong px-4 py-5"><strong>Despliegue continuo</strong><p class="mt-1 text-xs opacity-70">Continuous deployment</p><p class="mt-2 text-sm">Publicar automáticamente si se cumplen las condiciones acordadas.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Automatizar etapas no elimina las decisiones sobre riesgos, excepciones y publicación.</p>

<!--
Notas para presentar:

Compará las tarjetas de izquierda a derecha. CI integra cambios y ejecuta comprobaciones; entrega continua mantiene la versión lista para publicar; despliegue continuo automatiza también la publicación cuando se satisfacen las condiciones acordadas. No todos los equipos automatizan el último paso.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# El pipeline

<div class="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-1 text-center text-sm" role="img" aria-label="Etapas comunes de un pipeline: cambio, build, pruebas, despliegue y operación">
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Cambio</strong><p class="mt-1">commit / PR</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Build</strong><p class="mt-1">compilar</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong flex flex-col justify-center px-2 py-4"><strong>Test</strong><p class="mt-1">verificar</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Deploy</strong><p class="mt-1">publicar</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card flex flex-col justify-center px-2 py-4"><strong>Run</strong><p class="mt-1">operar</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-70">Un pipeline automatiza parte de este recorrido; publicar en producción puede requerir una aprobación.</p>

<!--
Notas para presentar:

Señalá las cinco tarjetas. Es un mapa común, no una secuencia obligatoria para todos los equipos: algunos agregan aprobación manual, otros separan empaquetado y despliegue.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---
layout: section
---

# Seguridad en CI/CD
## El núcleo operativo

<p class="mt-3 text-center text-sm">El software que construye y publica el producto también necesita protección.</p>

<div class="mt-4 grid grid-cols-5 gap-2 text-center text-xs">
  <section class="card px-2 py-4"><strong>Repositorio</strong><p class="mt-2">Código y cambios</p></section>
  <section class="card px-2 py-4"><strong>Runner</strong><p class="mt-2">Herramientas y scripts</p></section>
  <section class="card-strong px-2 py-4"><strong>Credenciales</strong><p class="mt-2">Identidad del pipeline</p></section>
  <section class="card px-2 py-4"><strong>Artefacto</strong><p class="mt-2">Paquete producido</p></section>
  <section class="card px-2 py-4"><strong>Destino</strong><p class="mt-2">Entorno de despliegue</p></section>
</div>

<!--
Notas para presentar:

Señalá los cinco activos conectados: repositorio, runner, credenciales, artefacto y destino. El control de la aplicación no protege automáticamente la cadena que la compila y publica; cada vínculo necesita permisos e integridad propios.

Transición: ese recorrido automatizado se llama pipeline.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# El pipeline también puede ser atacado

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs" role="img" aria-label="Un cambio puede pasar del repositorio por el runner y el artefacto hasta producción; proteger cada vínculo evita manipulación">
  <section class="card px-2 py-4"><strong>Repositorio</strong><p class="mt-2">Cambios y revisiones</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Runner</strong><p class="mt-2">Workflow, scripts y credenciales</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Artefacto</strong><p class="mt-2">Paquete e integridad</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Producción</strong><p class="mt-2">Permisos de despliegue</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Si se altera el workflow o se roba una credencial, puede llegar un artefacto no revisado aunque el código pase sus pruebas.</p>

<!--
Notas para presentar:

Recorré los activos del pipeline: repositorio, runner, secretos y artefacto. Si se filtra una credencial de despliegue o se altera el workflow, el cambio puede llegar a producción aunque la aplicación haya pasado sus pruebas.

Fuente: OWASP Top 10 CI/CD Security Risks; NIST SP 800-204D.
https://owasp.org/projects/top-10-cicd-security-risks
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# ¿En qué etapas podemos verificar seguridad?

<p class="mt-2 text-center">Cada etapa permite hacer una pregunta distinta sobre el mismo cambio.</p>

<div class="mt-5 grid grid-cols-5 gap-3 text-center text-sm">
  <section class="card px-3 py-5"><strong>Código</strong><p class="mt-2">¿La lógica es segura?</p></section>
  <section class="card px-3 py-5"><strong>Build</strong><p class="mt-2">¿Qué dependencias entran?</p></section>
  <section class="card-strong px-3 py-5"><strong>Test</strong><p class="mt-2">¿Se cumple el comportamiento?</p></section>
  <section class="card px-3 py-5"><strong>Deploy</strong><p class="mt-2">¿Permisos y config son correctos?</p></section>
  <section class="card px-3 py-5"><strong>Operación</strong><p class="mt-2">¿Qué sucede en uso real?</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La elección depende del riesgo y de lo que se busca comprobar.</p>

---

# Mapa de controles

| Etapa | Ejemplos de comprobación |
|---|---|
| Código / PR | Revisión, secretos, análisis estático |
| Build | Dependencias, infraestructura como código (IaC) e imágenes |
| Test | APIs, análisis dinámico y fuzzing |
| Deploy | Configuración, identidad y permisos |
| Producción | Monitoreo, respuesta y controles de tráfico |

Los controles pueden cruzar etapas: **Shift Left suma feedback temprano y conserva verificaciones posteriores.**

<!--
Notas para presentar:

Leé cada fila como una pregunta distinta. SAST revisa código sin ejecutarlo; DAST observa la aplicación en marcha; el escaneo de secretos y dependencias puede repetirse en varios pasos.

Un WAF (firewall de aplicaciones web) filtra parte del tráfico; no corrige el defecto. Los controles se complementan y ningún escaneo aislado prueba que el sistema sea seguro.

Fuente: NIST SSDF y NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/218/final
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# Seguridad desde el código

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Revisar el cambio</strong><p class="mt-2 text-sm">¿Cambió quién puede ver los movimientos?</p></section>
  <section class="card px-4 py-5"><strong>Buscar secretos</strong><p class="mt-2 text-sm">¿Quedó una clave o un token en el repositorio?</p></section>
  <section class="card px-4 py-5"><strong>Analizar patrones</strong><p class="mt-2 text-sm">¿Hay una validación o manejo inseguro?</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La revisión humana aporta intención y contexto; el análisis automatizado repite comprobaciones concretas.</p>

<!--
Notas para presentar:

Retomá el PR de la app bancaria. Revisar el cambio, buscar secretos y analizar patrones inseguros ofrecen feedback temprano; cada control cubre una clase de problema distinta.

Transición: después del código también hay que revisar lo que entra al build.
-->

---

# Habilitar a quienes desarrollan

<div class="grid grid-cols-[3fr_1fr] gap-6 items-center">
<div>

La seguridad es responsabilidad compartida y las personas que desarrollan son cruciales.

**Necesitan:** formación continua, herramientas integradas y fáciles de usar, revisiones entre pares y documentación clara.

</div>
<img src="/pptx-images/image15.png" alt="Ilustración de una persona desarrollando software" class="mx-auto max-h-52 w-full object-contain" />
</div>

<div class="mt-4 grid grid-cols-4 gap-3 text-center text-xs">
  <section class="card flex flex-col items-center gap-2 px-2 py-3"><img src="/pptx-images/image6.png" alt="" class="h-12 w-12 object-contain" /><span>Conversación</span></section>
  <section class="card flex flex-col items-center gap-2 px-2 py-3"><img src="/pptx-images/image9.jpg" alt="" class="h-12 w-12 rounded bg-white p-1 object-contain" /><span>Revisión</span></section>
  <section class="card flex flex-col items-center gap-2 px-2 py-3"><img src="/pptx-images/image10.gif" alt="" class="h-12 w-12 object-contain" /><span>Formación</span></section>
  <section class="card flex flex-col items-center gap-2 px-2 py-3"><img src="/pptx-images/image12.gif" alt="" class="h-12 w-12 object-contain" /><span>Herramientas</span></section>
</div>

<!--
Notas para presentar:

Señalá la ilustración y los cuatro apoyos: conversación, revisión, formación y herramientas. En el caso bancario, quien desarrolla debe poder entender por qué una regla de autorización falla y a quién consultar si el resultado no es claro.

Preguntá qué información debería incluir una alerta para que el equipo pueda actuar.

Fuente: NIST SSDF, prácticas organizacionales y de desarrollo seguro.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Controles en código fuente

<div class="mt-4 grid grid-cols-2 gap-4">
  <section class="card px-5 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Colaboración</p><strong class="mt-2 block">Revisar la intención del cambio</strong><ul class="mt-3 list-disc pl-5 text-sm"><li>Guías de codificación segura</li><li>Ramas protegidas y mínimo privilegio</li><li>Revisión de PR/MR con criterios claros</li></ul></section>
  <section class="card-strong px-5 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Automatización</p><strong class="mt-2 block">Buscar patrones repetibles</strong><ul class="mt-3 list-disc pl-5 text-sm"><li>Escaneo de secretos en cada cambio</li><li>Linters de seguridad en CI/CD</li><li>Escalar dudas a especialistas</li></ul></section>
</div>

<!--
Notas para presentar:

En el PR de una transferencia, la revisión humana puede detectar un cambio de autorización inesperado; el escaneo de secretos busca credenciales que no deberían quedar en el repositorio. Los dos controles resuelven problemas distintos.

OWASP publica guías y controles de seguridad, no una única norma universal de codificación.

Fuente: NIST SSDF; OWASP Proactive Controls.
https://csrc.nist.gov/pubs/sp/800/218/final
https://owasp.org/www-project-proactive-controls/
-->

---

# Seguridad durante la construcción

<p class="mt-2 text-center">Build combina entradas para producir el artefacto que luego se publica.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm" role="img" aria-label="En la construcción se combinan código, dependencias, herramientas y configuración para crear un artefacto">
  <section class="card px-3 py-5"><strong>Entradas</strong><p class="mt-2">Código · dependencias · herramientas · configuración</p></section><span aria-hidden="true" class="self-center text-xl">→</span>
  <section class="card-strong px-3 py-5"><strong>Build</strong><p class="mt-2">Scripts y runner</p></section><span aria-hidden="true" class="self-center text-xl">→</span>
  <section class="card px-3 py-5"><strong>Artefacto</strong><p class="mt-2">Paquete listo para verificar</p></section>
</div>

<!--
Notas para presentar:

Un build combina más que código: dependencias, herramientas, scripts y configuración. Si se altera el entorno de compilación, también puede alterarse el artefacto que llegará a producción.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# Controles en build

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
  <section class="card px-4 py-4"><strong>SCA · dependencias</strong><p class="mt-2">Revisar versiones vulnerables y licencias.</p></section>
  <section class="card px-4 py-4"><strong>IaC · infraestructura</strong><p class="mt-2">Detectar configuración insegura en Terraform, CloudFormation o Ansible.</p></section>
  <section class="card px-4 py-4"><strong>Imagen de contenedor</strong><p class="mt-2">Analizar paquetes de la imagen base y sus capas.</p></section>
  <section class="card-strong px-4 py-4"><strong>Runner y scripts</strong><p class="mt-2">Restringir permisos y proteger la integridad del build.</p></section>
</div>

<!--
Notas para presentar:

SCA compara componentes con información de vulnerabilidades y licencias; IaC revisa configuraciones declaradas; el análisis de imágenes observa paquetes incluidos en el contenedor. Cada resultado necesita contexto y una respuesta.

Proteger el runner y los scripts evita que el proceso de build se convierta en una vía para alterar el artefacto.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# Nuestro software contiene software de otros

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm" role="img" aria-label="La aplicación depende de una biblioteca directa que a su vez depende de componentes transitivos">
  <section class="card-strong px-3 py-5"><strong>App bancaria</strong><p class="mt-2">Servicio de extractos</p></section><span aria-hidden="true" class="self-center text-xl">→</span>
  <section class="card px-3 py-5"><strong>Dependencia directa</strong><p class="mt-2">Librería declarada por el equipo</p></section><span aria-hidden="true" class="self-center text-xl">→</span>
  <section class="card px-3 py-5"><strong>Dependencias transitivas</strong><p class="mt-2">Componentes incluidos por otras librerías</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Cada componente suma mantenimiento; el equipo necesita saber qué versiones incorpora.</p>

<!--
Notas para presentar:

Relacioná una dependencia con una biblioteca usada por el servicio de extractos. Actualizarla puede corregir problemas, pero conviene conocer la versión y revisar compatibilidad y procedencia.
-->

---

# Saber qué componentes tenemos

<p class="mt-2 text-center">Un <strong>SBOM</strong> (Software Bill of Materials) registra componentes y versiones del software.</p>

<div class="mt-4 overflow-hidden rounded-lg border border-white/20 text-center text-sm">
  <div class="grid grid-cols-3 bg-white/10 px-3 py-2 font-semibold"><span>Componente</span><span>Versión</span><span>Incluido en</span></div>
  <div class="grid grid-cols-3 px-3 py-3"><span>Biblioteca de pagos</span><span>4.2.1</span><span>Servicio de transferencias</span></div>
</div>

<div class="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center text-sm">
  <section class="card px-3 py-3"><strong>Aviso de vulnerabilidad</strong><p class="mt-1">Componente y versión afectados</p></section><span aria-hidden="true" class="text-xl">→</span>
  <section class="card-strong px-3 py-3"><strong>Localizar el uso</strong><p class="mt-1">Servicios que deben revisar o actualizar</p></section>
</div>

<!--
Notas para presentar:

Presentá SBOM como inventario del software entregado. Si aparece un aviso sobre una biblioteca, el inventario ayuda a localizar productos y versiones que la incluyen.

Un SBOM facilita esa búsqueda, pero no garantiza que cada dato sea completo ni que el componente sea seguro.

Fuente: CISA, Minimum Elements for a SBOM.
https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf
-->

---

# Gestión segura de dependencias

<div class="grid grid-cols-[2fr_3fr] gap-5 items-center">
<div>

- Mantener un **SBOM**: inventario estructurado de componentes.
- Actualizar dependencias y establecer políticas de licencias y riesgo.
- Configurar nombres y registros de paquetes para reducir la confusión de dependencias.
- Saber qué versiones se usan facilita investigar y responder a incidentes.

</div>
<img src="/pptx-images/image19.png" alt="Diagrama de motivos para mantener un SBOM: identificar vulnerabilidades, revisar licencias y comprender dependencias" class="mx-auto max-h-80 w-full rounded-lg bg-white p-1 object-contain" />
</div>

<!--
Notas para presentar:

Usá la imagen para explicar por qué importa conocer los componentes: si aparece una vulnerabilidad nueva, el equipo necesita saber en qué versiones y servicios está esa dependencia.

Un SBOM es un inventario estructurado. No demuestra por sí solo que el paquete provenga de quien dice ni que esté libre de vulnerabilidades. SPDX y CycloneDX son formatos utilizados para representar SBOMs.

Para paquetes internos, los nombres con alcance (por ejemplo, `@organizacion/paquete`) y la configuración explícita del registro privado ayudan a prevenir la confusión de dependencias.

Fuentes: CISA, Minimum Elements for a SBOM; SPDX; CycloneDX; OWASP NPM Security.
https://cheatsheetseries.owasp.org/cheatsheets/NPM_Security_Cheat_Sheet.html
https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf
https://spdx.dev/use/specifications/
https://cyclonedx.org/specification/overview/
-->

---

# Seguridad durante las pruebas

<p class="mt-2 text-center">Además de validar funciones, las pruebas pueden verificar permisos, entradas y manejo de errores.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1 text-center text-xs" role="img" aria-label="En la etapa de pruebas, validar el comportamiento antes de desplegar; el feedback continúa en deploy y operación">
  <div class="card px-2 py-4">Código</div><span aria-hidden="true">→</span>
  <div class="card px-2 py-4">Build</div><span aria-hidden="true">→</span>
  <div class="card-strong px-2 py-4">Pruebas<br />permisos · entradas</div><span aria-hidden="true">→</span>
  <div class="card px-2 py-4">Deploy</div>
</div>

<p class="mt-4 text-center text-sm opacity-75">Una prueba aporta evidencia sobre casos comprobados; no cubre todas las situaciones posibles.</p>

<!--
Notas para presentar:

Las pruebas comprueban comportamiento bajo condiciones definidas. Las pruebas de seguridad agregan casos sobre permisos, entradas y manejo de errores.

Transición: veamos qué controles pueden correr en esta etapa.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Controles en test

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
  <section class="card px-4 py-4"><strong>SAST · código</strong><p class="mt-2">Busca patrones inseguros sin ejecutar la aplicación.</p></section>
  <section class="card px-4 py-4"><strong>DAST / IAST · ejecución</strong><p class="mt-2">Prueba una app activa o la instrumenta durante las pruebas.</p></section>
  <section class="card px-4 py-4"><strong>Pruebas de API</strong><p class="mt-2">Verifican autenticación, autorización, validación y errores.</p></section>
  <section class="card-strong px-4 py-4"><strong>Fuzzing · entradas</strong><p class="mt-2">Envía datos inesperados para observar cómo responde el sistema.</p></section>
</div>

<p class="mt-3 text-center text-sm opacity-75">Cada método observa aspectos distintos; cobertura y configuración limitan lo que permite concluir.</p>

<!--
Notas para presentar:

Explicá primero qué observa cada enfoque. SAST busca patrones en código o bytecode; DAST prueba una aplicación en ejecución; IAST obtiene señales desde una aplicación instrumentada; fuzzing explora cómo responde ante entradas inesperadas.

Los hallazgos dependen de cobertura, configuración y contexto. Hace falta revisar falsos positivos, reproducir cuando corresponda y corregir.

Fuente: NIST SSDF y OWASP Web Security Testing Guide.
https://csrc.nist.gov/pubs/sp/800/218/final
https://owasp.org/www-project-web-security-testing-guide/
-->

---

# Elegir el control por la pregunta

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-4"><strong>¿Hay un patrón inseguro en el cambio?</strong><p class="mt-2">Análisis estático del código (SAST).</p></section>
  <section class="card px-4 py-4"><strong>¿Un cliente ve la cuenta de otra persona?</strong><p class="mt-2">Prueba dinámica de autorización en API o app.</p></section>
  <section class="card px-4 py-4"><strong>¿Una librería está afectada?</strong><p class="mt-2">Análisis de dependencias y versiones (SCA).</p></section>
  <section class="card-strong px-4 py-4"><strong>¿Qué pasa con un importe malformado?</strong><p class="mt-2">Fuzzing y validación de entradas.</p></section>
</div>

<!--
Notas para presentar:

Leé cada pregunta como un objetivo distinto. Pedí que el público elija cuál comprobaría primero para un cambio concreto y qué límite tendría esa prueba.
-->

---

# Herramientas: elegir por propósito

| Categoría | Propósito | Ejemplos |
|---|---|---|
| SAST | Código sin ejecutar | Semgrep, Checkmarx, SonarQube |
| DAST | Aplicación en ejecución | OWASP ZAP, Burp Suite, Invicti |
| SCA | Componentes y licencias | Dependency-Check, Snyk, JFrog Xray |
| Imágenes de contenedor | Paquetes del sistema y dependencias de la imagen | Trivy, Grype |

También hay herramientas para IAST, secretos, IaC, runtime y WAF. Son ejemplos de categorías y productos, no una recomendación de compra.

<!--
Notas para presentar:

Leé cada fila como una categoría y un propósito. Los nombres son ejemplos conocidos, no una comparación de calidad, cobertura o precio; la selección depende del lenguaje, el riesgo y el flujo de trabajo.

Transición: después de probar, hay que decidir con cuidado cómo publicar el cambio.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Seguridad antes de desplegar

<p class="mt-2 text-center">El último control revisa el entorno al que llega la versión.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1 text-center text-xs">
  <div class="card px-2 py-4">Build</div><span aria-hidden="true">→</span>
  <div class="card px-2 py-4">Pruebas</div><span aria-hidden="true">→</span>
  <div class="card-strong px-2 py-4">Deploy<br />config · identidad</div><span aria-hidden="true">→</span>
  <div class="card px-2 py-4">Producción</div>
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
  <section class="card px-3 py-4"><strong>Configuración</strong><p class="mt-2">¿El entorno expone solo lo necesario?</p></section>
  <section class="card px-3 py-4"><strong>Identidad</strong><p class="mt-2">¿Quién puede publicar o administrar?</p></section>
  <section class="card px-3 py-4"><strong>Staging</strong><p class="mt-2">¿Coincide con las condiciones acordadas?</p></section>
</div>

<!--
Notas para presentar:

Antes de publicar, confirmá configuración y permisos del entorno. Una estrategia canary limita el porcentaje de tráfico que recibe una versión; por sí sola no valida su seguridad.

Transición: la publicación tampoco cierra el ciclo.
-->

---

# Controles en deploy

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
  <section class="card px-4 py-4"><strong>Configuración y hardening</strong><p class="mt-2">Revisar la app y el entorno destino.</p></section>
  <section class="card px-4 py-4"><strong>Permisos mínimos</strong><p class="mt-2">Restringir quién despliega y administra.</p></section>
  <section class="card px-4 py-4"><strong>Verificación en staging</strong><p class="mt-2">Comprobar la versión antes de producción.</p></section>
  <section class="card-strong px-4 py-4"><strong>Rollout y rollback</strong><p class="mt-2">Reducir alcance y recuperar si algo falla.</p></section>
</div>

<p class="mt-3 text-center text-sm opacity-75">Un despliegue gradual limita el impacto; no demuestra por sí solo que la versión sea segura.</p>

<!--
Notas para presentar:

Diferenciá una estrategia de rollout de un control de seguridad. Canary y blue-green limitan el alcance o facilitan una reversión, pero no prueban por sí mismas que la versión sea segura.

En la app bancaria, restringí qué identidad puede desplegar a producción y verificá la configuración antes de publicar.

Fuente: NIST SP 800-204D.
https://csrc.nist.gov/pubs/sp/800/204/d/final
-->

---

# Y después del despliegue…

<p class="mt-2 text-center">No todas las fallas se anticipan; la operación aporta señales para responder y mejorar.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm">
  <section class="card px-3 py-5"><strong>Operar</strong><p class="mt-2">El servicio atiende transferencias.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-3 py-5"><strong>Monitorear</strong><p class="mt-2">Reunir registros y señales.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-3 py-5"><strong>Responder</strong><p class="mt-2">Contener y corregir el incidente.</p></section><span aria-hidden="true" class="self-center">↶</span>
  <section class="card px-3 py-5"><strong>Aprender</strong><p class="mt-2">Ajustar controles del próximo cambio.</p></section>
</div>

<!--
Notas para presentar:

Recordá que las pruebas tienen cobertura limitada y pueden quedar vulnerabilidades desconocidas. La operación necesita telemetría, un responsable de respuesta y capacidad para corregir versiones desplegadas.
-->

---

# Controles en producción

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
  <section class="card px-4 py-4"><strong>Monitoreo</strong><p class="mt-2">Registros, SIEM y detección de anomalías.</p></section>
  <section class="card px-4 py-4"><strong>WAF</strong><p class="mt-2">Filtra parte del tráfico; no corrige defectos de la app.</p></section>
  <section class="card px-4 py-4"><strong>RASP</strong><p class="mt-2">Puede detectar o bloquear algunos ataques en ejecución.</p></section>
  <section class="card-strong px-4 py-4"><strong>Respuesta</strong><p class="mt-2">Contener, investigar y corregir vulnerabilidades residuales.</p></section>
</div>

<!--
Notas para presentar:

El monitoreo ayuda a detectar actividad inesperada y a responder a problemas que escaparon a las pruebas. WAF y RASP pueden mitigar ciertos ataques en ejecución, pero no eliminan la necesidad de corregir el código o la configuración.

Transición: automatizar comprobaciones repetibles hace más constante el feedback.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Automation First

<div class="mt-4 grid grid-cols-[1fr_auto_1fr] items-stretch gap-4 text-center">
  <section class="card px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Revisión ocasional</p><strong class="mt-2 block">Una persona recuerda buscar secretos</strong><p class="mt-2 text-sm">Puede variar entre cambios y equipos.</p></section>
  <span aria-hidden="true" class="self-center text-2xl">→</span>
  <section class="card-strong px-4 py-5"><p class="text-xs uppercase tracking-wide opacity-70">Control automatizado</p><strong class="mt-2 block">Cada cambio ejecuta el mismo escaneo</strong><p class="mt-2 text-sm">El equipo interpreta la señal y decide qué hacer.</p></section>
</div>

<!--
Notas para presentar:

Abrí con un ejemplo repetible: revisar cada PR buscando credenciales evita depender de una tarea manual ocasional. Elegí automatizaciones que produzcan señales claras y que el equipo pueda atender.
-->

---

# Bucle de feedback automatizado

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-1 text-center text-sm" role="img" aria-label="El cambio activa compilación, pruebas y despliegue; los resultados vuelven al equipo para revisar y corregir">
  <section class="card px-2 py-4"><strong>Commit</strong><p class="mt-1">entra un cambio</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Build</strong><p class="mt-1">compilar</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Test</strong><p class="mt-1">obtener señales</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Deploy</strong><p class="mt-1">publicar según política</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">El resultado vuelve al equipo: corregir, revisar o continuar según el control y el contexto.</p>

<!--
Notas para presentar:

Señalá el ciclo commit, build, test y deploy. Automatizarlo puede acelerar el feedback de verificaciones repetibles y reducir pasos manuales; no reemplaza a quien interpreta los resultados ni prioriza excepciones.

Transición: definamos cuándo un hallazgo debe pausar un cambio.
-->

---

# Security Gates

Un **security gate** es un control, a menudo automatizado, para decidir si un cambio puede continuar.

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
  <section class="card px-3 py-4"><strong>Hallazgo</strong><p class="mt-2">Secreto confirmado en un PR</p></section>
  <section class="card px-3 py-4"><strong>Política</strong><p class="mt-2">Bloquear y avisar a quien puede corregirlo</p></section>
  <section class="card px-3 py-4"><strong>Seguimiento</strong><p class="mt-2">Resolverlo o documentar una excepción</p></section>
</div>

<!--
Notas para presentar:

Un gate no tiene que bloquear todo hallazgo. Definí de antemano qué resultado pausa el cambio, quién lo revisa y cómo se registra una excepción.

Ejemplo: ante un secreto confirmado, detener el PR y avisar al equipo responsable; si la credencial llegó a exponerse, revocarla o rotarla y revisar su uso. Una señal de menor confianza puede generar una tarea de revisión en vez de frenar una entrega.

Fuente: OWASP Top 10 CI/CD Security Risks.
https://owasp.org/projects/top-10-cicd-security-risks
-->

---

# El pipeline también necesita controles propios

<p class="mt-2 text-center text-sm opacity-75">Proteger el software no alcanza: también hay que proteger el proceso que lo construye y publica.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs" role="img" aria-label="Cuatro controles protegen la identidad, el entorno de ejecución, las entradas y el artefacto de un pipeline">
  <section class="card px-2 py-4"><strong>Identidad</strong><p class="mt-2">Permisos mínimos para el pipeline.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Ejecución</strong><p class="mt-2">Secretos protegidos y runner aislado.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Entradas</strong><p class="mt-2">Dependencias verificadas.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Artefacto</strong><p class="mt-2">Integridad y procedencia verificables.</p></section>
</div>

<!--
Notas para presentar:

Separá dos objetivos: revisar la seguridad del producto y proteger el proceso que produce sus artefactos. En la app de banca, una credencial de despliegue expuesta podría permitir publicar un cambio no revisado aunque el código haya pasado sus controles. Recorré las cuatro piezas: quién ejecuta, dónde corre, qué incorpora y cómo se verifica el resultado.

La procedencia del build registra cómo se produjo un artefacto y permite verificar su relación con el código fuente. No demuestra por sí sola que ese código esté libre de vulnerabilidades.

Fuente: OWASP Top 10 CI/CD Security Risks; NIST SP 800-204D; SLSA, Build Provenance.
https://owasp.org/projects/top-10-cicd-security-risks
https://csrc.nist.gov/pubs/sp/800/204/d/final
https://slsa.dev/spec/v1.2/provenance
-->

---

# Del hallazgo a una decisión

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs" role="img" aria-label="Un hallazgo se valida con contexto, se compara con una política y conduce a una decisión documentada">
  <section class="card px-2 py-4"><strong>Hallazgo</strong><p class="mt-2">Una dependencia reporta una vulnerabilidad.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Contexto</strong><p class="mt-2">¿Qué servicio la usa? ¿Está expuesta?</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Política</strong><p class="mt-2">¿Bloquear, revisar o aceptar con seguimiento?</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Respuesta</strong><p class="mt-2">Corregir, escalar o registrar una excepción.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La severidad orienta; posibilidad, impacto y controles ayudan a priorizar.</p>

<!--
Notas para presentar:

Seguí la cadena: el escáner encuentra algo, el equipo reúne contexto y una política acordada orienta la respuesta. La puntuación no decide por sí sola; una excepción requiere motivo, responsable y fecha de revisión.

Fuente: NIST SP 800-30 Rev. 1.
https://csrc.nist.gov/pubs/sp/800/30/r1/final
-->

---

# Contraseñas y claves también forman parte del software

<p class="mt-2 text-center">Un secreto habilita una identidad o una acción, como desplegar el servicio de pagos.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm">
  <section class="card-strong px-3 py-5"><strong>Se filtra al repositorio</strong><p class="mt-2">Token en un commit</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-3 py-5"><strong>Se copia al historial</strong><p class="mt-2">Clones, logs y forks</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-3 py-5"><strong>Se revoca o rota</strong><p class="mt-2">Invalidar la credencial y revisar su uso</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Borrar el archivo no invalida la credencial ni elimina las copias existentes.</p>

<!--
Notas para presentar:

Diferenciá secretos de datos de negocio: un token de CI permite actuar con la identidad de una máquina. Si se publica por error, borrarlo del archivo no invalida la credencial ni las copias ya existentes.

Fuente: OWASP Secrets Management Cheat Sheet.
https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
-->

---

# Gestionar secretos de forma segura

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Guardar</strong><p class="mt-2 text-sm">Usar una bóveda; evitar código, chat y archivos versionados.</p></section>
  <section class="card px-4 py-5"><strong>Usar</strong><p class="mt-2 text-sm">Entregar a identidades de máquina con mínimo privilegio.</p></section>
  <section class="card-strong px-4 py-5"><strong>Responder</strong><p class="mt-2 text-sm">Si se expone: revocar o rotar y revisar accesos.</p></section>
</div>

---

# Gestión segura de secretos

| Hacer | Evitar |
|---|---|
| Usar bóvedas (Vault, Azure Key Vault, AWS Secrets Manager) | Incrustar secretos en código, scripts o IaC |
| Recuperar secretos en runtime con identidades de máquina | Compartirlos por correo o chat, o guardarlos en texto plano |
| Aplicar mínimo privilegio y separar entornos | Reutilizar una clave privilegiada en varios servicios |
| Rotar, auditar y alertar sobre accesos | Secretos permanentes, credenciales en logs o archivos `.env` versionados |
| Escanear cada commit y el pipeline | Suponer que una clave expuesta sigue siendo segura |

<!--
Notas para presentar:

Un secreto es una credencial que permite autenticarse o firmar: por ejemplo, un token de despliegue o una clave privada. Si aparece en Git, borrarlo del último commit no elimina copias del historial; tratá la credencial como expuesta y revocala o rotala.

Fuente: OWASP Secrets Management Cheat Sheet.
https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
-->

---

# Las herramientas no alcanzan

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm">
  <section class="card px-2 py-4"><strong>Señal</strong><p class="mt-2">El escáner marca una dependencia.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Contexto</strong><p class="mt-2">¿Dónde se usa y qué expone?</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Prioridad</strong><p class="mt-2">Valorar el escenario y el impacto.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Acción</strong><p class="mt-2">Corregir, escalar y verificar.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La herramienta aporta una señal; las personas reúnen contexto y coordinan la respuesta.</p>

<!--
Notas para presentar:

Una herramienta puede encontrar un patrón, pero el equipo necesita validar el hallazgo, entender el escenario y decidir cómo corregirlo. Un programa de seguridad incluye personas, acuerdos y feedback además de software.
-->

---

# DevSecOps

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
  <section class="card px-3 py-5"><strong>Desarrollo</strong><p class="mt-2 text-sm">Conoce el cambio y el producto.</p></section><span aria-hidden="true">+</span>
  <section class="card-strong px-3 py-5"><strong>Seguridad</strong><p class="mt-2 text-sm">Ayuda a valorar escenarios y controles.</p></section><span aria-hidden="true">+</span>
  <section class="card px-3 py-5"><strong>Operaciones</strong><p class="mt-2 text-sm">Observa el comportamiento desplegado.</p></section>
</div>

<p class="mt-4 text-center text-lg"><strong>DevSecOps</strong> coordina esas perspectivas durante el ciclo; no es un producto que se instala.</p>

<!--
Notas para presentar:

Explicá el nombre antes de la sigla: desarrollo, seguridad y operaciones colaboran durante el ciclo. DevSecOps describe una forma de organizar el trabajo y la responsabilidad; no es un producto que se instala.

Fuente: NIST SP 800-204C.
https://csrc.nist.gov/pubs/sp/800/204/c/final
-->

---

# Colaboración DevSecOps

<div class="grid grid-cols-[3fr_2fr] gap-6 items-center">
<div>

Romper silos entre Desarrollo, Seguridad y Operaciones.

Compartir objetivos, contexto y decisiones; mantener comunicación abierta y colaboración estrecha.

</div>
<div class="grid grid-cols-2 items-stretch gap-3">
<figure class="card flex flex-col items-center justify-center gap-2 px-2 py-3">
<img src="/pptx-images/image11.png" alt="Diagrama de intersección entre desarrollo, seguridad y operaciones: DevSecOps" class="h-40 w-full rounded bg-white p-1 object-contain" />
<figcaption class="text-center text-xs">Responsabilidad compartida</figcaption>
</figure>
<figure class="card flex flex-col items-center justify-center gap-2 px-2 py-3">
<img src="/pptx-images/image16.png" alt="Viñeta que representa la seguridad como una responsabilidad presente en el trabajo cotidiano" class="h-40 w-full rounded bg-white p-1 object-contain" />
<figcaption class="text-center text-xs">La seguridad forma parte del trabajo de cada rol</figcaption>
</figure>
</div>
</div>

<!--
Notas para presentar:

Señalá las dos imágenes. La intersección muestra colaboración continua entre desarrollo, seguridad y operaciones; la viñeta recuerda que la seguridad también forma parte de las decisiones cotidianas de cada rol. El equipo de seguridad conserva su conocimiento especializado.

Fuente: NIST SP 800-204C.
https://csrc.nist.gov/pubs/sp/800/204/c/final
-->

---
layout: section
---

# Cultura DevSecOps

<div class="mt-5 grid grid-cols-3 gap-3 text-center">
  <section class="card px-4 py-5"><strong>Pedir ayuda temprano</strong><p class="mt-2 text-sm">La consulta ocurre antes del release.</p></section>
  <section class="card-strong px-4 py-5"><strong>Compartir feedback</strong><p class="mt-2 text-sm">Cada rol aporta contexto al mismo cambio.</p></section>
  <section class="card px-4 py-5"><strong>Aprender en conjunto</strong><p class="mt-2 text-sm">Los resultados mejoran prácticas y herramientas.</p></section>
</div>

<!--
Notas para presentar:

Presentá las tres acciones como hábitos observables: pedir ayuda antes de una entrega, compartir el contexto de un hallazgo y usar lo aprendido para ajustar el proceso.

Fuente: NIST SP 800-218.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Seguridad como responsabilidad compartida

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Desarrollo</strong><p class="mt-2 text-sm">Explica la intención del cambio y corrige el código.</p></section>
  <section class="card px-4 py-5"><strong>Seguridad</strong><p class="mt-2 text-sm">Ayuda a valorar amenaza, exposición e impacto.</p></section>
  <section class="card px-4 py-5"><strong>Operaciones</strong><p class="mt-2 text-sm">Aporta señales de producción y capacidad de respuesta.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">La responsabilidad se comparte; el conocimiento y las tareas siguen distribuidos.</p>

<!--
Notas para presentar:

Cada rol aporta contexto distinto. Desarrollo conoce el cambio, seguridad ayuda a analizar escenarios y operaciones observa el comportamiento desplegado; compartir información mejora la decisión y mantiene las responsabilidades claras.
-->

---

# Cuatro pilares que sostienen DevSecOps

<div class="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
  <section class="card px-4 py-4"><strong>Personas</strong><p class="mt-2">Responsables claros, formación y un canal para pedir ayuda.</p></section>
  <section class="card px-4 py-4"><strong>Procesos</strong><p class="mt-2">Feedback temprano y vías simples para resolver hallazgos.</p></section>
  <section class="card-strong px-4 py-4"><strong>Tecnología</strong><p class="mt-2">Automatizar señales repetibles en el flujo habitual.</p></section>
  <section class="card px-4 py-4"><strong>Gobernanza</strong><p class="mt-2">Acordar riesgo, métricas y criterios de excepción.</p></section>
</div>

<p class="mt-3 text-center text-sm opacity-75">La mejora depende de que los cuatro pilares se refuercen; contar alertas no alcanza para medirla.</p>

<!--
Notas para presentar:

Explicá cada pilar con una pregunta: ¿quién responde?, ¿cómo circula el hallazgo?, ¿qué señal se puede automatizar?, ¿qué resultado se quiere mejorar? La tecnología hace repetible el control, mientras personas y gobernanza interpretan su alcance.

No midas éxito solo por cantidad de alertas: una métrica debe ayudar a decidir qué mejorar.
-->

---

# Romper silos y colaborar

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-sm">
  <section class="card px-3 py-4"><strong>Desarrollo</strong><p class="mt-2">Ubica la dependencia en el servicio.</p></section><span aria-hidden="true">→</span>
  <section class="card-strong px-3 py-4"><strong>Seguridad</strong><p class="mt-2">Aporta contexto y prioriza el riesgo.</p></section><span aria-hidden="true">→</span>
  <section class="card px-3 py-4"><strong>Operaciones</strong><p class="mt-2">Coordina la actualización y observa el release.</p></section>
</div>

<div class="mt-4 rounded-lg border border-white/20 px-4 py-3 text-center text-sm"><strong>Objetivo compartido:</strong> resolver el hallazgo con feedback y responsabilidad claros.</div>

<!--
Notas para presentar:

Tomá como ejemplo una alerta de dependencia vulnerable en la app de banca. Desarrollo puede identificar dónde se usa, seguridad ayudar a interpretar el escenario y operaciones coordinar la actualización.

Elegí métricas compartidas que muestren tiempos y resultados en contexto; el conteo bruto de hallazgos no explica por sí solo el riesgo.
-->

---

# Referentes de seguridad: un puente en cada equipo

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
  <section class="card px-3 py-4"><strong>Equipo de desarrollo</strong><p class="mt-2 text-sm">Contexto del producto y sus cambios</p></section>
  <span aria-hidden="true" class="text-xl">↔</span>
  <section class="card-strong px-3 py-4"><strong>Security Champion</strong><p class="mt-2 text-sm">Referente con formación adicional en seguridad</p></section>
  <span aria-hidden="true" class="text-xl">↔</span>
  <section class="card px-3 py-4"><strong>Especialistas</strong><p class="mt-2 text-sm">Guía para decisiones y problemas complejos</p></section>
</div>

<p class="mt-5 text-center text-sm opacity-80">Acerca la orientación al trabajo diario y lleva preguntas al lugar adecuado.</p>

<!--
Notas para presentar:

Definí Security Champion como una persona referente del equipo con formación adicional en seguridad. Puede conectar a desarrollo con especialistas y mantener el contexto del producto en esa conversación; no reemplaza a ninguna de las dos partes.
-->

---

# Qué hace un Security Champion

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Acerca prácticas</strong><p class="mt-2 text-sm">Comparte pautas y ayuda a incorporarlas al flujo del equipo.</p></section>
  <section class="card px-4 py-5"><strong>Orienta hallazgos</strong><p class="mt-2 text-sm">Ayuda a reunir contexto y encontrar a quien pueda resolver una duda.</p></section>
  <section class="card px-4 py-5"><strong>Devuelve feedback</strong><p class="mt-2 text-sm">Señala fricciones en herramientas y políticas.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-80"><strong>No aprueba todo ni reemplaza al equipo de seguridad:</strong> cada rol conserva su responsabilidad.</p>

<!--
Notas para presentar:

Pedí un ejemplo concreto: una alerta de dependencia puede requerir contexto del producto, ayuda para valorar el riesgo y coordinación de una actualización. El champion facilita ese recorrido; las decisiones siguen en manos de los responsables correspondientes.

Transición: para que estos acuerdos funcionen, las alertas tienen que poder usarse.
-->

---

# Un control útil tiene que poder usarse

<div class="mt-4 grid grid-cols-4 gap-3 text-center text-sm">
  <section class="card px-3 py-5"><strong>Contexto</strong><p class="mt-2">¿Qué componente y servicio?</p></section>
  <section class="card px-3 py-5"><strong>Prioridad</strong><p class="mt-2">¿Qué escenario e impacto?</p></section>
  <section class="card px-3 py-5"><strong>Responsable</strong><p class="mt-2">¿Quién puede actuar?</p></section>
  <section class="card-strong px-3 py-5"><strong>Siguiente paso</strong><p class="mt-2">¿Corregir, revisar o escalar?</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Alertas irrelevantes generan fatiga; una señal accionable ayuda a evitar atajos.</p>

<!--
Preguntá qué haría que una alerta fuera accionable. Llevá la conversación a incluir contexto, prioridad, responsable y una recomendación de remediación; evitá asumir que más alertas equivalen a más seguridad.
Transición: estos criterios también sirven para evaluar las herramientas y los security gates.
-->

---

# Automatizar sin frenar

<div class="mt-4 grid grid-cols-3 gap-3 text-center">
  <section class="card px-4 py-5"><strong>Velocidad</strong><p class="mt-2 text-sm">Feedback corto en el cambio.</p></section>
  <section class="card px-4 py-5"><strong>Calidad</strong><p class="mt-2 text-sm">Pruebas según el comportamiento esperado.</p></section>
  <section class="card-strong px-4 py-5"><strong>Seguridad</strong><p class="mt-2 text-sm">Revisiones de riesgo integradas al flujo.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">El equilibrio requiere controles útiles, tiempos acordados y una vía para revisar señales inciertas.</p>

<!--
Notas para presentar:

El objetivo es que las verificaciones se ejecuten en el flujo normal y den feedback oportuno. Si el control es lento o produce mucho ruido, el equipo necesita ajustar alcance, severidad o respuesta.
-->

---

# Evidencia y cumplimiento

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs" role="img" aria-label="Un cambio produce un control ejecutado, un resultado y una decisión registrados y vinculados con un control aplicable">
  <section class="card px-2 py-4"><strong>Cambio</strong><p class="mt-2">PR de una transferencia</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Control</strong><p class="mt-2">Prueba de autorización</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Resultado y decisión</strong><p class="mt-2">Aprobado o hallazgo resuelto</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Evidencia</strong><p class="mt-2">Registro trazable al control</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Ejecutar un pipeline, por sí solo, no demuestra cumplimiento.</p>

<!--
Notas para presentar:

Una revisión registrada, el resultado de una prueba y la decisión sobre una excepción pueden mostrar cómo se aplicó un proceso. La evidencia debe vincularse con el control y su alcance; ejecutar un pipeline no prueba por sí solo cumplimiento.
-->

---

# ISO/IEC 27001:2022 y DevSecOps

<p class="mt-2 text-center text-sm">La norma define requisitos para un sistema de gestión de seguridad de la información (SGSI).</p>

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-sm">
  <section class="card px-3 py-5"><strong>Riesgos y contexto</strong><p class="mt-2">Definir qué se necesita proteger.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-3 py-5"><strong>Controles pertinentes</strong><p class="mt-2">Seleccionarlos y justificar su aplicación.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-3 py-5"><strong>Evidencia y mejora</strong><p class="mt-2">Revisar resultados y mantener el sistema.</p></section>
</div>

<p class="mt-4 text-center text-sm opacity-75">Shift Left y DevSecOps pueden apoyar controles seleccionados según el contexto y la declaración de aplicabilidad.</p>

<!--
Notas para presentar:

ISO/IEC 27001 especifica requisitos para un sistema de gestión de seguridad de la información. DevSecOps puede aportar prácticas y evidencia para controles que la organización haya determinado pertinentes; no constituye una certificación por sí sola.

Fuente: ISO/IEC 27001:2022, especialmente cláusulas 6.1.3 y Anexo A.
https://www.iso.org/standard/27001
-->

---

# Controles ISO relacionados con el desarrollo

<div class="mt-4 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-3"><strong>Preparar el ciclo</strong><p class="mt-2"><b>A.8.9</b> · gestión de la configuración<br><b>A.8.25</b> · ciclo de vida de desarrollo seguro</p></section>
  <section class="card px-4 py-3"><strong>Construir con seguridad</strong><p class="mt-2"><b>A.8.28</b> · codificación segura</p></section>
  <section class="card-strong px-4 py-3"><strong>Verificar</strong><p class="mt-2"><b>A.8.29</b> · pruebas de seguridad en desarrollo y aceptación</p></section>
  <section class="card px-4 py-3"><strong>Proteger el acceso y los servicios</strong><p class="mt-2"><b>A.5.15 / A.5.17</b> · acceso e información de autenticación<br><b>A.5.23</b> · seguridad de la información en el uso de servicios en la nube</p></section>
</div>

<p class="mt-3 text-center text-xs opacity-75">Los registros aportan evidencia; no reemplazan la evaluación ni la documentación del sistema de gestión.</p>

<!--
Notas para presentar:

Presentá los códigos como ejemplos del Anexo A de la edición 2022. La organización determina qué controles aplicar según su tratamiento de riesgos y deja la justificación en la declaración de aplicabilidad; no todos los controles aplican de manera automática a todos los sistemas.

Fuente: ISO/IEC 27001:2022, Anexo A; guía del grupo auditor ISO/IEC sobre el uso del Anexo A.
https://www.iso.org/standard/27001
https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3297_Auditing%20Practices%20Note%20-%20Annex%20A.pdf
-->

---

# Empezar pequeño y mejorar

<p class="mt-2 text-center">Un piloto convierte una prioridad en aprendizaje antes de escalarla.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-1 text-center text-xs" role="img" aria-label="Ciclo de mejora: evaluar riesgo, probar un control, medir respuesta, ajustar y escalar lo que funciona">
  <section class="card px-1 py-4"><strong>Evaluar</strong><p class="mt-2">Dependencias de pagos</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-1 py-4"><strong>Probar</strong><p class="mt-2">Escaneo en cada cambio</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-1 py-4"><strong>Medir</strong><p class="mt-2">Hallazgos accionables</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-1 py-4"><strong>Mejorar</strong><p class="mt-2">Ajustar señal y respuesta</p></section><span aria-hidden="true" class="self-center">↶</span>
  <section class="card px-1 py-4"><strong>Escalar</strong><p class="mt-2">Extender con evidencia</p></section>
</div>

<!--
Notas para presentar:

Elegí un riesgo concreto del servicio de pagos, probá una verificación y revisá sus resultados con el equipo. Si el control aporta señales útiles, ajustalo y extendelo gradualmente.

Transición: resumamos cómo se conectan diseño, desarrollo y operación.
-->

---
layout: section
---

# Hoja de ruta práctica

<div class="mt-5 grid grid-cols-4 gap-3 text-center text-sm">
  <section class="card px-3 py-5"><strong>1 · Evaluar</strong><p class="mt-2">Entender madurez y elegir un piloto.</p></section>
  <section class="card px-3 py-5"><strong>2 · Planificar</strong><p class="mt-2">Acordar objetivos, controles y métricas.</p></section>
  <section class="card-strong px-3 py-5"><strong>3 · Pilotar</strong><p class="mt-2">Medir utilidad y corregir fricciones.</p></section>
  <section class="card px-3 py-5"><strong>4 · Escalar</strong><p class="mt-2">Extender lo aprendido y mantener feedback.</p></section>
</div>

<!--
Notas para presentar:

Presentá la hoja de ruta como una secuencia para aprender e implementar, no como una receta universal. Cada organización puede ajustar etapas según sus riesgos, recursos y forma de desarrollar software.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# Fase 1 · Evaluar y concientizar

<div class="mt-3 grid grid-cols-4 gap-2 text-center text-xs"><div class="card-strong px-2 py-2">1 · Evaluar</div><div class="card px-2 py-2">2 · Planificar</div><div class="card px-2 py-2">3 · Pilotar</div><div class="card px-2 py-2">4 · Escalar</div></div>
<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-3"><strong>Entender el punto de partida</strong><p class="mt-1">Revisar madurez de SDLC, DevOps y seguridad de aplicaciones.</p></section>
  <section class="card px-4 py-3"><strong>Encontrar brechas</strong><p class="mt-1">Identificar necesidades de herramientas, procesos y habilidades.</p></section>
  <section class="card px-4 py-3"><strong>Construir apoyo</strong><p class="mt-1">Explicar objetivos y cambios culturales a equipos y dirección.</p></section>
  <section class="card-strong px-4 py-3"><strong>Elegir un piloto</strong><p class="mt-1">Probar en un servicio con alcance manejable.</p></section>
</div>

<!--
Notas para presentar:

Empezá por entender el flujo que existe: repositorios, pruebas, releases, responsabilidades y dificultades. Elegir un piloto permite aprender con alcance manejable; no hace falta afirmar que sea representativo de todas las aplicaciones.
-->

---

# Fase 2 · Planificar

<div class="mt-3 grid grid-cols-4 gap-2 text-center text-xs"><div class="card px-2 py-2">1 · Evaluar</div><div class="card-strong px-2 py-2">2 · Planificar</div><div class="card px-2 py-2">3 · Pilotar</div><div class="card px-2 py-2">4 · Escalar</div></div>
<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-3"><strong>Definir éxito</strong><p class="mt-1">Acordar objetivos y métricas concretas.</p></section>
  <section class="card px-4 py-3"><strong>Elegir controles</strong><p class="mt-1">Seleccionar SAST, SCA o DAST según el riesgo.</p></section>
  <section class="card px-4 py-3"><strong>Preparar al equipo</strong><p class="mt-1">Planificar capacitación y soporte.</p></section>
  <section class="card-strong px-4 py-3"><strong>Acordar respuestas</strong><p class="mt-1">Definir aceptación, remediación y excepciones.</p></section>
</div>

<!--
Notas para presentar:

Acordá primero qué resultado se busca y quién responde a cada hallazgo. Después elegí herramientas que cubran una necesidad concreta del piloto, como detectar secretos en cambios o dependencias vulnerables en build.
-->

---

# Fase 3 · Pilotar y refinar

<div class="mt-3 grid grid-cols-4 gap-2 text-center text-xs"><div class="card px-2 py-2">1 · Evaluar</div><div class="card px-2 py-2">2 · Planificar</div><div class="card-strong px-2 py-2">3 · Pilotar</div><div class="card px-2 py-2">4 · Escalar</div></div>
<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-3"><strong>Aplicar</strong><p class="mt-1">Integrar los controles acordados al piloto.</p></section>
  <section class="card px-4 py-3"><strong>Observar</strong><p class="mt-1">Medir utilidad, tiempos y fricciones.</p></section>
  <section class="card px-4 py-3"><strong>Ajustar</strong><p class="mt-1">Refinar señales y respuestas en iteraciones cortas.</p></section>
  <section class="card-strong px-4 py-3"><strong>Documentar</strong><p class="mt-1">Registrar resultados y lecciones para decidir cómo escalar.</p></section>
</div>

<!--
Notas para presentar:

Durante el piloto, medí si el control encuentra hallazgos accionables y cuánto tarda el equipo en responder. Recogé feedback sobre falsos positivos, pasos difíciles y casos que requieren excepción.
-->

---

# Fase 4 · Escalar y mejorar

<div class="mt-3 grid grid-cols-4 gap-2 text-center text-xs"><div class="card px-2 py-2">1 · Evaluar</div><div class="card px-2 py-2">2 · Planificar</div><div class="card px-2 py-2">3 · Pilotar</div><div class="card-strong px-2 py-2">4 · Escalar</div></div>
<div class="mt-3 grid grid-cols-2 gap-3 text-sm">
  <section class="card px-4 py-3"><strong>Extender</strong><p class="mt-1">Llevar controles útiles a otros equipos y aplicaciones.</p></section>
  <section class="card px-4 py-3"><strong>Crear referentes</strong><p class="mt-1">Sostener un programa de Security Champions.</p></section>
  <section class="card px-4 py-3"><strong>Formar de manera continua</strong><p class="mt-1">Acompañar cambios de herramientas y responsabilidades.</p></section>
  <section class="card-strong px-4 py-3"><strong>Revisar y adaptar</strong><p class="mt-1">Ajustar prácticas ante nuevas amenazas o regulaciones.</p></section>
</div>

<!--
Notas para presentar:

Escalá prácticas que demostraron utilidad en el piloto y ajustalas a cada producto. Conservá canales para revisar resultados: una práctica útil en una app puede necesitar cambios en otra.
-->

---

# Condiciones para implementar

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Tiempo</strong><p class="mt-2 text-sm">Reservar capacidad para integrar controles y atender hallazgos.</p></section>
  <section class="card px-4 py-5"><strong>Liderazgo</strong><p class="mt-2 text-sm">Asegurar patrocinio y objetivos compartidos.</p></section>
  <section class="card-strong px-4 py-5"><strong>Métricas útiles</strong><p class="mt-2 text-sm">Seguir remediación y cobertura; interpretar hallazgos en contexto.</p></section>
</div>

<!--
Notas para presentar:

Explicá que tiempo, apoyo y métricas son condiciones para sostener el proceso. Elegí indicadores que permitan ver cobertura y respuesta, y documentá límites para no confundirlos con una medida completa del riesgo.
-->

---

# Obstáculos y respuestas

| Obstáculo | Respuesta |
|---|---|
| Integración compleja y herramientas aisladas | Priorizar integración y capacitación cruzada |
| Costo inicial y presión por entregar | Pilotar, medir y comunicar valor |
| Resistencia al cambio | Incentivos que equilibren velocidad, calidad y seguridad |
| Alertas ruidosas | Dar contexto y pasos de remediación accionables |

Shift Left es una transformación organizacional, no una compra aislada de software.

<!--
Notas para presentar:

Usá una fila de la tabla y pedí una respuesta concreta. Por ejemplo, ante alertas ruidosas, aportar contexto, prioridad y pasos de remediación ayuda a que el equipo pueda actuar.

Cerrá con la idea de que Shift Left requiere decisiones organizacionales además de herramientas.
-->

---

# De Secure by Design a Shift Left

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs" role="img" aria-label="Un requisito de diseño se convierte en una comprobación de cambios, pruebas durante el ciclo y aprendizaje desde operación">
  <section class="card px-2 py-4"><strong>Diseñar</strong><p class="mt-2">Solo el titular autoriza una transferencia.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Construir</strong><p class="mt-2">Revisar cambios de autenticación y autorización.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-2 py-4"><strong>Verificar</strong><p class="mt-2">Probar que otra cuenta no vea el movimiento.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-2 py-4"><strong>Aprender</strong><p class="mt-2">Revisar señales de producción y ajustar requisitos.</p></section>
</div>

<!--
Notas para presentar:

Secure by Design orienta las decisiones de arquitectura; Shift Left ayuda a comprobar y sostener esas decisiones durante los cambios. El aprendizaje de producción vuelve a informar el diseño.

Fuente: NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---
layout: section
---

# Un futuro digital seguro por diseño

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
  <section class="card px-3 py-5"><strong>Decidir</strong><p class="mt-2 text-sm">Qué activo y operación importan.</p></section><span aria-hidden="true">→</span>
  <section class="card-strong px-3 py-5"><strong>Comprobar</strong><p class="mt-2 text-sm">Si los cambios preservan las decisiones de seguridad.</p></section><span aria-hidden="true">→</span>
  <section class="card px-3 py-5"><strong>Aprender</strong><p class="mt-2 text-sm">Usar la operación para mejorar el siguiente ciclo.</p></section>
</div>

<!--
Retomá el hilo de la clase: incorporar seguridad al diseño es el punto de partida; Shift Left permite sostener esa intención durante los cambios y la operación.
-->

---

# Una guía para el próximo cambio

<div class="mt-5 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>¿Qué protegemos?</strong><p class="mt-2 text-sm">Por ejemplo, el saldo y la autorización de una transferencia.</p></section>
  <section class="card px-4 py-5"><strong>¿Qué verificamos ahora?</strong><p class="mt-2 text-sm">Elegí una comprobación adecuada a esta etapa y al riesgo.</p></section>
  <section class="card px-4 py-5"><strong>¿Quién responde?</strong><p class="mt-2 text-sm">Acordá quién evalúa, corrige y revisa el resultado.</p></section>
</div>

<!--
Usá las tres preguntas para sintetizar la clase con el ejemplo bancario. Una respuesta concreta por equipo alcanza para elegir un primer control útil.
-->

---

# La llamada a la acción

<p class="mt-2 text-center text-lg"><strong>Elegí un cambio del próximo sprint y acordá cómo recibir feedback de seguridad.</strong></p>

<div class="mt-4 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-5"><strong>Qué comprobar</strong><p class="mt-2 text-sm">Por ejemplo, autorización en una transferencia.</p></section>
  <section class="card px-4 py-5"><strong>Quién responde</strong><p class="mt-2 text-sm">Definir quién evalúa, corrige o escala el hallazgo.</p></section>
  <section class="card-strong px-4 py-5"><strong>Qué aprender</strong><p class="mt-2 text-sm">Revisar señales y mejorar el control después del release.</p></section>
</div>

<!--
Cerrá con una invitación concreta: elegir una verificación útil que el equipo pueda integrar y mejorar. Evitá presentar Shift Left como garantía de ausencia de vulnerabilidades.
-->

---

# El ciclo completo

<div class="mt-4" role="img" aria-label="El análisis valora escenarios de amenaza según los activos, el contexto, las debilidades, la exposición y los controles; los riesgos priorizados orientan requisitos y diseño, y la operación devuelve hallazgos al análisis">
  <section class="card px-4 py-3">
    <p class="text-center text-xs uppercase tracking-wide opacity-70">1 · Evaluar escenarios</p>
    <div class="mt-2 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2 text-center text-xs">
      <div class="card-strong flex items-center justify-center px-2 py-3">Activos, contexto,<br />debilidades y controles</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card-strong flex items-center justify-center px-2 py-3">Escenario de amenaza</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card flex items-center justify-center px-2 py-3">Valorar posibilidad<br />e impacto</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card-strong flex items-center justify-center px-2 py-3">Priorizar riesgo</div>
    </div>
  </section>

  <div class="my-2 text-center text-sm opacity-70" aria-hidden="true">↓ orienta</div>

  <section class="card px-4 py-3">
    <p class="text-center text-xs uppercase tracking-wide opacity-70">2 · Construir, verificar y aprender</p>
    <div class="mt-2 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-1 text-center text-xs">
      <div class="card flex items-center justify-center px-1 py-3">Requisitos<br />y diseño</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card flex items-center justify-center px-1 py-3">Código</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card flex items-center justify-center px-1 py-3">Build<br />y pruebas</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card flex items-center justify-center px-1 py-3">Deploy</div>
      <span aria-hidden="true" class="self-center">→</span>
      <div class="card-strong flex items-center justify-center px-1 py-3">Operación</div>
    </div>
  </section>
</div>

<p class="mt-2 text-center text-sm opacity-70">↶ Los hallazgos de operación vuelven a la evaluación y ayudan a revisar escenarios, prioridades y requisitos.</p>

<!--
Notas para presentar:

Recorré el diagrama desde los activos y escenarios posibles hasta la priorización del riesgo. Las debilidades, la exposición y los controles existentes influyen en esa valoración; los requisitos y pruebas traducen la decisión al desarrollo.

La operación devuelve hallazgos y cambios para revisar escenarios. Fuente: NIST SP 800-30 Rev. 1 y NIST SSDF.
https://csrc.nist.gov/pubs/sp/800/30/r1/final
https://csrc.nist.gov/pubs/sp/800/218/final
-->

---

# ¡Muchas gracias!

<p class="mt-2 text-center text-xl">La seguridad acompaña cada cambio: se diseña, se comprueba y se aprende en operación.</p>

<div class="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 text-center">
  <section class="card px-4 py-5"><strong>Diseñar</strong><p class="mt-2 text-sm">Acordar qué proteger.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card-strong px-4 py-5"><strong>Comprobar</strong><p class="mt-2 text-sm">Revisar cada cambio.</p></section><span aria-hidden="true" class="self-center">→</span>
  <section class="card px-4 py-5"><strong>Aprender</strong><p class="mt-2 text-sm">Mejorar con señales de operación.</p></section>
</div>

<h2 class="mt-8 text-center text-xl">¿Qué comprobación llevarías al próximo cambio?</h2>

<!--
Notas para presentar:

Cerrá retomando el hilo de la clase: anticipar riesgos en el diseño y sostener esas decisiones cuando cambian código, dependencias y operación. Señalá la secuencia diseño → comprobación → aprendizaje y abrí un breve intercambio con la pregunta de la diapositiva.
-->
