export function atkmensaje(atacante, consola, atacanteSelect){
    consola.children[0].textContent = atacante.name + " ha utilizado " + atacante.movename[atacanteSelect];
}