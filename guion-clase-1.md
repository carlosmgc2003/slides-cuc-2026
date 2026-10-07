# Guion de exposición — Clase 1

**Software seguro desde el diseño** · CUC · Software Seguro

> **Cómo usar este guion.** Acompaña a `slides-clase-1.md` y sigue el orden de las diapositivas.
> Cada sección corresponde a una diapositiva y conserva el desarrollo ampliado de referencia:
> qué decir, qué señalar, la pregunta para el intercambio, la transición y las fuentes.
> Para exponer, usá las notas revisadas de `slides-clase-1.md`: son parlamentos en primera persona,
> listos para leer en voz alta, de hasta 2.558 caracteres por diapositiva. Amplían la exposición
> sin copiar todo este texto. Los enlaces completos se consultan aquí.
> Las etiquetas en negrita (**Transición**, **Pregunta para el intercambio**, **Fuentes**) son
> señales para quien expone, no texto para leer en voz alta.

**Tema:** la seguridad se decide antes de escribir código.
**Caso transversal:** una app de banca digital, reutilizada en toda la clase.
**Recorrido:** entender el sistema → modelarlo → anticipar amenazas → convertirlas en decisiones de diseño y pruebas.

---


## Diapositiva 1 · Software seguro desde el diseño

Abrí con la idea central: un sistema no se vuelve seguro solo por agregar controles cuando ya está construido. Las decisiones tempranas definen qué información se maneja, quién puede acceder y cómo se conectan sus componentes.

Señalá el recorrido. El diseño merece atención porque allí se eligen estructuras y reglas que condicionan las etapas posteriores; la seguridad se sigue verificando durante la construcción, las pruebas y la operación.

En esta clase vamos a aprender a entender el sistema, modelar sus partes, anticipar amenazas y convertir ese análisis en decisiones de diseño. No hace falta empezar por una herramienta.

**Transición:** «Antes de pensar en defensas, preguntémonos: ¿dónde nace una vulnerabilidad y cuándo todavía es barato cambiar el rumbo?»

Fuente conceptual del ciclo de vida: NIST, Secure Software Development Framework (SSDF), SP 800-218. El marco recomienda integrar prácticas de desarrollo seguro en cada implementación del ciclo de vida del software.
https://www.nist.gov/publications/secure-software-development-framework-ssdf-version-11-recommendations-mitigating-risk

## Diapositiva 2 · ¿Qué es una vulnerabilidad?

Definí vulnerabilidad como una debilidad que una amenaza puede explotar o activar. No es lo mismo que un ataque: la debilidad puede existir sin que nadie la haya descubierto o utilizado.

Recorré los artefactos del SDLC con ejemplos:
- Requisitos e historias: no especificar quién puede acceder a un dato o qué validaciones debe cumplir una operación.
- Diseño y arquitectura: confiar en un componente sin verificarlo o no separar permisos entre servicios.
- Código y dependencias: una comprobación de autorización ausente o una biblioteca con una vulnerabilidad conocida.
- Scripts, pipeline y build: proteger de forma insuficiente el proceso que transforma el código o los artefactos que produce.
- Configuración e infraestructura: permisos excesivos, un servicio expuesto o almacenamiento accesible públicamente.
- Software en operación: una versión sin actualizar o una debilidad que se descubre después de su despliegue.

Una vulnerabilidad puede estar presente antes de conocerse; un nuevo hallazgo cambia lo que sabemos, aunque el código propio no cambie. Descubrimiento y explotación son estados distintos: el catálogo KEV de CISA identifica vulnerabilidades cuya explotación en el mundo real está confirmada.

El origen tampoco determina por sí solo el nivel de riesgo. Una debilidad en un requisito puede ser más riesgosa que una configuración concreta, o al revés; retomaremos la priorización según escenario, probabilidad e impacto cuando definamos riesgo.

Al cerrar, anticipá el recorrido de la sección en una frase: primero identificamos qué tiene valor, después cómo se conecta el sistema, luego las amenazas y sus consecuencias.

**Transición:** «Para no hablar en abstracto, elijamos un sistema concreto que nos acompañe toda la clase».

Fuentes: NIST, definición de vulnerabilidad; NIST SSDF, prácticas para proteger código, configuración y artefactos de software; NIST DevSecOps Reference Model, artefactos de desarrollo, build y release; CISA, Known Exploited Vulnerabilities Catalog.
https://csrc.nist.gov/glossary/term/vulnerability
https://csrc.nist.gov/pubs/sp/800/218/final
https://pages.nist.gov/nccoe-devsecops/notational-reference-model.html
https://www.cisa.gov/known-exploited-vulnerabilities-catalog

## Diapositiva 3 · Nuestro caso: una app de banca digital

Presentá el caso que vamos a usar durante toda la clase: una app de banca digital. La elegimos porque es fácil de imaginar y concentra lo que aparece en casi cualquier sistema: personas, una aplicación, servicios que procesan, datos que se guardan y un proveedor externo.

Recorré los tres viajes del cliente: se autentica, consulta el saldo y los movimientos de su cuenta, inicia una transferencia a otra cuenta. Estos mismos viajes reaparecen en cada concepto de la clase: activos, flujos, fronteras de confianza, abusos y requisitos.

Aclará que la clase no trata de banca: el sistema es el vehículo para aprender decisiones de diseño seguro que aplican a cualquier software.

**Pregunta para el intercambio:** «¿Qué otro viaje harían con una app así?» Las respuestas —por ejemplo, descargar un extracto o cambiar el alias— sirven después cuando hablemos de superficie de ataque.

**Transición:** «Antes de mirar cómo se conectan sus piezas, identifiquemos qué tiene valor en este sistema».

## Diapositiva 4 · ¿Qué queremos proteger?

Presentá «activo» como algo que tiene valor para alguien y que el sistema debe proteger. Puede ser tangible o intangible; no se limita a servidores o bases de datos. En la app de banca, el activo es la persona y sus datos, una transferencia correcta, la continuidad del servicio o la confianza para usarla. El valor depende de quién necesita el sistema y qué perdería si una parte deja de funcionar, queda expuesta o se modifica sin autorización. Por eso conviene identificar activos antes de elegir controles.

