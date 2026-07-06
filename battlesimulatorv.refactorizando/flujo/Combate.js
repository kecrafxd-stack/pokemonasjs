import { CalcularDaño } from "../calcles/damage.js";
import { botonesmovimiento } from "../moves/moves.js";
import { atkmensaje } from "./atkmensaje.js";
import { round } from "./contador_de_rounds.js";
import { CalcularEfectividad} from "../calcles/efectivity.js"
import { MensajedeEfectividad } from "../calcles/efectivityAlert.js"
//Lo que debes hacer es una funcion que pueda usar tanto el jugador como la pc.
//Los parametros que debe pedir es el "atacante" y el "defensor"
//Es una funcion situacional, por ende el atacante y el defensor intercalaran dependiendo de quien tenga la velocidad mas rapida
export function combate(atacante, defensor, moveSelected, consola){
    // do {
        let efectividad;
        let daño;
        let round;
        round ++

        if (consola.classList.contains('desactive')){
                consola.classList.remove('desactive')
            }

        switch (atacante.movecategory[moveSelected]) {
            case "Physical":
                
                atkmensaje(atacante, consola, moveSelected);

                efectividad = CalcularEfectividad(atacante.movetype[moveSelected], defensor.tipo1)

                daño = Math.floor(CalcularDaño(atacante.battlestats.atk, atacante.movepotence[moveSelected], defensor.battlestats.def, efectividad))

                defensor.battlestats.hp -= daño;

                if (defensor.battlestats.hp < 0) {
                    defensor.battlestats.hp = 0;
                }

                consola.children[0].textContent = MensajedeEfectividad(efectividad);

            case "Special":
                atkmensaje(atacante, consola, moveSelected);

                efectividad = CalcularEfectividad(atacante.movetype[moveSelected], defensor.tipo1)

                daño = Math.floor(CalcularDaño(atacante.battlestats.spatk, atacante.movepotence[moveSelected], defensor.battlestats.spdef, efectividad))

                defensor.battlestats.hp -= daño;

                if (defensor.battlestats.hp < 0) {
                    defensor.battlestats.hp = 0;
                }

                consola.children[0].textContent = MensajedeEfectividad(efectividad);
        }   

    // } while {}
    
}