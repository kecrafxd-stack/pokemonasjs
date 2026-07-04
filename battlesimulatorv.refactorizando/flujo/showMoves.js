import { jugadorSelect } from "../status/selectionstate.js";
import { obj_pokemon } from "../data/objects.js";

export function MostrarAtaques(moves){
    for(let i = 0; i<moves.length; i++){
            moves[i].textContent = jugadorSelect.movename[i]
        }
}