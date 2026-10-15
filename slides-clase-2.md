---
theme: default
title: Shift Left or Get Hacked!
info: Software Seguro · Clase 2
colorSchema: dark
transition: slide
mdc: true
fonts:
  sans: IBM Plex Sans
  mono: JetBrains Mono
  weights: '400,500,600,700'
  provider: google
htmlAttrs:
  lang: es
layout: default
class: c2-slide c2-cover
slideId: S01
---

<p class="cover-eyebrow">Software Seguro · Clase 2</p>

<h1 class="cover-title">
  <span class="cover-title-first">Shift Left</span>
  <span class="cover-title-second">or Get <span class="cover-title-alert">Hacked!</span></span>
</h1>

<p class="cover-subtitle">Seguridad desde el primer cambio</p>

<style scoped>
.c2-cover {
  padding: 56px 72px;
}
.cover-eyebrow {
  margin: 0;
  opacity: 1;
  color: var(--slidev-theme-muted);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.cover-title {
  margin: 76px 0 0;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.04em;
  text-shadow: none;
}
.cover-title-first,
.cover-title-second {
  display: block;
}
.cover-title-first {
  color: var(--slidev-theme-primary);
}
.cover-title-second {
  margin-top: 10px;
  font-size: 60px;
}
.cover-title-alert {
  color: var(--slidev-theme-alert);
}
.cover-subtitle {
  margin: 36px 0 0;
  opacity: 1;
  font-size: 24px;
  line-height: 1.4;
}
.cover-subtitle::before {
  content: '';
  display: block;
  width: 64px;
  height: 3px;
  margin-bottom: 20px;
  background: var(--slidev-theme-primary);
}
</style>

<!--
S01 · Idea central: un ciclo de cambios más corto necesita aprendizaje de seguridad oportuno, sin prometer inmunidad. · Tiempo: 1 min

La clase anterior nos dejó decisiones sobre qué proteger y cómo diseñar una respuesta. Hoy voy a seguir esas decisiones mientras el software cambia. La idea de Shift Left es acercar ciertas comprobaciones al momento en que todavía entendemos el cambio y podemos actuar; no significa que todo problema se evite ni que podamos retirar controles posteriores. En la app de banca, la pregunta será cómo sostener la autorización cuando agregamos una descarga de extractos. El ciclo de trabajo no termina en una herramienta: lo que aprendemos al operar vuelve a orientar el próximo cambio.

Fuente breve: F4, NIST SSDF SP 800-218; respalda integrar prácticas de seguridad en el ciclo de desarrollo, sin prometer inmunidad ni aportar una definición literal de Shift Left.

Transición: «Primero voy a mostrar qué decisiones vamos a practicar y cómo se conecta el recorrido».
-->

---
layout: default
class: c2-slide
slideId: S02
---

# Decisiones de esta clase

<div class="mt-8 grid grid-cols-5 gap-3 text-center text-lg">
  <section class="card px-3 py-6"><strong>1</strong><p class="mt-3">Distinguir</p><p>Agile, CI/CD y DevOps</p></section>
  <section class="card px-3 py-6"><strong>2</strong><p class="mt-3">Explicar</p><p>feedback temprano</p></section>
  <section class="card px-3 py-6"><strong>3</strong><p class="mt-3">Elegir</p><p>una comprobación</p></section>
  <section class="card px-3 py-6"><strong>4</strong><p class="mt-3">Coordinar</p><p>una respuesta</p></section>
  <section class="card-strong px-3 py-6"><strong>5</strong><p class="mt-3">Explicar</p><p>apoyo al cumplimiento</p></section>
</div>

<p class="mt-6 text-center text-lg">Ruta: cambios → integración → feedback → decisiones compartidas.</p>

<!--
S02 · Idea central: el recorrido enseña a justificar decisiones de seguridad frente a cambios. · Tiempo: 1 min

Voy a pedir cinco acciones: distinguir prácticas que suelen confundirse, explicar por qué importa el momento del feedback, elegir una comprobación para una pregunta concreta, coordinar quién puede responder y explicar cómo DevSecOps aporta controles y evidencia para el cumplimiento. No hace falta memorizar productos ni conocer Scrum. Al final podremos reconstruir una cadena: cambió el software, integramos y comprobamos, alguien interpreta la señal y el equipo aprende. Vamos a usar el mismo caso para conectar controles, decisiones y evidencia, y al cierre veremos tres referencias de cumplimiento y auditoría. Si esta es la única parte que ves, alcanza con seguir la secuencia y atender a las decisiones del caso.

Fuente: diseño docente alineado con los resultados de aprendizaje del plan aprobado; no requiere fuente externa.

Transición: «Para empezar, recuperemos la regla que diseñamos sobre las cuentas y sus movimientos».
-->

---
layout: default
class: c2-slide
slideId: S03
---

# Cada cuenta, con permiso

<div class="mt-8 grid grid-cols-[1fr_auto_1fr] items-stretch gap-5 text-center">
  <section class="card px-6 py-7">
    <p class="text-lg uppercase tracking-wide opacity-75">Cuenta autorizada</p>
    <strong class="mt-4 block text-2xl">La persona consulta sus movimientos</strong>
    <p class="mt-4 text-lg">El servidor verifica el permiso y devuelve el extracto.</p>
  </section>
  <div class="self-center text-center text-lg">
    <span class="font-semibold">Mismo control</span>
    <p class="opacity-75">misma identidad</p>
  </div>
  <section class="card-strong px-6 py-7">
    <p class="text-lg uppercase tracking-wide opacity-75">Cuenta ajena</p>
    <strong class="mt-4 block text-2xl">La identidad es válida, el permiso no</strong>
    <p class="mt-4 text-lg">Rechazo sin saldo ni movimientos.</p>
  </section>
</div>

<!--
S03 · Idea central: autenticar una identidad no autoriza todas las cuentas; cada consulta debe comprobar permiso en el servidor. · Tiempo: 3 min

Retomo la app de banca de la clase anterior para que nadie necesite conocer finanzas: hay una persona, cuentas y movimientos. En cada consulta, el servidor debe verificar que esa identidad tenga permiso sobre la cuenta solicitada. Si lo tiene, devuelve el extracto; si no, rechaza sin revelar saldo ni movimientos. Una sesión válida demuestra quién presenta la solicitud, no que pueda leer cualquier cuenta. Voy a comparar ambos resultados porque la diferencia debe quedar clara incluso si alguien se perdió la primera clase.

Pregunto: «Si cambio el identificador de cuenta en una solicitud, ¿qué debería decidir el servidor?». La respuesta evaluable es verificar la autorización para esa cuenta y rechazar sin datos si falta permiso. Una pantalla que oculta información no basta si el servidor ya la entregó. Esta es una regla del caso didáctico, no un procedimiento de prueba contra sistemas reales.

Fuente breve: F5, OWASP Authorization Cheat Sheet; su guía recomienda validar permisos en cada solicitud.

Transición: «Ahora agregamos una descarga nueva: ¿qué puede poner a prueba esa autorización?»
-->

---
layout: default
class: c2-slide
slideId: S04
---

# La descarga nueva y la autorización

<div class="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-lg">
  <section class="card px-4 py-7"><strong>Cliente</strong><p class="mt-3">Pide el extracto mensual</p></section>
  <span aria-hidden="true" class="text-2xl">→</span>
  <section class="card-strong px-4 py-7"><strong>Servicio de extractos</strong><p class="mt-3">Ruta nueva · autorización por cuenta</p></section>
  <span aria-hidden="true" class="text-2xl">→</span>
  <section class="card px-4 py-7"><strong>Movimientos</strong><p class="mt-3">Solo si tiene permiso</p></section>
</div>

<p class="mt-7 text-center text-lg">Nueva ruta, dependencia y configuración: cambian el sistema; no prueban por sí solas que haya una vulnerabilidad.</p>

<!--
S04 · Idea central: la descarga incorpora cambios que podrían afectar la autorización ya definida; cambio no equivale a vulnerabilidad. · Tiempo: 3 min

Agrego una función concreta al mismo sistema: descargar el extracto mensual. La persona pide datos al servicio de extractos, que consulta movimientos. La regla no cambia: en cada solicitud el servidor comprueba permiso sobre esa cuenta y, si no existe, rechaza sin entregar datos. Para implementar la función quizá aparezca una ruta nueva, una biblioteca o una configuración de despliegue. Esas son partes del mismo episodio, no incidentes distintos ni evidencia de que algo ya salió mal.

Les doy unos segundos para pensar: «¿Qué tendría que seguir siendo cierto aunque agreguemos esa ruta?». Si aparecen respuestas distintas, las conecto con la regla: cuenta propia permitida, cuenta ajena rechazada sin saldo ni movimientos. Así queda una respuesta explícita en la grabación. Una dependencia puede requerir revisión y una configuración puede cambiar exposición, pero primero necesitamos evidencia sobre su efecto.

Fuentes breves: F4, NIST SSDF SP 800-218, para prácticas a través del ciclo; F5, OWASP Authorization Cheat Sheet, para la autorización por solicitud. Ningún estándar describe esta descarga en particular.

Transición: «¿Qué pasa con el costo de un cambio si dejamos las pruebas y la revisión de seguridad para el final?»
-->

---
layout: default
class: c2-slide
slideId: S05
---

# Probar tarde y costo del cambio

<p class="mt-5 text-xl">Dejar las pruebas y la revisión de seguridad para el final encarece los cambios.</p>

<svg class="mt-5 mx-auto w-full max-w-5xl" viewBox="0 0 860 280" role="img" aria-label="Diseño, código e integración se completan antes de probar y revisar seguridad. Si al final se descubre un problema de diseño, hay que revisar el diseño, corregir el código y repetir integración y pruebas: ese retrabajo aumenta el costo del cambio.">
  <defs>
    <marker id="s05-flow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#9AA39C" /></marker>
    <marker id="s05-rework" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="#FF5A3A" /></marker>
  </defs>
  <g fill="#151E1A" stroke="#3EC8D8" stroke-width="1.5">
    <rect x="10" y="28" width="180" height="72" rx="8" />
    <rect x="230" y="28" width="180" height="72" rx="8" />
    <rect x="450" y="28" width="180" height="72" rx="8" />
  </g>
  <rect x="670" y="28" width="180" height="72" rx="8" fill="#FF5A3A" fill-opacity="0.12" stroke="#FF5A3A" stroke-width="2" />
  <g fill="none" stroke="#9AA39C" stroke-width="2" marker-end="url(#s05-flow)">
    <path d="M194 64 H222" /><path d="M414 64 H442" /><path d="M634 64 H662" />
  </g>
  <g fill="#E7E9E6" text-anchor="middle" style="font-size:22px">
    <text x="100" y="72">Diseño</text>
    <text x="320" y="72">Código</text>
    <text x="540" y="72">Integración</text>
    <text x="760" y="57">Pruebas</text>
    <text x="760" y="83">y seguridad</text>
  </g>
  <text x="760" y="18" text-anchor="middle" fill="#FF5A3A" style="font-size:17px">Todo al final</text>
  <path d="M760 105 V140 H100 V105" fill="none" stroke="#FF5A3A" stroke-width="3" marker-end="url(#s05-rework)" />
  <text x="430" y="176" text-anchor="middle" fill="#E7E9E6" style="font-size:21px">El problema aparece cuando ya hay trabajo hecho</text>
  <g fill="#FF5A3A" fill-opacity="0.08" stroke="#FF5A3A" stroke-opacity="0.6">
    <rect x="10" y="197" width="260" height="68" rx="8" />
    <rect x="300" y="197" width="260" height="68" rx="8" />
    <rect x="590" y="197" width="260" height="68" rx="8" />
  </g>
  <g fill="#E7E9E6" text-anchor="middle" style="font-size:21px">
    <text x="140" y="239">Revisar el diseño</text>
    <text x="430" y="239">Corregir el código</text>
    <text x="720" y="225">Repetir integración</text>
    <text x="720" y="251">y pruebas</text>
  </g>
</svg>

<p class="mt-3 text-center text-xl"><strong>Más retrabajo y coordinación → mayor costo del cambio.</strong></p>

<!--
S05 · Idea central: dejar las pruebas y la revisión de seguridad para el final encarece los cambios por el retrabajo y la coordinación que exige corregir sobre trabajo ya hecho. · Tiempo: 3 min

¿Qué tenemos que volver a hacer si recién al final descubrimos que la descarga permite leer una cuenta ajena? Voy a recorrer la fila de arriba: acordamos el diseño, escribimos el código e integramos varias partes. En este ejemplo dejamos las pruebas y la revisión de seguridad para el final. Ahí aparece el problema: el diseño de la nueva ruta no contempló cómo verificar el permiso sobre la cuenta.

Sigo la flecha naranja hacia atrás. Ya no alcanza con ajustar una decisión en el diseño: tenemos que revisar esa decisión, corregir el código que la implementa y volver a integrar y probar lo que cambió. Además, hay que reunir a quienes conocen esas partes y recuperar por qué se hicieron así. Ese trabajo que repetimos y esa coordinación aumentan el costo del cambio. Cuantas más partes se construyeron sobre la decisión equivocada, más trabajo puede haber que revisar.

Si detectamos esa omisión al diseñar, podemos ajustar la regla antes de construir lo que depende de ella. El gráfico muestra ese mecanismo de retrabajo, no una medición ni un aumento fijo del costo. El alcance depende del problema y del sistema; las pruebas finales siguen siendo necesarias. Lo que nos encarece la corrección en este ejemplo es haber dejado toda la comprobación para ese momento.

Fuente breve: F6, OWASP WSTG v4.2, «Test Early and Test Often» y «The Web Security Testing Framework»; respalda comprobar seguridad durante el ciclo y la posibilidad de corregir antes con menor costo. La secuencia de retrabajo es una ilustración del caso, sin cifras ni multiplicadores.

Transición: «Para tener oportunidades de probar y ajustar antes, podemos trabajar en ciclos e incrementos. Veamos qué significa cada uno».
-->

---
layout: default
class: c2-slide
slideId: S06
---

# Iteración e incremento

<div class="mt-5 space-y-4">
  <section class="grid grid-cols-[220px_1fr] items-center gap-5">
    <div>
      <strong class="text-2xl text-cyber-cyan">Iteración</strong>
      <p class="mt-3 text-lg">Revisar y mejorar lo que ya hicimos.</p>
    </div>
    <img src="/clase-2/patton-iterating-mona-lisa.jpg" alt="Iteración: un boceto de la Mona Lisa se revisa y refina, pasa a una versión con color y llega a una pintura más detallada." class="w-full rounded-lg bg-white p-2 object-contain" style="height:150px" />
  </section>
  <section class="grid grid-cols-[220px_1fr] items-center gap-5">
    <div>
      <strong class="text-2xl text-cyber-neon">Incremento</strong>
      <p class="mt-3 text-lg">Sumar partes a lo que ya tenemos.</p>
    </div>
    <img src="/clase-2/patton-incrementing-mona-lisa.jpg" alt="Incremento: primero se pinta una parte de la Mona Lisa, después se agregan otras partes hasta completar el cuadro." class="w-full rounded-lg bg-white p-2 object-contain" style="height:150px" />
  </section>
</div>

<p class="mt-4 text-center text-lg">Podemos sumar una capacidad e iterar para mejorarla.</p>
<p class="mt-2 text-center text-sm opacity-70">Ilustraciones: <a href="https://jpattonassociates.com/dont_know_what_i_want/">Jeff Patton · 2008</a></p>

<!--
S06 · Idea central: iterar es revisar y adaptar el trabajo; un incremento agrega una capacidad utilizable. · Tiempo: 3 min

¿Qué cambia de un paso al siguiente en cada fila? Voy a usar estas ilustraciones de Jeff Patton para separar dos ideas que suelen mezclarse. Arriba vemos un boceto, una versión con color y una pintura más detallada. Hay una primera versión que podemos mirar, evaluar y ajustar. Eso es iterar: volver sobre lo que hicimos para mejorarlo a partir de lo que aprendemos. En el globo de pensamiento dice «una mujer en un paisaje»; la idea inicial todavía tiene margen para definirse.

Abajo, en cambio, el cuadro crece por partes: primero una porción, después otra, hasta completarlo. Eso ilustra el incremento: sumar a lo que ya tenemos. En software buscamos que cada incremento agregue una capacidad utilizable; un pedazo de una pintura sirve para mostrar la suma de partes, pero no representa por sí solo una entrega útil.

Vuelvo a nuestra app. Agregar la descarga mensual a la consulta de movimientos es un incremento. Probar esa descarga, escuchar cómo les resultó a quienes la usaron y ajustar cómo se usa es iterar sobre ella. A esa información que vuelve para ayudarnos a mejorar la llamamos feedback. Podemos combinar ambas cosas: agregar una capacidad y después revisarla y mejorarla. Revisar una versión no nos obliga a hacerla disponible de inmediato para todas las personas usuarias.

Fuente breve: F14, Jeff Patton, «Don’t Know What I Want, But I Know How to Get It» (2008), para las ilustraciones y la distinción entre iterar y agregar incrementos; F1, Manifiesto Ágil y principios, para adaptación y entrega frecuente. El ejemplo de la app es didáctico.

Transición: «Vimos cómo sumar una parte y cómo revisarla para mejorar. Ahora veamos cómo organizar el trabajo del equipo alrededor de esas ideas: ahí aparece Agile».
-->

---
layout: default
class: c2-slide
slideId: S07
---

# Agile: una forma de trabajar

<p class="mt-5 text-xl">Un enfoque para desarrollar software con avances útiles, colaboración y ajustes a partir de lo aprendido.</p>

<div class="mt-7 grid grid-cols-3 gap-4 text-center">
  <section class="card px-4 py-6">
    <strong class="text-xl">Entregar algo útil</strong>
    <p class="mt-3 text-lg">Avanzar con partes que funcionan.</p>
  </section>
  <section class="card px-4 py-6">
    <strong class="text-xl">Conversar y revisar</strong>
    <p class="mt-3 text-lg">Trabajar con quienes necesitan y usan el software.</p>
  </section>
  <section class="card-strong px-4 py-6">
    <strong class="text-xl">Ajustar el plan</strong>
    <p class="mt-3 text-lg">Cambiar las prioridades con lo que aprendemos.</p>
  </section>
</div>

<p class="mt-5 text-center text-lg">Planificar y documentar sigue siendo parte del trabajo.</p>
<p class="mt-3 text-center text-sm opacity-70">El <a href="https://agilemanifesto.org/iso/es/manifesto.html">Manifiesto Ágil · 2001</a> reúne los valores; sus principios orientan cómo llevarlos a la práctica.</p>

<!--
S07 · Idea central: Agile es un enfoque para desarrollar software mediante avances útiles, colaboración y adaptación; iterar y sumar incrementos ayudan a llevarlo a la práctica. · Tiempo: 2 min

¿Cómo organizamos un proyecto si al ver los primeros resultados podemos descubrir que necesitamos algo distinto? Agile, o desarrollo ágil, es un enfoque para organizar ese trabajo: avanzar con partes útiles, conversar con quienes necesitan el software y ajustar lo que hacemos a partir de lo aprendido. Las dos ideas de la diapositiva anterior nos ayudan a entenderlo: sumamos una capacidad y la revisamos para mejorar.

En nuestra app, podemos empezar con la consulta de movimientos y después sumar la descarga mensual. Quienes la necesitan y quienes la construyen revisan juntos si responde a la necesidad. Quizá al usarla descubramos que cuesta elegir el período; eso nos permite ajustar la siguiente parte del trabajo. La regla de acceso sigue siendo un requisito en cada avance.

Estas decisiones se apoyan en el Manifiesto Ágil, publicado en 2001. Sus valores dan prioridad a las personas y la colaboración, al software que funciona y a responder a los cambios. También reconoce valor en procesos, herramientas, documentación, contratos y planes. Planificamos y documentamos; cuando aprendemos algo relevante, revisamos el plan. Así conectamos la forma de organizarnos con lo que vimos al hablar de probar antes.

Fuente breve: F1, Manifiesto Ágil y principios en castellano. La definición y las tarjetas sintetizan sus valores y principios; la app es un ejemplo didáctico.

Transición: «Ahora pensemos en quienes construyen la app: si varias personas hacen cambios, ¿cómo los juntamos y comprobamos que funcionan juntos? Esa práctica se llama CI».
-->

---
layout: default
class: c2-slide
slideId: S08
---

# CI · Continuous Integration

<p class="mt-4 text-lg">Integrar los cambios del equipo seguido y comprobar que funcionan juntos.</p>

<div class="mt-4 grid grid-cols-2 gap-6 text-lg">
  <p><strong class="text-cyber-cyan">Repositorio:</strong> guarda el código y su historial; el equipo comparte ahí sus cambios.</p>
  <p><strong class="text-cyber-cyan">Pipeline:</strong> un flujo de tareas automáticas que el equipo configura.</p>
</div>

<svg class="mt-3 mx-auto w-full" style="height:200px" viewBox="0 0 860 220" role="img" aria-label="Un cambio compartido en el repositorio activa el pipeline configurado. Una máquina obtiene el código, prepara una versión mediante build y ejecuta las pruebas. El resultado vuelve al equipo para corregir si hace falta.">
  <defs><marker id="s08-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3EC8D8" /></marker></defs>
  <rect x="10" y="48" width="170" height="90" rx="8" fill="#151E1A" stroke="#3EC8D8" stroke-width="1.5" />
  <rect x="240" y="10" width="410" height="142" rx="10" fill="#3EC8D8" fill-opacity="0.05" stroke="#3EC8D8" stroke-width="1.5" />
  <rect x="694" y="48" width="156" height="90" rx="8" fill="#151E1A" stroke="#3EC8D8" stroke-width="1.5" />
  <g fill="#151E1A" stroke="#3EC8D8" stroke-opacity="0.6">
    <rect x="254" y="58" width="116" height="75" rx="6" />
    <rect x="392" y="58" width="116" height="75" rx="6" />
    <rect x="530" y="58" width="106" height="75" rx="6" />
  </g>
  <g fill="none" stroke="#3EC8D8" stroke-width="2" marker-end="url(#s08-arrow)">
    <path d="M184 95 H232" /><path d="M374 95 H387" /><path d="M512 95 H525" /><path d="M654 95 H686" />
    <path d="M772 143 V170 H95 V144" />
  </g>
  <g text-anchor="middle" fill="#E7E9E6" style="font-size:21px">
    <text x="95" y="79">Repositorio</text>
    <text x="445" y="37" fill="#3EC8D8">Pipeline · tareas automáticas</text>
    <text x="312" y="90">Obtener</text><text x="312" y="116">código</text>
    <text x="450" y="88">build</text>
    <text x="583" y="103">Pruebas</text>
    <text x="772" y="79">Resultado</text>
  </g>
  <g text-anchor="middle" fill="#9AA39C" style="font-size:17px">
    <text x="95" y="110">Nuevo cambio</text>
    <text x="208" y="79" style="font-size:15px">activa</text>
    <text x="450" y="115" style="font-size:15px">preparar versión</text>
    <text x="772" y="110">Pasó / falló</text>
    <text x="430" y="204" style="font-size:21px">El equipo ve el resultado y corrige si hace falta</text>
  </g>
</svg>

<p class="mt-3 text-center text-lg">Ejemplo de prueba: pedir una cuenta ajena → recibir un rechazo sin datos.</p>

<!--
S08 · Idea central: CI integra cambios seguido y comprueba el resultado; el repositorio conserva el código y el pipeline ejecuta tareas automáticas sobre una versión de ese código. · Tiempo: 4 min

¿Dónde juntamos los cambios de las personas que construyen la app y cómo sabemos si funcionan juntos? El código son las instrucciones con las que construimos el software. El equipo lo guarda y comparte en un repositorio, que también conserva el historial de cambios. Así podemos identificar qué versión estamos revisando. Integrar significa combinar los cambios con la versión compartida del equipo. Hacerlo seguido y comprobar el resultado con tareas automáticas es la práctica que llamamos CI, Continuous Integration.

Voy a seguir el dibujo. Al compartir un cambio, se activa el pipeline que configuramos para ese evento: un flujo de tareas que una máquina ejecuta. En este ejemplo obtiene esa versión del código, hace el build para preparar una versión que podamos probar y ejecuta las pruebas. El paquete que produce el build también se llama artefacto. El equipo define las tareas y cuándo se ejecutan; sus instrucciones pueden guardarse junto al código. La ejecución ocurre en una máquina de automatización, no dentro del archivo del repositorio.

Por ejemplo, alguien agrega la descarga del extracto y una prueba verifica que pedir una cuenta ajena reciba un rechazo sin datos. La pantalla de la ejecución muestra qué tarea pasó o falló; el equipo puede mirar el detalle, corregir y volver a comprobar. Ese resultado es el feedback que vuelve por la flecha. Las pruebas observan lo que definimos en ellas; necesitamos elegirlas según el comportamiento esperado.

Para conectar con nombres que quizá hayan visto: un commit registra un cambio; un PR o MR propone revisarlo e integrarlo. Abrir esa solicitud puede activar comprobaciones, pero la integración efectiva ocurre cuando combinamos el cambio. CI necesita esa integración frecuente, además de ejecutar tareas. La versión que estamos probando todavía no tiene por qué estar disponible para quienes usan la app.

Fuentes breves: F2, Martin Fowler, para CI; F15, documentación de GitHub, para repositorios, eventos, tareas y máquinas de ejecución. El dibujo es un ejemplo de pipeline, no una secuencia obligatoria para todos los equipos.

Transición: «El pipeline ya preparó y probó una versión. ¿Cómo seguimos hasta que esa versión llega a quienes usan la app? Ahí distinguimos Continuous Delivery y Continuous Deployment».
-->
---
layout: default
class: c2-slide
slideId: S09
---

# CI/CD · de la versión a producción

<p class="mt-4 text-lg"><strong>Producción:</strong> donde las personas usan la app. <strong>Desplegar:</strong> llevar una versión a ese entorno.</p>

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-lg" role="img" aria-label="El pipeline parte del código del repositorio, prepara la versión mediante build y realiza las comprobaciones necesarias para dejar una versión lista para publicar.">
  <div class="card px-3 py-3">Repositorio</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-3">build</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-3">Comprobaciones</div><span aria-hidden="true">→</span>
  <div class="card-strong px-3 py-3">Versión lista</div>
</div>

<div class="mt-5 grid grid-cols-2 gap-5 text-lg">
  <section class="card px-4 py-5">
    <strong class="text-xl text-cyber-cyan">Continuous Delivery</strong>
    <p class="mt-2">Mantener una versión lista para publicar.</p>
    <div class="mt-4 flex items-center justify-center gap-2 text-base"><span>Versión lista</span><span aria-hidden="true">→</span><span class="rounded border border-cyber-cyan px-2 py-2">Aprobación</span><span aria-hidden="true">→</span><span>Producción</span></div>
    <p class="mt-3 text-base">Publicar puede esperar una decisión humana.</p>
  </section>
  <section class="card-strong px-4 py-5">
    <strong class="text-xl text-cyber-neon">Continuous Deployment</strong>
    <p class="mt-2">Automatizar también el paso a producción.</p>
    <div class="mt-4 flex items-center justify-center gap-2 text-base"><span>Versión lista</span><span aria-hidden="true">→</span><span class="rounded border border-cyber-neon px-2 py-2">Automático</span><span aria-hidden="true">→</span><span>Producción</span></div>
    <p class="mt-3 text-base">Se publica al cumplir las condiciones definidas.</p>
  </section>
</div>

<!--
S09 · Idea central: el pipeline puede continuar desde el repositorio hasta una versión lista y su despliegue; Continuous Delivery mantiene la versión lista y Continuous Deployment automatiza también su publicación. · Tiempo: 4 min

¿Qué falta para que las personas puedan usar la versión que acabamos de preparar? Vuelvo a la misma secuencia: código en el repositorio, build y comprobaciones. El pipeline puede continuar con las tareas necesarias para dejar una versión lista para publicar. Las comprobaciones de integración son una parte de ese recorrido; estar listo para publicar puede requerir otras pruebas y preparativos.

Producción es el entorno donde funciona la app que usan las personas. Desplegar significa llevar una versión a ese entorno para que pueda usarse. Guardar el código en el repositorio y desplegar la app son pasos distintos: uno comparte las instrucciones; el otro pone a funcionar una versión del software. El equipo configura el pipeline para conectar esos pasos.

En Continuous Delivery buscamos mantener una versión lista para publicar. En la columna izquierda muestro una forma de hacerlo: una persona aprueba cuándo avanzar y el pipeline realiza el despliegue. Nuestra descarga mensual podría quedar lista mientras se coordina cuándo hacerla disponible. La aprobación humana es una posibilidad; lo que define Delivery es que la versión esté lista.

En Continuous Deployment, el pipeline también avanza automáticamente a producción cuando se cumplen las condiciones definidas. La diferencia está en ese último paso. Las pruebas y los controles siguen formando parte del recorrido, y su cobertura tiene un alcance concreto.

Si alguien autoriza el último paso, ¿dejó de ser Continuous Delivery? No: la versión sigue lista; el paso a producción espera esa decisión. CI integra y comprueba los cambios. Continuous Delivery mantiene una versión lista para publicar. Continuous Deployment automatiza además la publicación. Cuando veamos CI/CD, vamos a mirar qué pasos incluye ese pipeline y cuál de estas dos prácticas de publicación usa el equipo.

Fuentes breves: F2, Martin Fowler, para las definiciones; F15, documentación de GitHub, para el flujo automatizado. Las columnas muestran dos recorridos didácticos del mismo caso.

Transición: «Ya vimos el recorrido automático. Ahora veamos cómo colaboran las personas que construyen la app y quienes la mantienen funcionando».
-->

---
layout: default
class: c2-slide
slideId: S10
---

# DevOps: desarrollo y operación

<p class="mt-4 text-lg">DevOps conecta a quienes desarrollan la app con quienes la mantienen funcionando.</p>

<svg class="mt-3 mx-auto w-full" style="height:300px" viewBox="0 0 860 310" role="img" aria-label="Ciclo de DevOps en forma de infinito. Planificar, código, build, pruebas, release, desplegar, operar y monitorear. Desarrollo y operación colaboran durante todo el ciclo; lo observado en producción vuelve a la planificación del próximo cambio.">
  <defs><marker id="s10-direction" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#E7E9E6" /></marker></defs>
  <path d="M430 160 C365 80 330 58 245 58 C65 58 65 262 245 262 C330 262 365 240 430 160" fill="none" stroke="#3EC8D8" stroke-width="24" stroke-linecap="round" stroke-opacity="0.8" />
  <path d="M430 160 C495 80 530 58 615 58 C795 58 795 262 615 262 C530 262 495 240 430 160" fill="none" stroke="#0B100E" stroke-width="34" stroke-linecap="round" />
  <path d="M430 160 C495 80 530 58 615 58 C795 58 795 262 615 262 C530 262 495 240 430 160" fill="none" stroke="#5CFF8A" stroke-width="24" stroke-linecap="round" stroke-opacity="0.75" />
  <g fill="none" stroke="#E7E9E6" stroke-width="2" marker-end="url(#s10-direction)">
    <path d="M340 92 L313 76" /><path d="M156 244 L179 255" />
    <path d="M704 76 L728 96" /><path d="M558 253 L536 243" />
  </g>
  <g fill="#151E1A" stroke="#3EC8D8" stroke-width="1.5">
    <rect x="175" y="35" width="140" height="46" rx="8" />
    <rect x="40" y="137" width="130" height="46" rx="8" />
    <rect x="175" y="239" width="140" height="46" rx="8" />
    <rect x="299" y="204" width="125" height="46" rx="8" />
  </g>
  <g fill="#151E1A" stroke="#5CFF8A" stroke-width="1.5">
    <rect x="436" y="72" width="140" height="58" rx="8" />
    <rect x="585" y="35" width="150" height="46" rx="8" />
    <rect x="695" y="137" width="125" height="46" rx="8" />
    <rect x="551" y="239" width="150" height="46" rx="8" />
  </g>
  <g text-anchor="middle" fill="#E7E9E6" style="font-size:22px">
    <text x="245" y="66">Planificar</text>
    <text x="105" y="168">Código</text>
    <text x="245" y="270">build</text>
    <text x="361" y="235">Pruebas</text>
    <text x="506" y="96">Release</text>
    <text x="506" y="118" fill="#9AA39C" style="font-size:15px">versión preparada</text>
    <text x="660" y="66">Desplegar</text>
    <text x="757" y="168">Operar</text>
    <text x="626" y="270">Monitorear</text>
  </g>
  <g text-anchor="middle">
    <text x="245" y="148" fill="#3EC8D8" style="font-size:34px;font-weight:600">Dev</text>
    <text x="245" y="177" fill="#E7E9E6" style="font-size:20px">Desarrollo</text>
    <text x="615" y="148" fill="#5CFF8A" style="font-size:34px;font-weight:600">Ops</text>
    <text x="615" y="177" fill="#E7E9E6" style="font-size:20px">Operación</text>
  </g>
  <rect x="354" y="141" width="152" height="38" rx="19" fill="#0B100E" stroke="#E7E9E6" stroke-opacity="0.4" />
  <text x="430" y="166" text-anchor="middle" fill="#E7E9E6" style="font-size:18px">Colaboración</text>
</svg>

<p class="mt-2 text-center text-lg"><strong>Lo que aprendemos en producción vuelve al próximo cambio.</strong></p>
<p class="mt-2 text-center text-base opacity-75">CI/CD automatiza tareas dentro de este ciclo.</p>

<!--
S10 · Idea central: DevOps conecta desarrollo y operación en un ciclo de colaboración y aprendizaje; CI/CD automatiza tareas dentro de ese ciclo. · Tiempo: 3 min

¿Qué hacemos con lo que aprendemos una vez que la app está funcionando? DevOps es una forma de trabajar que conecta a quienes desarrollan el software con quienes lo mantienen funcionando. El nombre junta development, desarrollo, y operations, operación. La figura de infinito muestra que el trabajo sigue después de publicar: lo que pasa al usar y sostener la app vuelve a orientar el próximo cambio.

Voy a recorrer el lado de desarrollo con nuestra descarga mensual. Planificamos qué necesitamos, escribimos el código, hacemos el build y probamos. Son tareas que ya vimos en el pipeline. Después preparamos una release: una versión identificada para publicar. Desplegar es llevarla al entorno donde se usa la app. Operar es mantener ese servicio funcionando; monitorear es observar sus señales, como errores, tiempos de respuesta y disponibilidad.

Ahora sigo la vuelta. Supongamos que alguien con permiso recibe un rechazo al pedir su propio extracto. Quienes mantienen el servicio aportan lo que observaron; con quienes lo construyeron revisan si el problema viene del código, de la configuración o del criterio de autorización. Ese aprendizaje vuelve a la planificación y a la corrección. Así cerramos el ciclo.

En el cruce aparece colaboración. Los colores ayudan a reconocer actividades, pero las personas se coordinan durante todo el recorrido: por ejemplo, pueden acordar antes de desplegar cómo observar si la descarga funciona. El dibujo resume actividades que pueden solaparse y repetirse. CI/CD ayuda a automatizar algunas; interpretar las señales, acordar prioridades y decidir quién actúa requiere trabajo compartido.

Fuente breve: F16, Atlassian, «What is DevOps?», para colaboración y representación del ciclo en forma de infinito. El gráfico es una elaboración propia; el caso de la descarga es didáctico.

Transición: «Juntemos lo que vimos sobre Agile, CI/CD y DevOps en el recorrido de una misma función».
-->

---
layout: default
class: c2-slide
slideId: S11
---

# Agile, CI/CD y DevOps en conjunto

<div class="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-lg" role="img" aria-label="Una necesidad lleva a un cambio compartido, pasa por el pipeline y llega a producción. El aprendizaje vuelve al próximo cambio.">
  <div class="card px-3 py-4">Necesidad</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-4">Cambio</div><span aria-hidden="true">→</span>
  <div class="card-strong px-3 py-4">Pipeline</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-4">Producción</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-4">Aprendizaje</div>
</div>
<svg class="mx-auto w-full" viewBox="0 0 860 65" role="img" aria-label="Lo aprendido en producción vuelve a orientar el próximo cambio.">
  <defs><marker id="s11-feedback" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3EC8D8" /></marker></defs>
  <path d="M790 4 V26 H245 V4" fill="none" stroke="#3EC8D8" stroke-width="2.5" marker-end="url(#s11-feedback)" />
  <text x="500" y="57" text-anchor="middle" fill="#9AA39C" style="font-size:20px">Lo que aprendemos orienta el próximo cambio</text>
</svg>

<div class="mt-3 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-5">
    <strong class="text-xl text-cyber-cyan">Agile</strong>
    <p class="mt-3">Organizamos avances útiles y ajustamos el plan con lo aprendido.</p>
  </section>
  <section class="card px-4 py-5">
    <strong class="text-xl text-cyber-cyan">CI/CD</strong>
    <p class="mt-3">Integramos y comprobamos cambios; dejamos lista o publicamos una versión.</p>
  </section>
  <section class="card-strong px-4 py-5">
    <strong class="text-xl text-cyber-neon">DevOps</strong>
    <p class="mt-3">Desarrollo y operación colaboran durante todo el ciclo.</p>
  </section>
</div>

<p class="mt-5 text-center text-xl"><strong>¿Cómo sumamos seguridad a este ciclo?</strong></p>

<!--
S11 · Idea central: Agile, CI/CD y DevOps se complementan para organizar el trabajo, integrar y publicar cambios, y aprender al operar; ese ciclo también necesita seguridad. · Tiempo: 3 min

Voy a juntar lo que vimos sobre la misma descarga mensual. Hay una necesidad, hacemos un cambio, lo compartimos en el repositorio, el pipeline lo prepara y lo comprueba, y una versión puede llegar a producción. Allí observamos cómo funciona y lo que aprendemos vuelve al próximo cambio. La fila resume el recorrido; las comprobaciones y el aprendizaje también ocurren antes de publicar.

Agile nos ayuda a organizar avances útiles, conversar sobre los resultados y ajustar el plan. CI nos permite integrar los cambios seguido y comprobar que funcionan juntos. Continuous Delivery mantiene una versión lista para publicar; Continuous Deployment automatiza también ese último paso cuando se cumplen las condiciones. DevOps conecta a quienes construyen la app con quienes la mantienen funcionando, compartiendo información y decisiones durante todo el ciclo. Las tres tarjetas son miradas sobre el mismo trabajo, no etapas que se hacen una después de otra.

Ahora conecto este recorrido con el problema que vimos al comienzo: dejar toda la comprobación para el final nos puede obligar a rehacer trabajo ya construido. Si la descarga funciona pero entrega una cuenta ajena, haber automatizado el recorrido no resuelve la regla de acceso. Necesitamos acordar qué permiso se verifica, comprobar que se cumpla y observar lo que pasa al usar la app.

¿Cómo sumamos seguridad a este ciclo? Podemos revisar la regla al definir la descarga, probar los cambios y mantener la observación en producción. Con esa pregunta cerramos la introducción y pasamos a cuándo conviene hacer cada comprobación.

Fuentes breves: F1 para Agile, F2 para CI y las dos prácticas de publicación, F16 para DevOps y F4 para integrar prácticas de seguridad en el ciclo. La secuencia es una síntesis del caso didáctico.

Transición: «Veamos cómo adelantar pruebas y revisión del código, y cómo CI nos ayuda a repetirlas: ese es el principio de Shift Left».
-->

---
layout: default
class: c2-slide
slideId: S12
---

# Shift Left: probar y revisar antes

<p class="mt-4 text-lg">Adelantar pruebas y revisión del código para recibir feedback cerca del cambio.</p>

<svg class="mt-3 mx-auto w-full" style="height:280px" viewBox="0 0 860 310" role="img" aria-label="Distribución cualitativa del esfuerzo de pruebas y revisión durante el ciclo. La curva naranja concentra esfuerzo después de construir; la celeste adelanta parte de ese esfuerzo a diseño, código y build, y mantiene comprobaciones posteriores. No representa datos medidos ni una reducción del esfuerzo total.">
  <defs><marker id="s12-left" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3EC8D8" /></marker></defs>
  <text x="105" y="26" fill="#E7E9E6" style="font-size:19px">Esfuerzo en pruebas y revisión</text>
  <g style="font-size:17px" fill="#E7E9E6">
    <path d="M405 20 H439" stroke="#FF5A3A" stroke-width="3" stroke-dasharray="6 4" /><text x="447" y="26">Al final</text>
    <path d="M570 20 H604" stroke="#3EC8D8" stroke-width="3" /><text x="612" y="26">Con Shift Left</text>
  </g>
  <g stroke="#9AA39C" stroke-opacity="0.2" stroke-dasharray="3 5">
    <path d="M130 55 V235" /><path d="M300 55 V235" /><path d="M470 55 V235" /><path d="M640 55 V235" /><path d="M810 55 V235" />
  </g>
  <path d="M105 55 V235 H830" fill="none" stroke="#9AA39C" stroke-width="2" />
  <path d="M115 226 C280 226 400 219 480 195 C530 167 545 97 595 100 C650 98 715 200 765 206 C790 210 802 213 815 217 L815 235 H115 Z" fill="#FF5A3A" fill-opacity="0.09" />
  <path d="M115 199 C155 177 205 105 275 106 C355 107 390 123 455 151 C515 173 575 186 635 194 C700 204 755 205 815 211 L815 235 H115 Z" fill="#3EC8D8" fill-opacity="0.14" />
  <path d="M115 226 C280 226 400 219 480 195 C530 167 545 97 595 100 C650 98 715 200 765 206 C790 210 802 213 815 217" fill="none" stroke="#FF5A3A" stroke-width="3" stroke-dasharray="7 5" />
  <path d="M115 199 C155 177 205 105 275 106 C355 107 390 123 455 151 C515 173 575 186 635 194 C700 204 755 205 815 211" fill="none" stroke="#3EC8D8" stroke-width="4" />
  <path d="M595 67 H330" fill="none" stroke="#3EC8D8" stroke-width="2.5" marker-end="url(#s12-left)" />
  <text x="455" y="57" text-anchor="middle" fill="#3EC8D8" style="font-size:18px">Adelantar parte del esfuerzo</text>
  <g text-anchor="middle" fill="#E7E9E6" style="font-size:18px">
    <text x="130" y="263">Diseño</text><text x="300" y="263">Código</text><text x="470" y="263">build / CI</text>
    <text x="640" y="257">Pruebas del</text><text x="640" y="279">sistema</text><text x="810" y="263">Operación</text>
  </g>
  <text x="470" y="305" text-anchor="middle" fill="#9AA39C" style="font-size:16px">Distribución ilustrativa · sin escala numérica</text>
</svg>

<p class="mt-2 text-center text-lg">Pruebas del sistema y operación siguen aportando evidencia.</p>
<p class="mt-2 text-center text-base"><strong>Shift Left Security:</strong> aplicar el mismo principio a la seguridad.</p>

<!--
S12 · Idea central: Shift Left adelanta parte de las pruebas y la revisión del código, con feedback cerca del cambio y comprobaciones posteriores. · Tiempo: 3 min

¿Cómo sabemos antes si el cambio que estamos escribiendo tiene un problema? Shift Left significa adelantar actividades de comprobación respecto del momento en que las hacíamos. En pruebas, podemos verificar una pequeña parte de la lógica mientras la construimos. En código, podemos revisar reglas y patrones mientras lo escribimos o cuando compartimos el cambio. Así recibimos feedback cuando todavía tenemos presente qué queríamos hacer.

Voy a señalar el gráfico. De izquierda a derecha avanza el ciclo: diseño, código, build y CI, pruebas del sistema y operación. La altura representa dónde concentramos el esfuerzo de pruebas y revisión; no es el costo de corregir un defecto. La línea naranja muestra un ejemplo con mucho esfuerzo al final. La celeste empieza antes: definimos qué comprobar, escribimos pruebas junto al código y automatizamos controles en CI. Las dos mantienen trabajo posterior. El dibujo es cualitativo: no tiene cifras medidas y no permite calcular ahorro ni comparar el esfuerzo total por el área de las curvas.

En la descarga mensual, empezamos por acordar el permiso sobre la cuenta. Podemos probar la lógica de autorización antes de tener toda la app desplegada y repetir la comprobación al integrar el cambio. Después probamos el servicio completo y observamos lo que sucede en producción. Cada momento aporta evidencia distinta.

Cuando aplicamos este principio a seguridad hablamos de Shift Left Security: revisar diseño, código, dependencias o secretos antes, además de comprobar la aplicación y sostener controles posteriores. CI nos da un lugar donde repetir esas comprobaciones con cada cambio pertinente; también podemos hacer algunas en la computadora de quien programa, antes de compartirlo.

Fuentes breves: F17, Microsoft Learn, para Shift Left Testing y pruebas por niveles; F18, DORA, para Shift Left Security e integración en el trabajo diario. El gráfico es una elaboración propia, sin datos empíricos.

Transición: «Veamos qué tareas y herramientas podemos agregar al recorrido del código y al pipeline de CI».
-->

---
layout: default
class: c2-slide
slideId: S13
---

# Shift Left dentro del pipeline

<p class="mt-4 text-lg">Feedback local y controles automáticos cuando compartimos un cambio.</p>

<table class="mt-4 w-full text-base">
  <thead><tr class="text-left text-cyber-cyan"><th class="px-3 py-2" style="width:21%">Momento</th><th class="px-3 py-2" style="width:48%">Qué comprobamos</th><th class="px-3 py-2" style="width:31%">Herramientas · ejemplos</th></tr></thead>
  <tbody>
    <tr><td class="px-3 py-2"><strong>Código local</strong></td><td class="px-3 py-2">Linter: errores y reglas del código.<br>Pruebas unitarias: lógica aislada.</td><td class="px-3 py-2">Ruff · pytest</td></tr>
    <tr><td class="px-3 py-2"><strong>CI · cambio / PR</strong></td><td class="px-3 py-2">SAST: patrones de seguridad en código.<br>Detección de secretos.</td><td class="px-3 py-2">Semgrep · Gitleaks</td></tr>
    <tr><td class="px-3 py-2"><strong>CI · build</strong></td><td class="px-3 py-2">SCA: avisos sobre dependencias.<br>Integración: partes funcionando juntas.</td><td class="px-3 py-2">pip-audit · pytest</td></tr>
    <tr><td class="px-3 py-2"><strong>CI · app de prueba</strong></td><td class="px-3 py-2">Pruebas del servicio y DAST:<br>respuestas de la app en ejecución.</td><td class="px-3 py-2">pytest · OWASP ZAP</td></tr>
  </tbody>
</table>

<p class="mt-3 text-center text-lg">Resultado → autor del cambio → corrección y nueva ejecución.</p>
<p class="mt-2 text-center text-base">Regla del caso: con permiso, extracto; sin permiso, rechazo sin datos.</p>

<!--
S13 · Idea central: Shift Left combina feedback local y controles repetibles en CI; cada herramienta observa un aspecto y devuelve el resultado a quien puede corregir. · Tiempo: 3 min

Voy a seguir el mismo recorrido que vimos desde el repositorio hasta el pipeline. La primera fila ocurre antes: en la computadora de quien programa. Un linter revisa errores y reglas del código; una prueba unitaria comprueba una parte pequeña de la lógica. Ruff y pytest son ejemplos para Python. Quien escribe el cambio puede ejecutar esas comprobaciones y corregir antes de compartirlo.

Al subir el cambio o abrir un PR, podemos configurar CI para repetir controles. SAST analiza patrones de seguridad en el código sin ejecutarlo; Semgrep es un ejemplo. Un detector de secretos, como Gitleaks, busca posibles credenciales expuestas. El resultado queda asociado al cambio para que su autor pueda investigarlo. Estas tareas también pueden ejecutarse localmente; las ubicamos acá para ilustrar un pipeline.

Durante el build podemos revisar dependencias con SCA y probar cómo interactúan las partes. pip-audit consulta avisos sobre dependencias Python; pytest permite ejecutar pruebas que escribimos para esas interacciones. Al levantar la app en un entorno de prueba, podemos comprobar respuestas del servicio y hacer análisis dinámico, DAST, por ejemplo con OWASP ZAP. Tener la aplicación funcionando en un entorno de prueba permite hacer estas comprobaciones antes de producción.

Para la descarga, acordamos la regla antes del código: con permiso se obtiene el extracto; sin permiso, rechazo sin datos. Podemos probar la decisión de autorización de forma aislada y después verificar la respuesta real del servicio. El escáner genérico necesita complementarse con pruebas que expresen esa regla. La tabla muestra ubicaciones posibles, no casillas exclusivas: una herramienta puede ejecutarse en más de un momento y las tareas pueden correr en paralelo.

Fuentes breves: F19, documentación oficial de las herramientas; F6, OWASP, para SAST, DAST y componentes; F15, para ejecución de tareas en CI. Los nombres son ejemplos, no productos que debamos memorizar ni instalar para esta clase.

Transición: «Tener estas señales cerca del cambio le da más capacidad de actuar a quien lo escribe. Veamos qué necesita el equipo para aprovecharla».
-->

---
layout: default
class: c2-slide
slideId: S14
---

# Shift Left en el equipo

<p class="mt-4 text-lg">Autonomía para detectar, corregir y comprobar el propio cambio.</p>

<div class="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-base">
  <div class="card px-3 py-3">Ver el resultado</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-3">Entender la causa</div><span aria-hidden="true">→</span>
  <div class="card px-3 py-3">Corregir</div><span aria-hidden="true">→</span>
  <div class="card-strong px-3 py-3">Volver a probar</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4">
    <strong class="text-xl text-cyber-neon">Beneficios</strong>
    <ul class="mt-3"><li>Feedback más temprano.</li><li>Menos retrabajo tardío.</li><li>Evidencia para decidir.</li></ul>
  </section>
  <section class="card px-4 py-4">
    <strong class="text-xl text-cyber-cyan">Cambios necesarios</strong>
    <ul class="mt-3"><li>Pruebas junto al código.</li><li>Controles y criterios en CI.</li><li>Tiempo, formación y apoyo.</li></ul>
  </section>
  <section class="card-strong px-4 py-4">
    <strong class="text-xl text-cyber-alert">Retos</strong>
    <ul class="mt-3"><li>Pruebas inestables y ruido.</li><li>Pipelines más lentos.</li><li>Inversión y mantenimiento.</li></ul>
  </section>
</div>

<p class="mt-3 text-center text-base">Autonomía con criterios claros y colaboración de pruebas y seguridad.</p>

<!--
S14 · Idea central: el feedback temprano da autonomía al ingeniero cuando dispone de criterios, herramientas, tiempo y apoyo; requiere inversión y controles mantenidos. · Tiempo: 2 min

Si una prueba falla en mi cambio, puedo ver el resultado, entender qué pasó, corregir y ejecutarla otra vez. Esa capacidad de actuar cerca del problema le da autonomía al ingeniero. Para la descarga, una prueba puede mostrar que la lógica permitió una cuenta sin permiso; quien implementa tiene el contexto a mano para corregir y comprobar la respuesta esperada.

El beneficio que buscamos es feedback temprano, menos trabajo que rehacer al final y evidencia para decidir. Para conseguirlo hay que escribir y mantener pruebas junto al código, configurar controles y criterios en CI, y dar tiempo y formación al equipo. Los especialistas en pruebas y seguridad ayudan a definir qué comprobar y cómo interpretar lo que aparece.

También hay retos. Una prueba inestable puede fallar sin un cambio real en el comportamiento; una alerta puede señalar algo que, al revisar el contexto, no aplica. Ese ruido cuesta investigar y puede hacer que el equipo deje de confiar en las señales. Ejecutar demasiados controles lentos retrasa el feedback. Además, automatizar y mantener pruebas requiere inversión, especialmente cuando cuesta probar el código existente.

Podemos empezar con pruebas rápidas sobre cambios nuevos, un conjunto de reglas pertinentes y una forma clara de pedir ayuda. Quien escribe el código gana herramientas para actuar y comparte responsabilidad con el resto del equipo. El esfuerzo de preparar ese sistema puede aumentar al principio; el resultado depende de la calidad de las señales y de que tengamos capacidad de responder.

Fuentes breves: F18, DORA, para formación, colaboración y herramientas; F17, Microsoft Learn, para pruebas confiables, costos y selección de controles. Los beneficios son objetivos esperados, no una cifra de ahorro garantizada.

Transición: «Recorramos el pipeline con una pregunta práctica: qué comprobamos en cada tramo y qué hacemos con el resultado».
-->

---
layout: default
class: c2-slide
slideId: S15
---

# Controles a lo largo del pipeline

<p class="mt-4 text-lg">Seguimos la descarga de extractos desde el código hasta su uso.</p>
<div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl">1 · Código</strong><p class="mt-2" style="margin:6px 0 0">Errores, pruebas y secretos antes de compartir.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">2 · Repositorio</strong><p class="mt-2" style="margin:6px 0 0">Revisión y condiciones para integrar cambios.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">3 · CI: análisis</strong><p class="mt-2" style="margin:6px 0 0">Análisis del código y de sus dependencias.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">4 · CI: versión</strong><p class="mt-2" style="margin:6px 0 0">Build, imagen, configuración y pruebas de la app.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">5 · Entrega</strong><p class="mt-2" style="margin:6px 0 0">Firma, registro y reglas de despliegue.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl">6 · Operación</strong><p class="mt-2" style="margin:6px 0 0">Señales del uso real y seguimiento de hallazgos.</p></section>
</div>
<p class="mt-5 text-center text-xl"><strong>Control → feedback → acción → evidencia en la versión.</strong></p>

<!--
S15 · Idea central: Controles a lo largo del pipeline conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 2 min

Voy a seguir la misma descarga de extractos para mostrar qué hacemos con los controles. En cada tramo vamos a mirar cuatro cosas: sobre qué ejecutamos una comprobación, qué información devuelve, qué acción tomamos y qué cambia en lo que entregamos. Esa es la relación que importa; los nombres de productos sirven como ejemplos.

Empezamos con el código en la computadora de quien programa. Después compartimos y revisamos el cambio en el repositorio; CI repite análisis sobre ese cambio y continúa con la construcción y las pruebas. Sobre esa versión podemos revisar sus componentes, la configuración y su comportamiento en un entorno de prueba. Para entregarla, comprobamos su identidad y las condiciones del despliegue. En producción seguimos observando y gestionando hallazgos.

Estas agrupaciones ordenan el recorrido que ya vimos. Un equipo puede ejecutar tareas en paralelo o repetirlas antes y después; si no usa contenedores o Kubernetes, adapta esos controles a su forma de empaquetar y desplegar. Cada señal tiene que llegar a alguien con capacidad de interpretar y actuar sobre la versión afectada.

Fuentes breves: F4, NIST SSDF; F15, automatización en CI; F7, seguridad de la cadena de entrega.

Transición: «Empecemos con lo que puede comprobar quien escribe el código, antes de compartirlo.».
-->

---
layout: default
class: c2-slide
slideId: S16
---

# Desarrollo: código y pruebas

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="text-cyber-cyan font-semibold">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<p class="mt-4 text-lg">Revisamos reglas del código y comprobamos pequeñas partes de la lógica.</p>
<div class="mt-5 overflow-hidden rounded-lg border border-white/20 text-lg">
  <div class="grid grid-cols-[1fr_1.2fr_1.2fr] gap-4 bg-white/10 px-4 py-3 font-semibold"><span>Control</span><span>Feedback · ejemplo</span><span>Acción</span></div>
  <div class="grid grid-cols-[1fr_1.2fr_1.2fr] gap-4 border-t border-white/15 px-4 py-4"><span><strong>Linter / IDE Security</strong><br>Calidad y seguridad del código</span><span>Variable desconocida<br><span class="opacity-70">Archivo y línea afectados</span></span><span>Corregir el nombre y volver a ejecutar.</span></div>
  <div class="grid grid-cols-[1fr_1.2fr_1.2fr] gap-4 border-t border-white/15 px-4 py-4"><span><strong>Pruebas unitarias</strong><br>Lógica aislada</span><span>Cuenta sin permiso:<br>esperaba rechazo, obtuvo permiso.</span><span>Corregir la lógica de autorización y repetir la prueba.</span></div>
</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> el cambio avanza con errores básicos corregidos y pruebas sobre la lógica.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: SonarQube for IDE · pytest</p>

<!--
S16 · Idea central: Desarrollo: código y pruebas conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Mientras escribo la descarga, puedo recibir feedback en el editor, el programa donde edito el código. Un linter compara lo escrito con reglas: por ejemplo, señala una variable que no existe y me indica el archivo y la línea. SonarQube for IDE es un ejemplo de análisis que integra señales de calidad y seguridad en el editor. Corrijo el problema y vuelvo a ejecutar la comprobación. Las reglas disponibles dependen del lenguaje y la configuración; algunos análisis se complementan al conectar con el servidor del equipo.

Una prueba unitaria observa una parte pequeña de la lógica. Para la autorización, escribimos qué resultado esperamos ante una cuenta con permiso y otra sin permiso. Si la segunda devuelve permiso, la prueba falla. pytest puede ejecutar las pruebas que escribimos y mostrar el resultado esperado y el obtenido; no inventa la regla por nosotros.

Con ese feedback puedo corregir mientras todavía tengo presente el cambio. Las pruebas y sus criterios se guardan junto al código para volver a ejecutarlos en CI. Una revisión estática de estilo y una prueba de lógica aportan información distinta: pasar el linter no prueba que la autorización funcione. El comportamiento del servicio completo se comprobará más adelante.

El objetivo es llegar a la integración con errores básicos ya atendidos y con evidencia sobre la lógica que estamos agregando. El ejemplo de fallo es ilustrativo, no una salida real de un análisis sobre este repositorio.

Fuentes breves: F28, SonarQube for IDE; F19, pytest; F5, autorización por solicitud; F17, pruebas por niveles.

Transición: «Antes de registrar y compartir el cambio, también podemos revisar si se nos escapó una credencial.».
-->

---
layout: default
class: c2-slide
slideId: S17
---

# Pre-commit: secretos

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="text-cyber-cyan font-semibold">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 rounded-lg border border-cyber-alert/50 bg-cyber-alert/5 px-4 py-3 text-lg"><span class="text-sm uppercase tracking-wide opacity-70">Ejemplo de feedback</span><p class="mt-2" style="margin:6px 0 0">Posible credencial en el cambio · archivo de configuración · línea señalada.</p></div><div class="mt-4 grid grid-cols-2 gap-5 text-lg">
  <section class="card px-5 py-4"><strong class="text-xl text-cyber-cyan">Antes de compartir</strong><p class="mt-3" style="margin:12px 0 0">Secret scanning en pre-commit: revisar la coincidencia, quitar el secreto del código y usar una referencia.</p></section>
  <section class="card-strong px-5 py-4"><strong class="text-xl text-cyber-alert">Si ya quedó expuesto</strong><p class="mt-3" style="margin:12px 0 0">Invalidar o rotar la credencial y revisar su uso. Borrar el archivo no la invalida.</p></section>
</div>
<p class="mt-4 text-center text-lg">La app obtiene el secreto de un gestor, con identidad y permisos definidos.</p><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> reducir la exposición de credenciales y controlar cómo se obtienen.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Gitleaks · HashiCorp Vault</p>

<!--
S17 · Idea central: Pre-commit: secretos conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Un commit registra el cambio en el historial. Pre-commit es el momento anterior: podemos ejecutar un control antes de registrarlo. Un detector de secretos, como Gitleaks, busca patrones que podrían ser credenciales y señala dónde aparecieron. Si lo configuramos como condición del commit, una coincidencia puede detener ese registro hasta que la revisemos. Después CI puede repetir el control, porque un control local puede omitirse.

Si la coincidencia es una credencial real que todavía no compartimos, la quitamos del código y usamos una referencia. Un gestor como Vault permite que la app o el pipeline obtengan un secreto según su identidad y permisos. También hace falta cuidar qué termina en logs, archivos y artefactos.

Si el token de despliegue ya quedó expuesto, cambia la respuesta: hay que invalidarlo o rotarlo y revisar su uso. Borrar el archivo no desactiva la credencial ni sus copias. Una excepción que permita continuar el pipeline tampoco reemplaza esa invalidación.

El detector aporta una señal; el gestor ayuda a custodiar y entregar credenciales. Configuramos ambos según el sistema. La salida de la pantalla es una ilustración sin secretos reales. Para entregar, queremos que las credenciales no viajen dentro del código y que su acceso tenga un mecanismo controlado.

Fuentes breves: F19, Gitleaks; F9, OWASP Secrets Management; F20, Vault.

Transición: «Ahora compartimos el cambio: el repositorio puede exigir una revisión y comprobaciones antes de integrarlo.».
-->

---
layout: default
class: c2-slide
slideId: S18
---

# Repositorio: cambios revisados

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">Permisos, revisión del PR y comprobaciones requeridas sobre el cambio.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Revisión pendiente o una prueba requerida fallida: la integración queda bloqueada.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Corregir, pedir revisión y repetir las comprobaciones antes de integrar.</p></section>
</div><div class="mt-5 card px-5 py-4 text-lg"><strong>Ejemplo:</strong> la ruta nueva omite el permiso por cuenta → la revisión pide el control y una prueba de rechazo.</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> el código compartido incorpora cambios bajo reglas de revisión acordadas.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: GitHub rulesets</p>

<!--
S18 · Idea central: Repositorio: cambios revisados conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 2 min

El repositorio guarda el código y su historial; la versión principal reúne el trabajo del equipo. Un PR es una solicitud para revisar e integrar un cambio. Podemos configurar quién puede modificar esa versión, qué revisión necesitamos y qué comprobaciones deben pasar antes de integrar. GitHub rulesets es un ejemplo de cómo expresar esas condiciones.

En la descarga, una persona que revisa puede notar que la ruta nueva no comprueba permiso por cuenta. Devuelve ese comentario y pide una prueba que demuestre el rechazo. Si una comprobación requerida falla o falta una revisión, la plataforma informa la condición pendiente y puede bloquear la integración.

La acción concreta es corregir, repetir los controles y completar la revisión. Configurar protecciones incluye decidir quién puede modificar esas reglas y cómo se autorizan las excepciones. Abrir un PR y obtener algunas señales verdes no significa que ya se integró el cambio. Para la entrega, estas condiciones ayudan a conservar un historial de qué se revisó y por qué se aceptó.

Fuentes breves: F20, GitHub rulesets y reglas disponibles; F15, eventos y tareas de CI.

Transición: «Entre las comprobaciones que puede exigir el repositorio está el análisis de seguridad del código: SAST.».
-->

---
layout: default
class: c2-slide
slideId: S19
---

# CI: análisis estático con SAST

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 rounded-lg border border-cyber-alert/50 bg-cyber-alert/5 px-4 py-3 text-lg"><span class="text-sm uppercase tracking-wide opacity-70">Ejemplo de feedback</span><p class="mt-2" style="margin:6px 0 0">Posible inyección SQL · extractos.py:42<br><span class="opacity-75">Una entrada del usuario se concatena en una consulta a datos.</span></p></div><div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">SAST analiza patrones y flujos en el código sin ejecutar la app.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Regla detectada, archivo, línea y explicación del problema posible.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Revisar la señal; usar consultas parametrizadas y repetir el análisis.</p></section>
</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> corregir una construcción riesgosa de la consulta antes de integrar.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Semgrep</p>

<!--
S19 · Idea central: CI: análisis estático con SAST conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

SAST significa análisis estático de seguridad de aplicaciones. Observa el código sin tener que levantar la app y devuelve coincidencias con reglas y flujos que analiza. Semgrep puede ejecutarse localmente o en CI; acá lo usamos como una comprobación sobre el cambio.

En este ejemplo ilustrativo, el servicio construye una consulta a datos concatenando una entrada del usuario. SQL es el lenguaje de esas consultas. Si tratamos la entrada como parte de la instrucción, podría cambiar lo que la base interpreta. La señal apunta a una posible inyección SQL y muestra archivo, línea y explicación.

El autor del cambio revisa cómo llega ese valor y, si confirma el problema, usa una consulta parametrizada: los datos se pasan separados de la instrucción. Después repite el análisis y las pruebas del servicio. El resultado tiene que ayudarnos a localizar y corregir, no quedarse como un número en un tablero.

Cada análisis depende de sus reglas, lenguajes y contexto. Una señal puede no aplicar y requiere validación; tampoco un análisis sin hallazgos demuestra que la autorización por cuenta sea correcta. Esa regla del negocio necesita una prueba explícita. Para esta entrega, corregimos la forma riesgosa de consultar y conservamos pruebas que comprueban el resultado.

Fuentes breves: F19, Semgrep; F6, análisis de código; F27, OWASP SQL Injection Prevention.

Transición: «El código propio es una parte de la versión. También incorporamos bibliotecas de terceros: revisemos esas dependencias.».
-->

---
layout: default
class: c2-slide
slideId: S20
---

# CI: dependencias y SCA

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 rounded-lg border border-cyber-alert/50 bg-cyber-alert/5 px-4 py-3 text-lg"><span class="text-sm uppercase tracking-wide opacity-70">Ejemplo de feedback</span><p class="mt-2" style="margin:6px 0 0">lib-extractos 2.4.1 · aviso de vulnerabilidad conocida<br><span class="opacity-75">Componente y versión ficticios; puede haber una dependencia transitiva.</span></p></div><div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">SCA compara las dependencias y versiones con avisos conocidos.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Paquete afectado, aviso, severidad y versiones corregidas si se conocen.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Confirmar el uso, elegir una actualización compatible y repetir análisis y pruebas.</p></section>
</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> sustituir el componente afectado y comprobar que la descarga sigue funcionando.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: pip-audit · Trivy</p>

<!--
S20 · Idea central: CI: dependencias y SCA conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Una dependencia es una biblioteca que incorporamos al servicio; otra puede llegar porque esa biblioteca la necesita. Esa segunda relación es transitiva. SCA, análisis de composición de software, ayuda a identificar componentes y señales sobre sus versiones. pip-audit analiza avisos de dependencias Python; Trivy también ofrece análisis de componentes en distintos objetivos.

Nuestro aviso ficticio menciona lib-extractos 2.4.1. El feedback identifica paquete, versión y vulnerabilidad conocida, y puede señalar una versión corregida. Primero confirmamos que el componente esté presente y cómo se use. La severidad orienta, pero también importa la exposición y el efecto posible sobre este servicio.

Si corresponde actualizar, elegimos una versión compatible, cambiamos la dependencia y repetimos el análisis. También ejecutamos las pruebas de la descarga: que desaparezca un aviso no alcanza si la actualización rompió la función. Si falta contexto o no hay una corrección aplicable, asignamos seguimiento y decidimos según la política del equipo.

Para la entrega, queremos corregir el componente afectado y sostener el comportamiento del servicio. Un aviso no demuestra explotación; un análisis sin avisos tampoco cubre defectos desconocidos. Conservamos la versión y la fecha del análisis para revisar qué sabíamos al decidir.

Fuentes breves: F6, OWASP Component Analysis; F19, pip-audit; F21, Trivy; F10, evaluación de riesgo.

Transición: «Con el código y las dependencias revisados, construimos una versión identificable del servicio.».
-->

---
layout: default
class: c2-slide
slideId: S21
---

# Build: construir la versión

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">Construcción automatizada desde código identificado, con configuración revisada y permisos mínimos.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">El build de CI no encuentra una dependencia que estaba solo en mi computadora.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Declarar esa dependencia y su versión; reconstruir con las entradas acordadas.</p></section>
</div><div class="mt-5 card px-5 py-4 text-lg"><strong>Secretos del build:</strong> acceso temporal para la tarea; evitar incorporarlos al paquete final.</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> saber qué se construyó y qué proceso produjo esa versión.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: BuildKit</p>

<!--
S21 · Idea central: Build: construir la versión conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

El build transforma el código y sus dependencias en un artefacto que podamos probar y entregar: por ejemplo, un paquete o una imagen. BuildKit es una herramienta para construir imágenes. El sistema devuelve qué pasos se ejecutaron, dónde falló la construcción y qué artefacto produjo si terminó bien.

Las condiciones de seguridad las define el equipo: código e instrucciones revisadas, versiones de entradas fijadas, una máquina de ejecución controlada y una identidad con permisos limitados. Si una tarea del build necesita una dependencia que solo estaba instalada en mi computadora, el log indica dónde falló. La declaramos junto al código con su versión y reconstruimos. Así las entradas dejan de depender de lo que alguien tenía instalado localmente. También revisamos cambios a los archivos del pipeline, porque son instrucciones que se ejecutan con sus permisos.

Si el build necesita acceder a un recurso privado, la credencial debe estar disponible para la tarea sin quedar copiada al artefacto. BuildKit admite montajes de secretos para ese acceso temporal; todavía debemos evitar que la propia tarea escriba el secreto en archivos o logs.

Un builder no es un escáner ni garantiza una construcción segura por instalarlo. Para la entrega buscamos vincular el artefacto con el código y el proceso que lo generó. La reproducibilidad depende de controlar entradas y configuración; repetir un build sin esas condiciones puede producir algo diferente. Después analizamos el contenido concreto de la imagen.

Fuentes breves: F21, BuildKit y secretos del build; F7, riesgos de CI/CD; F15, ejecución automatizada.

Transición: «La versión puede incluir una imagen con bibliotecas y sistema base: comprobemos su contenido y conservemos el inventario.».
-->

---
layout: default
class: c2-slide
slideId: S22
---

# Imágenes y SBOM

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<p class="mt-4 text-lg">Una imagen empaqueta la app y lo que necesita para ejecutarse.</p>
<div class="mt-4 grid grid-cols-2 gap-5 text-lg">
  <section class="card px-5 py-4"><strong class="text-xl text-cyber-cyan">Escaneo de imagen</strong><p class="mt-3" style="margin:12px 0 0">Trivy identifica componentes y avisos en la app y su imagen base.</p><p class="mt-4" style="margin:16px 0 0"><strong>Acción:</strong> actualizar base o biblioteca, reconstruir y volver a escanear.</p></section>
  <section class="card-strong px-5 py-4"><strong class="text-xl text-cyber-neon">SBOM · inventario</strong><p class="mt-3" style="margin:12px 0 0">Syft genera la lista de componentes y versiones encontrados.</p><p class="mt-4" style="margin:16px 0 0"><strong>Acción:</strong> guardar el inventario por identificador de imagen.</p></section>
</div>
<div class="mt-4 card px-5 py-3 text-lg"><strong>Ejemplo:</strong> el código propio no cambió, pero la imagen contiene una biblioteca afectada.</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> revisar lo que realmente empaquetamos y poder rastrearlo después.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Trivy · Syft</p>

<!--
S22 · Idea central: Imágenes y SBOM conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Una imagen de contenedor empaqueta la app y elementos necesarios para ejecutarla. También puede incluir bibliotecas o paquetes de un sistema base. Por eso revisar solo el código del servicio no muestra todo lo que estamos distribuyendo.

Trivy puede analizar esa imagen y devolver componentes, versiones y avisos conocidos. Si aparece un paquete afectado en la base, actualizamos la base o la biblioteca, reconstruimos la imagen y repetimos el escaneo y las pruebas. La nueva comprobación debe corresponder al nuevo artefacto, no a la imagen anterior.

Una SBOM es un inventario de componentes del software. Syft puede generarla a partir de imágenes y archivos. La conservamos asociada al identificador de esa imagen para responder dónde quedó una biblioteca si mañana llega un aviso. CycloneDX y SPDX son formatos posibles para ese inventario; no hace falta memorizarlos acá.

El escaneo devuelve avisos; el inventario registra qué se encontró. Son evidencias distintas. Su cobertura depende de lo que se detecta y de las fuentes disponibles. Para la entrega revisamos la imagen completa y guardamos un inventario que permite investigar después. Ni una SBOM ni la ausencia de avisos demuestra seguridad total.

Fuentes breves: F21, Trivy y Syft; F8, CISA SBOM; F13, formatos de inventario.

Transición: «El paquete también necesita una configuración para ejecutarse: esa configuración se puede revisar antes de desplegar.».
-->

---
layout: default
class: c2-slide
slideId: S23
---

# Infraestructura como código

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<p class="mt-4 text-lg">IaC define infraestructura y configuraciones en archivos que podemos revisar en CI.</p><div class="mt-4 rounded-lg border border-cyber-alert/50 bg-cyber-alert/5 px-4 py-3 text-lg"><span class="text-sm uppercase tracking-wide opacity-70">Ejemplo de feedback</span><p class="mt-2" style="margin:6px 0 0">Configuración: permisos elevados y acceso de red demasiado amplio.</p></div><div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">Reglas sobre archivos de IaC y configuraciones de Kubernetes.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Recurso, propiedad y regla incumplida; ubicación en el archivo.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Reducir permisos y exposición; volver a analizar la configuración.</p></section>
</div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> usar configuraciones revisadas y guardar evidencia de las reglas comprobadas.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Checkov · Kubescape</p>

<!--
S23 · Idea central: Infraestructura como código conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Además del código de la app, podemos guardar archivos que describen cómo crear infraestructura y cómo ejecutar el servicio. A esto se lo conoce como infraestructura como código, IaC. Si usamos Kubernetes, una plataforma para ejecutar y organizar contenedores, también hay archivos que definen permisos y comportamiento de esas cargas.

Checkov puede analizar configuraciones de infraestructura; Kubescape puede revisar recursos y configuraciones de Kubernetes, incluso antes de desplegarlos. El feedback señala recurso, propiedad y regla que no se cumple. En nuestro ejemplo, la configuración pide permisos elevados y una exposición de red más amplia de la que necesita la descarga.

La acción es ajustar esos archivos: reducir permisos, limitar accesos y repetir los controles con las reglas acordadas. Después comprobamos que la función siga operando. La regla técnica debe corresponder a una necesidad real; una excepción requiere motivo y autoridad definida.

Podemos repetir estas comprobaciones cuando cambian archivos y sobre configuraciones ya desplegadas. Guardar regla, resultado, versión y fecha permite revisar de forma continua el cumplimiento de esas reglas. Ese reporte tiene un alcance concreto y no equivale a certificar el cumplimiento completo de una norma. El efecto sobre la entrega es una configuración revisada, con menos exposición innecesaria y evidencia de lo comprobado.

Fuentes breves: F22, Checkov y Kubescape; F4, criterios y evidencia durante el ciclo.

Transición: «Ahora levantamos la versión en un entorno de prueba para observar qué hace la app de verdad.».
-->

---
layout: default
class: c2-slide
slideId: S24
---

# Pruebas de API y DAST

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<p class="mt-4 text-lg">Una API es la interfaz por la que otro programa le pide acciones o datos al servicio.</p>
<div class="mt-4 grid grid-cols-2 gap-5 text-lg">
  <section class="card px-5 py-4"><strong class="text-xl text-cyber-cyan">Calidad y seguridad de la API</strong><p class="mt-3" style="margin:12px 0 0">Contrato y casos definidos: formato, errores y permisos.</p><p class="mt-4" style="margin:16px 0 0"><strong>Feedback:</strong> con permiso entrega el extracto; sin permiso devuelve datos → prueba fallida.</p></section>
  <section class="card-strong px-5 py-4"><strong class="text-xl text-cyber-cyan">DAST · app ejecutándose</strong><p class="mt-3" style="margin:12px 0 0">Análisis dinámico sobre un entorno de prueba.</p><p class="mt-4" style="margin:16px 0 0"><strong>Feedback:</strong> solicitud, respuesta y evidencia de un problema posible.</p></section>
</div>
<p class="mt-4 text-center text-lg"><strong>Acción:</strong> corregir el comportamiento y repetir las pruebas sobre esa versión.</p>
<p class="mt-3 text-center text-base">Entrega esperada: cuenta autorizada → extracto; cuenta ajena → rechazo sin saldo ni movimientos.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Schemathesis · OWASP ZAP</p>

<!--
S24 · Idea central: Pruebas de API y DAST conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Después de construir, levantamos esa versión en un entorno de prueba. Una API es la interfaz que permite a otros programas pedir acciones o datos al servicio. Podemos comprobar si las solicitudes y respuestas respetan un contrato y si la lógica cumple los casos acordados.

Schemathesis genera pruebas a partir de una descripción de la API y ayuda a encontrar errores del servidor o respuestas que no respetan ese contrato. Además necesitamos pruebas escritas para nuestra regla de autorización: con permiso obtenemos el extracto; con una identidad válida sin permiso recibimos rechazo sin saldo ni movimientos. Un generador a partir del contrato no conoce automáticamente esa regla del negocio.

DAST es análisis dinámico de seguridad: interactúa con una app ejecutándose y observa respuestas. OWASP ZAP puede automatizar ese análisis en el entorno de prueba. Su feedback permite examinar una solicitud, una respuesta y la evidencia del problema posible. Configuramos alcance y credenciales de prueba según lo que queremos observar.

Si el servicio devuelve datos de una cuenta ajena, corregimos el control del servidor y repetimos los casos permitidos y denegados. Ocultar un botón en la pantalla no corrige una respuesta que ya entregó datos. También repetimos las comprobaciones sobre el nuevo artefacto construido después de corregir. Así obtenemos evidencia del comportamiento de la versión que vamos a entregar; un resultado favorable tiene el alcance de los casos ejecutados.

Fuentes breves: F23, Schemathesis; F19, ZAP; F5, autorización; F6, pruebas web.

Transición: «Con la versión comprobada, necesitamos preservar su identidad y controlar cómo se publica el artefacto.».
-->

---
layout: default
class: c2-slide
slideId: S25
---

# Firma y registro de artefactos

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<p class="mt-4 text-lg">El registry guarda los artefactos; la firma vincula su contenido con una identidad.</p><div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">Firma y verificación del artefacto; procedencia y políticas del registry.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Identificador del contenido, identidad del firmante y evidencia de cómo se construyó.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Verificar identidad y procedencia esperadas; conservar el mismo artefacto.</p></section>
</div><div class="mt-4 rounded-lg border border-cyber-alert/50 bg-cyber-alert/5 px-4 py-3 text-lg"><span class="text-sm uppercase tracking-wide opacity-70">Ejemplo de feedback</span><p class="mt-2" style="margin:6px 0 0">La firma no corresponde a la identidad autorizada → detener y revisar el artefacto.</p></div><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> conservar la integridad y trazabilidad de la versión que vamos a desplegar.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Cosign · Harbor</p>

<!--
S25 · Idea central: Firma y registro de artefactos conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

El registry, o registro de artefactos, almacena las versiones construidas para que puedan descargarse y desplegarse. Harbor es un ejemplo: puede controlar acceso y conectar escáneres para revisar artefactos almacenados. La publicación debe preservar qué versión quedó disponible y qué comprobaciones la acompañan.

Una firma digital permite verificar la relación entre un contenido y una identidad o clave. Cosign puede firmar y verificar imágenes y atestaciones. Un identificador del contenido, llamado digest, ayuda a comprobar que estamos usando el mismo artefacto. La procedencia registra datos de cómo se construyó; validamos esa evidencia contra condiciones confiables acordadas.

Si la identidad de la firma no es la autorizada, detenemos este recorrido y revisamos el artefacto y el proceso de publicación. Si coincide, todavía necesitamos las pruebas y controles del producto: firmar código vulnerable no lo vuelve seguro. La firma aporta integridad e identidad; la procedencia aporta trazabilidad del proceso.

Para entregar, vinculamos código, build, artefacto, resultados y procedencia, y desplegamos el contenido que efectivamente comprobamos. Verificar una firma cualquiera, sin revisar quién la produjo y sobre qué contenido, no alcanza. El ejemplo de la pantalla usa una política didáctica de firmantes autorizados.

Fuentes breves: F24, Cosign y Harbor; F13, SLSA; F7, cadena de entrega.

Transición: «El artefacto está identificado. Al desplegarlo también comprobamos políticas, permisos y comunicaciones.».
-->

---
layout: default
class: c2-slide
slideId: S26
---

# Despliegue: políticas y permisos

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Operación</span></div>

<div class="mt-4 grid grid-cols-3 gap-4 text-lg">
  <section class="card px-4 py-4"><strong class="text-xl text-cyber-cyan">Control</strong><p class="mt-3" style="margin:12px 0 0">Políticas como código, identidad y reglas de comunicación.</p></section>
  <section class="card px-4 py-4"><strong class="text-xl">Feedback</strong><p class="mt-3" style="margin:12px 0 0">Imagen no autorizada, permiso excesivo o conexión bloqueada.</p></section>
  <section class="card-strong px-4 py-4"><strong class="text-xl text-cyber-neon">Acción</strong><p class="mt-3" style="margin:12px 0 0">Corregir la configuración y repetir las reglas antes de desplegar.</p></section>
</div><div class="mt-5 card px-5 py-4 text-lg"><strong>Ejemplo:</strong> extractos puede consultar movimientos; una conexión adicional queda sujeta a la política de red.</div>
<p class="mt-4 text-center text-lg">Los secretos se obtienen mediante identidad autorizada, fuera del código y la imagen.</p><p class="mt-4 text-center text-lg"><strong>Para la entrega:</strong> permisos y comunicaciones definidos para esa versión.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: Kyverno · Cilium</p>

<!--
S26 · Idea central: Despliegue: políticas y permisos conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Desplegar es llevar la versión al entorno donde se ejecuta. Podemos expresar políticas como código: reglas que las herramientas evalúan para decidir si una configuración puede avanzar. Un gate es esa condición de paso. En Kubernetes, Kyverno permite validar políticas y, según el modo configurado, rechazar cambios que no cumplen o informar el resultado.

El feedback puede señalar una imagen que no proviene del lugar autorizado o permisos que exceden la regla. Ajustamos la referencia del artefacto o la configuración y repetimos la comprobación. La identidad que despliega también debe tener solo los permisos necesarios. Si hace falta un secreto, lo obtiene con acceso autorizado al gestor, sin incorporarlo al código o a la imagen.

La comunicación entre servicios es otro control. Cilium puede aplicar políticas de red: definimos qué servicio puede hablar con cuál y comprobamos conexiones permitidas y bloqueadas. En el caso, extractos necesita consultar movimientos. Las políticas efectivas dependen de su selección, reglas y modo de aplicación; instalar una herramienta no segmenta por sí solo todo el sistema.

Las decisiones sobre continuar, pausar o autorizar una excepción requieren una política y una autoridad local. Para una credencial activa y expuesta, la respuesta sigue siendo invalidarla y revisar su uso; una excepción no sustituye eso. Para la entrega queremos una versión que funcione bajo condiciones de acceso y comunicación explícitas, y comprobar también su funcionamiento después del despliegue.

Fuentes breves: F22, Kyverno y Cilium; F9, secretos; F10, decisión contextual de riesgo.

Transición: «La app ya funciona en producción. Necesitamos observar su comportamiento y poder responder a señales nuevas.».
-->

---
layout: default
class: c2-slide
slideId: S27
---

# Runtime: observar y responder

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">Operación</span></div>

<p class="mt-4 text-lg">Runtime es la ejecución real de la app y su entorno.</p>
<div class="mt-4 grid grid-cols-2 gap-5 text-lg">
  <section class="card px-5 py-4"><strong class="text-xl text-cyber-cyan">Calidad del servicio</strong><p class="mt-3" style="margin:12px 0 0">Métricas, trazas y logs: errores, lentitud y rechazos.</p><p class="mt-4" style="margin:16px 0 0"><strong>Ejemplo:</strong> descarga rechazada para cuenta con permiso.</p><p class="mt-3" style="margin:12px 0 0"><strong>Acción:</strong> revisar la autorización y repetir la consulta.</p></section>
  <section class="card-strong px-5 py-4"><strong class="text-xl text-cyber-alert">Seguridad en ejecución</strong><p class="mt-3" style="margin:12px 0 0">Reglas sobre eventos y procesos en ejecución.</p><p class="mt-4" style="margin:16px 0 0"><strong>Ejemplo:</strong> proceso inesperado en el contenedor.</p><p class="mt-3" style="margin:12px 0 0"><strong>Acción:</strong> investigar y aislarlo si corresponde.</p></section>
</div>
<p class="mt-3 text-center text-base">Las pruebas previas tienen cobertura parcial; producción necesita observación y respuesta.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplos de herramientas: OpenTelemetry · Falco</p>

<!--
S27 · Idea central: Runtime: observar y responder conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 3 min

Runtime es la ejecución de la app y su entorno. Aunque las comprobaciones anteriores hayan pasado, el uso real o un cambio posterior puede mostrar un problema. La observación necesita señales interpretables y alguien que pueda responder.

OpenTelemetry permite generar y recolectar métricas, trazas y logs. Una métrica resume, por ejemplo, tiempos o errores; una traza ayuda a seguir una solicitud entre partes; un log registra eventos. Esas señales se envían al sistema de observación donde se analizan y se configuran alertas. OpenTelemetry no es por sí mismo ese tablero o sistema de alertas.

Falco permite evaluar eventos con reglas de seguridad durante la ejecución. Una regla podría señalar un proceso inesperado dentro del contenedor. La señal necesita contexto: identificar servicio y versión, contrastar el comportamiento esperado e investigar. En la descarga, también podemos observar un aumento de rechazos a cuentas que sí tienen permiso y usar la información para localizar la causa.

La acción depende del caso: contener un comportamiento sospechoso, corregir el código o la configuración y verificar la recuperación. Si corresponde volver a una versión anterior, eso no deshace una exposición de datos ya ocurrida. Las señales alimentan el próximo cambio y el seguimiento. Para sostener la entrega, las pruebas previas y la observación real aportan evidencias complementarias.

Fuentes breves: F25, OpenTelemetry y Falco; F4, respuesta y aprendizaje durante el ciclo.

Transición: «Todas estas herramientas producen señales. Cerremos el recorrido con qué hacemos para que un hallazgo llegue a resolverse.».
-->

---
layout: default
class: c2-slide
slideId: S28
---

# Hallazgos: de abiertos a resueltos

<div class="mt-3 flex items-center gap-3 text-sm" aria-label="Recorrido del pipeline"><span class="opacity-50">Código</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Repositorio</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · análisis</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">CI · versión</span><span aria-hidden="true" class="opacity-40">→</span><span class="opacity-50">Entrega</span><span aria-hidden="true" class="opacity-40">→</span><span class="text-cyber-cyan font-semibold">Operación</span></div>

<p class="mt-4 text-lg">Gestionamos el resultado con versión, contexto y una persona responsable.</p>
<div class="mt-4 overflow-hidden rounded-lg border border-white/20 text-lg">
  <div class="grid grid-cols-[0.7fr_1.7fr_1fr] gap-4 bg-white/10 px-4 py-3 font-semibold"><span>Paso</span><span>Acción</span><span>Evidencia</span></div>
  <div class="grid grid-cols-[0.7fr_1.7fr_1fr] gap-4 border-t border-white/15 px-4 py-3"><strong>Validar</strong><span>Confirmar versión, exposición y efecto.</span><span>Hallazgo y contexto.</span></div>
  <div class="grid grid-cols-[0.7fr_1.7fr_1fr] gap-4 border-t border-white/15 px-4 py-3"><strong>Decidir</strong><span>Priorizar y asignar responsable/plazo; excepción con autoridad.</span><span>Decisión registrada.</span></div>
  <div class="grid grid-cols-[0.7fr_1.7fr_1fr] gap-4 border-t border-white/15 px-4 py-3"><strong>Cerrar</strong><span>Corregir y repetir la comprobación; guardar resultado.</span><span>Versión corregida y verificación.</span></div>
</div>
<p class="mt-4 text-center text-lg"><strong>Detectado no significa resuelto.</strong> Borrar un token no permite cerrar su exposición.</p>
<p class="mt-2 text-center text-sm opacity-70">Ejemplo de herramienta: DefectDojo</p>

<!--
S28 · Idea central: Hallazgos: de abiertos a resueltos conecta control, feedback, acción y efecto sobre la entrega. · Tiempo: 2 min

Un gestor de hallazgos como DefectDojo puede reunir resultados de controles, seguir su estado y ayudar a evitar duplicados. El feedback útil conecta una señal con el servicio y la versión afectados. Después el equipo valida qué aplica, prioriza y asigna quién sostiene el seguimiento.

Para el aviso de una biblioteca, confirmamos componente, uso y exposición; la severidad es una entrada para decidir. La respuesta puede ser corregir, pausar para analizar o registrar una excepción temporal autorizada, con motivo, alcance y revisión. Esas condiciones las define la organización; no las decide automáticamente un escáner.

Para cerrar una corrección necesitamos la versión nueva y una comprobación repetida con su resultado. Detectado no significa resuelto. Si el ticket dice que borramos el token, todavía falta invalidar o rotar la credencial expuesta y revisar su uso. Si una señal no aplica, dejamos la validación y su motivo.

Guardar control, versión, resultado, responsable, decisión y verificación permite revisar lo que se hizo. El beneficio para la entrega es que los problemas conocidos tienen una respuesta trazable y alguien que la sostiene. Ahora vamos a hablar de cómo el equipo consigue tiempo, criterios y colaboración para realizar ese trabajo.

Fuentes breves: F26, DefectDojo; F10, evaluación de riesgo; F9, credenciales; F4, respuesta a hallazgos.

Transición: «Ya vimos las herramientas y las acciones. Ahora veamos cómo desarrollo, seguridad y operación sostienen ese trabajo en conjunto.».
-->

---
layout: default
class: c2-slide
slideId: S29
---

# DevSecOps: romper los silos

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Desarrollo, seguridad y operación integran seguridad durante todo el ciclo.</p>

<div class="mt-5 grid grid-cols-2 gap-5 text-[20px]">
  <div class="card px-5 py-4">
    <strong class="text-cyber-alert">Trabajo en silos</strong>
    <p style="margin:8px 0 0">Cada área cuida su objetivo, con poca coordinación.</p>
    <div class="mt-4 border-l-2 border-cyber-alert pl-4">
      <p style="margin:0"><strong>Desarrollo:</strong> «Tenemos que salir el viernes».</p>
      <p style="margin:10px 0 0"><strong>Seguridad:</strong> «Así no puede salir».</p>
    </div>
    <p class="text-cyber-alert" style="margin:16px 0 0">Revisión al final → conflicto y retrabajo.</p>
  </div>
  <div class="card-strong px-5 py-4">
    <strong class="text-cyber-neon">Trabajo compartido</strong>
    <p style="margin:8px 0 0">Un objetivo común: entregar una función útil, segura y operable.</p>
    <p style="margin:16px 0 0">Acordar riesgos y criterios desde el diseño.</p>
    <p style="margin:10px 0 0">Dar tiempo y apoyo para corregir.</p>
    <p style="margin:10px 0 0">Revisar hallazgos juntos, con un responsable.</p>
  </div>
</div>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[20px]">El pipeline aplica los controles acordados y devuelve evidencia para decidir.</div>

<!--
S29 · Idea central: DevSecOps requiere objetivos y acuerdos compartidos para integrar seguridad en el ciclo de entrega · Tiempo: 3 min

Ya vimos controles en distintas etapas del pipeline. Para sostenerlos necesitamos una forma de trabajar: DevSecOps, por Development, Security and Operations, integra seguridad en la colaboración entre desarrollo y operación durante todo el ciclo. Incluye personas, acuerdos, prácticas y automatización.

Voy a representar una tensión típica de un esquema tradicional organizado en silos. Un silo es un área que trabaja con poca coordinación con las demás. Desarrollo escucha «la función de extractos tiene que salir el viernes». Seguridad recibe la versión casi terminada, encuentra un problema de permisos y pide frenar. Desde desarrollo se siente «seguridad nos bloquea»; desde seguridad, «nos traen todo a último momento». Operación recibe la presión para desplegar y después sostener el servicio.

Son frases ilustrativas, no una descripción de todos los equipos ni una pelea inevitable. El conflicto puede venir de objetivos separados, falta de tiempo y una revisión tardía. Cada área tiene una preocupación válida: entregar la función, cuidar los datos y mantener el servicio. Si solo medimos a desarrollo por velocidad y a seguridad por frenar riesgos, empujamos a los equipos en direcciones distintas.

Con DevSecOps empezamos la conversación antes. Para la descarga de extractos acordamos quién puede consultar cada cuenta, cómo lo vamos a comprobar y qué hacemos si falla. Desarrollo puede corregir con feedback cercano; seguridad aporta criterios, guías y ayuda especializada; operación participa en el despliegue y la respuesta. La organización reserva tiempo para ese trabajo y permite reportar problemas sin castigar a quien los trae.

El pipeline vuelve operativos parte de esos acuerdos: ejecuta pruebas, presenta hallazgos y conserva evidencia. También necesitamos personas que revisen, decidan y aprendan de los resultados. DORA respalda integrar seguridad en el trabajo cotidiano y advierte sobre la falta de colaboración y la participación tardía; Atlassian describe la integración organizacional y técnica. Fuentes breves: F18 y F29.

Ahora voy a mostrar dónde se cruzan las incumbencias de desarrollo, seguridad y operación.
-->

---
layout: default
class: c2-slide
slideId: S30
---

# DevSecOps: roles y cruces

<p class="mt-3 text-[22px]" style="margin:12px 0 0">Cada equipo aporta su especialidad y participa en decisiones compartidas.</p>

<div class="mt-3 grid grid-cols-[3fr_2fr] items-center gap-4">
  <svg class="h-[20rem] w-full" viewBox="0 -15 600 420" role="img" aria-label="Diagrama de Venn: desarrollo aporta código, seguridad aporta análisis de riesgo y operación aporta gestión del servicio. Desarrollo y seguridad comparten requisitos; desarrollo y operación, la entrega; seguridad y operación, la respuesta. En el centro, DevSecOps representa acuerdos entre los tres equipos.">
    <circle cx="235" cy="140" r="150" fill="#3EC8D8" fill-opacity="0.10" stroke="#3EC8D8" stroke-width="3" />
    <circle cx="365" cy="140" r="150" fill="#FF5A3A" fill-opacity="0.08" stroke="#FF5A3A" stroke-width="3" />
    <circle cx="300" cy="250" r="150" fill="#5CFF8A" fill-opacity="0.08" stroke="#5CFF8A" stroke-width="3" />
    <g fill="#E7E9E6" text-anchor="middle" style="font-size:26px">
      <text x="157" y="55" fill="#3EC8D8" style="font-size:29px;font-weight:600">Desarrollo</text>
      <text x="157" y="87">Código</text>
      <text x="443" y="55" fill="#FF5A3A" style="font-size:29px;font-weight:600">Seguridad</text>
      <text x="443" y="87">Riesgo</text>
      <text x="300" y="350" fill="#5CFF8A" style="font-size:29px;font-weight:600">Operación</text>
      <text x="300" y="382">Servicio</text>
      <text x="300" y="94">Requisitos</text>
      <text x="220" y="275">Entrega</text>
      <text x="380" y="275">Respuesta</text>
      <text x="300" y="182" style="font-size:27px;font-weight:700">DevSecOps</text>
      <text x="300" y="215">Acuerdos</text>
    </g>
  </svg>
  <div class="card px-5 py-4 text-[19px]">
    <strong class="text-cyber-neon">En la descarga de extractos</strong>
    <p style="margin:12px 0 0"><strong>Requisitos:</strong> acordar quién puede consultar cada cuenta.</p>
    <p style="margin:12px 0 0"><strong>Entrega:</strong> probar y desplegar la versión comprobada.</p>
    <p style="margin:12px 0 0"><strong>Respuesta:</strong> observar señales y coordinar acciones.</p>
  </div>
</div>
<div class="mt-3 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]"><strong>Dueño del hallazgo:</strong> coordina hasta verificar el cierre.<br><strong>Autoridad definida:</strong> decide excepciones y su revisión.</div>

<!--
S30 · Idea central: las incumbencias se cruzan, con tareas concretas, un dueño del seguimiento y autoridad definida · Tiempo: 3 min

Voy a recorrer este Venn. Cada círculo representa una especialidad: desarrollo conoce el código y la función; seguridad analiza escenarios de riesgo y aporta criterios; operación conoce el servicio desplegado y sus condiciones. Son aportes principales para explicar el esquema, no fronteras exclusivas ni un organigrama obligatorio.

En el cruce de desarrollo y seguridad pongo requisitos. Para los extractos, acordamos que cada consulta compruebe el permiso sobre la cuenta solicitada y diseñamos la prueba de acceso ajeno. En el cruce de desarrollo y operación pongo entrega: preparamos y desplegamos la misma versión que fue comprobada, con condiciones para observarla y recuperarnos si falla. En el cruce de seguridad y operación pongo respuesta: entendemos una señal, investigamos su alcance y coordinamos medidas. Los tres pueden participar en estas actividades; el dibujo destaca ejemplos de colaboración.

En el centro está DevSecOps: los acuerdos que conectan esas contribuciones a lo largo del ciclo. Por ejemplo, definimos qué resultado del pipeline necesita atención, quién lo revisa, cuándo se consulta a especialistas y qué evidencia permite continuar. El criterio de permisos se convierte en una prueba de CI; un fallo vuelve a quien puede corregirlo; la versión nueva se comprueba antes de entregarla.

Tomemos ahora la alerta de una dependencia. Desarrollo actualiza y repite las pruebas; seguridad ayuda a evaluar uso, exposición y alternativas; operación aporta contexto del despliegue y observa el resultado. Una persona dueña del hallazgo coordina el seguimiento hasta verificar el cierre. Compartir responsabilidad requiere que cada próxima acción tenga alguien asignado.

Si necesitamos una excepción, decide la autoridad que la organización establezca para ese riesgo. Se registra motivo, alcance y fecha o condición de revisión. La autoridad no se hereda automáticamente por ser especialista de seguridad o Security Champion. El Venn muestra colaboración, mientras que la asignación de tareas y autoridad se acuerda explícitamente.

La integración de seguridad y la respuesta a hallazgos se apoyan en F18, F29 y F4; la decisión de riesgo se relaciona con F10. El diagrama y los cruces son una síntesis didáctica propia. Ahora veamos cómo un referente dentro del equipo puede facilitar el acceso a ayuda especializada.
-->

---
layout: default
class: c2-slide
slideId: S31
---

# Security Champion en desarrollo

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Una persona del equipo de desarrollo que impulsa prácticas de seguridad y conecta con especialistas.</p>

<div class="mt-4 grid grid-cols-2 gap-5 text-[20px]">
  <div class="card px-5 py-4">
    <strong class="text-cyber-cyan">Cómo identificarlo</strong>
    <p style="margin:12px 0 0">Tiene interés y ganas de aprender.</p>
    <p style="margin:12px 0 0">Conoce el producto y pregunta por sus riesgos.</p>
    <p style="margin:12px 0 0">Comparte lo que aprende y ayuda al equipo.</p>
  </div>
  <div class="card-strong px-5 py-4">
    <strong class="text-cyber-neon">Cómo fomentarlo</strong>
    <p style="margin:12px 0 0">Invitar a voluntarios y acordar expectativas.</p>
    <p style="margin:12px 0 0">Dar tiempo, formación y acceso a especialistas.</p>
    <p style="margin:12px 0 0">Crear comunidad y reconocer sus aportes.</p>
  </div>
</div>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]"><strong>En el caso:</strong> propone probar permisos, reúne contexto y consulta a especialistas.</div>
<p class="text-[18px]" style="margin:12px 0 0">El equipo conserva la responsabilidad; el rol tiene un alcance y autoridad acordados.</p>

