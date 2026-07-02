const obj_pokemon = [
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
        name: "Serperior",
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
            //En disminucion: 0 = 2/2(sin cambios), -1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
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

//Seleccion del Perro usuario pendejo
console.log("Elige un Pókemon:")
for (let i = 0; i < obj_pokemon.length; i++) {
    console.log(i + 1 + ". " + obj_pokemon[i].name)
}

console.log("(User selecciona)"); //Usuario pendejo

let pkmSelected;
let pokemonJugador;
let pokemonButtons = document.querySelectorAll('.pokemon');
let menuSeleccionPokemon = document.querySelector('.menu__poke-selection');
for (let i = 0; i < pokemonButtons.length; i++) {

    pokemonButtons[i].addEventListener('click', () => {

        if (menuSeleccionPokemon.classList.contains('menu__poke-selection')) {
            menuSeleccionPokemon.remove();
        }
        pkmSelected = pokemonButtons[i].dataset.pokemon;
        pokemonJugador = obj_pokemon[pkmSelected];

        console.log("===========================================")

        console.log("Haz seleccionado a " + pokemonJugador.name);

        let movimientos = document.querySelectorAll('.move');
        for (let i = 0; i < movimientos.length; i++) {
            movimientos[i].textContent = pokemonJugador.movename[i]
        }

        console.log("(User selecciona)"); //Usuario pendejo
        let atacanteSelect;

        for (let i = 0; i < movimientos.length; i++) {
            movimientos[i].addEventListener('click', () => {
                atacanteSelect = movimientos[i].dataset.move
                console.log(atacanteSelect)
            })
        }
    })
}
