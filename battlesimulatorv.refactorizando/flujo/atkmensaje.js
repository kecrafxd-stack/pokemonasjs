export function atkmensaje(atacante, consola, moveSelected){
    consola.children[0].textContent = atacante + " ha utilizado" + atacante.movename[moveSelected];
}