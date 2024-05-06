let formData = {
    name: "",
    adress: "",
    number: ""
}

const orderBtn = document.getElementById("order_button")
const popup = document.querySelector('.popup')
const backdrop = document.querySelector('.backdrop')
const closeBtn = document.querySelector(".popup-btn")
const inputs = document.querySelectorAll("label")

const inputAnimate = (inputId, labelId) => {
    document.getElementById(inputId).addEventListener('input', (e) => {
        document.getElementById(labelId).style.transform = document.getElementById(inputId).value == "" ? null : ("translate(-15px, -30px)")
        formData[inputId.slice(6)] = e.target.value
    })
}
inputs.forEach(el => {
    inputAnimate(el.children[0].id, el.children[1].id)
})

const toggleModal = () => {
    popup.classList.toggle('popupActive')
    backdrop.classList.toggle('backdropActive')
}

closeBtn.addEventListener('click', () => {
    toggleModal()
})
backdrop.addEventListener('click', () => {
    toggleModal()
})
orderBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fakeAjaxRequest(formData, function(response) {
        console.log(response);
        if(response.status == 'success'){
            toggleModal()
        }
    });
})

function fakeAjaxRequest(data, callback) {
    setTimeout(function() {
        let response = {
            status: 'success',
            message: 'Fake data received successfully',
            data: data
        };
        callback(response);
    }, 1000);
}

const burgerFunc = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav')
    const navItems = document.querySelectorAll('.nav__item')
    burger.addEventListener('click', () => {
        burger.classList.toggle('show-burger-btn')
        nav.classList.toggle('show-nav')
    })
    for (let item of navItems) {
        item.addEventListener('mouseup', () => {
            burger.classList.remove('show-burger-btn')
            nav.classList.remove('show-nav')
        })
    }
}

burgerFunc()

const inputName = document.getElementById('order_name');

inputName.addEventListener('input', () => {
    const currentValue = inputName.value;
    const filteredValue = currentValue.replace(/[^А-Яа-яA-Za-z-]/g, '');
    inputName.value = filteredValue;
});