<!--
S31 · Idea central: el Security Champion es un referente de desarrollo que necesita interés, colaboración y apoyo para impulsar seguridad · Tiempo: 2 min

El Security Champion es una persona del equipo de desarrollo que mantiene la seguridad presente en el trabajo cotidiano. Conoce el producto, ayuda a conversar sobre riesgos, comparte prácticas y conecta al equipo con especialistas. Su formación puede crecer mientras ejerce el rol.

Para identificar a alguien, miro comportamientos. En la descarga de extractos, puede ser quien pregunta qué pasa si se consulta una cuenta ajena, propone una prueba de permisos y comparte lo aprendido en una revisión de código. También sabe reunir contexto y pedir ayuda. Me interesa que tenga ganas de aprender y colaborar; ser la persona de mayor seniority o saber más de seguridad no alcanza por sí solo.

Voy a empezar invitando a voluntarios y conversando sobre su interés. Después acordamos tareas, alcance y a quién consultar. Para fomentarlo necesitamos respaldo de quien organiza el trabajo: tiempo reservado dentro de la planificación, formación y acceso a especialistas. Una comunidad de champions permite intercambiar casos y soluciones; reconocer una mejora concreta ayuda a sostener la participación.

Podemos empezar con una tarea acotada: que facilite la revisión de permisos y comparta una prueba útil con el equipo. Luego revisamos si tuvo apoyo y si el aprendizaje se incorporó al trabajo. Son pasos propuestos para nuestro caso, adaptables a cada organización.

