//Antes que nada, comprendo que este metodo resulta poco eficiente, y que unicamente trabajara con el primer tipo.
//Por ende para Pókemon de doble tipo no habra algo especial.
//Oficialmente el segundo tipo afecta la vulnerabilidad del primer tipo, pero en este caso unicamente el primer tipo definira eso.
//Por ahora no tengo pensado escalar este proyecto como para que la efectividad responda al doble tipo, por ende, no se debe recalcar lo que yo ya recalque.

//----------------------------------------------------------
//Funcion encargada de calcular la efectividad de un ataque
//----------------------------------------------------------
export function CalcularEfectividad(actualMoveType, pokemonType) {
    let efectividad = 1;

    switch (actualMoveType) {
        case "Fire":
            if (pokemonType == "Grass") {
                efectividad = 2;
            } else if (pokemonType == "Water" || pokemonType == "Fire") {
                efectividad = 0.5;
            };
            break;
        case "Water":
            if (pokemonType == "Fire") {
                efectividad = 2;
            } else if (pokemonType == "Grass" || pokemonType == "Water") {
                efectividad = 0.5;
            };
            break;
        case "Grass":
            if (pokemonType == "Water") {
                efectividad = 2;
            } else if (pokemonType == "Fire" || pokemonType == "Grass") {
                efectividad = 0.5;
            };
            break;
        case "Fight":
            if (pokemonType == "Fire" || pokemonType == "Water" || pokemonType == "Grass") {
                efectividad = 0.5;
            };
            break;
        case "Ice":
            if (pokemonType == "Grass") {
                efectividad = 2;
            } else if (pokemonType == "Water" || pokemonType == "Fire") {
                efectividad = 0.5;
            };
            break;
        case "Ground":
            if (pokemonType == "Fire") {
                efectividad = 2;
            } else if (pokemonType == "Water") {
                efectividad = 1;
            } else if (pokemonType == "Grass") {
                efectividad = 0.5;
            };
            break;
        case "Electric":
            if (pokemonType == "Water") {
                efectividad = 2;
            } else if (pokemonType == "Fire") {
                efectividad = 1;
            } else if (pokemonType == "Grass") {
                efectividad = 0.5;
            };
            break;
        case "Siniester":
            if (pokemonType == "Fire" || pokemonType == "Water" || pokemonType == "Grass") {
                efectividad = 1;
            };
            break;
        case "Flying":
            if (pokemonType == "Grass") {
                efectividad = 2;
            } else if (pokemonType == "Fire" || pokemonType == "Water") {
                efectividad = 1;
            };
            break;
        case "Insect":
            if (pokemonType == "Grass") {
                efectividad = 2;
            } else if (pokemonType == "Water") {
                efectividad = 1;
            } else if (pokemonType == "Fire") {
                efectividad = 0.5;
            };
            break;
        case "Steel":
            if (pokemonType == "Grass") {
                efectividad = 1;
            } else if (pokemonType == "Fire" || pokemonType == "Water") {
                efectividad = 0.5;
            };
            break;
        default:
            efectividad = 1;
            console.log("No coincidencias encontradas")
            break;
    }

    return efectividad;
};