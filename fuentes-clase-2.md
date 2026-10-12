# Fuentes · Clase 2 — Registro consolidado de verificación

**Fecha de consulta:** 11-10-2026. **Método:** consultas HTTP directas (`urllib.request`/`curl -L`), lectura de contenido y redirecciones, no solo código 200; se descargaron y extrajeron los PDF oficiales de CISA (2025 y 2026). Paráfrasis propias; no son citas textuales salvo los fragmentos-ancla indicados.

**Cómo leer el estado:** `Verificado` = contenido pertinente leído en la URL final. `Parcial` = solo ficha/resumen/alcance leído, o límite explícito de cobertura. Las limitaciones se conservan aquí y en las notas, **no** se proyectan en el discurso docente. Una referencia ausente en este registro no se presenta como comprobada.

**Uso en el deck:** en las notas de `slides-clase-2.md` se cita la fuente breve por código (F#) con nombre; las URLs completas y el detalle viven en este archivo.

---

## F1 — Agile

- **Título:** *Manifiesto por el Desarrollo Ágil de Software* y *Principios del Manifiesto Ágil*.
- **Autor:** equipo fundador del Manifiesto (Beck, Beedle, van Bennekum, Cockburn, Cunningham, Fowler, Grenning, Highsmith, Hunt, Jeffries, Kern, Marick, Martin, Mellor, Schwaber, Sutherland, Thomas).
- **Versión/fecha:** publicado en 2001; páginas oficiales en español.
- **URL:** <https://agilemanifesto.org/iso/es/manifesto.html> · <https://agilemanifesto.org/iso/es/principles.html>
- **Sección leída:** valores del manifiesto; principios de entrega frecuente de software funcional, aceptación de cambios, colaboración y reflexión periódica.
- **Afirmación respaldada:** valora más a personas, software que funciona, colaboración y respuesta al cambio, sin declarar carentes de valor procesos, documentación, contratos o planes; propone entregar valor con frecuencia y revisar cómo mejorar.
- **IDs:** S06, S07, S11, S42.
- **Estado:** Verificado (HTTP 200 ambas; contenido leído).

## F2 — CI y Continuous Delivery

- **Título:** *Continuous Integration*; *Continuous Delivery*.
- **Autor:** Martin Fowler (CI); Martin Fowler con aportes del grupo de Continuous Delivery de Thoughtworks (CD).
- **Versión/fecha:** CI actualizado 18-01-2024 (página); bliki CD sin versión numerada.
- **URL:** <https://martinfowler.com/articles/continuousIntegration.html> · <https://martinfowler.com/bliki/ContinuousDelivery.html>
- **Sección leída:** definición de CI; integración frecuente con compilación y pruebas automatizadas; estado desplegable y despliegues automatizados en CD.
- **Afirmación respaldada:** CI integra cambios frecuentemente y los verifica con compilación automatizada (incluidas pruebas) para detectar pronto errores de integración. Continuous Delivery busca que el software pueda liberarse a producción; estar listo para publicar no implica Continuous Deployment.
- **Rótulo en el deck:** CI, Continuous Delivery y Continuous Deployment. No usar «integración continua», «entrega continua» ni «despliegue continuo» como nombre.
- **IDs:** S08, S09, S11, S42.
- **Estado:** Verificado (HTTP 200; contenido leído).

## F3 — Capacidades DORA y arquitectura cloud-native

- **Título:** *Capabilities* (DORA); NIST SP 800-204C, *Implementation of DevSecOps for a Microservices-based Application with Service Mesh*.
- **Autor:** DORA; Ramaswamy Chandramouli (NIST).
- **Versión/fecha:** catálogo web DORA sin versión visible; SP 800-204C, marzo de 2022.
- **URL:** <https://dora.dev/capabilities/> · <https://csrc.nist.gov/pubs/sp/800/204/c/final>
- **Sección leída:** fichas de capacidades DORA (Continuous Delivery, Continuous Integration, documentación interna, elección de herramientas); resumen/abstract de SP 800-204C.
- **Afirmación respaldada:** DORA presenta capacidades organizacionales y técnicas asociadas a entregar software de forma confiable. SP 800-204C trata DevSecOps específicamente para microservicios con service mesh; **no** usarla como definición universal de DevOps.
- **IDs:** S34, S35.
- **Estado:** Verificado (HTTP 200; alcance específico de NIST consignado).

## F4 — NIST SSDF

- **Título:** NIST SP 800-218, *Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities*.
- **Autor:** M. Souppaya, K. Scarfone, D. Dodson (NIST).
- **Versión/fecha:** v1.1, febrero de 2022; final en CSRC.
- **URL:** ficha <https://csrc.nist.gov/pubs/sp/800/218/final> · PDF <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf>
- **Sección leída:** ficha oficial, abstract, grupos de prácticas (Prepare the Organization, Protect the Software, Produce Well-Secured Software, Respond to Vulnerabilities) y tabla SSDF.
- **Afirmación respaldada:** el SSDF es un conjunto de prácticas de alto nivel integrables en cualquier implementación de SDLC para reducir vulnerabilidades del software liberado y mitigar el impacto de las no detectadas.
- **IDs:** S01, S04, S11, S15, S23, S27, S28, S30, S32, S33, S34, S35, S36, S38, S41, S42.
- **Estado:** Verificado (ficha y PDF HTTP 200; contenido leído). **No** respalda cifras de ahorro ni una definición literal de «Shift Left».

## F5 — Autorización y modelado de amenazas (OWASP)

- **Título:** *Authorization Cheat Sheet*; *Threat Modeling Cheat Sheet*.
- **Autor:** OWASP Cheat Sheet Series.
- **Versión/fecha:** páginas vivas sin versión numerada visible.
- **URL:** <https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html> · <https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html>
- **Sección leída:** Authorization — Recommendations, least privilege, deny by default, validate permissions on every request. Threat Modeling — Overview, Advantages/*Identify Risks Early On*, *Threat Modeling and the Development Team*.
- **Afirmación respaldada:** la autorización debe validar permisos en cada solicitud, aplicar mínimo privilegio y denegar por defecto. El modelado de amenazas es un proceso estructurado y repetible (modelar, identificar amenazas, decidir respuestas) que idealmente empieza en diseño y se mantiene con el sistema.
- **IDs:** S03, S04, S16, S24, S32, S38.
- **Estado:** Verificado (HTTP 200; secciones sustantivas leídas; página viva sin versión).

## F6 — Pruebas web, comprobaciones tempranas, SAST y análisis de componentes

- **Título:** *Web Security Testing Guide (WSTG)*; *Source Code Analysis Tools*; *Component Analysis*.
- **Autor:** OWASP Foundation / OWASP Community.
- **Versión/fecha:** WSTG con lanzamientos versionados; los dos recursos comunitarios son páginas vivas.
- **URL:** <https://owasp.org/projects/web-security-testing-guide> (redirige desde <https://owasp.org/www-project-web-security-testing-guide/>) · <https://community.owasp.org/Source_Code_Analysis_Tools> (redirige desde <https://owasp.org/www-community/Source_Code_Analysis_Tools>) · <https://community.owasp.org/Component_Analysis> (redirige desde <https://owasp.org/www-community/Component_Analysis>)
- **Sección leída:** descripción de WSTG; strengths/weaknesses de SAST; Component Analysis (inventario, vulnerabilidades conocidas, alcance). Ampliación del 12-10-2026: WSTG v4.2, «Test Early and Test Often» (<https://wstg.owasp.org/v4.2/2-Introduction/#test-early-and-test-often>) y «The Web Security Testing Framework» (<https://wstg.owasp.org/stable/3-The_OWASP_Testing_Framework/0-The_Web_Security_Testing_Framework/>).
- **Afirmación respaldada:** SAST analiza el código fuente o compilado para ayudar a encontrar clases de defectos, con límites de cobertura; el análisis de componentes/dependencias apoya inventario y avisos conocidos; una guía de pruebas web organiza comprobaciones, sin cobertura exhaustiva por ejecución puntual.
- **Respaldo para S05:** comprobar seguridad en distintas etapas permite detectar problemas antes y puede reducir el costo de corregirlos. El diagrama explica el retrabajo del caso; no representa una medición ni una curva universal de costos.
- **IDs:** S05, S13, S19, S20, S24.
- **Estado:** Verificado (HTTP 200; páginas finales leídas en alcance/limitaciones). Esta verificación cubre las categorías de análisis; los ejemplos concretos de S13 se verifican por separado en F19.

## F7 — Seguridad de pipeline y cadena de suministro

- **Título:** NIST SP 800-204D, *Strategies for the Integration of Software Supply Chain Security in DevSecOps CI/CD Pipelines*; OWASP *Top 10 CI/CD Security Risks*.
- **Autor:** Ramaswamy Chandramouli (NIST); OWASP Foundation.
- **Versión/fecha:** SP 800-204D publicación final (ficha NIST); proyecto OWASP sin versión de lanzamiento fijada.
- **URL:** <https://csrc.nist.gov/pubs/sp/800/204/d/final> · <https://owasp.org/projects/top-10-cicd-security-risks> (redirige desde <https://owasp.org/www-project-top-10-ci-cd-security-risks/>)
- **Sección leída:** título y resumen de la publicación NIST; lista OWASP CICD-SEC-1 a CICD-SEC-10 (identidades, dependencias, ejecución envenenada, higiene de credenciales, configuración).
- **Afirmación respaldada:** el pipeline y sus identidades, dependencias, configuración y artefactos son parte de la cadena de suministro de software y deben considerarse en la estrategia de seguridad.
- **IDs:** S15, S21, S25.
- **Estado:** **Parcial** — verificado en ficha NIST y lista OWASP (HTTP 200; contenido leído). No se atribuyen controles de implementación detallados sin revisar el PDF completo.

## F8 — SBOM (CISA)

- **Título:** *2026 Minimum Elements for a Software Bill of Materials (SBOM)*.
- **Autor:** CISA y coautores (NSA, FBI, ACSC, CCCS, NÚKIB, ANSSI, BSI, CERT-In, ACN, METI, NIS/NCSC, KISA, NCSC-NL, NCSC-NZ, NASK, NBU).
- **Versión/fecha:** publicación del **29-07-2026**; vigente en la página oficial al 11-10-2026.
- **URL:** <https://www.cisa.gov/resources-tools/resources/2026-minimum-elements-software-bill-materials-sbom> · PDF <https://www.cisa.gov/sites/default/files/2026-07/2026_cisa_sbom_minimum_elements_508c.pdf>
- **Sección leída:** portada, metadatos, resumen y tabla de elementos mínimos (Appendix A).
- **Afirmación respaldada:** una SBOM es un registro formal de componentes y relaciones de suministro; mejora la transparencia e informa decisiones de gestión de riesgos. **No** equivale a un análisis completo de seguridad ni garantiza ausencia de vulnerabilidades.
- **IDs:** S22.
- **Estado:** Verificado (página/PDF HTTP 200; texto extraído). El **PDF 2025** fue comprobado y está marcado expresamente *Public Comment Draft* (agosto 2025, pre-decisional); **no** citarlo como final. Para afirmaciones actuales se usa la publicación coautora **2026**.

## F9 — Gestión de secretos

- **Título:** *Secrets Management Cheat Sheet*.
- **Autor:** OWASP Cheat Sheet Series.
- **Versión/fecha:** página viva sin versión numerada visible.
- **URL:** <https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html>
- **Sección leída:** control de acceso, automatización, auditoría, ciclo de vida, rotación, revocación y expiración.
- **Afirmación respaldada:** restringir el acceso a secretos según mínimo privilegio, automatizar el ciclo de vida cuando sea posible y revocar o rotar credenciales comprometidas o innecesarias. Borrar una copia visible no revoca por sí solo una credencial aún válida.
- **IDs:** S17, S26, S28.
- **Estado:** Verificado (HTTP 200; contenido relevante leído).

## F10 — Evaluación del riesgo

- **Título:** NIST SP 800-30 Rev. 1, *Guide for Conducting Risk Assessments*.
- **Autor:** Joint Task Force Transformation Initiative (NIST).
- **Versión/fecha:** rev. 1, septiembre de 2012; final.
- **URL:** <https://csrc.nist.gov/pubs/sp/800/30/r1/final> · PDF <https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf>
- **Sección leída:** ficha oficial y resumen de propósito/alcance (preparación, conducción, comunicación y mantenimiento de evaluaciones).
- **Afirmación respaldada:** la evaluación de riesgos informa decisiones y prioridades según contexto; no sustituye las decisiones de aceptación/tratamiento de la organización. Un gate o una excepción concreta del deck es **propuesta didáctica**, no requisito universal de NIST.
- **IDs:** S20, S26, S28, S30.
- **Estado:** **Parcial** — verificado en ficha NIST (HTTP 200) y PDF oficial enlazado; la afirmación se limita al propósito general. Metodología detallada requeriría leer capítulos del PDF.

## F11 — Security Champions

- **Título:** *OWASP Security Champions Guide*.
- **Autor:** OWASP Foundation (proyecto incubator).
- **Versión/fecha:** guía web viva sin versión numerada visible.
- **URL:** ficha <https://owasp.org/projects/security-champions-guide> (redirige desde <https://owasp.org/www-project-security-champions-guide/>) · guía <https://securitychampions.owasp.org/>
- **Sección leída:** *Introduction*; principios 1 «Be passionate about security», 3 «Secure management support», 4 «Nominate a dedicated captain», 5 «Trust your champions», 6 «Create a community» y 9 «Invest in your champions». Lectura de los principios 1, 3, 5 y 9 ampliada el 12-10-2026.
- **Afirmación respaldada:** favorecer participación voluntaria e interés por seguridad; contar con respaldo organizacional, tiempo asignado, formación y reconocimiento; aprovechar el conocimiento contextual de los equipos, definir expectativas y mandato y sostener una comunidad. Una capitanía dedicada coordina el programa. Las facultades se definen localmente; el título **no** habilita a aceptar todo riesgo por defecto ni a reemplazar especialistas.
- **Uso y límites:** los comportamientos para identificar una persona interesada y la primera tarea sobre permisos son propuestas didácticas, no un perfil obligatorio ni una evaluación prescrita por OWASP.
- **IDs:** S31.
- **Estado:** Verificado (guía oficial y principios indicados leídos). La ficha del proyecto fue verificada anteriormente; la ruta antigua no estuvo accesible en la ampliación del 12-10-2026.
- **Enlaces de la ampliación:** [interés y voluntariado](https://securitychampions.owasp.org/principles/01_Be_passionate_about_security/), [respaldo de gestión](https://securitychampions.owasp.org/principles/03_Secure_management_support/), [expectativas y mandato](https://securitychampions.owasp.org/principles/05_Trust_your_champions/), [tiempo y formación](https://securitychampions.owasp.org/principles/09_Invest_in_your_champions/).

## F12 — Sistema de gestión de seguridad de la información

- **Título:** ISO/IEC 27001:2022, *Information security management systems — Requirements*.
- **Autor:** ISO e IEC.
- **Versión/fecha:** edición 3, 25-10-2022; la ficha ISO registra Amd 1:2024. Se usa el propósito general del SGSI, sin atribuir detalles de esa enmienda.
- **URL:** ficha ISO <https://www.iso.org/standard/27001> (accesible y leída el 12-10-2026; anteriormente respondió 403) · ficha pública IEC <https://webstore.iec.ch/en/publication/79694> · nota pública ISO/IEC JTC 1/SC 27 WG 1 sobre Statement of Applicability <https://committee.iso.org/files/live/sites/jtc1sc27/files/resources/ISO-IECJTC1-SC27-WG1_N3298_Auditing%20Practices%20Note%20-%20SoA.pdf>
- **Sección leída:** ficha ISO (*What is ISO/IEC 27001?*, propósito del SGSI y certificación); ficha IEC (alcance general del estándar); nota pública de prácticas de auditoría sobre SoA (documento de WG 1, 10-09-2022).
- **Afirmación respaldada:** ISO/IEC 27001 define requisitos de un SGSI para gestionar riesgos de información y mantener/mejorar el sistema en un alcance organizacional. La ficha ISO distingue implementación y certificación. La nota pública complementaria trata la SoA; no es el texto normativo completo.
- **Uso:** el tratamiento del acceso a extractos, sus pruebas y registros son ejemplos didácticos de contribución al SGSI, no equivalencias verificadas con requisitos o controles numerados.
- **IDs:** S36, S37, S38, S41, S42.
- **Estado:** **Alcance parcial** — fichas públicas ISO e IEC y nota del comité verificadas; el texto normativo completo no fue consultado. **Sin códigos de control ni afirmaciones de conformidad o certificación**. No se afirma obligación legal local.

## F13 — Procedencia y formatos de SBOM

- **Título:** *SLSA Specification*; especificaciones SPDX; *CycloneDX Specification Overview*.
- **Autor:** OpenSSF/SLSA; SPDX Project (Linux Foundation); OWASP CycloneDX.
- **Versión/fecha:** SLSA spec **1.2** (URL canónica consultada); SPDX y CycloneDX índices web vivos sin versión fijada.
- **URL:** <https://slsa.dev/spec/v1.2/> · <https://spdx.dev/use/specifications/> · <https://cyclonedx.org/specification/overview/>
- **Sección leída:** encabezado y estructura SLSA (Build/Source tracks, producir/verificar procedencia); páginas de especificaciones de formatos.
- **Afirmación respaldada:** SLSA trata garantías verificables sobre fuente/construcción de artefactos; SPDX y CycloneDX son formatos que pueden representar SBOM. La procedencia de compilación **no** demuestra ausencia de vulnerabilidades en los componentes.
- **IDs:** S22, S25.
- **Estado:** **Parcial** — páginas accesibles (HTTP 200) y estructura consultadas; la última distinción es conceptual (inventario ≠ procedencia ≠ análisis de vulnerabilidades), no una cita literal de una única fuente.

---

## F14 — Iteración e incremento: la Mona Lisa

- **Título:** *Don’t Know What I Want, But I Know How to Get It*.
- **Autor:** Jeff Patton.
- **Fecha:** 21-01-2008; consulta del 12-10-2026.
- **URL original:** <https://jpattonassociates.com/dont_know_what_i_want/>.
- **Sección leída:** «Iterating and incrementing are separate ideas», «We Conjoin Iteration and Incrementing» y «Please leverage the explanation if you’d like».
- **Afirmación respaldada:** iterar implica construir, evaluar y ajustar; incrementar suma software. Ambas prácticas pueden combinarse.
- **Ilustraciones:** autoría de Jeff Patton; copias descargadas de <https://itsadeliverything.com/images/patton-iterating-mona-lisa.jpg> y <https://itsadeliverything.com/images/patton-incrementing-mona-lisa.jpg>, publicadas con atribución en <https://itsadeliverything.com/revisiting-the-iterative-incremental-mona-lisa> (Steven Thomas, 03-12-2012).
- **Uso:** originales sin modificar en `public/clase-2/`; crédito y enlace al autor visibles en S06. El artículo original autoriza usar los ejemplos bajo una licencia Creative Commons y pide atribución; no se especifica aquí una variante de licencia.
- **Límite de la analogía:** agregar una porción de pintura muestra la suma de partes; en software se busca una capacidad utilizable.
- **IDs:** S06.
- **Estado:** Verificado (artículo original leído mediante consulta web; imágenes descargadas e inspeccionadas).

---

## F15 — Repositorios y pipelines

- **Autor:** GitHub Docs.
- **Títulos y URLs:** [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories); [Understanding GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions).
- **Fecha de consulta:** 12-10-2026; páginas vivas.
- **Secciones leídas:** contenido e historial del repositorio; Overview; Workflows; Events; Jobs; Runners.
- **Afirmación respaldada:** el repositorio conserva código e historial. Los flujos configurados pueden activarse por eventos del repositorio y ejecutar tareas en máquinas de automatización; su definición puede versionarse con el código. Las tareas pueden incluir build, pruebas y despliegue.
- **Uso:** S08–S09 y S13 muestran un ejemplo genérico inspirado en estos conceptos. No se prescribe GitHub ni una secuencia universal; las definiciones de CI, Continuous Delivery y Continuous Deployment se apoyan en F2.
- **IDs:** S08, S09, S13, S15, S18, S21.
- **Estado:** Verificado (contenido oficial leído mediante consulta web).

---

## F16 — DevOps y el ciclo en forma de infinito

- **Título y autor:** *What is DevOps?*, Atlassian.
- **URL:** <https://www.atlassian.com/devops>.
- **Fecha de consulta:** 12-10-2026; página viva.
- **Secciones leídas:** «How does DevOps work?» y «The DevOps lifecycle».
- **Afirmación respaldada:** desarrollo y operación colaboran durante el ciclo del producto; el infinito representa colaboración continua y mejora iterativa. Lo observado al operar alimenta futuros cambios.
- **Uso:** S10 usa un SVG propio con actividades habituales y vocabulario de la clase. El dibujo no reproduce el gráfico de Atlassian ni impone sus rótulos; la secuencia es una simplificación didáctica y las actividades pueden solaparse.
- **IDs:** S10, S11.
- **Estado:** Verificado (contenido oficial leído mediante consulta web).

---

## F17 — Shift Left Testing y estrategia de pruebas

- **Autor:** Microsoft Learn / Azure DevOps y Azure Well-Architected Framework.
- **URLs:** [Shift testing left with unit tests](https://learn.microsoft.com/en-us/devops/develop/shift-left-make-testing-fast-reliable); [Architecture strategies for testing](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/testing).
- **Fecha de consulta:** 12-10-2026.
- **Secciones leídas:** pruebas por niveles; «Shift left to test earlier»; «Test early, test often, test what matters»; «Apply layered approach in test coverage».
- **Afirmación respaldada:** adelantar pruebas al pipeline y escribir pruebas junto al código favorece feedback oportuno. Es necesario mantener pruebas confiables, seleccionar niveles y gestionar costos y tiempos de ejecución; las pruebas posteriores siguen aportando información.
- **Uso:** S12–S14. Las curvas de S12 son una ilustración propia de distribución del esfuerzo, sin datos, escala numérica ni ahorro calculado. No se usan estadísticas ni tiempos de los equipos de Microsoft como promesas para el caso.
- **IDs:** S12, S14, S16.
- **Estado:** Verificado (contenido sustantivo oficial leído).

## F18 — Shift Left Security y capacidad del equipo

- **Autor:** DORA / Google Cloud.
- **Título y URL:** [Pervasive security](https://dora.dev/capabilities/pervasive-security/).
- **Fecha de consulta:** 12-10-2026; página viva.
- **Secciones leídas:** explicación de shifting left; «How to implement improved security quality»; «Common pitfalls».
- **Afirmación respaldada:** integrar seguridad en el trabajo diario y el pipeline requiere colaboración, formación, herramientas adecuadas y mantenimiento de pruebas. Los resultados dependen de contar con apoyo y capacidad de actuar.
- **IDs:** S12, S14, S29, S30, S36, S42.
- **Estado:** Verificado (contenido oficial leído). No se trasladan cifras del estudio a esta clase.

## F19 — Ejemplos de herramientas para feedback local y CI

- **Fecha de consulta:** 12-10-2026; documentación oficial, sin fijar una versión para instalación.
- [Ruff](https://docs.astral.sh/ruff/): linter de Python e integración con editores.
- [pytest](https://docs.pytest.org/en/stable/getting-started.html): ejecuta pruebas escritas por el equipo y reporta fallas. Su nivel depende de cómo se diseña la prueba.
- [Semgrep Code](https://docs.semgrep.dev/semgrep-code/overview): análisis estático de seguridad por reglas, local o integrado en CI/CD.
- [Gitleaks](https://github.com/gitleaks/gitleaks): detección de posibles secretos en código e historial; admite ejecución local y automatizada.
- [pip-audit](https://github.com/pypa/pip-audit): consulta vulnerabilidades conocidas en dependencias Python; se usa como ejemplo de análisis de componentes, sin atribuirle toda capacidad posible de SCA.
- [OWASP ZAP Automation Framework](https://www.zaproxy.org/docs/automate/automation-framework/): permite automatizar tareas de análisis de una aplicación en ejecución.
- **Uso:** S13 y su guion. Son ejemplos de funciones y ubicaciones posibles, sin recomendar una compra o exigir instalación; no prueban cobertura completa ni reemplazan las pruebas de autorización del caso.
- **IDs:** S13, S16, S17, S19, S20, S24, S39.
- **Estado:** Verificado (documentación oficial leída).

---

## F20 — Protección del repositorio y gestión de secretos

- **Fecha de consulta:** 12-10-2026; documentación oficial.
- **GitHub:** [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) y [Available rules for rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets): condiciones de revisión, comprobaciones requeridas y restricciones sobre ramas y cambios. La disponibilidad concreta depende del plan y del repositorio; la clase describe la función.
- **Vault:** [What is Vault?](https://developer.hashicorp.com/vault/docs/what-is-vault): gestión central de secretos con identidad, autorización y auditoría. Un gestor no impide que una aplicación mal configurada copie una credencial a logs o archivos.
- **IDs:** S17, S18.
- **Estado:** Verificado (documentación oficial leída; sin recomendar un plan comercial).

## F21 — Build, imágenes y componentes

- **Fecha de consulta:** 12-10-2026; documentación oficial.
- **BuildKit:** [Overview](https://docs.docker.com/build/buildkit/) y [Build secrets](https://docs.docker.com/build/building/secrets/): construcción de imágenes y acceso temporal a secretos mediante montajes. El equipo configura entradas, permisos y tareas; el builder no es un escáner ni una garantía de reproducibilidad.
- **Trivy:** [Container image](https://trivy.dev/docs/latest/guide/target/container_image/): análisis de componentes y avisos conocidos en imágenes; admite distintos objetivos y clases de análisis. Se distingue el alcance configurado y la base de avisos del comportamiento completo de la app.
- **Syft:** [README oficial](https://github.com/anchore/syft): generación de SBOM desde imágenes y archivos; formatos de inventario como CycloneDX y SPDX. El inventario se complementa con análisis de vulnerabilidades.
- **IDs:** S20, S21, S22, S39.
- **Estado:** Verificado (contenido sustantivo oficial leído). Los nombres de bibliotecas y los hallazgos de las placas son ejemplos ficticios.

## F22 — Configuraciones, políticas y comunicaciones

- **Fecha de consulta:** 12-10-2026; documentación oficial.
- **Checkov:** [What is Checkov?](https://www.checkov.io/1.Welcome/What%20is%20Checkov.html): análisis de tipos de infraestructura como código, incluidos Terraform, Kubernetes y Docker.
- **Kubescape:** [Scanning your environment](https://kubescape.io/docs/scanning/): validación de configuraciones de recursos y clústeres; feedback por recurso y control. Un reporte se limita a las reglas ejecutadas y su alcance.
- **Kyverno:** [Introduction](https://kyverno.io/docs/introduction/): gestión y validación de políticas; aplicación según configuración y modo elegido.
- **Cilium:** [Policy enforcement modes](https://docs.cilium.io/en/stable/security/policy/intro/): políticas de comunicación que dependen de selección, reglas y modo de aplicación. Instalar Cilium no implica que toda comunicación quede restringida por defecto.
- **IDs:** S23, S26.
- **Estado:** Verificado (documentación oficial leída). Los ejemplos de configuración y gates son políticas didácticas; no se afirma certificación normativa.

## F23 — Pruebas de API y contrato

- **Título y autor:** *Schemathesis*, documentación oficial del proyecto.
- **URL:** <https://schemathesis.readthedocs.io/en/stable/>.
- **Fecha de consulta:** 12-10-2026.
- **Contenido leído:** generación de pruebas basadas en esquemas OpenAPI/GraphQL; errores del servidor y violaciones de contrato.
- **Afirmación respaldada:** generar pruebas del contrato ayuda a observar comportamiento y errores de la API. La autorización del caso requiere pruebas expresamente diseñadas; no se atribuye ese conocimiento automático al generador.
- **Complementos:** F19 para OWASP ZAP; F5 y F6 para autorización y pruebas web.
- **IDs:** S24.
- **Estado:** Verificado.

## F24 — Firma, procedencia y registro de artefactos

- **Fecha de consulta:** 12-10-2026; documentación oficial.
- **Cosign:** [Verifying signatures](https://docs.sigstore.dev/cosign/verifying/verify/): verificación por identidad/clave esperada, contenido y atestaciones. La política de confianza requiere configuración; verificar una firma no prueba ausencia de vulnerabilidades.
- **Harbor:** [Vulnerability scanning](https://goharbor.io/docs/2.14.0/administration/vulnerability-scanning/): artefactos almacenados y escáneres integrables. Se presenta la función del registro y el análisis configurado, sin afirmar que todos los controles se activen automáticamente.
- **SLSA:** [Specification v1.2](https://slsa.dev/spec/v1.2/) (F13): procedencia del proceso y garantías verificables dentro de un alcance.
- **IDs:** S25.
- **Estado:** Verificado. Identidad, integridad, procedencia y seguridad del contenido se mantienen como propiedades distintas.

## F25 — Señales y seguridad durante la ejecución

- **Fecha de consulta:** 12-10-2026; documentación oficial.
- **OpenTelemetry:** [What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/): generación, exportación y recolección de métricas, trazas y logs. No es por sí solo el backend de visualización ni el sistema de alertas.
- **Falco:** [Concepts](https://falco.org/docs/concepts/) y [Falco rules](https://falco.org/docs/concepts/rules/): fuentes de eventos, reglas y salidas para señales de seguridad durante la ejecución.
- **IDs:** S27.
- **Estado:** Verificado. Rechazos y procesos inesperados son ejemplos didácticos; las acciones concretas requieren contexto y criterios del equipo.

## F26 — Seguimiento de hallazgos

- **Título y autor:** *DefectDojo*, README oficial del proyecto.
- **URL:** <https://github.com/DefectDojo/django-DefectDojo>.
- **Fecha de consulta:** 12-10-2026.
- **Afirmación respaldada:** reúne información de pruebas y hallazgos, deduplicación, seguimiento de remediación y reportes. No se atribuye a una herramienta la autoridad para aceptar riesgo ni la realización automática de todas las correcciones.
- **Complementos:** F10 para decisión contextual; F9 para invalidar credenciales; F4 para respuesta y evidencia. La política de excepción y el recorrido de cierre son propuestas didácticas.
- **IDs:** S28.
- **Estado:** Verificado (README oficial leído).

## F27 — Corrección del ejemplo de inyección SQL

- **Título y autor:** *SQL Injection Prevention Cheat Sheet*, OWASP Cheat Sheet Series.
- **URL:** <https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html>.
- **Fecha de consulta:** 12-10-2026.
- **Afirmación respaldada:** separar instrucciones y datos mediante consultas parametrizadas evita que una entrada se interprete como parte de la instrucción SQL en ese patrón.
- **Uso:** S19 muestra un hallazgo ilustrativo; no una salida real ni un diagnóstico comprobado sobre este repositorio. La prueba de autorización sigue siendo necesaria.
- **IDs:** S19.
- **Estado:** Verificado (guía oficial leída).

---

## F28 — Calidad y seguridad dentro del editor

- **Título y autor:** *SonarQube for IDE*, Sonar Documentation.
- **URLs:** [Scan my project](https://docs.sonarsource.com/sonarqube-for-vs-code/using/scan-my-project) y [Homepage](https://docs.sonarsource.com/sonarqube-for-vs-code).
- **Fecha de consulta:** 12-10-2026.
- **Afirmación respaldada:** revisión estática integrada en el editor con feedback sobre reglas del código. La disponibilidad de reglas y análisis de seguridad depende del lenguaje, configuración y conexión con el servidor.
- **Uso:** S16 presenta la función del control, no una promesa de cobertura completa ni un diagnóstico real del repositorio. Las pruebas unitarias del caso las escribe el equipo.
- **IDs:** S16.
- **Estado:** Verificado (documentación oficial consultada mediante búsqueda).

---

## F29 — DevSecOps como integración organizacional y técnica

- **Título y autor:** *DevSecOps Tools*, Kev Zettler, Atlassian.
- **URL:** <https://www.atlassian.com/devops/devops-tools/devsecops-tools>.
- **Fecha de consulta:** 12-10-2026.
- **Contenido leído:** secciones *What is DevSecOps?* y *Plan*.
- **Afirmación respaldada:** integrar seguridad durante el ciclo combina prácticas organizacionales y técnicas, responsabilidad compartida, planificación colaborativa y controles automatizados en CI/CD.
- **Complemento:** F18 (DORA) respalda la participación temprana de seguridad, su integración cotidiana y los problemas de falta de colaboración o participación tardía.
- **Uso y límites:** S29 representa una tensión ilustrativa entre objetivos separados; no se atribuye esa escena a todas las organizaciones. El Venn de S30 es una síntesis propia de ejemplos de colaboración; no establece incumbencias exclusivas ni autoridad normativa.
- **IDs:** S29, S30.
- **Estado:** Verificado (secciones de la fuente leídas).

---

## F30 — Cultura para reportar, colaborar y aprender

- **Título y autor:** *Capabilities: Generative organizational culture*, DORA.
- **URL:** <https://dora.dev/capabilities/generative-organizational-culture/>.
- **Fecha de consulta:** 12-10-2026.
- **Secciones leídas:** características de la información útil, tipología de Westrum, implementación y dificultades comunes.
- **Afirmación respaldada:** cooperación entre funciones, información oportuna y utilizable, apoyo a quienes comunican problemas y aprendizaje a partir de fallas; se advierte sobre castigar malas noticias y la falta de respaldo organizacional.
- **Uso y límites:** la conversación sobre el fallo de permisos y las tareas de respuesta son una propuesta didáctica propia. No se atribuye a DORA una política de publicación ni una asignación universal de autoridad. Complemento: F4 para respuesta a hallazgos y mejora.
- **IDs:** S33.
- **Estado:** Verificado (contenido de la fuente leído).

---

## F31 — PCI DSS: propósito, alcance y versión

- **Autor:** PCI Security Standards Council (PCI SSC).
- **Fecha de consulta:** 12-10-2026.
- **Fuentes oficiales leídas:** [PCI Data Security Standard](https://www.pcisecuritystandards.org/standards/pci-dss/), secciones propósito y audiencia; [Document Library](https://www.pcisecuritystandards.org/document_library/?category=pcidss), documento destacado v4.0.1; [Just Published: PCI DSS v4.0.1](https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1), publicación del 11-06-2024 y alcance de la revisión.
- **Afirmación respaldada:** base de requisitos técnicos y operativos para datos de tarjetas; entidades que almacenan, procesan o transmiten esos datos o pueden afectar la seguridad de su entorno. La biblioteca presenta v4.0.1.
- **Uso y límites:** S39 supone que el servicio de pagos entra en ese alcance. SAST, SCA y control de cambios son ejemplos de contribución con capacidades ya respaldadas en F19 y F21, no una matriz de equivalencia con requisitos PCI. Los requisitos detallados, plazos y procedimientos deben cotejarse en el estándar completo y contexto de evaluación.
- **Acceso:** el [PDF oficial v4.0.1](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf) respondió 403; no se atribuyen números de requisitos ni se afirma haber leído el documento completo.
- **IDs:** S36, S37, S39, S41, S42.
- **Estado:** Verificado en fuentes públicas para propósito, alcance y versión; parcial para requisitos detallados.

## F32 — SOC 2 y criterios de confianza

- **Autor:** AICPA & CIMA; AICPA Assurance Services Executive Committee para los criterios.
- **Fecha de consulta:** 12-10-2026.
- **Fuentes públicas leídas:** [System and Organization Controls: SOC Suite of Services](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services); ficha [2017 Trust Services Criteria, with Revised Points of Focus – 2022](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022); [Maintaining high standards for SOC engagements](https://www.aicpa-cima.com/professional-insights/video/maintaining-high-standards-for-soc-engagements), propósito SOC 2 y consideraciones de evidencia/evaluación.
- **Afirmación respaldada:** los criterios permiten evaluar controles relevantes para seguridad, disponibilidad, integridad del procesamiento, confidencialidad o privacidad de servicios y sistemas. SOC 2 produce un informe de evaluación con alcance propio; la pertinencia y suficiencia de evidencia requieren evaluación profesional.
- **Uso y límites:** el control de revisión/pruebas y la historia de cambios de S40 son propuestas ilustrativas. Las cinco categorías no implican inclusión automática en todo informe. No se presenta SOC 2 como ley ni como certificación emitida por CI. No se desarrolla una comparación de tipos de informe ni se atribuyen criterios numerados.
- **Acceso:** la ficha de criterios fue leída; la descarga completa requiere una cuenta, que no se creó. Los ejemplos de pipeline no se atribuyen como texto de los criterios.
- **IDs:** S36, S37, S40, S41, S42.
- **Estado:** Verificado en fichas y recursos públicos; detalle de criterios no consultado en texto completo.

---

## F33 — Imagen, contenedor y registro en la entrega

- **Autor:** Docker Documentation.
- **Fecha de consulta:** 12-10-2026.
- **Fuentes oficiales leídas:** [What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/), explicación y comparación con máquinas virtuales; [What is an image?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/), empaquetado e inmutabilidad; [What is a registry?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/), almacenamiento y distribución; [Image digests](https://docs.docker.com/dhi/explore/security-concepts/digests/), identidad de contenido y diferencia con etiquetas.
- **Afirmación respaldada:** una imagen empaqueta archivos, código y dependencias; un contenedor es un proceso aislado iniciado desde ese contenido; un registro almacena y distribuye imágenes. En Linux los contenedores comparten el kernel del host. El digest identifica el contenido; una etiqueta puede reasignarse.
- **Uso y límites:** Referencia complementaria sobre la imagen como artefacto de entrega; no se afirma que todas las entregas usen contenedores. Promover el mismo contenido, ejecutar controles y suministrar secretos externos son decisiones del ejemplo. Compatibilidad, configuración y dependencias externas condicionan el funcionamiento.
- **Complementos:** F21 para construcción, componentes y SBOM; F24 para identidad, firma y procedencia; F9 para secretos.
- **IDs:** Sin referencia en el deck vigente; conservada como consulta bibliográfica.
- **Estado:** Verificado (documentación oficial leída).

---

## F34 — Evaluación de clase 2: fecha y ventana docente

- **Autor y fuente:** indicación del usuario en esta conversación; última placa de `slides-clase-1.md`, *Examen de la clase*.
- **Fecha de registro:** 12-10-2026.
- **Indicación recibida:** examen el viernes 16 de octubre, con idénticos horarios a clase 1.
- **Horarios de referencia:** clase 1 abre viernes 9-10-2026 a las 08:00 GMT-3 y cierra sábado 10-10-2026 a las 08:00 GMT-3.
- **Aplicación en clase 2:** viernes 16-10-2026, 08:00 GMT-3 → sábado 17-10-2026, 08:00 GMT-3; ambas comisiones, 24 horas de disponibilidad.
- **IDs:** S43.
- **Estado:** fecha autorizada por docencia y ventana replicada de la referencia local. Formularios, URLs y QR pendientes; la placa no configura ni publica accesos.

---

## Notas transversales

1. **Páginas vivas:** OWASP, DORA, SPDX y CycloneDX son contenido web dinámico sin versión fijada; registrar la fecha de consulta (11-10-2026). Ante discrepancia, prevalece la versión vigente de cada fuente y se actualiza este registro.
2. **Ilustraciones y mediciones:** las curvas de S12 representan una distribución cualitativa del esfuerzo de pruebas y revisión. No son datos medidos, curvas de costo ni evidencia de ahorro total. No se usan multiplicadores («10×», «100×»). Las cifras de S34 (8 de 10 cambios y 24 horas) son ejemplos ficticios, sin metas universales. Las métricas de S34, los aportes de cumplimiento y el registro de S36–S41, y las decisiones de excepción del caso son **propuestas didácticas**, no equivalencias normativas ni garantías de conformidad.
3. **Sin códigos de control:** F12, F31 y F32 respaldan propósito y alcance general; no habilitan a enumerar controles no contrastados ni a afirmar conformidad. ISO/IEC 27001, PCI DSS y SOC 2 son tres referencias elegidas, sin ranking universal de popularidad.
4. **Procedencia y SBOM:** presentar inventario, procedencia y análisis de vulnerabilidades como conceptos distintos (S22, S25).
5. **NIST detalle:** F7 y F10 verificadas por ficha/resumen y listas; los detalles de implementación requieren lectura del documento completo antes de atribuir controles específicos.
