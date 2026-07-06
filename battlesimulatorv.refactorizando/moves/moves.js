import { jugadorSelect, pcSelect } from "../status/selectionstate.js"
import { azar } from "../usable/azar.js";

export function botonesmovimiento(moves, consola, atacante){
    for (let i = 0; i<moves.length; i++){
        moves[i].addEventListener('click', () => {
            console.log("Si agarra")
            //Nomas que si desaparecio la consola tarerla devuelta
            // if (consola.classList.contains('desactive')){
            //     consola.classList.remove('desactive')
            // }
            //Mensaje de pene movimiento usado
            // consola.children[0].textContent = atacante.name + " ha utilizado " + atacante.movename[i]

            return moves.dataset.move
        })
    }
}