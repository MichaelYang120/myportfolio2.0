// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
	preloader.classList.add('hide-preloader');
});
// project list
const menu = [
	{
		id: 1,
		title: 'Kayak Email',
		category: 'email',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bdbbbff8-dac0-4312-b887-b6b9e3b61f9d.gif?ClientID=vimeo-core-prod&Date=1654951998&Signature=4b006bfb161ef3ab0af581a2a133d9cdebf800f2',
		desc: `Skills Used: HTML, CSS, SASS, Media Queries, and Framework`,
		button: 'asdfjlskadf',
		source:
			'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/kayak%20email',
		live:
			'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/kayak%20email'
	},
	{
		// '//im5.ezgif.com/tmp/ezgif-5-26fad992ca.gif'
		id: 2,
		title: 'Mens Wearhouse Email',
		category: 'email',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/0b0b8097-2d39-4d5b-b06b-f832d961834c.gif?ClientID=vimeo-core-prod&Date=1654958065&Signature=58645330ce275f063c74a9de8ba38c4e4419b016',
		desc: `Skills Used: HTML, CSS, SASS, Media Queries, and Framework `,
		source:
			'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/men-email',
		live:
			'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/men-email'
	},
	{
		id: 3,
		title: 'Budget Email',
		category: 'email',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8da15f56-a255-4e9b-8564-6b20fc1fd0c4.gif?ClientID=vimeo-core-prod&Date=1654958916&Signature=a0deebee2416d333ce46182234fd9ab1291860c3',
		desc: `Skills Used: HTML, CSS, SASS, Media Queries, and Framework `,
		source:
			'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/budget.html#L1',
		live:
			'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/budget.html'
	},
	{
		id: 4,
		title: 'K Green Drinks Landing Page',
		category: 'Webpage',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/69c632dc-3aba-46b2-9338-0cab929d2190.gif?ClientID=vimeo-core-prod&Date=1655011492&Signature=63271d8a6385c4b6641c51de7cfb83d64f4ba294',
		desc: `Skills Used: HTML, CSS, Javascript`,
		source:
			'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/kgreenlandingpage/index.html',
		live: 'https://michaelyang120.github.io/kgreenlandingpage/index.html'
	},
	{
		id: 5,
		title: 'Lux Landing Page',
		category: 'Webpage',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/29035228-1d6a-4930-8806-693bb3016382.gif?ClientID=vimeo-core-prod&Date=1655017518&Signature=d00be2dd5ad347f4509dd9348fe8d3109624ac0e',
		desc: `Skills Used: HTML, CSS`,
		source:
			'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/luxlandingpage/index.html',
		live: 'https://michaelyang120.github.io/luxlandingpage/index.html'
	},
	{
		id: 6,
		title: 'Mortgage Calculator',
		category: 'Webpage',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/213f43af-c5ad-4d57-a7b3-a40352767299.gif?ClientID=vimeo-core-prod&Date=1655020223&Signature=3a3533e99b48579425c2106b51468c21cbb8b0cb',
		desc: `Skills Used: HTML, CSS, Javascript`,
		source:
			'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/mortgage-cal/index.html',
		live: 'https://michaelyang120.github.io/mortgage-cal/index.html'
	},
	{
		id: 7,
		title: 'Shopify Website',
		category: 'Webpage',
		price: '',
		img:
			'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/01c4dea0-a000-441a-94df-ed8bdc7fff80.gif?ClientID=vimeo-core-prod&Date=1655019035&Signature=62d263ada8946d632af368cf8986de4f4d305d82',
		desc: `Click on live preview to see website "Password: onestop"`,
		live: 'https://onetopstop.myshopify.com/'
	}
	// {
	// 	id: 8,
	// 	title: 'american classic',
	// 	category: 'lunch',
	// 	price: 12.99,
	// 	img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	// 	desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	// },
	// {
	// 	id: 9,
	// 	title: 'quarantine buddy',
	// 	category: 'shakes',
	// 	price: 16.99,
	// 	img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	// 	desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	// },
	// {
	// 	id: 10,
	// 	title: 'bison steak',
	// 	category: 'email',
	// 	price: 22.99,
	// 	img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	// 	desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	// }
];

// typewritter effect on occupation
var app = document.getElementById('test');

var typewriter = new Typewriter(app, {
	loop: true
	// cursor: "",
});

typewriter
	.typeString('software engineer')
	.pauseFor(1500)
	.deleteAll()
	.typeString('frontend developer')
	.pauseFor(1500)
	.deleteAll()
	.typeString('email developer')
	.pauseFor(1500)
	.deleteAll()
	.typeString('web content editor')
	.pauseFor(1500)
	.start();

// parent element
const projectSectionCenter = document.querySelector('.projects-section-center');
const btnContainer = document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded', function() {
	displayMenuItems(menu);
	displayMenuButtons();
});

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function(item) {
		return `
		<article class="projects-item">
			<img src="${item.img}" alt="${item.title}" class="photo" />
			<div class="projects-info">
				<header>
					<h4>${item.title}</h4>
					<h4 class="tech-info">${item.price}</h4>
				</header>
				<p class="projects-text">
				${item.desc}
				</p>
                <button class="code-btn"><a href="${item.source}">
                 Source Code <i class="fa-brands fa-github"></i></a></button>
                <button class="code-btn"><a href="${item.live}">Live Preview <i class="fa-solid fa-play"></i></a></button>

			</div>
		</article>
		`;
	});
	displayMenu = displayMenu.join('');
	// console.log(displayMenu);

	projectSectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
	const categories = menu.reduce(
		function(values, item) {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		['all']
	);
	// filter btn
	const categoryBtn = categories
		.map(function(category) {
			return `<button type="button" class="filter-btn" data-id=${category}>
			${category}
		  </button>`;
		})
		.join('');

	btnContainer.innerHTML = categoryBtn;
	const filterBtn = btnContainer.querySelectorAll('.filter-btn');
	console.log(filterBtn);

	filterBtn.forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter(function(menuItem) {
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === 'all') {
				displayMenuItems(menu);
			} else {
				displayMenuItems(menuCategory);
			}
		});
	});
}

// jokes
const url = 'https://icanhazdadjoke.com/';

const btnJokes = document.querySelector('.btn-jokes');
const result = document.querySelector('.result');

btnJokes.addEventListener('click', function() {
	fetchDadJoke();
});

const fetchDadJoke = async () => {
	try {
		const response = await fetch(url, {
			headers: {
				Accept: 'application/json',
				'User-Agent': 'learning app'
			}
		});
		if (!response.ok) {
			throw new Error(' Error');
		}
		const data = await response.json();

		result.textContent = data.joke;
	} catch (error) {
		console.log(error.message);
		result.textContent = 'There was an error...';
	}
};

fetchDadJoke();
