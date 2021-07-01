
let sum = 0

function add() {
    sum++
    var inc = document.getElementById('num')
    inc.innerHTML = `${sum}`;
    checker()

}

function reset() {
    sum = 0
    inc = document.getElementById('num')
    inc.innerHTML = `${sum}`;
    checker()
}

function checker() {
    if (sum > 0) {
        inc.style.color = 'green';
    } else if (sum < 0) {
        inc.style.color = 'red';
    } else { inc.style.color = 'black'; }
}
function subtract() {
    sum--

    inc = document.getElementById('num');
    inc.innerHTML = `${sum}`;
    checker()

}