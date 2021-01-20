// const titleRef = document.querySelector('.page-title');
// // console.dir(titleRef);
// titleRef.textContent = 'title-title'

// const linkRef = document.querySelector('.nav__link--active');

// // console.dir(linkRef);
// // console.dir(linkRef.attributes);
// // console.dir(linkRef.getAttribute('class'));
// // linkRef.hidden = true;

// const linksRef = document.querySelectorAll('.nav__link');
// linksRef.textContent = 'лінкі-хуінкі';
// // console.dir(linksRef);
//==============================================
// const nav = document.querySelector('.nav');
// console.log(nav);

// const listItemRef = document.createElement('li');
// listItemRef.classList.add('nav__new-item');
// nav.prepend(listItemRef);

// const cardRootRef = document.querySelector('#root');
// cardRootRef.appendChild(containerRef)
//==============================================

const products = [
{
	name: 'Product 1',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit veritatis veniam tenetur optio modi aliquam ipsa. Sit, accusantium itaque!',
	price: 1000,
	available: true,
	},
	{
	name: 'Product 2',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit veritatis veniam tenetur optio modi aliquam ipsa. Sit, accusantium itaque!',
	price: 2000,
	available: false,	
	},
		{
	name: 'Product 3',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit veritatis veniam tenetur optio modi aliquam ipsa. Sit, accusantium itaque!',
	price: 2100,
	available: true,	
	}
]
// console.table(products);

const createProductCard = product => {

	const containerRef = document.createElement('div');
	containerRef.classList.add('container');

	const titleRef = document.createElement('h2');
	titleRef.textContent = product.name;
	titleRef.classList.add('product-card__name', product.available? 'product-card__name--available':'product-card__name--unavailable');

	const descrRef = document.createElement('p');
	descrRef.textContent = product.description;

	const priceRef = document.createElement('p');
	priceRef.textContent = `Цена ${product.price} кредитов`;

	containerRef.append(titleRef, descrRef, priceRef)
	return containerRef;
}

// console.log(createProductCard(products[1]));

const productCards = products.map(product => createProductCard(product));

console.log(productCards);

const productListRef = document.querySelector('#js-products');
console.log(productListRef);
productListRef.append(...productCards)