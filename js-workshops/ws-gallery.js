const imagesSource = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: '1-Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: '2-Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: '3-Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: '4-Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: '5-Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: '6-Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: '7-Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: '8-Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: '9-Lighthouse Coast Sea',
  },
];

const refs = {
	gallery: document.querySelector('.js-gallery'),
	largeImage: document.querySelector('.lightbox__image'),
	lightbox: document.querySelector('.js-lightbox'),
	closeBtn: document.querySelector('[data-action="close-lightbox"]'),
}

imagesSource.forEach((image, index) => {
	const imgageMarkup = `<li><a class='gallery__link' href='${image.original}'><img class='gallery__image' src='${image.preview}' data-source='${image.original}' data-index='${index}' alt='${image.description}'/></a></li>`;
	refs.gallery.insertAdjacentHTML('beforeend', imgageMarkup);
})

refs.gallery.addEventListener('click', onGalleryClick);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.lightbox.addEventListener('click', onLightboxClick);

function onGalleryClick(event) {
	event.preventDefault();
	console.log(event.target.alt);
	if(event.target.nodeName !== 'IMG') return
	refs.largeImage.src = event.target.dataset.source;
	refs.largeImage.alt = event.target.alt;
	onOpenModal();
}

function onOpenModal() {
	refs.lightbox.classList.add('is-open');
	window.addEventListener('keydown', onEscPress);
	window.addEventListener('keydown', onArrowClick);
}

function onCloseModal() {
	refs.lightbox.classList.remove('is-open');
	refs.largeImage.src = '';
	refs.largeImage.alt = '';
	window.removeEventListener('keydown', onEscPress);
	window.removeEventListener('keydown', onArrowClick);
}

function onLightboxClick(event) {
	if (event.currentTarget.nodeName === event.target.nodeName) {
		onCloseModal();
	};
}

function onEscPress(event) {
	if (event.code === 'Escape') {
		onCloseModal();
	};
}

function onArrowClick(event) {
	let index = 0;
		index = +event.target.firstElementChild.dataset.index;
	console.log('before index', index);
	if (event.code === 'ArrowLeft' && index > 0) {
		index -= 1;
		slider(event, index);
	}
	if (event.code === 'ArrowRight' && index < imagesSource.length-1) {
		index += 1;
		slider(event, index);
	}
	console.log('after index', index);
}
	
function slider(event, index) {
	event.target.firstElementChild.dataset.index = index;
	refs.largeImage.src = imagesSource[index].original;
	refs.largeImage.alt = imagesSource[index].description;
}