Presentá confidencialidad, integridad y disponibilidad como tres objetivos clásicos de seguridad de la información. Confidencialidad limita quién puede conocer los datos; integridad protege contra modificaciones o destrucciones impropias; disponibilidad busca que la información y los sistemas se puedan usar de manera oportuna y confiable.

Recorré el caso en las tres tarjetas: una consulta no autorizada afecta la confidencialidad; cambiar el importe o el destinatario sin autorización afecta la integridad; interrumpir la app cuando se necesita procesar una transferencia afecta la disponibilidad.

Las tres propiedades ayudan a analizar impactos, pero no agotan todos los atributos que pueden importar en un sistema; el contexto puede exigir otros, como autenticidad o trazabilidad de las acciones.

Preguntá: «Si una transferencia llega, pero con un importe distinto del autorizado, ¿qué propiedad se vio afectada?».

**Transición:** «Ya identificamos qué propiedades queremos preservar; ahora veamos qué situaciones podrían afectarlas».

Fuente de las definiciones: NIST CSRC Glossary, “Asset” e Information Security; deriva confidencialidad, integridad y disponibilidad de FIPS 200 y otras publicaciones NIST.
https://csrc.nist.gov/glossary/term/asset
https://csrc.nist.gov/glossary/term/information_security

## Diapositiva 5 · Amenaza y atacante

Abrí con la distinción: la amenaza describe qué podría ocurrir; el atacante es quien intenta comprometer la seguridad de forma deliberada. NIST define una amenaza como una circunstancia o evento con potencial de causar un impacto. Subrayá «potencial»: todavía no significa que el evento haya ocurrido ni que el daño sea inevitable.

Un atacante puede estar fuera de la organización o dentro de ella: por ejemplo, alguien que busca obtener movimientos de otras cuentas o un empleado que usa sus permisos para alterar deliberadamente una transferencia. Tener acceso legítimo no impide actuar como atacante; la intención y la acción importan, no solo la ubicación.

Recorré las filas como escenarios posibles, no como incidentes ya ocurridos:
- Consulta no autorizada: una persona intenta acceder a movimientos ajenos. La consulta es el evento amenazante; la persona que lo intenta deliberadamente es el atacante.
- Exposición accidental: un administrador podría dejar datos accesibles por un error al configurar permisos. Hay una amenaza, pero ese error no lo convierte en atacante.
- Interrupción de transferencias: una falla de la base de datos podría dejar el servicio sin responder. Hay una amenaza técnica sin un atacante detrás.

Separá también amenaza y vulnerabilidad. En el primer escenario, la ausencia de una comprobación de autorización sería la debilidad; la consulta no autorizada sería el evento amenazante; quien la intenta deliberadamente sería el atacante. No son tres nombres para lo mismo.

Preguntá: «Si un empleado expone datos por error, ¿es un atacante?». Retomá la intención: puede originar una amenaza accidental sin estar intentando comprometer el sistema. NIST distingue fuentes de amenaza adversarias, accidentales, estructurales y ambientales; «fuente de amenaza» es más amplio que «atacante».

Cerrá con la frase visible: no toda amenaza requiere un atacante. La diapositiva anterior mostró qué propiedades queremos preservar; esta distingue los eventos que podrían afectarlas y quién o qué los origina.

**Transición:** «Ya distinguimos situaciones posibles y actores deliberados. Ahora miremos qué consecuencias tuvieron algunos ataques reales».

Fuentes: NIST CSRC Glossary, Threat y Adversary; NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments, clasificación de fuentes de amenaza.
https://csrc.nist.gov/glossary/term/threat
https://csrc.nist.gov/glossary/term/adversary
https://csrc.nist.gov/pubs/sp/800/30/r1/final

## Diapositiva 6 · Consecuencias reales de ciberataques

Usá las cifras como patrones transversales observados en brechas de distintos sectores, no como una estimación de riesgo para cada organización. En la edición 2026 del DBIR, el período analizado va del 1 de noviembre de 2024 al 31 de octubre de 2025. Los porcentajes describen dimensiones diferentes y pueden superponerse: el 31% mide explotación de vulnerabilidades como vía de acceso inicial; el 48% indica presencia de ransomware en brechas; y el otro 48% señala participación de terceros. No se suman entre sí ni implican que todas las organizaciones enfrenten la misma frecuencia. Como contraste situado, ENISA informa que la administración pública fue el sector más atacado en la Unión Europea durante 2025; el 82% de los incidentes registrados contra ese sector fueron DDoS. Aclará que esos datos describen organizaciones europeas y no representan por igual al sector privado ni a otros países.

Usá los casos para darle contenido concreto a «impacto»: la magnitud del daño que puede producir un evento en operaciones, activos y personas. NIST incluye explícitamente esos efectos en su guía de evaluación de riesgos.

En Inglaterra, el ransomware WannaCry afectó al NHS en mayo de 2017. NHS England identificó 6.912 citas canceladas en los datos que pudo recoger y estimó más de 19.000 en total. La cifra es una estimación, no un conteo completo. Al menos 81 de 236 trusts resultaron afectados y hospitales de cinco zonas tuvieron que derivar pacientes a otros servicios de urgencias. El informe atribuyó la exposición a sistemas Windows sin actualizar o fuera de soporte que compartían una vulnerabilidad.

En Colonial Pipeline, el ransomware afectó los sistemas corporativos. La empresa desconectó preventivamente sistemas que monitoreaban y controlaban el oleoducto para evitar que el incidente llegara a ellos. No había indicios de compromiso de esos sistemas operativos al 12 de mayo, pero la desconexión detuvo temporalmente las operaciones y cortó la entrega de combustible en parte del sudeste de Estados Unidos. El oleoducto reanudó operaciones el 13 de mayo.

Preguntá: «En Colonial Pipeline, ¿por qué se interrumpió un servicio físico aunque el ataque afectó los sistemas corporativos?» Guiá la respuesta hacia las dependencias entre TI y operación, y hacia las decisiones de continuidad ante incertidumbre.

**Transición:** «En estos casos podemos separar tres piezas: la debilidad que existía, la amenaza que actuó y el impacto que se produjo. Veamos cómo se relacionan».

