// Webinar 27.01.2021
//task-1 chnge color of parent when hover on child
//variant 1
// const refs = {
// 	card: document.querySelector('.card'),
// 	cardDelete: document.querySelector('.card__delete'),
// }

// refs.cardDelete.addEventListener('mouseover', event => {
// 	refs.card.classList.add('card_focus')
// })
// refs.cardDelete.addEventListener('mouseout', event => {
// refs.card.classList.remove('card_focus')
// })

// variant 2 - delegation
// const refs = {
// 	card: document.querySelector('.card'),
// }

// refs.card.addEventListener('mouseover', onMouseOver);
// refs.card.addEventListener('mouseout', onMouseOut);
 
// function onMouseOver(event) {
// 	if (event.target.classList.contains('card__delete')) {
// 		event.currentTarget.classList.add('card_focus')
// 	}
// }

// function onMouseOut(event) {
// 		if (event.target.classList.contains('card__delete')) {
// 		event.currentTarget.classList.remove('card_focus')
// 	}
// }
//---------------------------------------------

// task-2 (4 red boxes. chnge color to green when click on box. if there is already a green box - switch to red)

// const refs = {
// 	parent: document.querySelector('.parent'),
// 	boxes: document.querySelectorAll('.box'),
// }

// refs.parent.addEventListener('click', event => {
// 	if (!event.target.classList.contains('box')) return;
// 	resetColor()
// 	event.target.classList.add('box-active');
// })

// function resetColor() {
// 	refs.boxes.forEach(box => box.classList.remove('box-active'));
// }

// task-3 (field of 8x8 squares. click on square toggles white/black background. add button to toggle all squares colors)

// const refs = {
// 	field: document.querySelector('.field'),
// 	reverseBtn: document.querySelector('.reverse'),
// }

// const boxMarkup = `<div class = "square"></div>`
// for (let i = 0; i < 64; i++){
// 	refs.field.insertAdjacentHTML('beforeend', boxMarkup)
// }

// const squaresRef = document.querySelectorAll('.square');

// refs.field.addEventListener('click', event => {
// 	if (!event.target.classList.contains('square')) return
	
// 	event.target.classList.toggle('square-active')
// })

// refs.reverseBtn.addEventListener('click', reverseColors)

// //Variant 1
// // function reverseColors() {
// // 	squaresRef.forEach(square => {
// // 		square.classList.toggle('square-active');
// // 	})
// // }
// //variant 2. CSS classes
// function reverseColors() {
// 	refs.field.classList.toggle('field-reverse');
// }

// task-4
// const treeRef = document.querySelector('.tree');

// treeRef.addEventListener('click', event => {
// 	if (!event.target.classList.contains('tree__item')) return;
	
// 	const branchRef = event.target.querySelector('.tree__branch');

// 	if (!branchRef) return
	
// 	//folds all nested branches
// 	if (branchRef.classList.contains('open')) {
// 		branchRef
// 			.querySelectorAll('.tree__branch')
// 			.forEach(branch => {
// 				branch.classList.remove('open')
// 			});
// 	}


// 	branchRef.classList.toggle('open');
// })