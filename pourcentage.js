//interet tous interet;

var inputs = readline().split(' ');
const N = parseInt(inputs[0]);
const I = parseInt(inputs[1]);
const M = parseInt(inputs[2]);
function pourcent(taux, current, nbmois) {
    for (let i = 0; i < nbmois; i++) {
        current += current * taux / 100;
    }
    return current;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(pourcent(I, N, M));