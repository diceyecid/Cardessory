'use strict';

console.log('check');

// var checkout = document.querySelector('#checkout-form');
// checkout.classList.add('hidden');
// checkout.setAttribute('aria-hidden', 'true');

// var checkoutToggle = document.create

const openCheckoutButton = document.querySelector('[data-form-target]');
const closeCheckoutButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

openCheckoutButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.formTarget)
        openModal(modal)
    })
})

closeCheckoutButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.')
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}