El equipo sigue corrigiendo y comprobando. El champion no reemplaza especialistas ni aprueba todos los cambios; cualquier autoridad para decidir se define explícitamente y el título no habilita a aceptar riesgos por defecto. La guía OWASP respalda participación voluntaria, expectativas claras, apoyo y formación; la referencia es F11. Ahora veamos qué información necesita una alerta para que el equipo pueda actuar.
-->

---
layout: default
class: c2-slide
slideId: S32
---

# Hallazgo en CI: qué hacemos

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Antes de publicar, falla la prueba de permisos de la descarga.</p>

<div class="mt-5 grid grid-cols-[3fr_2fr] gap-5">
  <section class="card px-5 py-4 text-[18px]">
    <p class="font-mono text-cyber-cyan" style="margin:0">CI · Pruebas · extractos v1.4.0</p>
    <p class="text-cyber-alert text-[22px]" style="margin:12px 0 0"><strong>✕ Autorización por cuenta</strong></p>
    <table class="mt-4 w-full text-left text-[18px]" style="border-collapse:collapse">
      <thead><tr class="border-b border-white/20"><th class="pr-3 pb-2">Caso</th><th class="pr-3 pb-2">Lo esperado</th><th class="pb-2">Resultado</th></tr></thead>
      <tbody>
        <tr class="border-b border-white/20"><td class="pr-3 py-3">Cuenta propia</td><td class="pr-3 py-3">Entrega permitida</td><td class="py-3">Extracto entregado</td></tr>
        <tr><td class="pr-3 py-3">Cuenta ajena</td><td class="pr-3 py-3">Rechazo sin datos</td><td class="py-3 text-cyber-alert">Extracto entregado</td></tr>
      </tbody>
    </table>
    <p class="text-[18px] opacity-70" style="margin:10px 0 0">Reporte ilustrativo · datos de prueba</p>
  </section>
  <section class="card-strong px-5 py-4 text-[20px]">
    <strong class="text-cyber-neon">Del resultado a la acción</strong>
    <p style="margin:12px 0 0"><strong>Impacto posible:</strong> exponer datos de otra cuenta.</p>
    <p style="margin:12px 0 0"><strong>Responsable:</strong> desarrollo reproduce y corrige; seguridad asesora.</p>
    <p style="margin:12px 0 0"><strong>Próximo paso:</strong> repetir la prueba en la versión corregida.</p>
  </section>
