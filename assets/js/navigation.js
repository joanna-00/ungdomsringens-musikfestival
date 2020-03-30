let burger = document.getElementById('burger');
let exit = document.getElementById('exit-icon');
let menu = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');
let languageBtn = document.getElementsByClassName('lang')[0];
let popup = document.getElementsByClassName('lang-popup')[0];
const articleHeaders = document.querySelectorAll('.article-header');

burger.addEventListener('click', function(){
	nav.classList.toggle('hidden');
	exit.classList.toggle('hidden');
	menu.classList.toggle('hidden');
});


languageBtn.addEventListener('click', function(){
	popup.classList.toggle('hidden');
});

articleHeaders.forEach(elem => {
	elem.addEventListener('click', () => {
		let siblingP = elem.parentElement.getElementsByTagName('p')[0]
		siblingP.classList.toggle('hidden-display')
	})
})