Fuentes: Verizon, 2026 Data Breach Investigations Report; ENISA, 2026 Threat Landscape; National Audit Office, Investigation: WannaCry cyber attack and the NHS; U.S. Government Accountability Office, Colonial Pipeline Cyberattack Highlights Need for Better Federal and Private-Sector Preparedness; NIST SP 800-30 Rev. 1.
https://www.verizon.com/business/resources/reports/dbir/
https://www.enisa.europa.eu/topics/cyber-threats/threat-landscape
https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/
https://www.gao.gov/blog/colonial-pipeline-cyberattack-highlights-need-better-federal-and-private-sector-preparedness-infographic
https://csrc.nist.gov/pubs/sp/800/30/r1/final

## Diapositiva 7 · De la amenaza al riesgo

Volvé al concepto después de los casos reales. Un caso sirve para darle peso al tema, pero acá interesa la relación general entre las piezas.

Separá las tres piezas antes de nombrar el riesgo. La amenaza es el escenario con potencial de daño: qué podría pasar y quién o qué podría provocarlo; puede haber un atacante detrás, o un error, una falla u otro evento no deliberado. Que ese escenario pueda concretarse depende del sistema: la vulnerabilidad es la debilidad que podría aprovechar, y la exposición es que exista un punto de contacto que la alcance. Los controles son las decisiones que reducen la probabilidad de que ocurra, el impacto si ocurre, o ambos.

Presentá la línea del riesgo como una aproximación: combinamos dos preguntas — ¿qué tan probable es en este sistema?, ¿cuánto afectaría si ocurre? Se la resume como probabilidad × impacto, pero no es una fórmula ni una cifra: es un recordatorio de que el riesgo depende de las dos cosas a la vez. Un evento muy improbable puede importar mucho si compromete un servicio esencial sin recuperación; un evento frecuente puede ser tolerable si el daño queda acotado.

Ejemplo con el caso de la clase, misma amenaza y distinto riesgo: «un atacante consulta el saldo y los movimientos de otra cuenta». Si la consulta confía en el identificador que envía el cliente y no verifica permisos en el servidor, el escenario es probable y puede exponer datos de muchas cuentas: riesgo alto. Con autorización verificada en cada consulta, autenticación multifactor y alertas ante consultas anómalas, la misma amenaza es poco probable y su impacto queda acotado: riesgo bajo. La amenaza no cambió; cambiaron el sistema y sus controles.

**Pregunta para el intercambio:** «¿Qué condición del sistema podría mover un escenario de riesgo bajo a riesgo alto, aunque la amenaza no cambie?»

Si sirve para fijar la idea, retomá brevemente los dos casos anteriores: WannaCry muestra cómo una debilidad de software permitió afectar la atención; Colonial Pipeline muestra cómo las dependencias y una decisión de continuidad ampliaron las consecuencias. Usalos como ejemplos, sin convertirlos en definiciones.

**Transición:** «El riesgo no se evalúa en el aire: depende de cómo el sistema conecta personas, servicios, datos y terceros. Miremos ese mapa».

Fuentes: NIST CSRC Glossary, Threat, Risk and Vulnerability; NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments.
https://csrc.nist.gov/glossary/term/threat
https://csrc.nist.gov/glossary/term/risk
https://csrc.nist.gov/glossary/term/vulnerability
https://csrc.nist.gov/pubs/sp/800/30/r1/final

## Diapositiva 8 · El software moderno está conectado

Presentá el dibujo como el mapa simplificado de nuestro caso: la app de banca, sus servicios, la base de cuentas y movimientos y el proveedor de notificaciones. Las flechas muestran que una misma operación pasa por varios componentes y llega también a un proveedor externo. La nube representa dónde pueden ejecutarse los servicios.

Recorré una transferencia del caso: el cliente confirma la operación desde la app, el servicio de pagos consulta o registra datos en la base y el sistema integra el proveedor de notificaciones para avisar que la transferencia se realizó. Preguntá: «¿Qué información necesita cada componente para completar la transferencia?». Usá las respuestas para señalar que cada vínculo requiere definir los datos que circulan y los permisos necesarios.

Del mapa al perímetro: el control de entrada puede filtrar una solicitud, pero no verifica por sí mismo cada identidad, servicio ni llamada una vez que existen conexiones entre componentes; la red interna no es automáticamente confiable. Recorré las tres tarjetas: una cuenta válida puede ser robada o usarse por error; un servicio interno puede tener una debilidad; una llamada entre componentes necesita permisos adecuados. Esto no vuelve inútiles al firewall ni a otros controles de red: muestra que hay que proteger también los recursos y sus interacciones.

Preguntá: «Si la solicitud ya llegó a la aplicación, ¿qué controles siguen haciendo falta entre la aplicación, el servicio y los datos?». Retomá autenticación, autorización y validación según lo que proponga el grupo.

**Transición:** «El enfoque centrado en el perímetro también tendía a dejar la seguridad de las aplicaciones para el final; veamos por qué eso se vuelve un límite en ciclos de desarrollo rápidos».

Fuente: NIST SP 800-207 explica que la ubicación de red no concede confianza implícita y que la protección debe centrarse en recursos, incluidos servicios y aplicaciones.
https://csrc.nist.gov/pubs/sp/800/207/final

## Diapositiva 9 · El límite de la seguridad reactiva

Explicá «fortaleza y foso» como un modelo que pone defensas fuertes en el borde de la red y confía en lo que queda adentro. Para las aplicaciones, reserva una revisión intensiva —por ejemplo, un pentest— cerca del lanzamiento.

Señalá la flecha de regreso: si el pentest encuentra un problema que requiere cambios, el equipo vuelve a diseño o código, repite pruebas y puede tener que revisar la fecha de salida. En ciclos cortos, ese control tardío puede acumular hallazgos y competir con la entrega; no significa que todo pentest bloquee un lanzamiento ni que deba quitarse.

Cerrá con la línea final: la seguridad no depende de una herramienta aislada, sino de decisiones coordinadas en cuatro dimensiones. No es una lista completa ni una receta idéntica para todos los sistemas. En diseño, modelar amenazas, flujos de datos y límites de confianza ayuda a decidir dónde ubicar controles y qué permisos hacen falta. En implementación, reglas de validación, consultas parametrizadas y verificaciones de autorización llevan esas decisiones al código. En configuración, las cuentas de servicio, los secretos y los valores predeterminados determinan la exposición concreta del despliegue. En operación, actualizar componentes, monitorear eventos y probar restauraciones mantienen la capacidad de proteger y recuperar el sistema.

