//----------------------------------------------------------
//Funcion encargada de calcular el efecto del movimiento de estado
//----------------------------------------------------------
export function StateMovement(atacante, selectordeAtacante, defensor) {
    let keyAffect = atacante.stataffect[selectordeAtacante];

        if (atacante.whoaffect[selectordeAtacante] == "rival") {
            //----------------------------------------------------------
            //Lo que sucede cuando es un debuff para el rival
            //----------------------------------------------------------
            defensor.statStages[keyAffect + "stage"] += atacante.movestageDelta[selectordeAtacante];
            if ((defensor.statStages[keyAffect + "stage"] >= -6) && (defensor.statStages[keyAffect + "stage"]<= 6)) {
                
                defensor.battlestats[keyAffect] = defensor[keyAffect] * 2 / (2 + Math.abs(defensor.statStages[keyAffect + "stage"]));
                
            } else {

                defensor.statStages[keyAffect + "stage"] -= atacante.movestageDelta[selectordeAtacante];
                return "No se pueden alterar mas sus stats"; //PROVISIONAL AMORE

            }

        } else {
            //----------------------------------------------------------
            //Lo que sucede cuando es un buff para el usuario
            //----------------------------------------------------------
            atacante.statStages[keyAffect + "stage"] += atacante.movestageDelta[selectordeAtacante]
            if ((atacante.statStages[keyAffect + "stage"] >= -6) && (atacante.statStages[keyAffect + "stage"] <= 6)) {
                atacante.battlestats[keyAffect] = atacante[keyAffect] * (2 + atacante.statStages[keyAffect + "stage"]) / 2;
            } else {
                atacante.statStages[keyAffect + "stage"] -= atacante.movestageDelta[selectordeAtacante]
                return "No se pueden alterar mas sus stats"; //PROVISIONAL AMORE
            }
        }
}