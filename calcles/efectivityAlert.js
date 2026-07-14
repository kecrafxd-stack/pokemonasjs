//----------------------------------------------------------
//Funcion encargada de enviar el mensaje segun la efectividad de un ataque
//----------------------------------------------------------
// --NOTA: Este script se puede reescribir como un switch
export function MensajedeEfectividad(efectivity) {
    if (efectivity == 4) {
        return "¡Es Hipereficaz!";
    } else if (efectivity == 2) {
        return "¡Es Superficaz!";
    } else if (efectivity == 0.5) {
        return "Es poco eficaz...";
    } else {
        return "Es neutral"
    }
}