function calculo() {
    const form = document.querySelector('#form')
    const res = document.querySelector('#finalres')

    function recebeEventoForm(evento) {
        evento.preventDefault()

        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')
        res.innerHTML = ''

        if (peso.value.length === 0 || peso.value <= 0 || altura.value.length === 0 || altura.value <= 0 || !Number(peso.value) || !Number(altura.value)) {
            return alert('Por favor, preencha o campo com dados válidos!')
        } else {

            res.innerHTML += `<p>Seu IMC é ${peso.value / (altura.value * altura.value)}</p>`

            if (peso.value / (altura.value * altura.value) < 18.5) {
                return res.innerHTML += ' (Abaixo do peso)'
            }
            else if (peso.value / (altura.value * altura.value) > 18.5 && (peso.value / (altura.value * altura.value)) < 24.9) {
                return res.innerHTML += ' (Peso normal)'
            }
            else if (peso.value / (altura.value * altura.value) > 25 && (peso.value / (altura.value * altura.value)) < 29.9) {
                return res.innerHTML += ' (Sobrepeso)'
            }
            else if (peso.value / (altura.value * altura.value) > 30 && (peso.value / (altura.value * altura.value)) < 34.9) {
                return res.innerHTML += ' (Obesidade grau 1)'
            }
            else if (peso.value / (altura.value * altura.value) > 35 && (peso.value / (altura.value * altura.value)) < 39.9) {
                return res.innerHTML += ' (Obesidade grau 2)'
            }
            else if (peso.value / (altura.value * altura.value) > 40) {
                return res.innerHTML += ' (Obesidade grau 3)'
            }
        }
    }
    form.addEventListener('submit', recebeEventoForm)
}
calculo()