'use strict'

{
    const menuItems = document.querySelectorAll('.side li a');
    menuItems.forEach(item=>{
item.addEventListener('click', e =>{
e.preventDefault();

item.classList.add('active')
});
    });
}