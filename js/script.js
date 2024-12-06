const turnLampOff = document.getElementById(`lamp-off`)
const turnLampOn = document.getElementById(`lamp-on`)
const btnOnOff = document.getElementById(`btn`)
// creo una funzione che fa accendere/spegnere la lampada cliccando un bottone
btnOnOff.addEventListener('click', function() {
    if (turnLampOn.classList.contains(`hidden`)) {
        turnLampOn.classList.remove(`hidden`)
        turnLampOff.classList.add(`hidden`)
        btnOnOff.textContent = `SPEGNI`;
        } else {
            turnLampOff.classList.remove(`hidden`)
            turnLampOn.classList.add(`hidden`)
            btnOnOff.textContent = `ACCENDI`;
        }
     })