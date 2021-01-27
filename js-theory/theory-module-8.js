// 1.bubbling

const refs = {
	parent: document.querySelector('#parent'),
	child: document.querySelector('#child'),
	innerChild: document.querySelector('#inner-child'),
};

const parentClickHandler = (event) => {
	console.log('PARENT click handler');
	console.log('event.target :>> ', event.target);
	console.log('event.currentTarget :>> ', event.currentTarget);
}
const childClickHandler = (event) => {
	console.log('CHILD click handler');
	console.log('event.target :>> ', event.target);
	console.log('event.currentTarget :>> ', event.currentTarget);
}
const innerClickHandler = (event) => {
	console.log('INNER CHILD click handler');
	console.log('event.target :>> ', event.target);
	console.log('event.currentTarget :>> ', event.currentTarget);
	// event.stopPropagation();
}

refs.parent.addEventListener('click', parentClickHandler);
refs.child.addEventListener('click', childClickHandler);
refs.innerChild.addEventListener('click', innerClickHandler);

// 2.delegation filtering tags

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