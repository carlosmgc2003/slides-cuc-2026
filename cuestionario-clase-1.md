# Software seguro desde el diseño · Clase 1

Cuestionario de comprensión. Caso de estudio: app de banca digital.

**Configuración en Google Forms**

- Crear el formulario y, en Configuración, activar **Convertir en un cuestionario**.
- Tipo de cada ítem: **Opción múltiple**. Obligatoria. **1 punto**. Total: 10.
- No uses desplegable: los escenarios se leen peor.
- Podés barajar las opciones. Conviene no barajar las preguntas: siguen el orden de la clase.
- Pegá la retroalimentación en la respuesta correcta. No publiques este archivo: incluye la clave.

**Texto de presentación**

Comprueba ideas de la clase, no datos memorizados. En cada pregunta hay una sola opción correcta. El caso es siempre la app de banca: autenticarse, consultar y transferir.

---

## 1. Dónde puede vivir una vulnerabilidad

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** B

**Pregunta**

Una historia de usuario no define quién puede ver los movimientos de una cuenta. Todavía no hay código escrito ni una explotación conocida. ¿Qué corresponde afirmar?

**Opciones**

- A. No hay vulnerabilidad: solo el código fuente puede contenerlas.
- B. Puede haber una vulnerabilidad en ese requisito, aunque nadie la haya descubierto ni explotado.
- C. No hay vulnerabilidad hasta que alguien la explote.
- D. Hay un atacante, porque omitir el requisito implica intención de comprometer el sistema.

**Retroalimentación**

Una vulnerabilidad es una debilidad en el sistema, sus procedimientos, controles o implementación. Puede estar en requisitos, diseño, código, build, configuración u operación. Que nadie la conozca o la use todavía no significa que no exista.

---

## 2. Qué propiedad se perdió

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** C

**Pregunta**

Un cliente autoriza una transferencia de $10.000. El servicio responde y la operación queda registrada, pero el importe asentado es $100.000. ¿Qué propiedad se vio afectada de forma directa?

**Opciones**

- A. Confidencialidad: alguien pudo ver el saldo.
- B. Disponibilidad: el servicio no estaba accesible.
- C. Integridad: el importe no permaneció correcto.
- D. Ninguna: si el servicio respondió, la operación fue segura.

**Retroalimentación**

La integridad exige que el importe y el destinatario permanezcan como fueron autorizados. Que el servicio responda no garantiza que el resultado sea correcto.

---

## 3. Amenaza y atacante

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** D

**Pregunta**

¿Cuál de estos escenarios es una amenaza que, según los ejemplos de la clase, no requiere un atacante?

**Opciones**

- A. Una persona intenta consultar movimientos de una cuenta ajena.
- B. Un empleado usa a propósito sus permisos para extraer datos de clientes.
- C. Alguien ingresa con credenciales robadas para operar como otro cliente.
- D. Una falla de la base de datos interrumpe las transferencias.

**Retroalimentación**

La amenaza es un escenario con potencial de daño. El atacante es quien actúa con intención de comprometer el sistema. Una falla o un error de configuración pueden originar una amenaza sin que haya un atacante.

---

## 4. La misma amenaza, otro riesgo

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** B

**Pregunta**

Dos organizaciones enfrentan la misma amenaza: que alguien consulte movimientos ajenos. En una, el servidor verifica la autorización en cada consulta. En la otra, confía en el identificador que envía el cliente. ¿Qué afirma la clase?

**Opciones**

- A. El riesgo es el mismo, porque la amenaza es la misma.
- B. El riesgo puede ser distinto: cambian las vulnerabilidades, la exposición y los controles.
- C. El riesgo depende solo de la intención del atacante, no del sistema.
- D. Como el riesgo se estima con probabilidad e impacto, la misma amenaza da siempre el mismo valor.

**Retroalimentación**

La amenaza describe el escenario. El riesgo valora si puede concretarse en este sistema y cuánto afectaría. La relación probabilidad × impacto es una aproximación para ordenar la conversación, no una fórmula que fije el mismo resultado.

---

## 5. Fuera de nuestro control

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** C

**Pregunta**

El proveedor de notificaciones no está bajo el control del equipo que desarrolla la app. ¿Cómo entra en el análisis?

**Opciones**

- A. No entra: lo que no administramos queda fuera del análisis.
- B. Entra solo después de un incidente con ese proveedor.
- C. Puede afectar al sistema, así que se analiza aunque no lo controlemos.
- D. Entra como almacén de los saldos, porque es quien guarda los movimientos.

**Retroalimentación**

El alcance delimita el sistema bajo análisis, no borra las dependencias externas. Fuera de nuestro control no significa fuera del análisis. En el caso, ese proveedor envía avisos; no es el almacén de saldos y movimientos.

---

## 6. Autenticado no significa autorizado

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** C

**Pregunta**

