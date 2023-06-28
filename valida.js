const form = document.getElementById('form_numbers');

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

function validar() {

    const message = document.querySelector('.message');
    const btn = document.getElementById('send')

    if (isNaN(number1.value) || isNaN(number2.value)){
        message.innerHTML = 'Preencha os campos apenas com números'
        message.classList.add('error_message');
        btn.setAttribute('disabled', '');
        return
    }

    if (Number(number1.value) < Number(number2.value)){
        message.innerHTML = 'Valor B Okay'
        message.classList.remove('error_message');
        btn.removeAttribute('disabled',)
    } else {
        message.innerHTML = 'Valor B deve ser maior que Valor A'
        message.classList.add('error_message');
        btn.setAttribute('disabled', '');
    }

}

number1.addEventListener('change', validar);
number2.addEventListener('change', validar);

validar()