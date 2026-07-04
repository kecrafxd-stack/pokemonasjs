import { jugadorSelect, pcSelect } from "../status/selectionstate.js";

export function HP(){
    let hp = document.createElement('section') //Primero creo la seccion

    //Le añado su respectiva clase
    hp.classList.add('hp');
    //añadir lo que va a ir dentro de la seccion
    hp.innerHTML = `<div class="hp_jugador">
                <span class="hp_jugador_span">HP de ###:</span>
                <span class="hp_jugador_value">...</span>
            </div>

            <div class="hp_pc">
                <span class="hp_pc_span">HP de ###:</span>
                <span class="hp_pc_value">...</span>
            </div>`;

    document.body.appendChild(hp);    
    
    let jugador_hp_span = document.querySelector('.hp_jugador_span');
    let hp_pc_span = document.querySelector('.hp_pc_span');
    let hp_jugador_value = document.querySelector('.hp_jugador_value');
    let hp_pc_value = document.querySelector('.hp_pc_value');

    jugador_hp_span.textContent = "HP de " + jugadorSelect.name + ": ";
    hp_jugador_value.textContent = jugadorSelect.battlestats.hp + "/" + jugadorSelect.hp

    hp_pc_span.textContent = "HP de " + pcSelect.name + ": ";
    hp_pc_value.textContent = pcSelect.battlestats.hp + "/" + pcSelect.hp

}