# Estilo del orador

Guía viva para escribir y revisar las diapositivas y las notas de exposición. Se ajusta a medida que acordemos nuevas decisiones.

## Voz

- Usar español claro, conversacional y accesible para una audiencia con conocimientos diversos de informática.
- En las notas, usar voseo natural y consignas directas: «abrí», «preguntá», «señalá», «retomá».
- Explicar la idea antes de introducir el término técnico; evitar acumular siglas o vocabulario especializado sin contexto.
- Al presentar un enfoque o una práctica por primera vez, incluir una definición breve en la diapositiva, un ejemplo concreto y una conexión explícita con lo ya explicado. Escribir para personas que pueden no tener experiencia en informática.
- Mantener un tono riguroso y cercano, sin dramatizar ni presentar afirmaciones como universales cuando dependen del contexto.

## Cómo conducir la exposición

- Abrir los temas con una pregunta concreta que invite a razonar, no con una lista de herramientas.
- Mostrar como máximo una pregunta explícita en cada diapositiva. Reservar las preguntas de seguimiento para las notas y elegir solo las que hagan falta al exponer. Excepción: si las preguntas son el contenido y organizan el tema, pueden aparecer varias como estructura paralela.
- Al quitar una pregunta secundaria para simplificar la diapositiva, conservar su contenido como una afirmación, un concepto o un diagrama si aporta a la explicación.
- Evitar en el texto visible indicaciones de facilitación o metacomentarios como «para discutir»; las consignas para quien expone van en las notas.
- Cuando una diapositiva presenta dimensiones distintas de un tema, nombrarlas y representarlas con estructuras paralelas de igual peso visual.
- Usar ejemplos breves para conectar conceptos abstractos con decisiones de diseño, código o configuración.
- Al presentar controles de un pipeline, mostrar qué se ejecuta, qué feedback devuelve, qué acción sigue y qué efecto tiene sobre la entrega. Usar uno o dos nombres de herramientas como ejemplos secundarios y un mismo cambio como hilo conductor.
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
- Al explicar cumplimiento, conectar alcance y requisito con práctica DevSecOps y evidencia concreta. Distinguir norma de gestión, estándar sectorial y marco de auditoría; presentar los ejemplos como aportes y reservar equivalencias o requisitos numerados para fuentes normativas efectivamente consultadas.

## Notas y diapositivas

- Mantener cada diapositiva enfocada en una idea principal y usar texto visible breve.
- Al presentar DevSecOps, hacer visible la dimensión cultural: objetivos compartidos, colaboración temprana y capacidad para actuar. Ilustrar las tensiones entre áreas como problemas de coordinación e incentivos; conectar los acuerdos con controles del pipeline y responsables concretos.
- Al profundizar cuatro dimensiones equivalentes con ejemplos técnicos, organizarlas en una matriz 2×2 y equilibrar el número y nivel de concreción de los ejemplos por sector.
- En la clase 1, limitar cada nota a **2.558 caracteres**, incluidos espacios y saltos de línea; es un techo, no una longitud objetivo. Dejar margen y evitar demasiados párrafos, porque el ajuste visual también depende de los saltos y del ancho del panel.
- En la clase 1, escribir las notas como parlamentos listos para leer en voz alta, en primera persona y con tono conversacional. Transformar las indicaciones de facilitación en diálogo: «Voy a seguir esta flecha», «Les propongo…», «¿Qué cambiarían?». No incluir órdenes para quien expone, etiquetas de transición ni acotaciones que haya que reinterpretar al leer.
- Omitir encabezados redundantes como «Notas para presentar» y no repetir definiciones, tarjetas o listas ya visibles.
- Priorizar lo que la diapositiva deja implícito: razonamiento, ejemplos concretos, distinciones, límites y ayudas para conducir la actividad. Conservar solo las preguntas útiles y una transición breve.
- Mantener el desarrollo extenso y los enlaces de la clase 1 en `guion-clase-1.md`; las notas en pantalla son una versión oral ampliada, no una copia completa del guion.
- Cuando haya un diagrama, indicar qué aspecto señalar y qué debería observar el público.
- Acompañar diagramas de componentes con ejemplos concretos de cada categoría cuando las etiquetas puedan resultar abstractas.
- Identificar brevemente en las notas las fuentes que sustentan datos, definiciones o afirmaciones discutibles; no gastar el espacio de exposición en URLs largas si están disponibles en el guion. En la clase 1, incorporar esas referencias en frases que también puedan leerse en voz alta.

## Títulos de diapositiva

- Nombrar el tema, la distinción o la decisión. Quien lee el título tiene que saber de qué trata la diapositiva sin resolverla.
- Evitar el título-tesis críptico: una oración que afirma un efecto y esconde el asunto. Suena a moraleja o a adivinanza, no a rótulo. No repetir formas como «Un lote grande demora la oportunidad de aprender» o «Una descarga nueva puede cambiar una garantía vieja».
- En esos títulos, «puede» no es modo potencial: es un verbo modal de posibilidad. «Demora», «permite» o «exige» en presente gnómico convierten el rótulo en refrán. Ese matiz va en el cuerpo o en las notas, no en el título.
- Preferir el título temático: «Lotes grandes y feedback», «La descarga nueva y la autorización». Una oración corta está bien si nombra la idea sin metáfora: «Borrar un secreto no lo invalida».
- No sustituir un concepto ya definido por una imagen («garantía vieja», «corregir el rumbo», «mala noticia»).

## Nombres de industria

- Si el concepto circula con un nombre o una sigla estable (CI, Continuous Delivery, Continuous Deployment, DevOps, pipeline, commit, PR, build, gate, Shift Left, Security Champion, SAST, DAST, SCA, SBOM), ese nombre es el rótulo visible. El castellano explica una vez; no reemplaza al nombre.
- No usar como título ni como nombre un verbo común o un calco que el público no asocia con la práctica. «Integrar» no es CI. «Entrega continua» y «despliegue continuo» no recuperan CD.
- La glosa queda subordinada: «CI · Continuous Integration: integrar cambios seguido y comprobarlos». Después se usa la sigla.
- Si la sigla es ambigua, no esconder la distinción. CD solo no separa Continuous Delivery de Continuous Deployment. Cuando la diapositiva enseña esa diferencia, el rótulo es el nombre inglés completo.
- No traducir al inglés un concepto que en castellano ya es el término reconocible: autorización, secreto, inventario, riesgo. El criterio es el nombre con el que se lo busca, no un bilingüismo decorativo.
- El mismo nombre visible se usa en las notas, el guion y el cuestionario. La glosa no vuelve a ocupar el lugar del nombre.
