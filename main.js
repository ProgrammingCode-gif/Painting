const box = document.querySelector('.box');
const clearBtn = document.querySelector('.clean');
const chooseColorBtn = document.querySelector('.color');
const makeRandomColorBtn = document.getElementById('random');
const eraseBtn = document.getElementById('erase');

makeRandomColorBtn.addEventListener('click', () => eraseBtn.checked = false);
eraseBtn.addEventListener('click', () => makeRandomColorBtn.checked = false);

function createBloks () {

    const fullBox = {
        amount: 624,
        element: '<div class="item"></div>'
    }
    for (let i = 0; i < fullBox.amount; i++) {
        box.innerHTML += fullBox.element;
    }
}
createBloks();

let items = document.querySelectorAll('.item')

items.forEach((item) => item.addEventListener('mousemove', () => changeColor(item)));
clearBtn.addEventListener('click', () => {

    items.forEach((item) => item.style.background = 'gray');
})

function changeColor(item) {

    if(makeRandomColorBtn.checked) {

        item.style.background = getRandomColor();
        item.style.boxShadow = ` 0 0 5px black`;
    }else if(eraseBtn.checked){

        item.style.background = 'gray'
    }else {

        item.style.background = chooseColorBtn.value
    }
}

function getRandomColor() {

    let firstAmount = Math.floor(Math.random() * 255);
    let secondAmount = Math.floor(Math.random() * 255);
    let thirdAmount = Math.floor(Math.random() * 255);

    const defaultColor = `rgb(${firstAmount}, ${secondAmount}, ${thirdAmount})`;
    return defaultColor;
}
console.log(chooseColorBtn.is);