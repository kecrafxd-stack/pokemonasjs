//----------------------------------------------------------//----------------------------------------------------------//
//Funcion que, utilizando el valor retornado por la Funcion de calcular  efectividad, calcula el daño que sera causado a el Pokemon
//----------------------------------------------------------//----------------------------------------------------------//
// -- El daño que hace el ataque de un pokemon pues
function CalcularDaño(ConvencionalAtk, actualPotence, ConvencionalDefense, efectivity) {
    if (((ConvencionalAtk + actualPotence - ConvencionalDefense) * efectivity) <= 0) {
        return 1;
    } else {
        return (ConvencionalAtk + actualPotence - ConvencionalDefense) * efectivity
    }
}