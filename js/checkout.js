/*
 * This file defines the checkout price display
 */ 

const displayPrice = () =>
{
	const price = sessionStorage.getItem( 'price' );

	const section = document.createElement( 'section' );
	section.classList.add( 'section' );
	const subtotal = document.createElement( 'h2' );
	subtotal.innerHTML = `Subtotal: $${ price }`;
	subtotal.setAttribute( 'aria-label', 'Sub-total' );

	const body = document.querySelector( 'body' );
	const form = document.querySelector( '#checkout-form' );
	section.insertBefore( subtotal, section.lastChild )
	body.insertBefore( section, form );
}

displayPrice();