</div>
<div class="mt-4 border-l-4 border-cyber-alert px-4 py-2 text-[20px]">Esta versión queda fuera del despliegue hasta resolver y verificar el hallazgo.</div>

<!--
S32 · Idea central: un hallazgo accionable conecta versión, prueba, resultado, impacto y responsable con una próxima acción · Tiempo: 3 min

Voy a seguir el caso de la descarga. Estamos por publicar y en CI se ejecuta la prueba de permisos que acordamos. El reporte es ilustrativo: la versión y los resultados son inventados y usamos cuentas de prueba. Primero miro la cuenta propia: la entrega estaba permitida y recibimos el extracto. Después miro la cuenta ajena: esperábamos rechazo sin datos y recibimos un extracto. Esa diferencia explica por qué falló el control.

Ahora puedo decir qué versión comprobamos, qué regla falló y qué observamos. El impacto posible de entregar así es exponer datos de otra cuenta. Haberlo reproducido en un entorno de prueba no demuestra que ocurrió una exposición en producción; seguridad ayuda a evaluar el alcance y si otras versiones o rutas necesitan revisión.

El hallazgo vuelve a desarrollo con el caso y el resultado para reproducir y corregir. Asignamos una persona concreta; seguridad asesora y el dueño del hallazgo coordina el seguimiento. Al corregir generamos una nueva versión y repetimos los dos casos: tiene que conservarse la descarga permitida y rechazarse la ajena sin datos. Vinculamos el resultado nuevo con esa versión.

