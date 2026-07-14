export function round(consola) {
    let round;
    round += 1

    if (consola.classList.contains('desactive')) {
        consola.classList.remove('desactive')
    }

    consola.children[0].textContent = "Round " + round
}