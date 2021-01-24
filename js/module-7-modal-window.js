// Modal window

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
const backdropRef = document.querySelector('.backdrop');


openModalBtn.addEventListener('click', onOpenModal)
closeModalBtn.addEventListener('click', onCloseModal)
backdropRef.addEventListener('click', onBackdropClick)

function onOpenModal() {
	window.addEventListener('keydown', onEscapePress)
	document.body.classList.add('show-modal')
}
function onCloseModal() {
	window.removeEventListener('keydown', onEscapePress)
	document.body.classList.remove('show-modal')
}
function onBackdropClick (event) {
	if (event.target === event.currentTarget) {
		onCloseModal()
	};
}
function onEscapePress(event) {
	if (event.code === 'Escape') {
		onCloseModal();
	}
}