Los ejemplos se condicionan entre sí. Un modelo de autorización correcto en el diseño no protege si no se verifica en cada operación; una implementación adecuada puede quedar expuesta por credenciales excesivas; y los controles pueden perder efectividad si no se mantienen.

Preguntá: «¿Qué parte de este sistema quedaría desprotegida si solo agregáramos una herramienta?».

**Transición:** «Si la seguridad no la da una herramienta ni una revisión final, sino el sistema entero, empecemos por lo básico: qué incluye nuestro sistema y de qué depende».

Fuentes: NIST, Secure Software Development Framework (SSDF), SP 800-218; NIST, Mitigating the Risk of Software Vulnerabilities by Adopting an SSDF (2020); NIST SP 800-160 Vol. 1 Rev. 1, Engineering Trustworthy Secure Systems; OWASP Threat Modeling, Authorization, SQL Injection Prevention, Secrets Management y Logging Cheat Sheets.
https://csrc.nist.gov/pubs/sp/800/218/final
https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04232020.pdf
https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html

PowerPoint original · diapositiva 8 · Limitaciones de la seguridad tradicional reactiva

## Diapositiva 10 · El alcance del sistema define el análisis

Presentá el alcance como el objeto concreto que vamos a analizar: en nuestro caso, la app de banca y todo lo que la sostiene. Señalá el sistema protegido y después los datos, actores y componentes que lo sostienen. No alcanza con nombrar la aplicación: hay que entender qué servicio presta y de qué depende.

Señalá la dependencia externa. Aunque quede fuera del control directo de la organización, puede afectar la disponibilidad, integridad o confidencialidad del servicio.

NIST recomienda caracterizar el sistema y su contexto antes de evaluar el riesgo. OWASP propone entender la aplicación, sus flujos de datos y límites de confianza antes de identificar amenazas.

**Pregunta para el intercambio:** «Si el proveedor de notificaciones deja de responder, ¿qué parte del caso se ve afectada y cuál sigue funcionando?»

**Transición:** «Dibujemos el caso y hagamos visibles sus componentes y dependencias».

Fuentes: NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments; OWASP Threat Modeling Cheat Sheet.
https://csrc.nist.gov/pubs/sp/800/30/r1/final
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 11 · Dibujemos el sistema

Leé el dibujo de arriba hacia abajo. El cliente inicia una interacción con la app; los servicios procesan la solicitud y consultan la base de datos. La app, los servicios y los datos están dentro del alcance representado. El cliente y el proveedor de notificaciones interactúan desde fuera de ese límite. Usá la columna derecha para aterrizar cada etiqueta en el caso; la misma estructura sirve para otros sistemas: cambian los nombres, no la forma de mirar.

La línea punteada representa una dependencia externa: el proveedor que envía las notificaciones del caso. El esquema es un modelo inicial para conversar, no una arquitectura completa: alcanza para hacer visibles los componentes, las interacciones y los elementos que quedan fuera del control directo.

**Pregunta para el intercambio:** «Si el proveedor de notificaciones deja de responder, ¿qué funciones del caso siguen operando?»

**Transición:** «Ahora sigamos las conexiones y veamos qué información circula, quién la recibe y quién puede modificarla».

Fuente: OWASP Threat Modeling Cheat Sheet. Recomienda usar diagramas de flujo de datos para representar procesos, almacenes de datos, flujos, entidades externas y límites de confianza.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 12 · La información se mueve

Recorré el flujo en el caso: el cliente envía credenciales o confirma una transferencia; la app solicita la operación; los servicios leen o guardan datos y pueden intercambiar información con el proveedor de notificaciones. El diagrama separa ese intercambio externo del recorrido interno: los datos no pasan necesariamente primero por el almacén y después al proveedor externo.

Usá las tres tarjetas para organizar el análisis: identificar quién origina el dato, dónde llega o queda almacenado y qué identidades tienen permiso para leerlo o modificarlo. El permiso de acceso es una propiedad de seguridad que analizamos junto con el flujo.

**Pregunta para el intercambio:** «¿Quién podría leer o alterar el importe de una transferencia durante su recorrido?»

**Transición:** «Además de seguir los datos, tenemos que decidir qué confianza merece cada origen y cada componente».

Fuentes: OWASP Threat Modeling Cheat Sheet; OWASP Secure Code Review Cheat Sheet. El modelado de amenazas recomienda hacer visibles flujos, almacenes, procesos, entidades externas y límites de confianza; la revisión de flujos identifica orígenes, procesamiento, destinos y controles en las fronteras.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html

## Diapositiva 13 · ¿En quién confiamos?

Presentá la confianza como una expectativa de comportamiento para una tarea y un contexto, no como una cualidad absoluta de una persona o componente. En diseño importa delimitar qué esperamos, con qué evidencia lo justificamos y qué límites ponemos. Confiar en el proveedor de notificaciones para enviar avisos no implica permitirle modificar saldos. Estar dentro de la red tampoco concede confianza automática.

Distinguí tres comprobaciones complementarias usando una misma solicitud de la app de banca:
- **Autenticación:** aporta evidencia de la identidad declarada. Las credenciales y el segundo factor son un ejemplo de verificación; no prueban buena intención ni que la cuenta nunca pueda ser comprometida.
- **Autorización:** comprueba si esa identidad tiene permiso para realizar esa acción sobre esa cuenta. Haber iniciado sesión no concede acceso a todos los recursos. La verificación debe hacerse en el servidor, no solo en la pantalla.
- **Validación de datos:** comprueba formato, valores y reglas de la operación. Un identificador bien formado o un importe válido no demuestran que la operación esté autorizada.

Estas comprobaciones ayudan a sostener decisiones de confianza; no agotan la seguridad ni garantizan que un componente nunca falle. Los permisos y supuestos deben revisarse si cambia el contexto.

**Pregunta para el intercambio:** «Un cliente ingresa correctamente y envía un identificador válido de una cuenta ajena: ¿qué lo debe frenar?» Esperado: autorización sobre esa cuenta en el servidor. La sesión válida y el formato correcto no bastan.

**Transición:** «Marquemos dónde cambian esos supuestos y dónde debemos comprobarlos: ahí aparecen las fronteras de confianza».

