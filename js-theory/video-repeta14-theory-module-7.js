// events
// const btnRef = document.createElement('button');
// btnRef.setAttribute('type', 'button');
// btnRef.textContent = 'this is a button!';
// btnRef.id = 'btn';
// btnRef.style.backgroundColor = 'grey';
// document.body.appendChild(btnRef);

// console.log(btnRef);

// btnRef.addEventListener('click', () => {
// 	console.log('clicked!');
// })

// btnRef.addEventListener('click', (e) => {
// 	console.log(e.target);
// })

//=======================================================

// form events - submit, FormData

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	console.log('Submit');
	
// 	// получить доступ к элементам формы
// 	const formElements = event.target.elements;
// 	console.log(formElements);
// 	console.log(formElements.subscription.value);
// 	console.log(formElements.name.value);
	
// 	// получить доступ к элементам формы FormData
// 	const formRef = event.target;
// 	const formData = new FormData(formRef);
	
// 	const subbittedData = {};
// 	formData.forEach((value, key) => {
// 		console.log('value :>> ', value);
// 		console.log('key :>> ', key);
// 		subbittedData[key] = value;
// 	})
// 	console.log('subbittedData :>> ', subbittedData);
// })

//=======================================================

// events input/change, checkboxes
/*
const btnRef = document.querySelector('.js-button');
const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const licenseRef = document.querySelector('.js-license');

// document.addEventListener('change',  event => {
	// 	console.log(event);
	// 	console.log(event.target.value);
	// 	nameLabelRef.textContent = event.target.value;
	// });
	inputRef.addEventListener('input',  event => {
		nameLabelRef.textContent = event.target.value;
	});
	
	licenseRef.addEventListener('change', event => {
		console.log('Check!');
		console.log(event);
		btnRef.disabled = !event.target.checked;
	});
	
	inputRef.addEventListener('focus', () => {
		console.log('IN FOCUS!');
	})
	
	inputRef.addEventListener('blur', () => {
		console.log('LOST FOCUS!');
	})
*/

//=======================================================

/*
// events keypress/keydown/keyup

// window.addEventListener('keydown', event => {
	// 	console.log('event.key :>> ', event.key);
	// 	console.log('event.code :>> ', event.code);
	// })
	
	const outputRef = document.querySelector('.js-output');
	const clearBtnRef = document.querySelector('.js-clear');
	
	window.addEventListener('keypress', onKeypress);
	
	clearBtnRef.addEventListener('click', onClearOutput)
	
	function onKeypress(event) {
		outputRef.textContent += event.key;
	}
	
	function onClearOutput() {
		outputRef.textContent = '';
	}
	*/
	
	
//=======================================================

// events mouseenter/mouseleave, mouseover/mouseout, mousemove(chatty event)
/*
const boxRef = document.querySelector('.js-box');
boxRef.addEventListener('mouseenter', event => {
	event.target.classList.add('box--active')
});

boxRef.addEventListener('mouseleave', event => {
	event.target.classList.remove('box--active')
});

boxRef.addEventListener('mousemove', event => {
	console.log(event.clientX);
})
*/

// ===============================================
