//----------------------------------------------------------
//Funcion encargada de enviar el mensaje segun la efectividad de un ataque
//----------------------------------------------------------
// --NOTA: Este script se puede reescribir como un switch
export function MensajedeEfectividad(efectivity) {
    let mensaje;
    if (efectivity == 4) {
        return mensaje = "¡Es Hipereficaz!";
    } else if (efectivity == 2) {
        return mensaje = "¡Es Superficaz!";
    } else if (efectivity == 0.5) {
        return mensaje = "Es poco eficaz...";
    } else {
        return mensaje = "Es neutral"
    }
}