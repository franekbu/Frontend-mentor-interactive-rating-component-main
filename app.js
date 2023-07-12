const RATE_BUTTONS = document.querySelectorAll('.rating__buttons-rate')
const SUBMIT = document.querySelector('.submit')
const FIRST_SECTION = document.querySelector('.rating__state')
const SECOND_SECTION = document.querySelector('.thankyou__state')
const RESULT = document.querySelector('.result')

let clientRate = 0 // wrazie odrazu klikniecia sumit poda ze zero!!!


// Pobieranie opini 
RATE_BUTTONS.forEach( (button, number) => {
    button.addEventListener('click', () => {
        clientRate = number + 1 // number to miejsce w tablicy wiec musimy dodac 1 by miec ocenę
    })
})

// Zmienianie wyniku po opini klienta 
//xd nazwa 
// function changingSpanToSelectedOpinion() {
//     RESULT.innerText = (clientRate) 
//      zmieniamy text spanu
// }


// Przechodzenie z ocenianie na podziekowania za ocenienie 
SUBMIT.addEventListener('click', () => {
    FIRST_SECTION.classList.add('hidden')
    SECOND_SECTION.classList.remove('hidden')
    // changingSpanToSelectedOpinion()    PATRZ KRÓCEJ POD SPODEM!!!
    RESULT.innerText = (clientRate)
})