Fuentes: NIST SP 800-207, Zero Trust Architecture; OWASP Authentication, Authorization e Input Validation Cheat Sheets.
https://csrc.nist.gov/pubs/sp/800/207/final
https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html

## Diapositiva 14 · Fronteras de confianza

Señalá que es el mismo diagrama que venimos usando; lo que cambia es la pregunta. El recuadro ya no marca solo el alcance: es la frontera de confianza. Dentro, los componentes comparten un contexto de confianza; fuera, el cliente y el proveedor de notificaciones están en otro.

Señalá las dos flechas resaltadas: los datos que entran desde el cliente y el intercambio con el proveedor de notificaciones atraviesan la frontera. Usá la tabla de la derecha: en cada cruce validamos identidad (autenticación), permisos (autorización) y que los datos sean válidos (validación de entrada). Los flujos internos también pueden tener fronteras si los componentes tienen niveles de confianza distintos; empezamos por el borde porque es el cruce más visible.

**Pregunta para el intercambio:** «¿Qué validaciones hace hoy una aplicación que conozcan cuando una persona envía datos?»

**Transición:** «Cada cruce es también un lugar donde alguien puede interactuar con el sistema: esos puntos forman la superficie de ataque».

Fuente: OWASP Threat Modeling Cheat Sheet. Los diagramas de flujo de datos incluyen límites de confianza como elemento explícito del modelo.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 15 · Superficie de ataque

Retomá la diapositiva anterior: los cruces de la frontera de confianza son parte de la superficie de ataque, pero la superficie incluye todo punto de interacción, visible o no. Recorré las seis fichas: cada una es un punto real de la app de banca que venimos dibujando.

Cerrá con la idea de reducción: cada entrada que no se necesita es una oportunidad menos para un abuso. Cada nueva funcionalidad, API o integración amplía la superficie; por eso conviene revisar qué queda expuesto y qué puede quitarse o restringirse.

**Pregunta para el intercambio:** «¿Qué entrada de la app de banca podría eliminarse o restringirse? Por ejemplo, ¿hace falta exponer la consulta de cualquier cuenta o solo de la propia?»

**Transición:** «Veamos por cuáles de estos lugares suelen llegar los incidentes reales».

Fuente: OWASP Attack Surface Analysis Cheat Sheet. Recomienda identificar los puntos donde el sistema recibe o expone datos y revisar qué partes de la superficie son realmente necesarias.
https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html

## Diapositiva 16 · ¿De dónde vienen las brechas?

Presentá las causas como orígenes observados con frecuencia en incidentes, no como un ranking ni como frecuencias trasladables a cada organización. Los ejemplos de servicios digitales son del sector financiero, tomados del material original; sirven para ilustrar cómo cada nueva funcionalidad amplía la superficie, no para caracterizar a todos los sectores.

Caso de apoyo: la brecha de Snowflake de 2024 combinó varias de estas causas — credenciales robadas, cuentas sin autenticación multifactor y exposición a través de un tercero. Usalo para mostrar que las causas se encadenan. Aclará que el análisis es de la Cloud Security Alliance y describe un caso particular.

**Pregunta para el intercambio:** «¿Cuál de estas causas les parece más probable en una organización que conozcan, y por qué?»

**Transición:** «Estas causas aprovechan entradas y debilidades concretas. Para defendernos no alcanza con enumerar casos: conviene diseñar con principios».

Fuente: Cloud Security Alliance, análisis de la brecha de Snowflake (2025).
https://cloudsecurityalliance.org/blog/2025/05/07/unpacking-the-2024-snowflake-data-breach

## Diapositiva 17 · Principios de diseño seguro

Abrí con la idea de la primera línea: los principios de diseño seguro no son una lista para memorizar, sino preguntas que conviene hacerse mientras se diseña. Recorré las tres tarjetas y anticipá que las vamos a ver una por una: la primera pregunta abre el principio de mínimo privilegio; la segunda, la defensa en profundidad y el fallo seguro; la tercera, la contención del impacto.

**Pregunta para el intercambio:** «¿Cuál de estas preguntas aplicarían primero a la app de banca que dibujamos?»

**Transición:** «Empecemos por la primera: confiar lo mínimo necesario».

Fuente: OWASP, Security by Design Principles. Reúne principios como mínimo privilegio, defensa en profundidad, fallo seguro y separación de funciones.
https://owasp.org/www-project-security-by-design-principles/

## Diapositiva 18 · Confiar lo mínimo necesario

Abrí con la pregunta visible y distinguí sus dos dimensiones: el alcance (qué acciones y recursos permite un permiso) y la duración (cuánto tiempo permanece habilitado). El principio aplica tanto a personas como a cuentas de servicio y componentes.

Usá los ejemplos del caso: el servicio de extractos necesita leer saldos y movimientos, no modificarlos ni iniciar transferencias; un acceso de mantenimiento a la base puede ser temporal. No es una regla de «quitar permisos porque sí»: cada permiso debe responder a una tarea concreta.

**Pregunta para el intercambio:** «Si comprometieran el servicio de extractos, ¿qué acción no debería poder ejecutar?»

**Transición:** «El mínimo privilegio limita lo que puede hacer cada identidad; ahora veamos por qué tampoco conviene depender de una sola barrera».

Fuentes: NIST SP 800-53 Rev. 5, control AC-6 (Least Privilege); OWASP, Security by Design Principles.
https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
https://owasp.org/www-project-security-by-design-principles/

## Diapositiva 19 · No depender de una única defensa

Retomá la pregunta visible: ningún control es infalible. La defensa en profundidad combina controles distintos para prevenir un abuso, detectar actividad que logró pasar y contener sus efectos. Las funciones se complementan; no garantizan que todo incidente se evite.

Recorré las tarjetas con el caso: validar la solicitud de transferencia y exigir permisos adecuados ayuda a prevenir; registrar las operaciones y alertar ante patrones inusuales, como transferencias a destinos nuevos de madrugada, permite detectar; aislar el servicio afectado y mantener permisos acotados ayuda a contener.

**Pregunta para el intercambio:** «Si el control de acceso no detectara una cuenta comprometida, ¿qué otra capa podría detectar o limitar su actividad?»

