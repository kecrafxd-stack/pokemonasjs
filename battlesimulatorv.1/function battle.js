function turno(atacante, atacanteSelect, defensor, defensorSelect){
    if (atacante == pokemonJugador) {
        console.log("Movimientos de " + primerAtacante.name)

        //Se muestran los ataques
            let movimientos = document.querySelectorAll('.move');
            for (let i = 0; i < movimientos.length; i++) {
            movimientos[i].textContent = atacante.movename[i]
            }
        //Usuario selecciona ataque:
        console.log("(User selecciona)"); //Usuario pendejo
        let atacanteSelect;

        for(let i = 0; i<movimientos.length; i++){
            atacanteSelect = movimientos.dataset.move;
            console.log(atacanteSelect)
        }
        

        //Sistema muestra el ataque
        console.log(primerAtacante.name + " ha usado " + primerAtacante.movename[atacanteSelect]);
    } else {
        //------------------------------------------------------
        //Sino es el jugador entonces el segundo hara su eleccion
        //------------------------------------------------------
        pcSelect = azar(0, 3);
        atacanteSelect = pcSelect;

        console.log(primerAtacante.name + " ha usado " + primerAtacante.movename[atacanteSelect]);
    }
    //------------------------------------------------------
    //Diferenciar entre Movimiento de ataque y Movimiento de estado
    //------------------------------------------------------
    if (primerAtacante.movecategory[atacanteSelect] == "Physical" || primerAtacante.movecategory[atacanteSelect] == "Special") {
        //------------------------------------------------------
        //Sistema Calcula efectividad
        //------------------------------------------------------
        efectivity = CalcularEfectividad(primerAtacante.movetype[atacanteSelect], segundoAtacante.tipo1);

        //------------------------------------------------------
        //Calcular el daño. Define que datos se le dara segun la categoria
        //------------------------------------------------------
        if (primerAtacante.movecategory[atacanteSelect] == "Physical") {
            daño = Math.floor(CalcularDaño(primerAtacante.battlestats.atk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.battlestats.def, efectivity));
        } else {
            daño = Math.floor(CalcularDaño(primerAtacante.battlestats.spatk, primerAtacante.movepotence[atacanteSelect], segundoAtacante.battlestats.spdef, efectivity));
        }

        //------------------------------------------------------
        //Mostrar cuanto daño causo
        //------------------------------------------------------
        console.log(primerAtacante.movename[atacanteSelect] + " ha causado " + daño + " de daño a " + segundoAtacante.name)

        //------------------------------------------------------
        //Quitar vida al jugador
        //------------------------------------------------------
        segundoAtacante.battlestats.hp = segundoAtacante.battlestats.hp - daño;

        //------------------------------------------------------
        //Arreglar estetica de vida, si la vida es menor a 0, se volvera 0
        //------------------------------------------------------
        if (segundoAtacante.battlestats.hp < 0) {
            segundoAtacante.battlestats.hp = 0;
        }

        //------------------------------------------------------
        //Mostrar mensaje de efectividad
        //------------------------------------------------------
        console.log(MensajedeEfectividad(efectivity));

        console.log("HP de " + segundoAtacante.name + ": " + segundoAtacante.battlestats.hp)

        //------------------------------------------------------
        //Definir quien gano
        //------------------------------------------------------
        if (segundoAtacante.battlestats.hp == 0) {
            ganador = primerAtacante.name;
            perdedor = segundoAtacante.name;
            break;
        }
    } else {
        StateMovement(primerAtacante, atacanteSelect, segundoAtacante);
        mensajeuwu = MensajeDeStat(primerAtacante, atacanteSelect, segundoAtacante.name, primerAtacante.stataffect[atacanteSelect], primerAtacante.stateffecttype[atacanteSelect])
        console.log(mensajeuwu);
    }
}