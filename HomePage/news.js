
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8a639c38c3msh285c7676bda8bcdp1bd5fcjsne6a7fc32ba82',
		'x-rapidapi-host': 'cnbc.p.rapidapi.com'
	}
}
const apiUrl = `https://cnbc.p.rapidapi.com/symbols/translate?symbol=TSLA`;
const newsContainer = document.getElementById("newsContainter");


async function fetchNews(){
	try {
		const response = await fetch(apiUrl,options);
		const result = await response.json();
		return console.log(result);
	} catch (error) {
		console.error("Error, please try again!", error);
		return[];
	}
	
}


function displayNews(articles){
	newsContainer.innerHTML= "";
	articles.forEach((article) => {
		const newsCard = duocument.createElement("div");
		const img = document.createElement("img");
		img.src = article.urlToImage;
		img.alt = article.title;
		const title = document.createElement("h2");
		const desc = document.createElement("p");
		desc.textContent = article.desc;

		newsCard.appendChild(img);
		newsCard.appendChild(title);
		newsCard.appendChild(desc);
		newsContainer.appendChild(newsCard);


		
	});


}


(async () => {
	try{
		const articles = await fetchNews();
		displayNews(articles);

	}catch(error){
		console.error("Error, please try again!",error);

	}
})();