En este ejemplo, configuramos la prueba como condición necesaria para desplegar. Por eso la versión que falló queda fuera de la entrega; el pipeline aplica un criterio acordado. Un mensaje rojo sin contexto todavía requiere investigación, y aun con esta prueba exitosa debemos mirar los demás controles y criterios de la entrega. Los detalles del caso permiten actuar y verificar el cierre.

NIST SSDF respalda responsabilidades y respuesta a hallazgos; OWASP guía comprobar permisos en cada solicitud. Fuentes breves: F4 y F5. Ahora viene una situación muy cotidiana: tenemos una fecha de entrega y alguien comunica este problema. Veamos cómo responde el equipo.
-->

---
layout: default
class: c2-slide
slideId: S33
---

# Reportar y responder en equipo

<div class="mt-4 card px-5 py-4 text-[21px]">
  <p style="margin:0"><strong>Desarrollo:</strong> «La prueba entregó un extracto de otra cuenta. Estamos por publicar».</p>
  <p class="text-cyber-neon" style="margin:12px 0 0"><strong>Equipo:</strong> «Gracias por avisar. Frenamos esta versión y lo vemos juntos».</p>
</div>
<div class="mt-4 grid grid-cols-3 gap-4 text-[19px]">
  <section class="card px-5 py-4">
    <strong class="text-cyber-cyan">Coordinar</strong>
    <p style="margin:12px 0 0">Asignar un dueño, evaluar el alcance y avisar el cambio de plan.</p>
  </section>
  <section class="card-strong px-5 py-4">
    <strong class="text-cyber-neon">Corregir y verificar</strong>
    <p style="margin:12px 0 0">Desarrollo corrige con apoyo; CI comprueba la nueva versión.</p>
  </section>
  <section class="card px-5 py-4">
    <strong class="text-cyber-cyan">Aprender</strong>
    <p style="margin:12px 0 0">Revisar qué faltó y acordar una mejora con responsable.</p>
  </section>
