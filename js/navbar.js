'use strict';

console.log('check');

var navMenu = document.querySelector('#menu');
navMenu.classList.add('hidden');
navMenu.setAttribute('aria-hidden', 'true');

var menuToggle = document.createElement('button');
menuToggle.classList.add('button','menutoggle'); 
menuToggle.innerHTML = 'Menu ▼';
menuToggle.setAttribute('id', 'menu-toggle');
menu.setAttribute('aria-labelledby','menu-toggle');

var header = document.querySelector('header');
header.insertBefore(menuToggle, menu);

menuToggle.setAttribute('aria-label', 'Main menu');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');


menuToggle.addEventListener('click', 
    function(){
        console.log('   ');

        if (menu.classList.contains('hidden')){
            console.log('menu is hidden, show the menu');
            menu.classList.remove('hidden');

            menu.setAttribute('aria-hidden', 'false');
            menu.setAttribute('aria-expanded', 'true');

        }else{
            console.log('menu is show, hide the menu');
            menu.classList.add('hidden');

            menu.setAttribute('aria-hidden', 'true');
            menu.setAttribute('aria-expanded', 'false');

        }
    }
);