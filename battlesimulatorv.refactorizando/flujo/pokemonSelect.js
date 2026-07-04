import { jugadorSelect, pcSeleccion } from "../status/selectionstate.js";
import { seleccion } from "../status/selectionstate.js";
import { obj_pokemon } from "../data/objects.js";
import { MostrarAtaques } from "./showMoves.js";
import { sprites_ui } from "../ui/create_sprites.js";
import { azar } from "../usable/azar.js";
import { HP } from "../ui/create_hp_ui.js";

export function seleccionarPokemon(buttons_pokemon, movimientos, consola, buttons_pokemon__container, moves) {
    for(let i = 0; i<buttons_pokemon.length; i++){
    buttons_pokemon[i].addEventListener('click', () => {
        seleccion(obj_pokemon[buttons_pokemon[i].dataset.pokemon])

        pcSeleccion(obj_pokemon[azar(0,2)])

        //Mostrar otros menu
        movimientos.classList.remove('desactive')
        consola.classList.remove('desactive')

        consola.children[0].textContent = "Seleccionaste a " + jugadorSelect.name
        
        //Ocultar menu de seleccion
        buttons_pokemon__container.remove()

        //Mostrar los ataques del pokemon selecto
        MostrarAtaques(moves);
        //Mostrar sprites
        sprites_ui();
        //MostrarHP
        HP();
    })
}
}