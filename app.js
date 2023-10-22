const but = document.getElementsByTagName('button')
const display = document.querySelector('.calculation')
console.log(but)


for (let button of but) {
    button.addEventListener('click', () => {
        const display = document.querySelector('.calculation')
        display.innerText += button.value

        if (button.innerText === but[18].innerText) {

        }






    })

}

