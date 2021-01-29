const refs2 = {
	tags: document.querySelector('.js-tags'),
	output: document.querySelector('.js-output'),
}

refs2.tags.addEventListener('click', onTagsClick);

function onTagsClick(event) {
	if (event.target.nodeName !== 'BUTTON') return
	
	const nextActiveTag = event.target;
	const activeTagValue = nextActiveTag.dataset.value;
	
	if (nextActiveTag.classList.contains('tags__btn--active')) {
		toggleActiveTag(nextActiveTag);
	} else {
		setActiveTag(nextActiveTag);
		updateOutput(activeTagValue);
	}
}

function setActiveTag(nextActiveTag) {
	const currentActiveTag = refs2.tags.querySelector('.tags__btn--active');
	if (currentActiveTag) {
		currentActiveTag.classList.remove('tags__btn--active');
	}
	nextActiveTag.classList.add('tags__btn--active');
}

function updateOutput(value) {
 refs2.output.textContent = value;
} 

function toggleActiveTag(nextActiveTag) {
	nextActiveTag.classList.remove('tags__btn--active');
}