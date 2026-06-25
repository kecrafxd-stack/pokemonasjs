//==========================================================
//Funciones
//==========================================================

//----------------------------------------------------------
//Funcion para generar numeros al azar en un rango que yo diga
//----------------------------------------------------------
function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //Del 0 al 2:
    //0.0-0.3 = 0
    //0.4-0.6 = 1
    //0.7-1.0 = 2
};

//Antes que nada, comprendo que este metodo resulta poco eficiente, y que unicamente trabajara con el primer tipo.
//Por ende para Pókemon de doble tipo no habra algo especial.
//Oficialmente el segundo tipo afecta la vulnerabilidad del primer tipo, pero en este caso unicamente el primer tipo definira eso.
//Por ahora no tengo pensado escalar este proyecto como para que la efectividad responda al doble tipo, por ende, no se debe recalcar lo que yo ya recalque.

//----------------------------------------------------------
//Funcion encargada de calcular la efectividad de un ataque
//----------------------------------------------------------
function CalcularEfectividad(actualMoveType, pokemonType) {
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

//----------------------------------------------------------//----------------------------------------------------------//
//Funcion que, utilizando el valor retornado por la Funcion de calcular  efectividad, calcula el daño que sera causado a el Pokemon
//----------------------------------------------------------//----------------------------------------------------------//

function CalcularDaño(ConvencionalAtk, actualPotence, ConvencionalDefense, efectivity) {
    if (((ConvencionalAtk + actualPotence - ConvencionalDefense) * efectivity) <= 0) {
        return 1;
    } else {
        return (ConvencionalAtk + actualPotence - ConvencionalDefense) * efectivity
    }
}

//----------------------------------------------------------
//Funcion encargada de enviar el mensaje segun la efectividad de un ataque
//----------------------------------------------------------
function MensajedeEfectividad(efectivity) {
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

//----------------------------------------------------------
//Funcion encargada de calcular el efecto del movimiento de estado
//----------------------------------------------------------
function StateMovement(atacante, selectordeAtacante, defensor) { //SIN UTILIZAR
    let keyAffect = atacante.stataffect[selectordeAtacante];

        if (atacante.whoaffect[selectordeAtacante] == "rival") {
            //----------------------------------------------------------
            //Lo que sucede cuando es un debuff para el rival
            //----------------------------------------------------------
            defensor.statStages[keyAffect + "stage"] += atacante.movestageDelta[selectordeAtacante];
            if ((defensor.statStages[keyAffect + "stage"] >= -6) && (defensor.statStages[keyAffect + "stage"]<= 6)) {
                
                defensor.battlestats[keyAffect] = defensor[keyAffect] * 2 / (2 + Math.abs(defensor.statStages[keyAffect + "stage"]));
                
            } else {

                defensor.statStages[keyAffect + "stage"] -= atacante.movestageDelta[selectordeAtacante];
                return "No se pueden alterar mas sus stats"; //PROVISIONAL AMORE

            }

        } else {
            //----------------------------------------------------------
            //Lo que sucede cuando es un buff para el usuario
            //----------------------------------------------------------
            atacante.statStages[keyAffect + "stage"] += atacante.movestageDelta[selectordeAtacante]
            if ((atacante.statStages[keyAffect + "stage"] >= -6) && (atacante.statStages[keyAffect + "stage"] <= 6)) {
                atacante.battlestats[keyAffect] = atacante[keyAffect] * (2 + atacante.statStages[keyAffect + "stage"]) / 2;
            } else {
                atacante.statStages[keyAffect + "stage"] -= atacante.movestageDelta[selectordeAtacante]
                return "No se pueden alterar mas sus stats"; //PROVISIONAL AMORE
            }
        }
}

//==========================================================
//Algunas variables
//==========================================================
// Variables del cálculo de daño
let efectivity;
let daño;
let mensajeuwu;

// Variables del turno actual
let primerAtacante;
let segundoAtacante;

let atacanteSelect;
let segundoSelect;

// Variables del resultado del combate
let ganador;
let perdedor;

// Control del combate
let rounds = 0;
let keyAffect;
let basestat;

//==========================================================
//Objetos Pókemon
//==========================================================

let obj_pokemon = [
    {
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },

        name: "Emboar",
        tipo1: "Fire",
        tipo2: "Fight",
        hp: 1000,
        atk: 123,
        def: 65,
        spatk: 100,
        spdef: 65,
        speed: 65,

        battlestats: {
            hp: 1000,
            atk: 123,
            def: 65,
            spatk: 100,
            spdef: 65,
            speed: 65,
        },
        stage: 0, //Posiblemente innecesaria
        statStages: {
            //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
            //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
            atkstage: 0,
            defstage: 0,
            spatkstage: 0,
            spdefstage: 0,
            speedstage: 0
        },

        movename: ["Envite Igneo", "A Bocajarro", "Terremoto", "Gruñido"],
        movetype: ["Fire", "Fight", "Ground", "Normal"],
        movecategory: ["Physical", "Physical", "Physical", "State"],
        movepotence: [120, 120, 100, null],
        movestageDelta: [null, null, null, -1],
        stataffect: [null, null, null, "atk"],
        stateffecttype: [null, null, null, "debuff"],
        whoaffect: [null, null, null, "rival"]
    },
    {
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },

        name: "Samurott",
        tipo1: "Water",
        tipo2: null,
        hp: 1000,
        atk: 100,
        def: 85,
        spatk: 108,
        spdef: 70,
        speed: 70,
        battlestats: {
            hp: 1000,
            atk: 100,
            def: 85,
            spatk: 108,
            spdef: 70,
            speed: 70,
        },
        stage: 0, //Posiblemente innecesaria
        statStages: {
            //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
            //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
            atkstage: 0,
            defstage: 0,
            spatkstage: 0,
            spdefstage: 0,
            speedstage: 0
        },

        movename: ["Surf", "Rayo Hielo", "Pulso Umbrío", "Danza Espada"],
        movetype: ["Water", "Ice", "Siniester", "Normal"],
        movecategory: ["Special", "Special", "Special", "State"],
        movepotence: [90, 90, 80, null],
        movestageDelta: [null, null, null, 2],
        stataffect: [null, null, null, "atk"],
        stateffecttype: [null, null, null, "buff"],
        whoaffect: [null, null, null, "user"]
    },
    {
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },
        name: "Servine",
        tipo1: "Grass",
        tipo2: null,
        hp: 1000,
        atk: 60,
        def: 75,
        spatk: 60,
        spdef: 75,
        speed: 83,
        battlestats: {
            hp: 1000,
            atk: 60,
            def: 75,
            spatk: 60,
            spdef: 75,
            speed: 83,
        },
        stage: 0, //Posiblemente innecesaria
        statStages: {
            //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
            //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
            atkstage: 0,
            defstage: 0,
            spatkstage: 0,
            spdefstage: 0,
            speedstage: 0
        },

        movename: ["Energibola", "Hoja Afilada", "Disparo Demora", "Golpe Aéreo"],
        movetype: ["Grass", "Grass", "Normal", "Flying"],
        movecategory: ["Physical", "Physical", "State", "Physical"],
        movepotence: [90, 90, null, 60],
        movestageDelta: [null, null, -2, null],
        stataffect: [null, null, "speed", null],
        stateffecttype: [null, null, "debuff", null],
        whoaffect: [null, null, "rival", null]
    }
];

