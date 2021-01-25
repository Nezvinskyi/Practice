// Webinar 20.01.2021
// Task-1. Classes

// const elemRef = document.querySelector('#elem');
// // добавить/удалить класс
// elemRef.classList.add('www');
// elemRef.classList.remove('www');
// const hasClass = elemRef.classList.contains('www');
// console.log(hasClass);
// //добавить класс, если нет или удалить, если класс есть
// setInterval(() => {
// 	elemRef.classList.toggle('www');
// }, 1000)
// //посчитать количество классов
// const classesCount = (elemRef.classList.value)
// 	.split(' ')
// 	.length;
// console.log(`quantity of classes ${classesCount}`);
// // вывести алерт все классы
// elemRef.classList.value
// 	.split(' ')
// 	.forEach(cl => alert(cl))

	//=================================================

	//Task-2. Styles
	// // поменять цвет/ размер 30px/ границу
	// const elemRef = document.querySelector('#element-2');
	// elemRef.style.backgroundColor = 'yellow';
	// elemRef.style.width = '30px';
	// elemRef.style.border = '1px red dotted'
	// // решить задачу с помощью св-ва cssText
	// const cssText = 'background-color: green; width: 110px; border: solid 2px blue'
	// elemRef.style.cssText = cssText;
	
	//=================================================

	//Task-3. property tagName
	// const elemRef = document.querySelector('#element-3');
	// console.log(elemRef.tagName.toLowerCase());
	// // даны элементы с классом www 
	// // добавить каждому элементу в конец название 
	// // его тега в нижнем регистре
	// const wwwRef = document.querySelectorAll('.www');
	// wwwRef.forEach(ref => {
	// 	ref.textContent += ref.tagName.toLowerCase();
	// })

	//=================================================

	//Task-4. appendChild
	
	// const olRef = document.querySelector('ol');
	// const liRef = document.querySelector('li');
	// liRef.textContent = 'пункт';
	// olRef.insertBefore(liRef, olRef.children[olRef.childElementCount/2])
	
	// console.table(Array.from(olRef.children).map(el => el.textContent));
	
	// const textArray = [...olRef.children].map(el => el.textContent);
	// console.log(textArray);
	
	// const ulRef = document.querySelector('ul');
	
	// const newLiMarkup = textArray.map(text => {
		// 	const itemRef = document.createElement('li');
		// 	itemRef.textContent = text;
		// 	return itemRef;
		// })
		
		// ulRef.append(...newLiMarkup)
		
//Task-5. insertBefore
// const ulRef = document.querySelector('ul');
// const elem5Ref = document.querySelector(' #element-5');
// const liRef = document.createElement('li');
// liRef.textContent = '!!!'

// ulRef.insertBefore(liRef, elem5Ref)

//Task-6. insert array

// const taskHeaderRef = document.createElement('h4');
// taskHeaderRef.textContent = 'Task-5';
// document.body.appendChild(taskHeaderRef);

// const arr = ['Odesa', 'Wien', 'London']

// const ulRef = document.createElement('ul');
// const liMarkup = arr.map(text => {
// 	const liRef = document.createElement('li');
// 	liRef.textContent = text;
// 	return liRef;
// })
// ulRef.append(...liMarkup);
// document.body.appendChild(ulRef);

//Task-7.

// const taskTitleRef = document.createElement('h4');
// taskTitleRef.textContent = 'Task-7';
// document.body.appendChild(taskTitleRef);
// const ulRef = document.createElement('ul');
// ulRef.id = 'element-7';
// for (let i = 0; i < 4; i++){
// 		const liRef = document.createElement('li');
// 		liRef.textContent = `Item ${i + 1}`;
// 		ulRef.appendChild(liRef);
// 	}
// 	document.body.append(ulRef);
	// ulRef.firstChild.style.color = 'red';
	// ulRef.lastChild.style.color = 'blue';
	// [...ulRef.children].map(item=>{item.textContent += '!'})
	
	//Task-8 and Task-9.
	
// const taskTitleRef = document.createElement('h4');
// taskTitleRef.textContent = 'Task-8 and Task-9';
// document.body.appendChild(taskTitleRef);
// const ulRef = document.createElement('ul');
// for (let i = 0; i < 8; i++){
// 	const liRef = document.createElement('li');
// 	liRef.textContent = `Item ${i + 1}`;
// 	if (i === 4) {
// 		liRef.id = 'element-8'
// 	}
// 	ulRef.appendChild(liRef);
// 	}
// document.body.append(ulRef);

// const elemRef = document.querySelector('#element-8');

// elemRef.previousElementSibling.textContent += ' previous element';

// elemRef.nextElementSibling.textContent += ' next element';
// elemRef
// 	.nextElementSibling
// 	.nextElementSibling
// 	.textContent += ' overnext element';

// elemRef.parentElement.style.backgroundColor = 'magenta'

// 22.01.2021
// Task - 1
const inputRef = document.querySelector('input');
inputRef.addEventListener('blur', e => {
	const { value } = (e.target)
	console.log(value);
	
	if (!validate(value)) {
		e.target.classList.add('error')
	} 
})
inputRef.addEventListener('focus', e => {
	e.target.classList.remove('error')
})
function validate(str) {
	return str.length > 3;
}

// Task - 2
//popup
const popupBtnRef = document.querySelector('.js-open-popup-btn');
const popupRef = document.querySelector('.js-popup');
popupBtnRef.addEventListener('click', ()=> {
	popupRef.setAttribute('open', 'true');
	window.addEventListener('keydown', onEscPress)
}) 

function onEscPress(event) {
	if (event.code === 'Escape') {
		popupRef.removeAttribute('open');
		window.removeEventListener('keydown', onEscPress)
	}
}

// Task - 3
// Alt+click

const rectRef = document.querySelector('.rect');
rectRef.addEventListener('click', event => {
	return (event.altKey) ? rectRef.classList.add('box-clicked'):rectRef.classList.remove('box-clicked')
})
//right click button
rectRef.addEventListener('contextmenu', () => {
	console.log('right click!');
})

// Task - 4
// (Enter text to p)

const inputToEnterRef = document.querySelector('#js-input-toenter');
const textDivRef = document.querySelector('.enter-text');

inputToEnterRef.addEventListener('keydown', (event) => {
	if (event.code !== 'Enter') return;
	const textRef = document.createElement('p');
	textRef.textContent = event.target.value;
	textDivRef.prepend(textRef);
	event.target.value = '';
})
// better use <form> and <button type='submit'>

// Task - 4
// todo list 
const formRef = document.querySelector('#todo-form');
const todoInputRef = document.querySelector('#todo-input');
const todoListRef = document.querySelector('.todo-list');

function addTodoItem(input) {
	const todoItemRef = document.createElement('li');
	todoItemRef.classList.add('todo-item');
	todoItemRef.textContent = input;
	todoItemRef.addEventListener('click', doneTodoItem)
	return todoItemRef;
}

function doneTodoItem(event) {
event.target.classList.toggle('done');
}

formRef.addEventListener('submit', event => {
	event.preventDefault();
	const { value } = todoInputRef;
	if (!value) return;
	const todoItem = addTodoItem(value);
	todoListRef.prepend(todoItem);
	todoInputRef.value = '';
})

