//----------------------------------------------------------
//Funcion para generar numeros al azar en un rango que yo diga
//----------------------------------------------------------
export function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //Del 0 al 2:
    //0.0-0.3 = 0
    //0.4-0.6 = 1
    //0.7-1.0 = 2
};