let burger = document.getElementById('burger');
let exit = document.getElementById('exit-icon');
let menu = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');
let languageBtn = document.getElementsByClassName('lang')[0];
let popup = document.getElementsByClassName('lang-popup')[0];
const arrows = document.querySelectorAll('.fa-chevron-down');
const articleHeaders = document.querySelectorAll('.article-header');
// const scrollable = document.querySelectorAll('.scrollable')
const scrollArrow = document.querySelectorAll('.scroll-arrow')


burger.addEventListener('click', function(){
	nav.classList.toggle('hidden');
	exit.classList.toggle('hidden');
	menu.classList.toggle('hidden');
});


languageBtn.addEventListener('click', function(){
	popup.classList.toggle('hidden');
});

arrows.forEach(elem => {
	elem.addEventListener('click', () => {
		let siblingP = elem.parentElement.getElementsByTagName('p')[0]
		siblingP.classList.toggle('hidden-display')
	})
})

articleHeaders.forEach(elem => {
	elem.addEventListener('click', () => {
		let siblingP = elem.parentElement.getElementsByTagName('p')[0]
		siblingP.classList.toggle('hidden-display')
	})
})


scrollArrow.forEach(elem => {
	elem.addEventListener('click', () => {
		let scrollable = elem.parentElement.parentElement.querySelector('.scrollable')
		console.log(scrollable)
		scrollable.scrollBy({
			// top: 100,
			left: 200,
			behavior: 'smooth'
		  });
	})
});



// scrollable.forEach(elem => {
// 	elem.scrollLeft
// })
