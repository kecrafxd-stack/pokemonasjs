//----------------------------------------------------------
//Funcion encargada de enviar el mensaje segun el movimiento de estado utilizado
//----------------------------------------------------------
function MensajeDeStat(atacante, atacanteSelect, defensor, stataffected, TipodeEfectoenstat) {
    if (atacante.whoaffect[atacanteSelect] == "rival") {
        if (stataffected == "atk") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("El ataque de " + defensor + " ha aumentado!");
            } else {
                return mensaje = ("El ataque de " + defensor + " ha disminuido!");
            }
        } else if (stataffected == "def") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("La defensa de " + defensor + " ha aumentado!");
            } else {
                return mensaje = ("La defensa de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "spatk") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("El ataque especial de " + defensor + " ha aumentado!");
            } else {
                return mensaje = ("El ataque especial de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "spdef") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("La defensa especial de " + defensor + " ha aumentado!");
            } else {
                return mensaje = ("La defensa especial de " + defensor + " ha disminuido!");
            }

        } else if (stataffected == "speed") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = "La velocidad de " + defensor + " ha aumentado!";
            } else {
                return mensaje = "La velocidad de " + defensor + " ha disminuido!";
            }
        }
    } else {
        if (stataffected == "atk") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("El ataque de " + atacante.name + " ha aumentado!");
            } else {
                return mensaje = ("El ataque de " + atacante.name + " ha disminuido!");
            }
        } else if (stataffected == "def") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("La defensa de " + atacante.name + " ha aumentado!");
            } else {
                return mensaje = ("La defensa de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "spatk") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("El ataque especial de " + atacante.name + " ha aumentado!");
            } else {
                return mensaje = ("El ataque especial de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "spdef") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = ("La defensa especial de " + atacante.name + " ha aumentado!");
            } else {
                return mensaje = ("La defensa especial de " + atacante.name + " ha disminuido!");
            }

        } else if (stataffected == "speed") {
            if (TipodeEfectoenstat == "buff") {
                return mensaje = "La velocidad de " + atacante.name + " ha aumentado!";
            } else {
                return mensaje = "La velocidad de " + atacante.name + " ha disminuido!";
            }
        }
    }

}