</div>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[20px]">Aprender sin culpabilizar, con responsabilidad de actuar y verificar.</div>

<!--
S33 · Idea central: responder al reporte con apoyo, coordinación y aprendizaje permite sostener decisiones bajo presión por entregar · Tiempo: 3 min

Seguimos con el mismo hallazgo. La persona que ve la prueba fallida sabe que hay una fecha de publicación y puede sentir miedo de quedar señalada. Voy a leer la respuesta del equipo: «Gracias por avisar. Frenamos esta versión y lo vemos juntos». Reconocemos que el aviso permite actuar y confirmamos la pausa de la versión que incumple el criterio acordado.

La cultura se ve en lo que hacemos después. Un dueño coordina el hallazgo y consigue a quienes pueden corregir y evaluar. Desarrollo reproduce y arregla; seguridad ayuda a revisar el alcance; operación participa si hay versiones desplegadas que revisar y prepara la entrega corregida. Quien coordina la publicación comunica el cambio de plan a las personas afectadas. La autoridad para decidir sigue siendo la definida por la organización.

No suponemos que la prueba expuso datos reales. Investigamos si el problema está solo en el cambio o también afecta versiones ya publicadas. Si hay indicios de un incidente, activamos el proceso correspondiente. La corrección se comprueba en una nueva versión con ambos casos, y se revisan los demás criterios antes de publicar.