//Solo quiero sumar las IV a la stat de batalla
for (let i = 0; i < obj_pokemon.length; i++) {
    obj_pokemon[i].hp += obj_pokemon[i].iv.hp; obj_pokemon[i].battlestats.hp = obj_pokemon[i].hp
    obj_pokemon[i].atk += obj_pokemon[i].iv.atk; obj_pokemon[i].battlestats.atk = obj_pokemon[i].atk
    obj_pokemon[i].def += obj_pokemon[i].iv.def; obj_pokemon[i].battlestats.def = obj_pokemon[i].def
    obj_pokemon[i].spatk += obj_pokemon[i].iv.spatk; obj_pokemon[i].battlestats.spatk = obj_pokemon[i].spatk
    obj_pokemon[i].spdef += obj_pokemon[i].iv.spdef; obj_pokemon[i].battlestats.spdef = obj_pokemon[i].spdef
    obj_pokemon[i].speed += obj_pokemon[i].iv.speed; obj_pokemon[i].battlestats.speed = obj_pokemon[i].speed
}
//==========================================================
//Inicio del Script. Reparto de Pókemon
//==========================================================

//Seleccion del Perro usuario pendejo
console.log("Elige un Pókemon:")
for (let i = 0; i < obj_pokemon.length; i++) {
    console.log(i + 1 + ". " + obj_pokemon[i].name)
}