Un cliente ya autenticado cambia el identificador y pide el saldo de otra cuenta. El identificador tiene formato válido. ¿Qué debe frenar la consulta?

**Opciones**

- A. Nada más: la autenticación ya demostró que puede ver cualquier cuenta.
- B. La validación de formato: si el identificador es válido, la consulta también lo es.
- C. La autorización en el servidor: esa identidad tiene que tener permiso sobre esa cuenta.
- D. Ocultar el botón en la pantalla: si la app no lo muestra, el endpoint queda protegido.

**Retroalimentación**

Autenticación, autorización y validación de datos son comprobaciones distintas. Una sesión válida y un dato bien formado no conceden acceso. La pantalla no reemplaza la verificación en el servidor.

---

## 7. Fallar seguro

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** B

**Pregunta**

El sistema no puede verificar la autorización y hay una transferencia pendiente. ¿Qué respuesta corresponde a fallar seguro?

**Opciones**

- A. Ejecutar la transferencia, porque el cliente ya inició sesión.
- B. No ejecutar la transferencia: sin poder comprobar el permiso, no se hace la acción sensible.
- C. Apagar consultas, transferencias y notificaciones: fallar seguro es detener todo.
- D. Ejecutarla y ocultar el resultado en la pantalla si algo no cierra.

**Retroalimentación**

Fallar seguro no es apagar todo. Si se pierde la capacidad de comprobar permisos, se limitan las acciones sensibles. Una función independiente, como notificar, puede degradarse sin frenar una operación que conserva sus propios controles.

---

## 8. Un lente de STRIDE

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** C

**Pregunta**

Un cliente niega haber autorizado una transferencia. El sistema no conserva evidencia suficiente para atribuirle esa acción. ¿Qué lente de STRIDE aplica?

**Opciones**

- A. Suplantación: alguien actuó con una identidad ajena.
- B. Manipulación: se alteró el importe o el destinatario.
- C. Repudio: se puede negar la acción porque no hay evidencia trazable.
- D. Elevación de privilegios: obtuvo permisos mayores a los asignados.

**Retroalimentación**

STRIDE son seis lentes para buscar abusos, no un ranking de gravedad. Repudio no es simplemente negar algo: es no poder atribuir la acción con evidencia suficiente. La letra no decide la prioridad.

---

## 9. Del abuso al requisito

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** A

**Pregunta**

La historia de abuso es: «Como atacante, quiero consultar el saldo y los movimientos de otra cuenta para obtener información privada». ¿Cuál es un requisito de seguridad alineado con la clase?

**Opciones**

- A. En cada consulta, verificar que la identidad autenticada esté autorizada para esa cuenta.
- B. Implementar el control con una biblioteca determinada de control de acceso.
- C. Exigir inicio de sesión, sin precisar sobre qué cuenta puede consultar esa identidad.
- D. Ocultar el identificador de cuenta en la interfaz para que no pueda cambiarse.

**Retroalimentación**

El requisito define qué debe garantizarse, no cómo implementarlo. «Cada consulta» y «para esa cuenta» importan: haber iniciado sesión no autoriza a ver todas las cuentas. El identificador selecciona un recurso; no demuestra permiso.

---

## 10. La prueba que cierra la cadena

- **Tipo:** Opción múltiple
- **Obligatoria:** Sí
- **Puntos:** 1
- **Correcta:** D

**Pregunta**

Para comprobar ese control, la app muestra «acceso denegado». ¿Alcanza como evidencia?

**Opciones**

- A. Sí: si la pantalla rechaza, el servidor no envió saldo ni movimientos.
- B. Sí, siempre que quien prueba haya iniciado sesión.
- C. No hace falta una prueba: escribir el requisito ya garantiza el comportamiento.
- D. No: hay que comprobar la respuesta del servidor y que no incluya los datos.

**Retroalimentación**

La cadena es amenaza, requisito, control y prueba. Un mensaje en la app no alcanza: el servidor podría haber enviado el saldo aunque la pantalla lo oculte. La comprobación tiene que mostrar rechazo y ausencia de datos. Esa garantía, además, hay que sostenerla en el resto del ciclo: el software cambia.

---

## Clave rápida

| # | Correcta | Idea |
|---|----------|------|
| 1 | B | La debilidad puede estar antes del código y antes de ser explotada. |
| 2 | C | Importe alterado: integridad. Que responda no alcanza. |
| 3 | D | No toda amenaza tiene un atacante. |
| 4 | B | La misma amenaza puede tener distinto riesgo. |
| 5 | C | Fuera de control no es fuera del análisis. |
| 6 | C | Autenticación no reemplaza autorización en el servidor. |
| 7 | B | Sin poder autorizar, no se ejecuta la transferencia. |
| 8 | C | Repudio: negar sin evidencia trazable. |
| 9 | A | El requisito es la garantía, no la herramienta. |
| 10 | D | La prueba mira la respuesta del servidor, no solo la pantalla. |
