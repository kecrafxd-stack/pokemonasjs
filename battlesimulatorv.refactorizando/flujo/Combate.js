import { CalcularDaño } from "../calcles/damage.js";
import { botonesmovimiento } from "../moves/moves.js";
import { atkmensaje } from "./atkmensaje.js";
import { round } from "./contador_de_rounds.js";
import { CalcularEfectividad } from "../calcles/efectivity.js"
import { MensajedeEfectividad } from "../calcles/efectivityAlert.js"
import { azar } from "../usable/azar.js";
import { jugadorSelect, pcSelect } from "../status/selectionstate.js";
import { HP } from "../ui/create_hp_ui.js";
import { HPACTUAL } from "../ui/create_hp_ui.js";
import { StateMovement } from "../moves/statemoves.js";
import { MensajeDeStat } from "../moves/statemovesAlert.js";
//Lo que debes hacer es una funcion que pueda usar tanto el jugador como la pc.
//Los parametros que debe pedir es el "atacante" y el "defensor"
//Es una funcion situacional, por ende el atacante y el defensor intercalaran dependiendo de quien tenga la velocidad mas rapida
export function combate(moves, consola) {
    let efectividad;
    let daño;
    let round = 0;
    let movimientoJugador;
    let movimientoPC;
    let atacante;
    let defensor;
    let atacanteSelect;
    let defensorSelect;

    do {
        round++

        consola.children[0].textContent = "Round " + round;

        if (consola.classList.contains('desactive')) {
            consola.classList.remove('desactive')
        }

        setTimeout(() => {
            consola.children[0].textContent = "Selecciona un movimiento"
        }, 1500);
        //Selecciona Jugador
        for (let i = 0; i < moves.length; i++) {
            moves[i].addEventListener('click', () => {
                if (consola.classList.contains('desactive')) {
                    consola.classList.remove('desactive')
                }
                movimientoJugador = moves[i].dataset.move;

                movimientoPC = azar(0, 3);

                if (jugadorSelect.battlestats.speed > pcSelect.battlestats.speed) {
                    atacante = jugadorSelect;
                    atacanteSelect = movimientoJugador;

                    defensor = pcSelect;
                    defensorSelect = movimientoPC;
                } else {
                    atacante = pcSelect;
                    atacanteSelect = movimientoPC;

                    defensor = jugadorSelect;
                    defensorSelect = movimientoJugador;
                }

                console.log(atacante.name + " speed: " + atacante.battlestats.speed)
                console.log(defensor.name + " speed: " + defensor.battlestats.speed)
                console.log("El atacante es: " + atacante.name, "El defensor es: " + defensor.name)

                switch (atacante.movecategory[atacanteSelect]) {
                    case "Physical":

                        atkmensaje(atacante, consola, atacanteSelect)

                        efectividad = CalcularEfectividad(atacante.movetype[atacanteSelect], defensor.tipo1)

                        daño = Math.floor(CalcularDaño(atacante.battlestats.atk, atacante.movepotence[atacanteSelect], defensor.battlestats.def, efectividad))

                        defensor.battlestats.hp -= daño;

                        if (defensor.battlestats.hp < 0) {
                            defensor.battlestats.hp = 0;
                        }
                        if (atacante.battlestats.hp < 0) {
                                atacante.battlestats.hp = 0;
                            }

                        HPACTUAL()

                        setTimeout(() => {
                            consola.children[0].textContent = MensajedeEfectividad(efectividad)
                        }, 2000);

                    case "Special":
                        atkmensaje(atacante, consola, atacanteSelect)

                        efectividad = CalcularEfectividad(atacante.movetype[atacanteSelect], defensor.tipo1)

                        daño = Math.floor(CalcularDaño(atacante.battlestats.spatk, atacante.movepotence[atacanteSelect], defensor.battlestats.spdef, efectividad))

                        defensor.battlestats.hp -= daño;

                        if (defensor.battlestats.hp < 0) {
                            defensor.battlestats.hp = 0;
                        }
                        if (atacante.battlestats.hp < 0) {
                                atacante.battlestats.hp = 0;
                            }

                        HPACTUAL()

                        setTimeout(() => {
                            consola.children[0].textContent = MensajedeEfectividad(efectividad)
                        }, 2000);

                    case "State":
                        StateMovement(atacante, atacanteSelect, defensor);
                        consola.children[0].textContent = MensajeDeStat(atacante, atacanteSelect, defensor.name, atacante.stataffect[atacanteSelect], atacante.stateffecttype[atacanteSelect])

                }

                setTimeout(() => {
                    switch (defensor.movecategory[defensorSelect]) {
                        case "Physical":
                            atkmensaje(defensor, consola, defensorSelect)

                            efectividad = CalcularEfectividad(defensor.movetype[defensorSelect], atacante.tipo1)

                            daño = Math.floor(CalcularDaño(defensor.battlestats.atk, defensor.movepotence[defensorSelect], atacante.battlestats.def, efectividad))

                            atacante.battlestats.hp -= daño;

                            if (defensor.battlestats.hp < 0) {
                            defensor.battlestats.hp = 0;
                        }
                        if (atacante.battlestats.hp < 0) {
                                atacante.battlestats.hp = 0;
                            }

                            HPACTUAL()

                            setTimeout(() => {
                                consola.children[0].textContent = MensajedeEfectividad(efectividad)
                            }, 2000);

                        case "Special":
                            atkmensaje(defensor, consola, defensorSelect)

                            efectividad = CalcularEfectividad(defensor.movetype[defensorSelect], atacante.tipo1)

                            daño = Math.floor(CalcularDaño(defensor.battlestats.spatk, defensor.movepotence[defensorSelect], atacante.battlestats.spdef, efectividad))

                            atacante.battlestats.hp -= daño;

                            if (defensor.battlestats.hp < 0) {
                            defensor.battlestats.hp = 0;
                        }
                        if (atacante.battlestats.hp < 0) {
                                atacante.battlestats.hp = 0;
                            }

                            HPACTUAL()

                            setTimeout(() => {
                                consola.children[0].textContent = MensajedeEfectividad(efectividad)
                            }, 2000);

                        case "State":
                            StateMovement(defensor, defensorSelect, atacante);
                            consola.children[0].textContent = MensajeDeStat(defensor, defensorSelect, atacante.name, defensor.stataffect[defensorSelect], defensor.stateffecttype[defensorSelect])

                    }
                }, 2000);


            })
        }
    } while (atacante.battlestats.hp > 0 && defensor.battlestats.hp > 0)


    // Selecciona PC


    // } while {}

}