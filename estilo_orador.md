# Estilo del orador

Guía viva para escribir y revisar las notas de exposición de la clase. Se ajusta a medida que acordemos nuevas decisiones.

## Voz

- Usar español claro, conversacional y accesible para una audiencia con conocimientos diversos de informática.
- En las notas, usar voseo natural y consignas directas: «abrí», «preguntá», «señalá», «retomá».
- Explicar la idea antes de introducir el término técnico; evitar acumular siglas o vocabulario especializado sin contexto.
- Mantener un tono riguroso y cercano, sin dramatizar ni presentar afirmaciones como universales cuando dependen del contexto.

## Cómo conducir la exposición

- Abrir los temas con una pregunta concreta que invite a razonar, no con una lista de herramientas.
- Mostrar como máximo una pregunta explícita en cada diapositiva. Reservar las preguntas de seguimiento para las notas y elegir solo las que hagan falta al exponer. Excepción: si las preguntas son el contenido y organizan el tema, pueden aparecer varias como estructura paralela.
- Al quitar una pregunta secundaria para simplificar la diapositiva, conservar su contenido como una afirmación, un concepto o un diagrama si aporta a la explicación.
- Evitar en el texto visible indicaciones de facilitación o metacomentarios como «para discutir»; las consignas para quien expone van en las notas.
- Cuando una diapositiva presenta dimensiones distintas de un tema, nombrarlas y representarlas con estructuras paralelas de igual peso visual.
- Usar ejemplos breves para conectar conceptos abstractos con decisiones de diseño, código o configuración.
- Hacer explícitas las transiciones: qué acabamos de ver y qué pregunta guía el siguiente paso.
- Dejar espacio para respuestas distintas y pedir el razonamiento que las sostiene.

## Precisión al hablar de seguridad

- Distinguir dónde se origina una debilidad, cuándo se descubre y si llega a ser explotada.
- Hablar de software «sin vulnerabilidades conocidas» en un alcance y momento determinados; nuevos hallazgos pueden cambiar lo que sabemos aunque el código no haya cambiado.
- No inferir el nivel de riesgo a partir del origen. Priorizar según el escenario, la probabilidad y el impacto.
- Para distinguir vulnerabilidad, amenaza y riesgo, usar un único escenario compartido; expresar el riesgo como un escenario posible valorado según su probabilidad y sus consecuencias, y separar el impacto real ocurrido.
- Sostener la clase 1 sobre un único caso: la app de banca digital. Reusar su vocabulario canónico (cliente, app, servicios de autenticación/extractos/pagos, cuentas y movimientos, proveedor de notificaciones) en lugar de introducir ejemplos nuevos; la banca es el vehículo, no el tema.
- Usar los casos reales como apoyo didáctico; mantener el concepto y sus relaciones generales como eje de la diapositiva.
- Al contrastar niveles de amenaza y riesgo, presentarlos como valoraciones cualitativas independientes; explicar cómo exposición, vulnerabilidades, controles, impacto y recuperación modifican el riesgo.
- Antes de analizar amenazas, delimitar el servicio de interés e incluir actores, datos, componentes e interdependencias, también cuando queden fuera del control directo.
- Presentar las curvas de costo de corrección como heurísticas dependientes del contexto, no como leyes universales ni como cifras fijas de «10x» o «100x».
- Al presentar estadísticas, indicar año, población o sector y tipo de métrica; aclarar en las notas los límites del conjunto de datos.
- Al pasar de una industria a un panorama general, usar datos transversales y separar técnicas observadas de prevalencias sectoriales; no trasladar automáticamente una frecuencia a cada organización.
- Para explicar el impacto, priorizar consecuencias documentadas de casos reales; indicar fuente, fecha, alcance y si las cifras son estimaciones, y conectar el efecto técnico con personas, operaciones o servicios.
- Respaldar afirmaciones técnicas con fuentes fiables; conservar los matices imprescindibles y referencias breves en las notas, y los enlaces completos en el guion ampliado.

## Notas y diapositivas

- Mantener cada diapositiva enfocada en una idea principal y usar texto visible breve.
- Al profundizar cuatro dimensiones equivalentes con ejemplos técnicos, organizarlas en una matriz 2×2 y equilibrar el número y nivel de concreción de los ejemplos por sector.
- En la clase 1, limitar cada nota a **1.279 caracteres**, incluidos espacios y saltos de línea; es un techo, no una longitud objetivo. Dejar margen y evitar demasiados párrafos, porque el ajuste visual también depende de los saltos y del ancho del panel.
- Omitir encabezados redundantes como «Notas para presentar» y no repetir definiciones, tarjetas o listas ya visibles.
- Priorizar lo que la diapositiva deja implícito: razonamiento, ejemplos concretos, distinciones, límites y ayudas para conducir la actividad. Conservar solo las preguntas útiles y una transición breve.
- Mantener el desarrollo extenso y los enlaces de la clase 1 en `guion-clase-1.md`; las notas en pantalla son una ayuda de exposición, no el texto completo del guion.
- Cuando haya un diagrama, indicar qué aspecto señalar y qué debería observar el público.
- Acompañar diagramas de componentes con ejemplos concretos de cada categoría cuando las etiquetas puedan resultar abstractas.
- Identificar brevemente en las notas las fuentes que sustentan datos, definiciones o afirmaciones discutibles; no gastar el espacio de exposición en URLs largas si están disponibles en el guion.
