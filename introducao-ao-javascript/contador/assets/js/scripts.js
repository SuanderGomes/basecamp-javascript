var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
//let mudacorTexto = document.getElementById('currentNumber')

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber > 0) {
        currentNumberWrapper.style.color='blue';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color='red';
    }
}


    