**Transición:** «Y si aun así ocurre un fallo, el sistema también tiene que responder de manera segura».

Fuente: OWASP, Security by Design Principles. Recomienda combinar defensas en profundidad en lugar de depender de un único control.
https://owasp.org/www-project-security-by-design-principles/

## Diapositiva 20 · Diseñar también para cuando algo falle

La pregunta cubre fallos de controles internos y de dependencias externas. Usá las tarjetas como decisiones de diseño: si no se puede verificar autorización, no ejecutar una transferencia; si falla el proveedor de notificaciones, la consulta de saldo y las transferencias siguen operando y las notificaciones pendientes se recuperan después; registrar el problema y restablecer el servicio con verificación.

Aclaración importante: «fallar de forma segura» no significa denegar toda solicitud ni apagar el sistema ante cualquier error. La respuesta depende de los requisitos de confidencialidad, integridad y disponibilidad. Una consulta pública segura podría continuar mientras una operación que modifica datos queda bloqueada.

**Pregunta para el intercambio:** «Si la verificación de permisos falla temporalmente, ¿qué acciones deberían detenerse y cuáles podrían continuar?»

**Transición:** «Incluso con controles y recuperación, puede haber un compromiso. Veamos cómo limitar cuánto puede afectar».

Fuentes: NIST SP 800-53 Rev. 5, control SC-24 (Fail in Known State); OWASP, Security by Design Principles.
https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
https://owasp.org/www-project-security-by-design-principles/

## Diapositiva 21 · Limitar el impacto de un compromiso

Usá las tarjetas para contrastar dos diseños posibles, no como una afirmación de que todo compromiso se propaga. Con permisos amplios y componentes muy conectados, una cuenta comprometida podría alcanzar otros servicios; con permisos acotados y separación, el acceso queda limitado a lo que esa identidad necesita.

Retomá el ejemplo anterior: el servicio de extractos puede consultar saldos y movimientos, pero no modificarlos ni iniciar transferencias. Separar funciones, permisos y componentes limita el alcance del incidente. El término técnico es «radio de impacto» o blast radius.

**Pregunta para el intercambio:** «¿Qué separación de permisos o componentes reduciría el alcance de un compromiso en la app de banca?»

**Transición:** «Limitar el impacto reduce el daño posible; ahora cambiemos de perspectiva y pensemos cómo podrían abusar del sistema».

Fuentes: NIST SP 800-53 Rev. 5, controles AC-6 (Least Privilege) y SC-7 (Boundary Protection); OWASP, Security by Design Principles.
https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final
https://owasp.org/www-project-security-by-design-principles/

## Diapositiva 22 · ¿Cómo se podría abusar del sistema?

Usá el contraste para cambiar la perspectiva: el cliente consulta los movimientos de su cuenta; alguien modifica el identificador de la solicitud para intentar acceder a movimientos ajenos. El ejemplo describe un intento, no afirma que el acceso tenga éxito: el control de autorización debería impedirlo.

Aclará que pensar desde el abuso no implica desconfiar de cada usuario. Sirve para descubrir qué reglas y controles necesita el sistema, además de los que hacen funcionar el caso legítimo.

**Pregunta para el intercambio:** «¿Qué dato o acción de la app de banca intentaría alcanzar alguien sin autorización?»

**Transición:** «Threat Modeling es una forma estructurada de hacer esa búsqueda antes de construir».

Fuente: OWASP Threat Modeling Cheat Sheet. Recomienda identificar objetivos, actores, superficies de ataque y posibles amenazas a partir de cómo funciona el sistema.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 23 · Threat Modeling

Retomá lo que ya construimos sobre el caso: delimitamos la app de banca, identificamos actores y datos, seguimos flujos y marcamos fronteras de confianza. Threat Modeling ordena ese contexto para explorar amenazas y decidir qué hacer.

Recorré las tres etapas de izquierda a derecha. «Entender» evita analizar un sistema abstracto; «analizar» busca escenarios posibles de abuso o fallo; «responder» traduce hallazgos en requisitos, controles y pruebas. No es necesario adoptar una herramienta para empezar, y conviene revisar el análisis si cambian componentes, datos o dependencias.

Antes de presentar STRIDE, hagamos nosotros la etapa de análisis: en la próxima diapositiva volvemos al sistema del caso y preguntamos qué podría salir mal. STRIDE aparece después, como ayuda para encontrar lo que nos falte, no como una lista que haya que memorizar.

**Pregunta para el intercambio:** «¿En cuál de estas etapas ya tenemos información suficiente y cuál necesitamos completar?»

**Transición:** «Antes de presentar STRIDE, hagamos el trabajo nosotros: volvamos al sistema y pensemos como atacantes».

Fuentes: OWASP Threat Modeling Cheat Sheet; NIST SP 800-218, Secure Software Development Framework.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 24 · ¿Qué podría salir mal?

Actividad, fases 1 a 3 (entre 5 y 7 minutos con trabajo en parejas; versión corta al final de estas notas).

Fase 1 — mostrar el sistema (1 minuto): volvé al mismo diagrama de siempre, ahora con nombres concretos del caso bancario. El cliente ingresa sus credenciales en la app web; la app consulta al servicio de cuentas; el servicio lee las cuentas y los saldos y valida la identidad con el proveedor de identidad. Señalá las dos flechas cian: son los cruces de la frontera de confianza. Nombrá lo que está en juego: credenciales, saldos y movimientos, disponibilidad del servicio.

Fase 2 — preguntar (2 minutos): consigna para parejas o grupos de tres: «Como atacante, ¿qué intentarías con este sistema? Nombrá actor, acción y objetivo». No hace falta anotar nada: alcanza con pensar y preparar una respuesta para compartir. Si preferís participación de toda la clase, salteá las parejas y pedí respuestas directamente con las manos levantadas.

Fase 3 — recolectar (2 a 3 minutos): anotá en el pizarrón entre 4 y 8 amenazas, sin corregir ni filtrar; agrupá las repetidas y dejá la lista a la vista. Respuestas probables: usar credenciales robadas para entrar como otro cliente; modificar el identificador de cuenta para ver saldos ajenos; leer movimientos de otra persona; alterar una transferencia en curso; dejar el home banking sin servicio; hacerse pasar por el proveedor de identidad. Lo habitual es que falten dos: negar una acción realizada (repudio) y obtener permisos de más (elevación). No lo digas todavía: dejalo para STRIDE.