Después podemos preguntar qué requisito, revisión o prueba faltó y acordar una mejora con responsable y seguimiento. El Security Champion puede ayudar a compartir lo aprendido y acercar especialistas. La persona que reportó recibe apoyo; el equipo conserva la responsabilidad de corregir y verificar.

Voy a preguntar: «¿Qué pasaría con el próximo aviso si hoy castigamos a quien trajo el problema?». Buscamos que la información llegue a tiempo y pueda usarse. DORA respalda cooperación, reportes sin castigo y aprendizaje a partir de fallas; NIST SSDF orienta respuesta y mejora. Fuentes breves: F30 y F4. Para saber si sostenemos esa respuesta, ahora vamos a mirar qué comprobamos y cuánto tardamos en corregir.
-->

---
layout: default
class: c2-slide
slideId: S34
---

# Medir controles y correcciones

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Una semana de cambios en la descarga de extractos · ejemplo ilustrativo.</p>

<div class="mt-5 grid grid-cols-2 gap-5 text-[20px]">
  <section class="card px-5 py-4">
    <strong class="text-cyber-cyan">Cobertura del control</strong>
    <p class="text-[34px] font-semibold" style="margin:12px 0 0">8 de 10 · 80 %</p>
    <p style="margin:12px 0 0">Diez cambios debían tener la prueba de permisos; ocho la ejecutaron.</p>
    <svg class="mt-3 h-8 w-full" viewBox="0 0 420 32" role="img" aria-label="Ocho de diez cambios ejecutaron la prueba de permisos; dos no la ejecutaron">
      <g fill="#3EC8D8"><rect x="0" y="2" width="34" height="28" rx="4" /><rect x="42" y="2" width="34" height="28" rx="4" /><rect x="84" y="2" width="34" height="28" rx="4" /><rect x="126" y="2" width="34" height="28" rx="4" /><rect x="168" y="2" width="34" height="28" rx="4" /><rect x="210" y="2" width="34" height="28" rx="4" /><rect x="252" y="2" width="34" height="28" rx="4" /><rect x="294" y="2" width="34" height="28" rx="4" /></g>
      <g fill="#FF5A3A"><rect x="336" y="2" width="34" height="28" rx="4" /><rect x="378" y="2" width="34" height="28" rx="4" /></g>
    </svg>
    <p style="margin:12px 0 0"><strong>Acción:</strong> revisar los dos cambios sin prueba.</p>
  </section>
  <section class="card-strong px-5 py-4">
    <strong class="text-cyber-neon">Tiempo hasta corregir</strong>
    <p class="text-[34px] font-semibold" style="margin:12px 0 0">24 horas</p>
    <p style="margin:12px 0 0"><strong>Lunes, 9 h:</strong> hallazgo validado.</p>
    <p style="margin:8px 0 0"><strong>Martes, 9 h:</strong> corrección verificada en la nueva versión.</p>
    <p style="margin:16px 0 0"><strong>Acción:</strong> ubicar demoras y reservar capacidad para corregir.</p>
  </section>
</div>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">La cobertura cuenta ejecuciones del control; el cierre exige verificar la corrección.<br>Más alertas puede reflejar más cobertura. Ningún indicador resume el riesgo total.</div>

<!--
S34 · Idea central: medir controles ejecutados y correcciones verificadas ayuda a detectar faltantes y organizar la respuesta · Tiempo: 3 min

Voy a medir dos cosas del trabajo que acabamos de ver. Los números son inventados para explicar el cálculo, no resultados reales ni metas obligatorias. En una semana hubo diez cambios de la descarga que, según el criterio acordado, debían ejecutar la prueba de permisos. Ocho la ejecutaron: ocho dividido diez da ochenta por ciento. Cada bloque representa un cambio; los dos naranjas indican que faltó la comprobación.

Este porcentaje cuenta ejecuciones, con independencia de si la prueba pasó o falló. No es cobertura de líneas de código ni porcentaje de seguridad. Antes de medir acordamos qué cambios debían tener esa prueba y usamos el mismo criterio durante el período. La próxima acción es revisar los dos faltantes: quizá el flujo no ejecutó el control o no conservó evidencia. Hay que investigar y corregir el proceso que corresponda.

Para el segundo ejemplo tomo el fallo de permisos. Lo validamos el lunes a las nueve y el martes a las nueve verificamos la corrección en una nueva versión: transcurrieron veinticuatro horas. Son horas de calendario desde la validación hasta la comprobación del arreglo; el tiempo previo hasta validar queda afuera y también merece atención. Publicar es otro momento que podemos registrar aparte.

Si queremos mejorar, revisamos cuánto hubo de espera, investigación, corrección y verificación, y damos apoyo donde se acumuló la demora. Para analizar varios hallazgos los separamos por prioridad y contexto; un solo caso no describe el rendimiento de todo el equipo. Un objetivo de respuesta se acuerda según el riesgo y la capacidad.

Si aparecen más alertas después de ejecutar más controles, necesitamos mirar cobertura y contexto antes de interpretar el cambio. Las métricas informan dónde revisar y actuar. Esta propuesta didáctica toma como contexto las capacidades de F3 y las prácticas de F4; las fórmulas y cifras son propias del ejemplo. Ahora recuperemos cómo conectamos el control, la respuesta y la decisión de entrega.
-->

---
layout: default
class: c2-slide
slideId: S35
---

# Del control a la entrega

<p class="mt-4 text-[22px]" style="margin:16px 0 0">La señal del pipeline se convierte en una decisión con trabajo del equipo.</p>

<div class="mt-7 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center text-[21px]" role="img" aria-label="La prueba en CI detecta el fallo; el equipo corrige y verifica; la entrega se decide según los criterios acordados">
  <div class="card px-4 py-5"><strong class="text-cyber-cyan">Comprobar</strong><p style="margin:12px 0 0">CI detecta el fallo de permisos.</p></div>
  <span class="text-cyber-cyan text-2xl" aria-hidden="true">→</span>
  <div class="card-strong px-4 py-5"><strong class="text-cyber-neon">Actuar</strong><p style="margin:12px 0 0">El equipo corrige y verifica.</p></div>
  <span class="text-cyber-cyan text-2xl" aria-hidden="true">→</span>
  <div class="card px-4 py-5"><strong class="text-cyber-cyan">Decidir</strong><p style="margin:12px 0 0">Entrega según criterios acordados.</p></div>
</div>
<div class="mt-6 border-t border-white/20 pt-4 text-[20px]">
  <strong>Para el próximo cambio:</strong>
  <div class="mt-3 grid grid-cols-4 gap-3 text-[19px]">
    <span>Qué comprobar</span><span>Qué resultado esperar</span><span>Quién actuará</span><span>Qué observar después</span>
  </div>
</div>

<!--
S35 · Idea central: recuperar control, respuesta y criterio de entrega prepara decisiones concretas para el próximo cambio · Tiempo: 2 min

Voy a recuperar la escena en tres pasos. La prueba de CI mostró que se entregaba un extracto de otra cuenta. El equipo asignó una persona, ofreció apoyo y tiempo, corrigió y volvió a comprobar en una nueva versión. La decisión de publicar considera ese resultado y los demás criterios acordados.

La automatización ejecuta una parte del trabajo. Las personas mantienen las pruebas, interpretan resultados y actúan; los acuerdos definen responsables, condiciones para continuar y autoridad de decisión. Si la prueba falla y nadie tiene tiempo para investigar, la cadena se queda sin respuesta. Si decidimos continuar sin comprobar el arreglo, falta la evidencia que habíamos acordado.

Les propongo mirar el próximo cambio con cuatro decisiones: qué vamos a comprobar, qué resultado esperamos, quién actuará si falla y qué observaremos después de publicar. Pueden elegir controles distintos si explican qué pregunta responden y cómo van a usar el resultado. Las capacidades de colaboración y respuesta se apoyan en F3 y F4; esta cadena es una síntesis didáctica.

Ahora vamos a conectar estas decisiones con el cumplimiento: qué requisitos corresponden, qué controles aportan y cómo podemos demostrar lo que ocurrió.
-->

---
layout: default
class: c2-slide
slideId: S36
---

# DevSecOps y cumplimiento

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Cumplir implica aplicar los requisitos que corresponden y demostrar cómo se sostienen.</p>
<div class="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-[20px]" role="img" aria-label="Un requisito se traduce en un control; el control produce evidencia; las personas revisan el resultado y las acciones">
  <div class="card px-3 py-5"><strong>Requisito</strong><p style="margin:12px 0 0">Qué tenemos que cumplir</p></div><span class="text-cyber-cyan" aria-hidden="true">→</span>
  <div class="card-strong px-3 py-5"><strong>Control</strong><p style="margin:12px 0 0">Cómo lo comprobamos</p></div><span class="text-cyber-cyan" aria-hidden="true">→</span>
  <div class="card px-3 py-5"><strong>Evidencia</strong><p style="margin:12px 0 0">Qué pasó y en qué versión</p></div><span class="text-cyber-cyan" aria-hidden="true">→</span>
  <div class="card px-3 py-5"><strong>Revisión</strong><p style="margin:12px 0 0">Quién decide y actúa</p></div>
</div>
<div class="mt-5 grid grid-cols-3 gap-4 text-[19px]">
  <p style="margin:0"><strong class="text-cyber-cyan">Repetir:</strong> controles acordados en cada cambio pertinente.</p>
  <p style="margin:0"><strong class="text-cyber-neon">Detectar:</strong> desvíos con tiempo para corregir.</p>
  <p style="margin:0"><strong class="text-cyber-cyan">Reconstruir:</strong> resultados, decisiones y cierres.</p>
</div>
<div class="mt-5 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">El pipeline aporta evidencia; el cumplimiento se evalúa sobre requisitos y alcance definidos.</div>

<!--
S36 · Idea central: DevSecOps ayuda a sostener controles y evidencia para evaluar requisitos aplicables · Tiempo: 3 min

Ya vimos cómo comprobar, actuar y decidir. Ahora sumamos una pregunta que aparece en muchas organizaciones: cómo demostrar que ese trabajo responde a los requisitos que nos corresponden. Cumplimiento puede involucrar leyes, regulaciones, estándares o compromisos contractuales. En este bloque voy a usar tres referencias de seguridad y auditoría; su aplicación depende del contexto y del alcance.

Voy a seguir la cadena. Primero identificamos el requisito aplicable al servicio. Después elegimos controles y responsables. Ejecutamos las comprobaciones, guardamos resultados ligados a una versión y revisamos qué pasó con los hallazgos. En nuestro caso, la prueba de permisos y su corrección dejan una historia que puede reconstruirse.

DevSecOps permite incorporar parte de ese trabajo a cada cambio pertinente. El pipeline ejecuta controles repetibles, da feedback y conserva registros. Desarrollo, seguridad y operación sostienen las prácticas; quienes gestionan cumplimiento ayudan a interpretar requisitos y quienes evalúan revisan la evidencia. El trabajo compartido facilita que la información se genere mientras hacemos el cambio.

La evidencia de software cubre una parte del proceso. También importan políticas, accesos, formación, proveedores y otros controles dentro del alcance. Una prueba verde aislada no certifica conformidad. El cumplimiento requiere evaluar requisitos, implementación y evidencia suficientes. NIST SSDF y DORA respaldan prácticas integradas y generación de evidencia; las tres referencias se presentan con sus fuentes propias. Fuentes breves: F4, F18, F12, F31 y F32.

Voy a distinguir qué evalúa cada una antes de dar los ejemplos.
-->

---
layout: default
class: c2-slide
slideId: S37
---

# Tres referencias habituales

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Elegimos estas tres por sus usos en seguridad y servicios digitales.</p>
<table class="mt-5 w-full text-left text-[20px]" style="border-collapse:collapse">
  <thead><tr class="border-b border-white/20"><th class="pr-5 pb-3">Referencia</th><th class="pr-5 pb-3">Qué es</th><th class="pb-3">Dónde se usa</th></tr></thead>
  <tbody>
    <tr class="border-b border-white/20"><td class="pr-5 py-5 text-cyber-cyan"><strong style="white-space:nowrap">ISO/IEC 27001</strong></td><td class="pr-5 py-5">Norma para gestionar seguridad de la información.</td><td class="py-5">Organizaciones y alcance de su sistema de gestión.</td></tr>
    <tr class="border-b border-white/20"><td class="pr-5 py-5 text-cyber-neon"><strong>PCI DSS</strong></td><td class="pr-5 py-5">Estándar de seguridad de datos de tarjetas.</td><td class="py-5">Entornos que manejan esos datos o afectan su seguridad.</td></tr>
    <tr><td class="pr-5 py-5 text-cyber-cyan"><strong>SOC 2</strong></td><td class="pr-5 py-5">Marco de auditoría de controles de servicios.</td><td class="py-5">Proveedores que deben dar confianza a sus clientes.</td></tr>
  </tbody>
</table>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">Primer paso: definir qué servicio, datos y requisitos entran en el alcance.</div>

<!--
S37 · Idea central: ISO/IEC 27001, PCI DSS y SOC 2 tienen naturalezas y alcances diferentes · Tiempo: 2 min

Voy a elegir tres referencias habituales en conversaciones de seguridad y servicios digitales: ISO/IEC 27001, PCI DSS y SOC 2. Es una selección didáctica; no afirmo un ranking universal de las tres más usadas ni que deban aplicarse a todas las organizaciones.

ISO/IEC 27001 es una norma de requisitos para un sistema de gestión de seguridad de la información. Puede aplicarse a organizaciones de distintos sectores dentro de un alcance definido. PCI DSS es un estándar de la industria de tarjetas que establece requisitos técnicos y operativos para proteger esos datos y su entorno. SOC 2 es un marco de auditoría que produce un informe sobre controles de un servicio según criterios de confianza de AICPA.

Una norma de gestión, un estándar de datos de tarjetas y un marco de auditoría tienen propósitos diferentes. Tampoco equivalen por sí mismos a una ley argentina. Lo que corresponde implementar y demostrar se determina según actividad, datos, compromisos y alcance.

Para nuestra app, podemos conversar sobre la gestión de seguridad de los extractos. PCI DSS requiere revisar si el servicio de pagos maneja datos de tarjetas o puede afectar ese entorno. SOC 2 puede aparecer cuando un proveedor de un servicio necesita presentar evidencia sobre sus controles a clientes. Quienes gestionan cumplimiento y quienes evalúan ayudan a precisar ese alcance. Fuentes breves: F12, F31 y F32.

Empecemos por cómo el trabajo de desarrollo aporta a un sistema de gestión.
-->

---
layout: default
class: c2-slide
slideId: S38
---

