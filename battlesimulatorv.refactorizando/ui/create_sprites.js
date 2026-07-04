import { jugadorSelect } from "../status/selectionstate.js";

export function sprites_ui(){
    let battle = document.createElement('section');
battle.classList.add('battle')
battle.innerHTML = `<div class="jugador"><img class="jugadorimg" src="" alt=""></div>
            <div class="pc"><img  class="pcimg" src="" alt=""></div>`;
document.body.appendChild(battle);

let sprite1 = document.querySelector('.jugadorimg');
sprite1.src = jugadorSelect.sprite1
}