Versión corta (si falta tiempo): contá el sistema en 30 segundos, pedí 3 o 4 amenazas a viva voz de toda la clase, anotalas en el pizarrón y saltá directo a comparar con STRIDE.

**Pregunta para el intercambio:** «¿Cuál de estas amenazas les parece más posible en la vida real, y qué condición del sistema la permitiría?"

**Transición:** «Nuestra lista salió de la intuición. Hay lentes que ayudan a encontrar lo que la intuición no vio: veamos STRIDE».

Fuente: OWASP Threat Modeling Cheat Sheet. Recomienda identificar amenazas a partir del sistema, sus actores y sus límites de confianza.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 25 · STRIDE: seis tipos de amenaza

Con la lista de amenazas del pizarrón a la vista, presentá STRIDE como una ayuda para formular escenarios, no como una lista que haya que memorizar ni como una escala de prioridad. Las categorías pueden solaparse; después hay que valorar cada escenario según el contexto y sus consecuencias.

Recorré las letras con ejemplos del caso: S, alguien usa la identidad de un cliente; T, altera el importe o el destinatario de una transferencia; R, niega haber iniciado una transferencia y no hay evidencia suficiente para atribuirla; I, accede a los movimientos de otra cuenta; D, impide que clientes legítimos consulten o transfieran; E, el servicio de extractos obtiene permisos de escritura que no necesita.

**Pregunta para el intercambio:** «¿Cuál de estas amenazas podría afectar la confidencialidad, integridad o disponibilidad del flujo que dibujamos?»

**Transición:** «Ahora comparemos STRIDE con la lista que armamos: ¿qué lente no usamos?».

Fuente: OWASP Threat Modeling Cheat Sheet. Incluye STRIDE como una de las técnicas para identificar amenazas.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 26 · ¿Qué lente nos faltó?

Actividad, fase 5 (1 a 2 minutos): con la lista de amenazas del pizarrón a la vista, recorré las seis preguntas de izquierda a derecha y pedí a la clase que diga, letra por letra, si alguna amenaza anotada la cubre. Marcá las cubiertas y dejá visibles las que no; conviene apuntar la letra junto a cada amenaza de la lista.

Lo más frecuente: S, T, I y D aparecen en la lista; R y E suelen faltar. Señalá justo eso: STRIDE funcionó como detector de vacíos, no como taxonomía para memorizar. Si la clase cubrió las seis letras, celebralo: su intuición fue completa y STRIDE lo confirmó.

Aclará que las letras no ordenan la prioridad: son lentes de búsqueda. La gravedad se decide después, según el activo afectado y las consecuencias.

Versión corta: preguntá solo «¿cuál letra no apareció en la lista?» y pasá directamente a la amenaza elegida.

**Pregunta para el intercambio:** «¿Qué amenaza nueva aparece con la letra que faltó, y qué evidencia dejaría?»

**Transición:** «Ya tenemos amenazas, incluso algunas que la intuición no veía. Ahora hay que decidir qué hacemos con ellas».

Fuente: OWASP Threat Modeling Cheat Sheet. Presenta STRIDE como una técnica para identificar amenazas durante el modelado.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 27 · Encontrar una amenaza no alcanza

Retomá STRIDE: las categorías ayudan a encontrar escenarios, pero no dicen por sí solas cuál es más urgente. Para decidir, contextualizá qué activo se afecta, qué condiciones permiten el abuso, qué controles ya existen y cuáles serían las consecuencias.

Recorré las tres respuestas como opciones de diseño, no como una escala fija: cambiar el diseño puede eliminar o reducir el escenario; un control puede prevenirlo, detectarlo o limitarlo; aceptar el riesgo requiere una decisión explícita y documentada. La prioridad se basa en el escenario, su posibilidad y su impacto, no en la letra de STRIDE.

**Pregunta para el intercambio:** «¿Qué información necesitaríamos para decidir entre cambiar el diseño, agregar un control o aceptar este riesgo?»

**Transición:** «Elijamos ahora una de las amenazas que encontramos y sigámosla hasta la prueba».

Fuentes: NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments; OWASP Threat Modeling Cheat Sheet.
https://csrc.nist.gov/pubs/sp/800/30/r1/final
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 28 · Elijamos una amenaza

Actividad, fase 6 (2 minutos): pedí a la clase que elija una amenaza de la lista del pizarrón —preferí una concreta, como consultar el saldo de otra cuenta— y completá la cadena en voz alta con participación del público, escribiendo cada respuesta junto a su paso.

Recorré las preguntas: la amenaza se escribe como actor, acción y objetivo; el requisito dice qué debe garantizar siempre el sistema, sin elegir todavía una tecnología; el control dice dónde y quién verifica —en el servidor, en cada solicitud—; la prueba describe el resultado esperado cuando alguien sin permiso lo intenta.

Ejemplo completo ya armado, por si la clase no avanza: amenaza «como atacante, quiero consultar el saldo de otra cuenta para obtener información ajena»; requisito «en cada consulta, el sistema verifica que la identidad autenticada esté autorizada para esa cuenta»; control «el servidor valida el permiso sobre la cuenta solicitada en cada solicitud»; prueba «una identidad autenticada pide el saldo de una cuenta ajena y recibe un rechazo, sin datos».

Las próximas diapositivas muestran esta misma cadena en su versión formal: la historia de abuso, el requisito y, más adelante, la prueba con el ejemplo del saldo.

Versión corta: elegí vos la amenaza del saldo y completá la cadena en un minuto, pidiendo al público solo la respuesta del requisito.

**Pregunta para el intercambio:** «¿Qué prueba agregarían para saber que el rechazo salió del servidor y no solo de la app?»

**Transición:** «Escribamos ahora esa amenaza como una historia de abuso, con la misma estructura de las historias de usuario».

Fuentes: OWASP Threat Modeling Cheat Sheet; NIST SP 800-218, Secure Software Development Framework.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 29 · Del uso esperado al abuso

Explicá la estructura común de ambas historias: actor («como»), acción («quiero») y objetivo («para»). La historia de abuso, llamada también Evil User Story, usa esa estructura para expresar una acción no autorizada y el beneficio que buscaría quien la intenta.