console.log("(User selecciona)"); //Usuario pendejo
let userSelect = azar(0, 2);

let pokemonJugador = obj_pokemon[userSelect];

console.log("===========================================")

console.log("Haz seleccionado a " + pokemonJugador.name);

console.log("===========================================")
//Seleccion de la maquina
let pcSelect = azar(0, 2);
let pokemonPC = obj_pokemon[pcSelect];
console.log("El Pókemon rival es " + pokemonPC.name);
console.log("===========================================")



console.log("¡QUE INICIE EL COMABTE!");

//Calcular quien es el primer atacante
if (pokemonJugador.battlestats.speed > pokemonPC.battlestats.speed) {
    primerAtacante = pokemonJugador;
    segundoAtacante = pokemonPC;
} else {
    primerAtacante = pokemonPC;
    segundoAtacante = pokemonJugador;
}
//==========================================================
//El bucle de turnos
//==========================================================
do {
    if (primerAtacante == pokemonJugador) {
        if (pokemonPC.battlestats.speed > pokemonJugador.battlestats.speed) {
            primerAtacante = pokemonPC;
            segundoAtacante = pokemonJugador;
        }

        if (segundoAtacante == pokemonJugador) {
            if (pokemonPC.battlestats.speed < pokemonJugador.battlestats.speed) {
                primerAtacante = pokemonJugador;
                segundoAtacante = pokemonPC;
            }
        }
    }
    rounds++;
    console.log("---------------------------------------")
    console.log("Ronda " + rounds);
    console.log("---------------------------------------")
    //------------------------------------------------------
    //Mostrar VIDA
    //------------------------------------------------------
    console.log("HP de " + primerAtacante.name + ": " + primerAtacante.battlestats.hp)
    console.log("HP de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.hp)
    //DEBUG
    //------------------------------------------------------
    console.log("---------------------------------------")
    console.log("ATK de " + primerAtacante.name + ": " + primerAtacante.battlestats.atk)
    console.log("ATK de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.atk)
    console.log("---------------------------------------")
    console.log("---------------------------------------")
    console.log("SPEED de " + primerAtacante.name + ": " + primerAtacante.battlestats.speed)
    console.log("SPEED de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.speed)
    console.log("---------------------------------------")
    console.log("Etapas de " + primerAtacante.name)
    console.log("Stage atk: " + primerAtacante.statStages.atkstage)
    console.log("Stage def: " + primerAtacante.statStages.defstage)
    console.log("Stage spatk: " + primerAtacante.statStages.spatkstage)
    console.log("Stage spdef: " + primerAtacante.statStages.spdefstage)
    console.log("Stage speed: " + primerAtacante.statStages.speedstage)
    console.log("---------------------------------------")
    console.log("Etapas de " + segundoAtacante.name)
    console.log("Stage atk: " + segundoAtacante.statStages.atkstage)
    console.log("Stage def: " + segundoAtacante.statStages.defstage)
    console.log("Stage spatk: " + segundoAtacante.statStages.spatkstage)
    console.log("Stage spdef: " + segundoAtacante.statStages.spdefstage)
    console.log("Stage speed: " + segundoAtacante.statStages.speedstage)
    console.log("---------------------------------------")
    //------------------------------------------------------
    //DEBUG
    //------------------------------------------------------

    //------------------------------------------------------
    //Mostrar el menu unicamente si le toca al jugador
    //------------------------------------------------------
    if (primerAtacante == pokemonJugador) {
        console.log("Movimientos de " + primerAtacante.name)

        //Se muestran los ataques
        for (let i = 0; i < primerAtacante.movename.length; i++) {
            console.log(i + 1 + ". " + primerAtacante.movename[i]);
        };
        //Usuario selecciona ataque:
        console.log("(User selecciona)"); //Usuario pendejo
        userSelect = azar(0, 3);
        atacanteSelect = userSelect;

        //Sistema muestra el ataque
        console.log(primerAtacante.name + " ha usado " + primerAtacante.movename[atacanteSelect]);
    } else {
        //------------------------------------------------------
        //Sino es el jugador entonces el segundo hara su eleccion
        //------------------------------------------------------
        pcSelect = azar(0, 3);
        atacanteSelect = pcSelect;

        console.log(primerAtacante.name + " ha usado " + primerAtacante.movename[atacanteSelect]);
    }
    //------------------------------------------------------
    //Diferenciar entre Movimiento de ataque y Movimiento de estado
    //------------------------------------------------------
    if (primerAtacante.movecategory[atacanteSelect] == "Physical" || primerAtacante.movecategory[atacanteSelect] == "Special") {
        //------------------------------------------------------
        //Sistema Calcula efectividad
        //------------------------------------------------------
        efectivity = CalcularEfectividad(primerAtacante.movetype[atacanteSelect], segundoAtacante.tipo1);

        //------------------------------------------------------
        //Calcular el daño. Define que datos se le dara segun la categoria
        //------------------------------------------------------
        if (primerAtacante.movecategory[atacanteSelect] == "Physical") {
            daño = Math.floor(CalcularDaño(primerAtacante.battlestats.atk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.battlestats.def, efectivity));
        } else {
            daño = Math.floor(CalcularDaño(primerAtacante.battlestats.spatk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.battlestats.spdef, efectivity));
        }

        //------------------------------------------------------
        //Mostrar cuanto daño causo
        //------------------------------------------------------
        console.log(primerAtacante.movename[atacanteSelect] + " ha causado " + daño + " de daño a " + segundoAtacante.name)

        //------------------------------------------------------
        //Quitar vida al jugador
        //------------------------------------------------------
        segundoAtacante.battlestats.hp = segundoAtacante.battlestats.hp - daño;

        //------------------------------------------------------
        //Arreglar estetica de vida, si la vida es menor a 0, se volvera 0
        //------------------------------------------------------
        if (segundoAtacante.battlestats.hp < 0) {
            segundoAtacante.battlestats.hp = 0;
        }

        //------------------------------------------------------
        //Mostrar mensaje de efectividad
        //------------------------------------------------------
        console.log(MensajedeEfectividad(efectivity));

        console.log("HP de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.hp)

        //------------------------------------------------------
        //Definir quien gano
        //------------------------------------------------------
        if (segundoAtacante.battlestats.hp == 0) {
            ganador = primerAtacante.name;
            perdedor = segundoAtacante.name;
            break;
        }
    } else {
        StateMovement(primerAtacante, atacanteSelect, segundoAtacante);
        mensajeuwu = MensajeDeStat(primerAtacante, atacanteSelect, segundoAtacante.name, primerAtacante.stataffect[atacanteSelect], primerAtacante.stateffecttype[atacanteSelect])
        console.log(mensajeuwu);
    }

    console.log("===========================================")

    //==========================================================
    //Segundo Ataque
    //==========================================================

    //------------------------------------------------------
    //Mostrar el menu unicamente si le toca al jugador
    //------------------------------------------------------
    if (segundoAtacante == pokemonJugador) {
        console.log("Movimientos de " + segundoAtacante.name)

        //Se muestran los ataques
        for (let i = 0; i < segundoAtacante.movename.length; i++) {
            console.log(i + 1 + ". " + segundoAtacante.movename[i]);
        };
        //Usuario selecciona ataque:
        console.log("(User selecciona)"); //Usuario pendejo
        userSelect = azar(0, 3);
        segundoSelect = userSelect;

        //Sistema muestra el ataque
        console.log(segundoAtacante.name + " ha usado " + segundoAtacante.movename[segundoSelect]);
    } else {
        //------------------------------------------------------
        //Sino es el jugador entonces el segundo hara su eleccion
        //------------------------------------------------------
        pcSelect = azar(0, 3);
        segundoSelect = pcSelect;

        console.log(segundoAtacante.name + " ha usado " + segundoAtacante.movename[segundoSelect]);
    }

    //------------------------------------------------------
    //Diferenciar entre Movimiento de ataque y Movimiento de estado
    //------------------------------------------------------
    if (segundoAtacante.movecategory[segundoSelect] == "Physical" || segundoAtacante.movecategory[segundoSelect] == "Special") {

        //------------------------------------------------------
        //Sistema Calcula efectividad
        //------------------------------------------------------
        efectivity = CalcularEfectividad(segundoAtacante.movetype[segundoSelect], primerAtacante.tipo1);

        //------------------------------------------------------
        //Calcular el daño. Define que datos se le dara segun la categoria
        //------------------------------------------------------
        if (segundoAtacante.movecategory[segundoSelect] == "Physical") {
            daño = Math.floor(CalcularDaño(segundoAtacante.battlestats.atk, segundoAtacante.movepotence[segundoSelect], primerAtacante.battlestats.def, efectivity));
        } else {
            daño = Math.floor(CalcularDaño(segundoAtacante.battlestats.spatk, segundoAtacante.movepotence[segundoSelect], primerAtacante.battlestats.spdef, efectivity));
        }

        //------------------------------------------------------
        //Mostrar cuanto daño causo
        //------------------------------------------------------
        console.log(segundoAtacante.movename[segundoSelect] + " ha causado " + daño + " de daño a " + primerAtacante.name)

        //------------------------------------------------------
        //Quitar vida al jugador
        //------------------------------------------------------
        primerAtacante.battlestats.hp = primerAtacante.battlestats.hp - daño;

        //------------------------------------------------------
        //Arreglar estetica de vida, si la vida es menor a 0, se volvera 0
        //------------------------------------------------------
        if (primerAtacante.battlestats.hp < 0) {
            primerAtacante.battlestats.hp = 0;
        }

        //------------------------------------------------------
        //Mostrar mensaje de efectividad
        //------------------------------------------------------
        console.log(MensajedeEfectividad(efectivity));

        console.log("HP de " + primerAtacante.name + ": " + primerAtacante.battlestats.hp)

        //------------------------------------------------------
        //Definir quien gano
        //------------------------------------------------------
        if (primerAtacante.battlestats.hp == 0) {
            ganador = segundoAtacante.name;
            perdedor = primerAtacante.name;
            break;
        };
    } else {
        StateMovement(segundoAtacante, segundoSelect, primerAtacante);
        mensajeuwu = MensajeDeStat(segundoAtacante, segundoSelect, primerAtacante.name, segundoAtacante.stataffect[segundoSelect], segundoAtacante.stateffecttype[segundoSelect])
        console.log(mensajeuwu);

            //DEBUG
            //------------------------------------------------------
            console.log("---------------------------------------")
            console.log("ATK de " + primerAtacante.name + ": " + primerAtacante.battlestats.atk)
            console.log("ATK de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.atk)
            console.log("---------------------------------------")
            console.log("---------------------------------------")
            console.log("SPEED de " + primerAtacante.name + ": " + primerAtacante.battlestats.speed)
            console.log("SPEED de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.speed)
            console.log("---------------------------------------")
            console.log("Etapas de " + primerAtacante.name)
            console.log("Stage atk: " + primerAtacante.statStages.atkstage)
            console.log("Stage def: " + primerAtacante.statStages.defstage)
            console.log("Stage spatk: " + primerAtacante.statStages.spatkstage)
            console.log("Stage spdef: " + primerAtacante.statStages.spdefstage)
            console.log("Stage speed: " + primerAtacante.statStages.speedstage)
            console.log("---------------------------------------")
            console.log("Etapas de " + segundoAtacante.name)
            console.log("Stage atk: " + segundoAtacante.statStages.atkstage)
            console.log("Stage def: " + segundoAtacante.statStages.defstage)
            console.log("Stage spatk: " + segundoAtacante.statStages.spatkstage)
            console.log("Stage spdef: " + segundoAtacante.statStages.spdefstage)
            console.log("Stage speed: " + segundoAtacante.statStages.speedstage)
            console.log("---------------------------------------")
            //------------------------------------------------------
            //DEBUG
            //------------------------------------------------------
    };

} while (primerAtacante.battlestats.hp > 0 && segundoAtacante.battlestats.hp > 0);

console.log("===========================================")

console.log(perdedor + " se ha debilitado. El ganador es " + ganador);

console.log("===========================================")
