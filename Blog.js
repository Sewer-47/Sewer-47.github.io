class PostInfo {

	constructor(title, description, image, release) {
		this.title = title;
		this.description = description;
		this.image = image;
		this.release = release;
	}
}

class PostContent {

	constructor(header, description, contextArray) {
		this.header = header;
		this.description = description;
		this.contextArray = contextArray;
	}
}

class PostContext {

	constructor(text) {
		this.text = text;
	}
}

class Post {
	
	constructor(info, content) {
		this.info = info;
		this.content = content;
	}
}

class PostManager {

	constructor() {
		this.postArray = [];
	}

	registerPost(post) {
		this.postArray.push(post);
	}

	getByIndex(postIndex) {
		return this.postArray[postIndex];
	}

	getAll() {
		return this.postArray;
	}
}

class PostRenderer {

	constructor(postManager) {
		this.postManager = postManager;
	}

	render() {
		var mainElement = document.getElementsByTagName("main")[0];
		mainElement.innerHTML = "";

		for (var post of this.postManager.getAll()) {
			//todo impl
		}
	}
}

class PostLoader {

	constructor() {

	}

	async loadDefaults() {
		var requestURL = "posts.json";
		var request = new Request(requestURL);

		var response = await fetch(request);
		var jsonObject = await response.json();

		var postArray = [];

		for (var postJson of jsonObject) {
			var infoJson = postJson.info;
			var postInfo = new PostInfo(infoJson.title, infoJson.description, infoJson.image, infoJson.release);


			var contentJson = postJson.content;
			var postContent = new PostContent(contentJson.header, contentJson.description, contentJson.context);
			
			var post = new Post(postInfo, postContent);
			postArray.push(post);

		}
		return postArray;
	}
}

async function initBlog() {
	var postArray = new PostLoader().loadDefaults();
	await new Promise(r => setTimeout(r, 200));

	for (var post of postArray) {
		//end of work
		console.log(post);
	}

	var postManager = new PostManager();

	new PostRenderer(postManager).render();
}


window.addEventListener("load", () => {
	//initBlog();
})