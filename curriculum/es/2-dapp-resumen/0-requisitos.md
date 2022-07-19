# Requisitos y descripción general de la Dapp

## Definir objetivo y requisitos

Durante estos 30 días, trabajaremos para crear un dapp RSVP completo. Piense en ello como un eventbrite nativo de web3, excepto que los asistentes deben depositar ETH para confirmar su asistencia y lo recuperarán cuando se registren en el evento.

**Esto es lo que nuestro *smart contract* debería poder manejar:**

**Creación de un nuevo evento.**
- Una identificación única
- Una referencia a quién creó el evento (la dirección de wallet del creador)
- La hora del evento, para que sepamos cuándo deberían estar disponibles los reembolsos.
- La capacidad máxima de asistentes para ese evento
- El monto del depósito para ese evento.
- Mantenga un registro de aquellos que confirmaron su asistencia
- Realizar un seguimiento de los usuarios que se registran en el evento
- Encuentre la diferencia entre los que confirmaron su asistencia y los que se registraron, y reembolse a todos excepto a esos.

RSVP a un evento
- Un ID unico
- Pase una identificación de evento única a la que el usuario desea confirmar su asistencia
- Asegurarse de que el valor de su depósito sea suficiente para el requisito de depósito de ese evento
- Asegúrese de que el evento aún no haya comenzado según la marca de tiempo del evento: las personas no deberían poder confirmar su asistencia después de que el evento haya comenzado
- Asegúrese de que el evento esté por debajo de la capacidad máxima


Registrar asistentes
- Pase un ID de evento único para el evento para el que el usuario desea confirmar a los usuarios
- Asegúrese de que solo el creador del evento pueda confirmar los asistentes
- Pase la dirección del asistente del usuario que se está registrando y verifique si su dirección está guardada en la lista RSVP
- Si se encuentran en la lista RSVP, agréguelos a una lista de asistentes confirmados
- Si el usuario está en la lista de asistentes confirmados, devolver su depósito

Retire los depósitos restantes de los invitados que no se registraron y envíelos al propietario del evento.
- Pase una identificación de evento única para el evento del que el usuario desea retirar fondos
- Asegurarse de que han pasado al menos 7 días desde el evento
- Encuentre la diferencia en el número de invitados que respondieron y los invitados que se registraron
- Multiplique el monto del depósito por la discrepancia de los huéspedes entre la confirmación de asistencia y el check in y devuelva el monto al propietario

### Eventos y subgráficos

Mientras escribimos nuestro *smart contract*, vamos a crear eventos personalizados que nos ayudarán a construir nuestro subgrafo. Los ***Events*** son *disparadores que su interfaz y su subgrafo pueden escuchar*, y esto los hace perfectos para ejecutar código de manera condicional en la interfaz de usuario e indexar datos de manera condicional.

El subgráfico es lo que nos permitirá crear la capacidad de agregar una funcionalidad de tablero, donde los usuarios pueden ver los eventos que han creado y a los que han asistido. Más sobre los subgráficos más adelante, pero por ahora lo importante a tener en cuenta es que tenemos que exponer datos sobre los eventos que un usuario crea y confirma su asistencia a través de *Solidity Events*.

**Los eventos que crearemos:**
- NewRSVP: para ser emitido dentro de la función que se llama cuando un usuario confirma su asistencia para un evento
- Asistente confirmado: para ser emitido dentro de la función que se llama cuando un usuario se registra en un evento
- DepositsPaid: se emitirá dentro de la función que se llama cuando un usuario se registra en un evento y recupera su depósito

### Preparador de subgráficos

Nos sumergiremos en los detalles de la construcción de nuestro subgráfico después de la sección de *smart contract*, pero debe comprender el papel de un subgráfico en su dapp mientras escribe el *smart contract* para asegurarse de que está optimizando su contrato para la información *on-chain* de la cadena que desea mostrar en su interfaz

El **subgráfico** le permite *hacer preguntas sofisticadas* sobre sus datos. El subgrafo solo tiene acceso a los datos que exponemos a través de *eventos de solidity*. Por esta razón, vamos a crear eventos personalizados que expongan datos. Haremos preguntas sobre nuestros datos para obtener información sobre los eventos para los que nuestros usuarios están reservados, eventos que están en el futuro frente a eventos que ya han pasado.
