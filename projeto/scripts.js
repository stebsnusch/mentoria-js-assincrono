// chamando APIs

const formWrapper = document.getElementById('create-posts');
const myForm = document.getElementById('myForm');
const postList = document.getElementById('list-posts');
const USER_ID = 1;

myForm.addEventListener('submit', createPost);

function toggleTabs() {
	formWrapper.classList.toggle('hidden');
	postList.classList.toggle('hidden');
}

async function getPosts() {
	toggleTabs();
	const posts = await fetch(
		`https://jsonplaceholder.typicode.com/posts/?userId=${USER_ID}`
	).then((response) => response.json());
	console.log(posts);
	renderPosts(posts);
}

function renderPosts(posts) {
	posts.map((post) => createPostElements(post));
}

function createPostElements(post) {
	const title = post.title;
	const body = post.body;
	const wrapper = document.createElement('div');
	wrapper.classList.add('post-wrapper');
	const h2 = document.createElement('h2');
	h2.innerText = title;
	const content = document.createElement('div');
	content.classList.add('post-body');
	content.innerText = body;
	wrapper.appendChild(h2);
	wrapper.appendChild(content);
	postList.appendChild(wrapper);
}

async function createPost(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const post = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: formData.get('title'),
			body: formData.get('body'),
			userId: USER_ID,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then((response) => response.json());

	console.log(post);
}
