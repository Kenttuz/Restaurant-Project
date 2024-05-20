document.addEventListener('DOMContentLoaded', function () {
    const CartBtn = document.getElementById('CartBtn')
    const ModalCart = document.getElementById('ModalCart')
    const closeModalBtn = document.getElementById('closeModalBtn')
    const Menu = document.getElementById('Menu')
    const Drinks = document.getElementById('Drinks')
    const CartAccount = document.getElementById('CartAccount')
    const CartItems = document.getElementById('CartItems')
    const CartTotal = document.getElementById('CartTotal')
    const AddressInput = document.getElementById('AddressInput')
    const AddressWarning = document.getElementById('AddressWarning')
    const checkoutBtn = document.getElementById('checkoutBtn')

    let cart = []

    CartBtn.addEventListener('click', function () {
        ModalCart.style.display = 'flex'
    })

    ModalCart.addEventListener('click', function (event) {
        if (event.target === ModalCart) {
            ModalCart.style.display = 'none'
        }
    })

    closeModalBtn.addEventListener('click', function () {
        ModalCart.style.display = 'none'
    })

    Menu.addEventListener('click', function (event) {
        let parentButton = event.target.closest('.add-btn-cart')

        if (parentButton) {
            const name = parentButton.getAttribute('data-name')
            const price = parseFloat(parentButton.getAttribute('data-price'))

            addToCart(name, price)
        }
    })

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name)

        if (existingItem) {
            existingItem.quantity += 1
            console.log(cart)
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            })

            console.log(cart)
        }
    }
})
