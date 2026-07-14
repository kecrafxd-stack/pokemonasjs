//----------------------------------------------------------
//Funcion encargada de enviar el mensaje segun el movimiento de estado utilizado
//----------------------------------------------------------
export function MensajeDeStat(atacante, atacanteSelect, defensor, stataffected, TipodeEfectoenstat) {
    if (atacante.whoaffect[atacanteSelect] == "rival") {
        if (stataffected == "atk") {
            if (TipodeEfectoenstat == "buff") {
                return ("El ataque de " + defensor + " ha aumentado!");
            } else {
                return ("El ataque de " + defensor + " ha disminuido!");
            }
        } else if (stataffected == "def") {
            if (TipodeEfectoenstat == "buff") {
                return ("La defensa de " + defensor + " ha aumentado!");
            } else {
                return ("La defensa de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "spatk") {
            if (TipodeEfectoenstat == "buff") {
                return ("El ataque especial de " + defensor + " ha aumentado!");
            } else {
                return ("El ataque especial de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "spdef") {
            if (TipodeEfectoenstat == "buff") {
                return ("La defensa especial de " + defensor + " ha aumentado!");
            } else {
                return ("La defensa especial de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "speed") {
            if (TipodeEfectoenstat == "buff") {
                return "La velocidad de " + defensor + " ha aumentado!";
            } else {
                return "La velocidad de " + defensor + " ha disminuido!";
            }
        }
    } else {
        if (stataffected == "atk") {
            if (TipodeEfectoenstat == "buff") {
                return ("El ataque de " + atacante.name + " ha aumentado!");
            } else {
                return ("El ataque de " + atacante.name + " ha disminuido!");
            }
        } else if (stataffected == "def") {
            if (TipodeEfectoenstat == "buff") {
                return ("La defensa de " + atacante.name + " ha aumentado!");
            } else {
                return ("La defensa de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "spatk") {
            if (TipodeEfectoenstat == "buff") {
                return ("El ataque especial de " + atacante.name + " ha aumentado!");
            } else {
                return ("El ataque especial de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "spdef") {
            if (TipodeEfectoenstat == "buff") {
                return ("La defensa especial de " + atacante.name + " ha aumentado!");
            } else {
                return ("La defensa especial de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "speed") {
            if (TipodeEfectoenstat == "buff") {
                return "La velocidad de " + atacante.name + " ha aumentado!";
            } else {
                return "La velocidad de " + atacante.name + " ha disminuido!";
            }
        }
    }

}