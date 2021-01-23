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