/*
 * This file defines the interactions for sign up button
 */ 

// navigate to checkout page
const checkout = ( price ) => 
{ 
	sessionStorage.setItem( 'price', price );
	window.location.href = './checkout.html'; 
}

// buttons
const shelfCheck = document.querySelector( '#shelf-checkout' );
const subCheck = document.querySelector( '#sub-checkout' );

// accessabilities
shelfCheck.setAttribute( 'role', 'link' );
subCheck.setAttribute( 'role', 'link' );
shelfCheck.setAttribute( 'aria-label', 'checkout' );
subCheck.setAttribute( 'aria-label', 'ckeckout' );

// click listeners
shelfCheck.addEventListener( 'click', () => checkout( 0 ) );
subCheck.addEventListener( 'click', () => checkout( 10 ) );

