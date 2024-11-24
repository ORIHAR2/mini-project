const resDiv = document.getElementById('resources');
const activePreambleDiv = document.querySelectorAll('.preamble');
let activePreamble = 0;

function openPreamble() {
    activePreamble = 0;
    resDiv.classList.add('hidden');
    activePreambleDiv[activePreamble].classList.remove('hidden');
}

function closePreamble() {
    activePreambleDiv[activePreamble].classList.add('hidden');
    resDiv.classList.remove('hidden');
}

function nextPreamble() {
    activePreambleDiv[activePreamble].classList.add('hidden');
    activePreamble++;
    activePreambleDiv[activePreamble].classList.remove('hidden');
}

function prevPreamble() {

    activePreambleDiv[activePreamble].classList.add('hidden');
    activePreamble--;
    activePreambleDiv[activePreamble].classList.remove('hidden');
}
