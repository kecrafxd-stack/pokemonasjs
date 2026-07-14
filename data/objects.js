import { azar } from "../usable/azar.js";
//==========================================================
//Objetos Pókemon
//==========================================================

export let obj_pokemon = [
    {
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },

        name: "Emboar",
        tipo1: "Fire",
        tipo2: "Fight",
        hp: 1000,
        atk: 123,
        def: 65,
        spatk: 100,
        spdef: 65,
        speed: 65,
        sprite1: "https://img.pokemondb.net/sprites/black-white-2/anim/back-normal/emboar.gif",
        sprite2: "https://img.pokemondb.net/sprites/black-white-2/anim/normal/emboar.gif",


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
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },

        name: "Samurott",
        tipo1: "Water",
        tipo2: null,
        hp: 1000,
        atk: 100,
        def: 85,
        spatk: 108,
        spdef: 70,
        speed: 70,
        sprite1: "https://img.pokemondb.net/sprites/black-white-2/anim/back-normal/samurott.gif",
        sprite2: "https://img.pokemondb.net/sprites/black-white-2/anim/normal/samurott.gif",
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
        iv: {
            hp: azar(0, 31),
            atk: azar(0, 31),
            def: azar(0, 31),
            spatk: azar(0, 31),
            spdef: azar(0, 31),
            speed: azar(0, 31)
        },
        name: "Serperior",
        tipo1: "Grass",
        tipo2: null,
        hp: 1000,
        atk: 60,
        def: 75,
        spatk: 60,
        spdef: 75,
        speed: 83,
        sprite1: "https://img.pokemondb.net/sprites/black-white-2/anim/back-normal/serperior.gif",
        sprite2: "https://img.pokemondb.net/sprites/black-white-2/anim/normal/serperior.gif",
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
            //En disminucion: 0 = 2/2(sin cambios), 1 = 2/3, 2 = 2/4, 3 = 2/5, 4 = 2/6, 5 = 2/7, 6 = 2/8
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
//==========================================================
//Solo quiero sumar las IV a la stat de batalla
//==========================================================
for (let i = 0; i < obj_pokemon.length; i++) {
    obj_pokemon[i].hp += obj_pokemon[i].iv.hp; obj_pokemon[i].battlestats.hp = obj_pokemon[i].hp
    obj_pokemon[i].atk += obj_pokemon[i].iv.atk; obj_pokemon[i].battlestats.atk = obj_pokemon[i].atk
    obj_pokemon[i].def += obj_pokemon[i].iv.def; obj_pokemon[i].battlestats.def = obj_pokemon[i].def
    obj_pokemon[i].spatk += obj_pokemon[i].iv.spatk; obj_pokemon[i].battlestats.spatk = obj_pokemon[i].spatk
    obj_pokemon[i].spdef += obj_pokemon[i].iv.spdef; obj_pokemon[i].battlestats.spdef = obj_pokemon[i].spdef
    obj_pokemon[i].speed += obj_pokemon[i].iv.speed; obj_pokemon[i].battlestats.speed = obj_pokemon[i].speed
}