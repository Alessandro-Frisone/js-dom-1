const turnLampOff = document.querySelector(`Lamp-off`)
const turnLampOn = document.querySelector(`Lamp-on`)
const btnOnOff = document.querySelector(`btn`)
// creo una funzione che fa accendere/spegnere la lampada cliccando un bottone
btnOnOff.addEventListener('click', function() {
    if (turnLampOff.classList.contains('hidden') {
        turnLampOff.classList.remove('hidden')
        turnLampOn.classList.add('hidden'))
        } else {
        turnLampOff.classList.add('hidden ')
        turnLampOn.classList.remove('hidden ')
        
        }
        
        })
        
