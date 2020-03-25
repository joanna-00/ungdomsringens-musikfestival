let burger = document.getElementById('burger');
let exit = document.getElementById('exit-icon');
let menu = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');

burger.addEventListener('click', function(){
	nav.classList.toggle('hidden');
	exit.classList.toggle('hidden');
	menu.classList.toggle('hidden');
});