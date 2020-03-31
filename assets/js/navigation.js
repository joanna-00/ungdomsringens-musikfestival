let burger = document.getElementById('burger');
let exit = document.getElementById('exit-icon');
let menu = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');
let languageBtn = document.getElementsByClassName('lang')[0];
let popup = document.getElementsByClassName('lang-popup')[0];

const arrows = document.querySelectorAll('.fa-chevron-down');
const articleHeaders = document.querySelectorAll('.article-header');

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

	// const itemDescriptions = document.querySelectorAll('.item-description');
	// const [ info1, info2, info3, info4, info5 ] = itemDescriptions;
	// let info1 = document.getElementById('info1')
	// let info2 = document.getElementById('info2')
	// let info3 = document.getElementById('info3')
	// let info4 = document.getElementById('info4')
	// let info5 = document.getElementById('info5')

	// let info1Height = info1.scrollHeight;
	// let info2Height = info2.scrollHeight;
	// let info3Height = info3.scrollHeight;
	// let info4Height = info4.scrollHeight;
	// let info5Height = info5.scrollHeight;
	
	// // console.log(info2)

	// info1.classList.add('hidden-display')
	// info2.classList.add('hidden-display')
	// info3.classList.add('hidden-display')
	// info4.classList.add('hidden-display')
	// info5.classList.add('hidden-display')

	// itemDescriptions.forEach(elem => {
	// 	let parentContainer = elem.parentElement;
	// 	parentContainer.style.overflow = "hidden";
	// 	let finalHeight = elem.height;
	// 	elem.classList.add('hidden-display')

	// 	// elem.addEventListener('click')

	// 	console.log(finalHeight);
	// 	// elem.classList.add
	// })

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

		
		if (elem.parentElement.querySelector('p').classList.contains('hidden-display')) {
			// if(elem.parentElement.getElementsByTagName('p')[0].style.height == 0) {

			let parentContainer = elem.parentElement;

			let siblingP = elem.parentElement.getElementsByTagName('p')[0]
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

			let siblingP = elem.parentElement.getElementsByTagName('p')[0]
			console.log(siblingP)
			// siblingP.style.height = 0;
			parentContainer.style.overflow = "hidden"
			siblingP.classList.toggle('hidden-display')
			
			// console.log(siblingP.scrollHeight)
			
		}
	})
}

setUpInfoTabs()