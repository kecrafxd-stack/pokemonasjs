//================
// IMPORTACIONES
//================
import { obj_pokemon } from "./data/objects.js";
import { seleccionarPokemon } from "./flujo/pokemonSelect.js";
import { jugadorSelect } from "../status/selectionstate.js";
import { azar } from "./usable/azar.js";
import { pcSeleccion, pcSelect } from "./status/selectionstate.js";

//================
// FIN -IMPORTACIONES
//================



//================//================
// INICIO DE COSITAS UWU
//================//================
let buttons_pokemon__container = document.querySelector('.opacity')
let buttons_pokemon = document.querySelectorAll('.pokemon');
let consola = document.querySelector('.console')
let movimientos = document.querySelector('.movimientos');
let moves = document.querySelectorAll('.move')
let cosasocultas = document.querySelectorAll('.desactive')
pcSelect;

seleccionarPokemon(buttons_pokemon, movimientos, consola, buttons_pokemon__container, moves);
consola.addEventListener("click", () => {
    consola.classList.add('desactive');
})


//======================
//BOTON DEBUGER
//======================
let check = document.querySelector('.ayuda');
check.addEventListener('click', () => {
    console.log("El valor de jugadorSelect es: " + jugadorSelect.name + ". Osea, si se cambio el valor")
})
