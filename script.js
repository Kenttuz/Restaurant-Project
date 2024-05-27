document.addEventListener('DOMContentLoaded', function () {
    const CartBtn = document.getElementById('CartBtn')
    const ModalCart = document.getElementById('ModalCart')
    const closeModalBtn = document.getElementById('closeModalBtn')
    const Menu = document.getElementById('Menu')
    const Drinks = document.getElementById('Drinks')
    const CartAccount = document.getElementById('CartAccount')
    const CartItemsContainer = document.getElementById('CartItemsContainer')
    const CartTotal = document.getElementById('CartTotal')
    const AddressInput = document.getElementById('AddressInput')
    const AddressWarning = document.getElementById('AddressWarning')
    const checkoutBtn = document.getElementById('checkoutBtn')
    const removeItemCart = document.getElementById('removeItemCart')

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

    CartBtn.addEventListener('click', function () {
        ModalCart.style.display = 'flex'
    })

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name)

        if (existingItem) {
            existingItem.quantity += 1
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            })
            console.log('aqui')
        }
        updateCartModal()
    }

    function updateCartModal() {
        CartItemsContainer.innerHTML = ''
        let total = 0

        cart.forEach(item => {
            total += item.price * item.quantity

            const cartItemElement = document.createElement('div')
            cartItemElement.className = 'flex justify-between mb-2 flex-col'
            cartItemElement.innerHTML = `
                <h5 class="font-bold text-lg mb-2">${item.name}</h5>
                <p class="text-base mb-2">Quantidade: ${item.quantity}</p>
                <p class="text-base mb-2">R$${(
                    item.price * item.quantity
                ).toFixed(2)}</p>
                <button class="text-base text-red-500" onclick="removeFromCart('${
                    item.name
                }')">remover</button>
            `

            CartItemsContainer.appendChild(cartItemElement)
        })
    }

    window.removeFromCart = function (name) {
        const itemIndex = cart.findIndex(item => item.name === name)
        if (itemIndex > -1) {
            const item = cart[itemIndex]
            item.quantity -= 1
            if (item.quantity === 0) {
                cart.splice(itemIndex, 1)
            }
        }
        updateCartModal()
    }
})
