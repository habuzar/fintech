
const apiKey = "c31c3ac3957d4c3ca612461aff466f74";
const newsContainers = document.getElementById("newsContainer"); // Ensure this element exists in your HTML

async function fetchNews() {
	try {
		const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize6&apiKey=${apiKey}`
		const response = await fetch(apiUrl);
		const result = await response.json();
		 // Log the entire response for debugging
		return result.articles;
	} catch (error) {
		console.error("Error, please try again!", error);
		return [];
	}
}

function displayNews(articles) {
		newsContainers.innerHTML = "";
		articles.forEach((article) => {
			const newsCard = document.createElement("div")
			newsCard.classList.add("newsCard")
			const img = document.createElement("img")
			img.src = article.urlToImage;
			// img.alt = article.title;
			const title = document.createElement("h2")
			title.textContent = article.title;

			newsCard.appendChild(img);
			newsCard.appendChild(title);
			newsCard.addEventListener("click", () =>{window.open(article.url, "_blank")});
			newsContainers.appendChild(newsCard);

			if (!newsContainers) {
				console.error("newsContainer element not found.");
				return;
			}
		});	
}


(async () => {
	try {
		const articles = await fetchNews();
		displayNews(articles);
	} catch (error) {
		console.error("Error, please try again!", error);
	}
})();
