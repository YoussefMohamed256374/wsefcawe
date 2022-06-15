let navbar = document.querySelector('.header nav ul');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
}
window.onscroll = () =>{
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
}

let currentLocation = location.href;
let menuItem = document.querySelectorAll('header .container nav ul li a');

let menuLength = menuItem.length
for (let i = 0; i < menuLength; i++){
	if (menuItem[i].href === currentLocation){
    menuItem[i].className = 'active'; 
	}
}