# ISO/IEC 27001: gestión de seguridad

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Un SGSI organiza riesgos, controles, responsables y mejora de la seguridad.</p>
<p class="text-[18px] opacity-70" style="margin:8px 0 0">SGSI = sistema de gestión de seguridad de la información · ISO/IEC 27001:2022</p>
<div class="mt-4 card px-5 py-3 text-[20px]"><strong>Riesgo del caso:</strong> una persona obtiene extractos de una cuenta ajena.</div>
<table class="mt-4 w-full text-left text-[19px]" style="border-collapse:collapse">
  <thead><tr class="border-b border-white/20"><th class="pr-4 pb-2">Momento</th><th class="pr-4 pb-2">Práctica DevSecOps</th><th class="pb-2">Evidencia que aporta</th></tr></thead>
  <tbody>
    <tr class="border-b border-white/20"><td class="pr-4 py-3">Diseño</td><td class="pr-4 py-3">Acordar permisos y revisar el cambio.</td><td class="py-3">Requisito, responsable y revisión.</td></tr>
    <tr class="border-b border-white/20"><td class="pr-4 py-3">Pruebas en CI</td><td class="pr-4 py-3">Probar acceso permitido y rechazo sin datos.</td><td class="py-3">Versión y resultados de ambos casos.</td></tr>
    <tr><td class="pr-4 py-3">Seguimiento</td><td class="pr-4 py-3">Corregir, verificar y revisar el riesgo.</td><td class="py-3">Hallazgo, decisión y cierre verificado.</td></tr>
  </tbody>
</table>
<div class="mt-3 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">Estos registros apoyan el SGSI y su evaluación dentro del alcance definido.</div>

<!--
S38 · Idea central: DevSecOps aporta controles y registros al tratamiento de riesgos dentro del SGSI · Tiempo: 3 min

ISO/IEC 27001 establece requisitos para gestionar seguridad de la información. Un SGSI organiza el trabajo de personas, procesos y tecnología para identificar y tratar riesgos, revisar resultados y mejorar. Voy a usar la descarga de extractos como una parte posible del alcance de ese sistema.

El riesgo del caso es el acceso a datos de otra cuenta. El equipo define la regla de autorización y quién la mantiene. Durante el cambio revisamos el código y ejecutamos los dos casos de permisos en CI. Si falla, asignamos la corrección y comprobamos la versión nueva. Guardar requisito, revisión, resultados y decisión permite mostrar cómo se sostuvo ese control.

La conexión cultural también importa. Desarrollo implementa, seguridad aporta criterios, operación observa el servicio y quienes gestionan el SGSI relacionan esas prácticas con el tratamiento de riesgo. El responsable correspondiente revisa si el control sigue siendo adecuado cuando cambia el servicio. Así, el pipeline genera parte de la evidencia y las personas mantienen el sistema de gestión.

Esta tabla es un ejemplo de contribución, no una lista completa de requisitos ni una equivalencia automática entre una prueba y un control de la norma. El SGSI también incluye elementos organizacionales fuera del pipeline y la suficiencia de la evidencia se evalúa en el alcance acordado. Una eventual certificación exige evaluar el sistema de gestión correspondiente.

Consulté la ficha pública de ISO y las referencias complementarias de F12; no cito números de controles ni atribuyo requisitos específicos sin consultar el texto normativo completo. F4 respalda prácticas de desarrollo seguro y F5 el ejemplo de autorización. Ahora veamos el contexto de datos de tarjetas.
-->

---
layout: default
class: c2-slide
slideId: S39
---

# PCI DSS: datos de tarjetas

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Controles técnicos y operativos para proteger datos de tarjetas.</p>
<div class="mt-4 card px-5 py-3 text-[20px]"><strong>Caso:</strong> servicio de pagos dentro del alcance de PCI DSS.</div>
<table class="mt-4 w-full text-left text-[19px]" style="border-collapse:collapse">
  <thead><tr class="border-b border-white/20"><th class="pr-4 pb-2">Tramo</th><th class="pr-4 pb-2">Ejemplo de aporte DevSecOps</th><th class="pb-2">Evidencia que aporta</th></tr></thead>
  <tbody>
    <tr class="border-b border-white/20"><td class="pr-4 py-4">Código</td><td class="pr-4 py-4">SAST y revisión antes de entregar.</td><td class="py-4">Reporte y corrección verificada.</td></tr>
    <tr class="border-b border-white/20"><td class="pr-4 py-4">Dependencias</td><td class="pr-4 py-4">SCA y actualización de componentes.</td><td class="py-4">Inventario y hallazgos con cierre.</td></tr>
    <tr><td class="pr-4 py-4">Entrega</td><td class="pr-4 py-4">Comprobar configuración y permisos.</td><td class="py-4">Versión, decisión y despliegue.</td></tr>
  </tbody>
</table>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">El alcance incluye sistemas que manejan datos de tarjetas o pueden afectar su seguridad.</div>

<!--
S39 · Idea central: DevSecOps aporta comprobaciones y seguimiento en los sistemas dentro del alcance PCI DSS · Tiempo: 3 min

PCI DSS establece una base de requisitos técnicos y operativos para proteger datos de tarjetas. La biblioteca oficial consultada presenta PCI DSS v4.0.1. Su alcance incluye entidades que almacenan, procesan o transmiten esos datos, y sistemas o entidades que pueden afectar la seguridad de ese entorno.

Voy a agregar una condición explícita al caso: supongamos que el servicio de pagos maneja datos de tarjetas o puede afectar el entorno que los procesa. En esa situación tenemos que determinar el alcance y los requisitos aplicables. Que nuestra app sea bancaria o tenga extractos no basta para declarar que toda ella está en alcance PCI DSS.

Como ejemplos de aporte, revisamos el cambio de código y sus hallazgos antes de liberar, analizamos componentes y atendemos actualizaciones, y conservamos registros de la versión y su despliegue. Si SCA encuentra una biblioteca vulnerable, el equipo confirma su uso, prioriza, corrige y repite las comprobaciones. La evidencia conecta el aviso con la respuesta y la versión que se entregó.

Los plazos y procedimientos aplicables se definen a partir del estándar y el alcance real; el pipeline implementa parte de los controles elegidos. Quienes gestionan cumplimiento y quienes evalúan revisan qué evidencia corresponde y qué requisitos quedan fuera de este flujo. Un escaneo de CI no sustituye las evaluaciones ni los controles adicionales que correspondan.

F31 respalda propósito, alcance y la versión publicada mediante fuentes oficiales de PCI SSC. El PDF completo no estuvo accesible en esta consulta, por eso presento ejemplos de contribución y no una matriz de requisitos numerados. F19 y F21 respaldan las capacidades de análisis ya explicadas. Seguimos con cómo un proveedor puede demostrar sus controles a clientes mediante SOC 2.
-->

---
layout: default
class: c2-slide
slideId: S40
---

# SOC 2: controles del servicio

<p class="mt-4 text-[22px]" style="margin:16px 0 0">Una auditoría examina controles del servicio según criterios de confianza de AICPA.</p>
<div class="mt-4 grid grid-cols-2 gap-5 text-[20px]">
  <section class="card px-5 py-4">
    <strong class="text-cyber-cyan">Ejemplo de control acordado</strong>
    <p style="margin:12px 0 0">El proveedor del servicio revisa y prueba sus cambios antes de entregarlos.</p>
    <p style="margin:16px 0 0"><strong>Evidencia:</strong> quién revisó, qué se probó, qué falló y cómo se cerró.</p>
  </section>
  <section class="card-strong px-5 py-4">
    <strong class="text-cyber-neon">Historia de cambios y respuesta</strong>
    <div class="mt-4 border-l-2 border-cyber-cyan pl-4 text-[19px]">
      <p style="margin:0"><strong>v1.4.0:</strong> fallo de permisos registrado.</p>
      <p style="margin:12px 0 0"><strong>v1.4.1:</strong> corrección revisada y verificada.</p>
      <p style="margin:12px 0 0"><strong>Nuevo cambio:</strong> revisión y pruebas registradas.</p>
    </div>
  </section>
</div>
<p class="text-[18px] opacity-70" style="margin:12px 0 0">Criterios: seguridad, disponibilidad, integridad del procesamiento, confidencialidad y privacidad.</p>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">SOC 2 produce un informe de auditoría sobre el alcance evaluado.</div>

<!--
S40 · Idea central: DevSecOps puede aportar evidencia trazable sobre los controles de un servicio para una auditoría SOC 2 · Tiempo: 2 min

SOC 2 examina controles de un servicio según criterios de confianza de AICPA: seguridad, disponibilidad, integridad del procesamiento, confidencialidad y privacidad. Las categorías y el alcance de cada trabajo se definen según el servicio y sus compromisos.

Voy a suponer un proveedor del servicio de extractos que acuerda revisar y probar cambios antes de entregar. El repositorio registra revisiones, CI conserva resultados ligados a versiones y el equipo documenta hallazgos y correcciones. Este control es un ejemplo para explicar el aporte.

Recorro la historia: v1.4.0 falló en pruebas y quedó fuera de la entrega; v1.4.1 contiene el arreglo revisado y comprobado; los cambios siguientes también conservan registros. Los fallos y su respuesta forman parte de la evidencia. La fecha o período y la suficiencia de esa evidencia dependen del trabajo de auditoría.

DevSecOps ayuda a sostener estas prácticas y reconstruir lo ocurrido. Quienes auditan evalúan los controles y producen un informe con alcance y conclusiones propios. También puede hacer falta evidencia de accesos, incidentes o proveedores. F32 reúne fuentes públicas AICPA sobre criterios y evaluación. Ahora veamos un registro que conecta requisito, ejecución y decisión.
-->

---
layout: default
class: c2-slide
slideId: S41
---

# Del requisito a la evidencia

<p class="mt-4 text-[22px]" style="margin:16px 0 0">El equipo puede reconstruir qué se comprobó, quién actuó y cómo terminó.</p>
<div class="mt-4 card-strong px-5 py-4 text-[19px]">
  <p class="font-mono text-cyber-cyan" style="margin:0">Registro ilustrativo · servicio de extractos · datos de prueba</p>
  <p style="margin:12px 0 0"><strong>Requisito:</strong> rechazar la consulta a una cuenta sin permiso.</p>
  <p style="margin:10px 0 0"><strong>Versión y control:</strong> v1.4.1 · prueba de autorización por cuenta.</p>
  <p style="margin:10px 0 0"><strong>Resultado:</strong> cuenta propia permitida; cuenta ajena rechazada sin datos.</p>
  <p style="margin:10px 0 0"><strong>Responsable y cierre:</strong> Lucía (desarrollo) · revisión y corrección verificadas.</p>
  <p style="margin:10px 0 0"><strong>Decisión:</strong> entrega autorizada según los criterios acordados.</p>
</div>
<div class="mt-4 border-l-4 border-cyber-cyan px-4 py-2 text-[19px]">DevSecOps facilita ejecutar controles y demostrar su operación.<br>El cumplimiento requiere evaluar los requisitos y todo el alcance correspondiente.</div>

<!--
S41 · Idea central: un registro trazable aporta evidencia al cumplimiento y conserva el alcance de la evaluación · Tiempo: 1 min

Voy a recorrer este registro ilustrativo. La regla pide rechazar una cuenta sin permiso. En v1.4.1 la prueba permite la cuenta propia y rechaza la ajena sin datos. Quedan una persona responsable, la revisión, el arreglo verificado y la decisión de entrega. Nombre, versión y resultados son ficticios.

En un registro real guardamos fechas y referencias a ejecuciones, revisiones y decisiones, con acceso y conservación apropiados. Usamos datos de prueba y protegemos la evidencia. Este registro puede apoyar controles aplicables cuando corresponde al alcance evaluado; su suficiencia se determina junto con la evidencia restante.

La ficha es una propuesta didáctica de trazabilidad. Fuentes breves: F4, F12, F31 y F32. Ahora recupero las ideas que nos llevamos y cierro la clase.
-->

---
layout: default
class: c2-slide
slideId: S42
---

# Recap: seguridad en cada cambio

<div class="mt-7 grid grid-cols-3 gap-5 text-[21px]">
  <section class="card px-5 py-5"><strong class="text-cyber-cyan">Agile y CI/CD</strong><p style="margin:16px 0 0">Cambios pequeños y feedback frecuente.</p></section>
  <section class="card-strong px-5 py-5"><strong class="text-cyber-neon">Shift Left y DevSecOps</strong><p style="margin:16px 0 0">Seguridad durante el ciclo y colaboración para responder.</p></section>
  <section class="card px-5 py-5"><strong class="text-cyber-cyan">Cumplimiento</strong><p style="margin:16px 0 0">Controles trazables, responsables y evidencia según el alcance.</p></section>
</div>
<div class="mt-6 border-l-4 border-cyber-cyan px-5 py-3 text-[22px]">En cada cambio: qué comprobar, quién actúa y qué evidencia queda.</div>
<p class="text-center text-[34px] font-semibold text-cyber-neon" style="margin:28px 0 0">¡Gracias por participar!</p>

<!--
S42 · Idea central: recuperar cambios, feedback, colaboración y evidencia, y despedir la clase · Tiempo: 1 min · Reserva separada: hasta 8 min para preguntas o demoras

Voy a cerrar con tres ideas. Agile y CI/CD acercan el feedback de cambios pequeños. Shift Left y DevSecOps incorporan comprobaciones durante el ciclo y colaboración para responder. Para aportar al cumplimiento necesitamos controles y evidencia que correspondan al alcance evaluado.

En el próximo cambio me llevo tres decisiones: qué comprobar, quién actuará y qué evidencia quedará. Para repasar están las diapositivas, la grabación y la guía del curso. Gracias por participar y por traer sus preguntas. Ahora dejo la información del examen para que puedan organizarse.

Fuentes breves: F1, F2, F4, F18, F12, F31 y F32. La reserva de hasta ocho minutos se usa aparte para preguntas o demoras; repito los aportes para la grabación.
-->

---
layout: default
class: exam-slide
slideId: S43
---

# Examen de la clase

<p class="exam-intro">Escaneá el QR o abrí el enlace que corresponda a tu comisión.</p>

<div class="exam-codes">
  <section class="card-strong exam-code">
    <h3>QR Examen Taller</h3>
    <img src="/clase-2/qr-clase2-taller.png" alt="Código QR del examen para la comisión Taller" />
    <a class="exam-link" href="https://docs.google.com/forms/d/e/1FAIpQLScqMeAUSXVpfVmQO8FTscWpwa2OU2wKarXzha81jw5RQOoBBw/viewform?usp=header" target="_blank" rel="noopener noreferrer">Abrir Examen Taller</a>
  </section>
  <section class="card-strong exam-code">
    <h3>QR Examen CUC</h3>
    <img src="/clase-2/qr-clase2-cuc.png" alt="Código QR del examen para la comisión CUC" />
    <a class="exam-link" href="https://docs.google.com/forms/d/e/1FAIpQLSd-CFefNjs2kIgYcFMh-GhFA3QjPl8WoJH_fQJ7kPY9UfVE0Q/viewform?usp=header" target="_blank" rel="noopener noreferrer">Abrir Examen CUC</a>
  </section>
</div>

<section class="card-strong exam-schedule">
  <p class="exam-schedule-title">Disponibilidad para ambos exámenes</p>
  <div class="exam-dates">
    <div class="exam-date">
      <p class="exam-date-label">Se habilita</p>
      <p class="exam-date-value">Viernes 16 de octubre</p>
      <p>08:00 GMT-3</p>
    </div>
    <div class="exam-date">
      <p class="exam-date-label">Se deshabilita (termina)</p>
      <p class="exam-date-value">Sábado 17 de octubre</p>
      <p>20:00 GMT-3</p>
    </div>
  </div>
</section>

<style scoped>
.exam-slide {
  padding: 24px 48px;
  text-align: center;
}
.exam-slide h1,
.exam-slide h3,
.exam-slide p {
  margin: 0;
}
.exam-intro {
  margin-top: 8px !important;
  font-size: 18px;
  line-height: 24px;
}
.exam-codes,
.exam-dates {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.exam-codes {
  margin-top: 16px;
}
.exam-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
}
.exam-code h3 {
  font-size: 18px;
  line-height: 24px;
}
.exam-link {
  font-size: 16px;
  line-height: 22px;
  color: var(--slidev-theme-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.exam-link:hover,
.exam-link:focus-visible {
  color: var(--slidev-theme-success);
}
.exam-code img {
  width: 192px;
  height: 192px;
  padding: 8px;
  background: white;
  border-radius: 8px;
  object-fit: contain;
}
.exam-schedule {
  margin-top: 16px;
  padding: 10px 16px;
}
.exam-schedule-title {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: var(--slidev-theme-primary);
}
.exam-dates {
  margin-top: 6px;
}
.exam-date {
  font-size: 16px;
  line-height: 22px;
}
.exam-date-label {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.8;
}
.exam-date-value {
  font-size: 18px;
  font-weight: 600;
}
.exam-placeholder {
  display: grid;
  place-items: center;
  width: 192px;
  height: 192px;
  border: 2px dashed var(--slidev-theme-primary);
  border-radius: 8px;
  background: #151E1A;
  color: #E7E9E6;
  font-size: 20px;
}
.exam-link-pending {
  text-decoration: none;
  opacity: 0.75;
}
</style>

<!--
S43 · Idea central: informar la ventana del examen y reservar los accesos por comisión · Tiempo: 1 min

El examen de esta clase se habilita el viernes 16 de octubre de 2026 a las ocho de la mañana, GMT-3, y se deshabilita el sábado 17 a la misma hora. Es la misma ventana de disponibilidad de veinticuatro horas que figura en la clase 1 y se aplica a Taller y CUC.

Cada comisión tiene su propio formulario. Verifiquen que el QR corresponda a su comisión y organicen el examen dentro de esa ventana. Cada comisión tiene su propio formulario. Verifiquen que el QR o enlace corresponda a su comisión y organicen el examen dentro de esa ventana.

La fecha fue indicada por el equipo docente en esta conversación; los horarios y la duración de la ventana se replican de la última placa de clase 1. Fuente breve: F34. Esta placa informa el cronograma previsto; no configura ni publica formularios. Dejo la pantalla de evaluación como cierre de la clase.
-->
