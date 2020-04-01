let burger = document.getElementById('burger');
let exit = document.getElementById('exit-icon');
let menu = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');
let languageBtn = document.getElementsByClassName('lang')[0];
let popup = document.getElementsByClassName('lang-popup')[0];


const scrollArrow = document.querySelectorAll('.scroll-arrow');

// hamburger navigation
burger.addEventListener('click', function(){
	nav.classList.toggle('hidden');
	exit.classList.toggle('hidden');
	menu.classList.toggle('hidden');
});

// language change
languageBtn.addEventListener('click', function(){
	popup.classList.toggle('hidden');
});




// scroll sideways on line-up table with the arrow
scrollArrow.forEach(elem => {
	elem.addEventListener('click', () => {
		let scrollable = elem.parentElement.parentElement.querySelector('.scrollable')
		console.log(scrollable)
		scrollable.scrollBy({
			left: 200,
			behavior: 'smooth'
		  });
	})
});






function setUpInfoTabs() {
	let arrows = document.querySelectorAll('.fa-chevron-down');
	let articleHeaders = document.querySelectorAll('.article-header');

		// click event for arrows to toggle tab
	arrows.forEach(elem => {
		toggleTabs(elem)
	})

	

	// click event for headers to toggle tab
	articleHeaders.forEach(elem => {
		toggleTabs(elem)
	})
}

function toggleTabs(elem) {
	elem.addEventListener('click', () => {
		console.log('clickd!')
		
		if (elem.parentElement.querySelector('.item-description').classList.contains('hidden-display')) {
			// if(elem.parentElement.getElementsByTagName('p')[0].style.height == 0) {

			let parentContainer = elem.parentElement;

			let siblingP = elem.parentElement.querySelector('.item-description')
			// let id = siblingP.getAttribute('id');
			// siblingP.style.transition = "height, 1s, ease-out"

			// let idHeight = `${id + 'Height'}`
			// let string = `${idHeight}px !important`
			// console.log(idHeight)
			// console.log(string)
			// siblingP.style.height = `${idHeight}px !important`;
			siblingP.classList.toggle('hidden-display')
			// console.log(siblingP)
			parentContainer.style.overflow = "visible"
			
			// console.log(siblingP.scrollHeight)
			
		}

		else {
			let parentContainer = elem.parentElement;

			let siblingP = elem.parentElement.querySelector('.item-description')
			console.log(siblingP)
			// siblingP.style.height = 0;
			parentContainer.style.overflow = "hidden"
			siblingP.classList.toggle('hidden-display')
			
			// console.log(siblingP.scrollHeight)
			
		}
	})
}