Aclará que es un escenario posible, no una afirmación de que el sistema permita consultar datos de otras cuentas. El objetivo es hacer visible una condición que debe impedirse. La diapositiva anterior planteó el intento; ahora lo expresamos como una historia para pasar al requisito.

**Pregunta para el intercambio:** «¿Qué regla debería cumplir el sistema para impedir esta historia de abuso?»

**Transición:** «Convirtamos esa condición en un requisito de seguridad que podamos comprobar».

Fuente: OWASP Threat Modeling Cheat Sheet. Recomienda identificar actores, objetivos, activos y amenazas como parte del análisis.
https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html

## Diapositiva 30 · Del abuso al requisito

Retomá la historia de abuso y señalá cómo se convierte en un requisito verificable. La aplicación debe comprobar, en cada solicitud, que la identidad autenticada tiene permiso sobre la cuenta solicitada; no alcanza con confiar en el identificador enviado por el cliente.

Diferenciá el requisito del control: el requisito expresa qué garantía necesita el sistema; el control describe cómo se implementa. Todavía no elegimos una biblioteca ni una tecnología.

**Pregunta para el intercambio:** «¿Qué caso de prueba comprobaría que el requisito se cumple?»

**Transición:** «Para que este requisito no aparezca tarde, integremos seguridad desde las historias y el diseño».

Fuente: OWASP Authorization Cheat Sheet. Recomienda verificar autorización en cada solicitud y no confiar en controles del lado del cliente.
https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html

## Diapositiva 31 · Integración temprana

Usá las tres historias para mostrar cómo incorporar seguridad desde la planificación: definir qué necesita hacer la persona, qué abuso se quiere impedir y qué garantía debe ofrecer el sistema. No son sustitutos de requisitos detallados ni de pruebas; son una forma de traer la seguridad a la conversación temprana.

Además de las historias, en arquitectura se eligen tecnologías, modelos de confianza y controles de acceso. Estas decisiones se pueden revisar durante el ciclo si cambian los requisitos, las dependencias o el entorno.

**Pregunta para el intercambio:** «¿Qué requisito de seguridad conviene acordar antes de elegir cómo implementar esta función?»

**Transición:** «Sigamos un mismo escenario desde la amenaza hasta la prueba que verifica la respuesta».

Fuente: NIST SP 800-218, Secure Software Development Framework (SSDF). Recomienda integrar prácticas de desarrollo seguro en cada implementación del ciclo de vida.
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 32 · De la amenaza a la prueba

Recorré la cadena usando el mismo ejemplo de autorización: es la versión formal y completa de la derivación que hicimos con la actividad a partir de la amenaza elegida. La amenaza describe el intento; el requisito define qué debe garantizarse; el control implementa la verificación en el servidor; la prueba comprueba que una identidad sin permiso no obtiene el saldo ni los movimientos.

Señalá que la trazabilidad ayuda a detectar vacíos: un requisito sin prueba puede quedar sin verificar; una prueba sin requisito quizá no responda a una necesidad identificada. La implementación concreta puede variar, pero el escenario debe seguir conectado con la comprobación.

**Pregunta para el intercambio:** «¿Qué evidencia mostraría que la prueba realmente cubre el requisito?»

**Transición:** «Este recorrido funciona mejor cuando la seguridad está integrada en todas las etapas del ciclo».

Fuente: NIST SP 800-218, Secure Software Development Framework.
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 33 · Esas propiedades no se conservan solas

Retomá la cadena que acabamos de construir: la amenaza de consultar movimientos ajenos se convirtió en un requisito, el requisito en un control y el control en una prueba. Esas son las propiedades que el sistema debe preservar.

Ahora señalá que el diseño no las garantiza por sí solo. Cada etapa del ciclo —requisitos, diseño, código y construcción, pruebas, despliegue y operación— puede reforzarlas o debilitarlas. A este enfoque se lo llama SSDLC (Secure Software Development Lifecycle): la seguridad acompaña todo el ciclo, no es una revisión final.

No entres todavía en herramientas ni en cómo se automatiza cada etapa; eso es el tema de la próxima clase.

**Pregunta para el intercambio:** «¿En qué etapa creen que es más fácil romper una decisión de seguridad sin darse cuenta?»

**Transición:** «Y hay algo que vuelve esto más difícil: el software no queda quieto».

Fuente: NIST SP 800-218, Secure Software Development Framework (SSDF).
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 34 · Pero el software cambia

Volvé a la app de banca. Una actualización de librería, un permiso que cambia, una variable de configuración o un servicio que se mueve a la nube pueden modificar el comportamiento sin que nadie toque la lógica de autorización que diseñamos.

La idea no es que todo cambio sea peligroso, sino que el sistema que verificamos ayer no es exactamente el sistema que corre hoy. Las propiedades que diseñamos siguen siendo válidas solo si algo las vuelve a comprobar sobre el sistema actual.

**Pregunta para el intercambio:** «¿Qué cambio reciente en un sistema que conozcan podría haber alterado una decisión de seguridad?»

**Transición:** «Entonces la pregunta ya no es solo cómo diseñamos seguridad, sino cómo la verificamos mientras todo cambia».

Fuente: NIST SP 800-218, Secure Software Development Framework.
https://csrc.nist.gov/pubs/sp/800/218/final

## Diapositiva 35 · Una pregunta para la próxima clase

Cerrá la clase dejando la pregunta abierta. Diseñamos las propiedades que el sistema debe preservar: entendimos los activos, modelamos el sistema, definimos fronteras de confianza, anticipamos amenazas con STRIDE, las convertimos en requisitos y elegimos controles que se pueden probar.

El software cambia, y con él cambian el código, las dependencias, la configuración y la infraestructura. La verificación no puede depender de una revisión puntual.

No respondas la pregunta ni adelantes herramientas: la próxima clase, «Shift Left or get hacked», se ocupa de cómo verificar esas propiedades de forma continua a medida que el software evoluciona.

Fuente: NIST SP 800-218, Secure Software Development Framework (SSDF).
https://csrc.nist.gov/pubs/sp/800/218/final

---

_Fin del guion. La próxima clase, «Shift Left or get hacked», retoma la pregunta final sobre cómo verificar estas propiedades de forma continua._
