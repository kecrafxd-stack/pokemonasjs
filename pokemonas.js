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

    function CalcularDaño(ConvencionalAtk, IVAtk, actualPotence, ConvencionalDefense, efectivity) {
        return (ConvencionalAtk + IVAtk + actualPotence - ConvencionalDefense) * efectivity
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

    function MensajeDeStat(pokemon, stataffected, TipodeEfectoenstat) {
        if (stataffected == "atk") {
            if (TipodeEfectoenstat == "buff") {
                return console.log("El ataque de " + pokemon + " ha aumentado!")
            } else {
                return console.log("El ataque de " + pokemon + " ha disminuido!")
            }
        } else if (stataffected == "def") {
            if (TipodeEfectoenstat == "buff") {
                return console.log("La defensa de " + pokemon + " ha aumentado!")
            } else {
                return console.log("La defensa de " + pokemon + " ha disminuido!")
            }
            
        } else if (stataffected == "spatk") {
            if (TipodeEfectoenstat == "buff") {
                return console.log("El ataque especial de " + pokemon + " ha aumentado!")
            } else {
                return console.log("El ataque especial de " + pokemon + " ha disminuido!")
            }
            
        } else if (stataffected == "spdef") {
            if (TipodeEfectoenstat == "buff") {
                return console.log("La defensa especial de " + pokemon + " ha aumentado!")
            } else {
                return console.log("La defensa especial de " + pokemon + " ha disminuido!")
            }
            
        } else if (stataffected == "speed") {
            if (TipodeEfectoenstat == "buff") {
                return console.log("La velocidad de " + pokemon + " ha aumentado!")
            } else {
                return console.log("La velocidad de " + pokemon + " ha disminuido!")
            }
            
        }
            
        }

    //==========================================================
    //Algunas variables
    //==========================================================
    // Variables del cálculo de daño
    let efectivity;

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

    //==========================================================
    //Objetos Pókemon
    //==========================================================

    let obj_pokemon = [
        {
            name: "Emboar",
            tipo1: "Fire",
            tipo2: "Fight",
            hp: 1000,
            atk: 123,
            def: 65,
            spatk: 100,
            spdef: 65,
            speed: 65,
            stage: 0,
            statStages: {
                //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
                //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
                atkstage: 2 / 2,
                defstage: 2 / 2,
                spatkstage: 2 / 2,
                spdefstage: 2 / 2,
                speedstage: 2 / 2
            },

            iv: {
                hp: azar(0, 31),
                atk: azar(0, 31),
                def: azar(0, 31),
                spatk: azar(0, 31),
                spdef: azar(0, 31),
                speed: azar(0, 31)
            },

            movename: ["Envite Igneo", "A Bocajarro", "Terremoto", "Gruñido"],
            movetype: ["Fire", "Fight", "Ground", "Normal"],
            movecategory: ["Physical", "Physical", "Physical", "State"],
            movepotence: [120, 120, 100, null],
            movestageDelta: [null, null, null, 2/2],
            stataffect: [null, null, null, "atk"],
            stateffecttype: [null, null, null, "debuff"]
        },
        {
            name: "Samurott",
            tipo1: "Water",
            tipo2: null,
            hp: 1000,
            atk: 100,
            def: 85,
            spatk: 108,
            spdef: 70,
            speed: 70,
            stage: 0,
            statStages: {
                //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
                //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
                atkstage: 2 / 2,
                defstage: 2 / 2,
                spatkstage: 2 / 2,
                spdefstage: 2 / 2,
                speedstage: 2 / 2
            },
            
            iv: {
                hp: azar(0, 31),
                atk: azar(0, 31),
                def: azar(0, 31),
                spatk: azar(0, 31),
                spdef: azar(0, 31),
                speed: azar(0, 31)
            },

            movename: ["Surf", "Rayo Hielo", "Pulso Umbrío", "Danza Espada"],
            movetype: ["Water", "Ice", "Siniester", "Normal"],
            movecategory: ["Special", "Special", "Special", "State"],
            movepotence: [90, 90, 80, null],
            movestageDelta: [null, null, null, 4 / 2],
            stataffect: [null, null, null, "atk"],
            stateffecttype: [null, null, null, "buff"]
        },
        {
            name: "Servine",
            tipo1: "Grass",
            tipo2: null,
            hp: 1000,
            atk: 60,
            def: 75,
            spatk: 60,
            spdef: 75,
            speed: 83,
            stage: 0,
            statStages: {
                //En aumento: 0 = 2/2 (sin cambios), 1 = 3/2, 2 = 4/2, 3 = 5/2, 4 = 6/2, 5 = 7/2, 6 = 8/2
                //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
                atkstage: 2 / 2,
                defstage: 2 / 2,
                spatkstage: 2 / 2,
                spdefstage: 2 / 2,
                speedstage: 2 / 2
            },

            iv: {
                hp: azar(0, 31),
                atk: azar(0, 31),
                def: azar(0, 31),
                spatk: azar(0, 31),
                spdef: azar(0, 31),
                speed: azar(0, 31)
            },

            movename: ["Energibola", "Hoja Afilada", "Disparo Demora", "Golpe Aéreo"],
            movetype: ["Grass", "Grass", "Normal", "Flying"],
            movecategory: ["Physical", "Physical", "State", "Physical"],
            movepotence: [90, 90, null, 60],
            movestageDelta: [null, null, 4 / 2, null],
            stataffect: [null, null, "speed", null],
            stateffecttype: [null, null, "debuff", null]
        }
    ];


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

    let pokemonJugador = obj_pokemon[userSelect]

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
if (pokemonJugador.speed > pokemonPC.speed) {
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
        if (pokemonPC.speed > pokemonJugador.speed) {
            primerAtacante = pokemonPC;
            segundoAtacante = pokemonJugador;
        }

        if (segundoAtacante == pokemonJugador) {
            if (pokemonPC.speed < pokemonJugador.speed) {
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
    console.log("HP de " + primerAtacante.name + ": " + primerAtacante.hp)
    console.log("HP de " + segundoAtacante.name + ": " + segundoAtacante.hp)

    //------------------------------------------------------
    //Mostrar el menu unicamente si le toca al jugador
    //------------------------------------------------------
    if (primerAtacante == pokemonJugador) {
        console.log("Movimientos de " + pokemonJugador.name)

        //Se muestran los ataques
        for (let i = 0; i < pokemonJugador.movename.length; i++) {
            console.log(i + 1 + ". " + pokemonJugador.movename[i]);
        };
        //Usuario selecciona ataque:
        console.log("(User selecciona)"); //Usuario pendejo
        userSelect = azar(0, 3);
        atacanteSelect = userSelect;

        //Sistema muestra el ataque
        console.log(pokemonJugador.name + " ha usado " + pokemonJugador.movename[userSelect]);
    } else {
        //------------------------------------------------------
        //Sino es el jugador entonces el segundo hara su eleccion
        //------------------------------------------------------
        pcSelect = azar(0, 3);
        atacanteSelect = pcSelect;

        console.log(pokemonPC.name + " ha usado " + pokemonPC.movename[pcSelect]);
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
            daño = Math.floor(CalcularDaño(primerAtacante.atk, primerAtacante.iv.atk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.def, efectivity));
        } else {
            daño = Math.floor(CalcularDaño(primerAtacante.spatk, primerAtacante.iv.spatk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.spdef, efectivity));
        }

        //------------------------------------------------------
        //Mostrar cuanto daño causo
        //------------------------------------------------------
        console.log(primerAtacante.movename[atacanteSelect] + " ha causado " + daño + " de daño a " + segundoAtacante.name)

        //------------------------------------------------------
        //Quitar vida al jugador
        //------------------------------------------------------
        segundoAtacante.hp = segundoAtacante.hp - daño;

        //------------------------------------------------------
        //Arreglar estetica de vida, si la vida es menor a 0, se volvera 0
        //------------------------------------------------------
        if (segundoAtacante.hp < 0) {
            segundoAtacante.hp = 0;
        }

        //------------------------------------------------------
        //Mostrar mensaje de efectividad
        //------------------------------------------------------
        console.log(MensajedeEfectividad(efectivity));

        console.log("HP de " + segundoAtacante.name + ": " + segundoAtacante.hp)

        //------------------------------------------------------
        //Definir quien gano
        //------------------------------------------------------
        if (segundoAtacante.hp == 0) {
            ganador = primerAtacante.name;
            perdedor = segundoAtacante.name;
            break;
        }
    } else {
        console.log(MensajeDeStat(segundoAtacante.name, primerAtacante.stataffect[atacanteSelect], primerAtacante.stateffecttype[atacanteSelect]));

    }

    console.log("===========================================")

    //==========================================================
    //Segundo Ataque
    //==========================================================

    //------------------------------------------------------
    //Mostrar el menu unicamente si le toca al jugador
    //------------------------------------------------------
    if (segundoAtacante == pokemonJugador) {
        console.log("Movimientos de " + pokemonJugador.name)

        //Se muestran los ataques
        for (let i = 0; i < pokemonJugador.movename.length; i++) {
            console.log(i + 1 + ". " + pokemonJugador.movename[i]);
        };
        //Usuario selecciona ataque:
        console.log("(User selecciona)"); //Usuario pendejo
        userSelect = azar(0, 3);
        segundoSelect = userSelect;

        //Sistema muestra el ataque
        console.log(pokemonJugador.name + " ha usado " + pokemonJugador.movename[userSelect]);
    } else {
        //------------------------------------------------------
        //Sino es el jugador entonces el segundo hara su eleccion
        //------------------------------------------------------
        pcSelect = azar(0, 3);
        segundoSelect = pcSelect;
    }

    //------------------------------------------------------
    //Sistema Calcula efectividad
    //------------------------------------------------------
    efectivity = CalcularEfectividad(segundoAtacante.movetype[segundoSelect], primerAtacante.tipo1);

    //------------------------------------------------------
    //Calcular el daño. Define que datos se le dara segun la categoria
    //------------------------------------------------------
    if (segundoAtacante.movecategory[segundoSelect] == "Physical") {
        daño = Math.floor(CalcularDaño(segundoAtacante.atk, segundoAtacante.iv.atk, segundoAtacante.movepotence[segundoSelect], primerAtacante.def, efectivity));
    } else {
        daño = Math.floor(CalcularDaño(segundoAtacante.spatk, segundoAtacante.iv.spatk, segundoAtacante.movepotence[segundoSelect], primerAtacante.spdef, efectivity));
    }

    //------------------------------------------------------
    //Mostrar cuanto daño causo
    //------------------------------------------------------
    console.log(segundoAtacante.movename[segundoSelect] + " ha causado " + daño + " de daño a " + primerAtacante.name)

    //------------------------------------------------------
    //Quitar vida al jugador
    //------------------------------------------------------
    primerAtacante.hp = primerAtacante.hp - daño;

    //------------------------------------------------------
    //Arreglar estetica de vida, si la vida es menor a 0, se volvera 0
    //------------------------------------------------------
    if (primerAtacante.hp < 0) {
        primerAtacante.hp = 0;
    }

    //------------------------------------------------------
    //Mostrar mensaje de efectividad
    //------------------------------------------------------
    console.log(MensajedeEfectividad(efectivity));

    console.log("HP de " + primerAtacante.name + ": " + primerAtacante.hp)

    //------------------------------------------------------
    //Definir quien gano
    //------------------------------------------------------
    if (primerAtacante.hp == 0) {
        ganador = segundoAtacante.name;
        perdedor = primerAtacante.name;
        break;
    };
} while (primerAtacante.hp > 0 && segundoAtacante.hp > 0);

console.log("===========================================")

console.log(perdedor + " se ha debilitado. El ganador es " + ganador);

console.log("===========================================")
