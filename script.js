let renderArticles = document.getElementById("renderArticles");
let buttonForMode = document.getElementById("buttonForMode");
let renderTopHeadlinesButton = document.getElementById("renderTopHeadlines");
let articleDiv = document.createElement("div");
articleDiv.setAttribute("id", "articleDiv");
let topArticleDiv = document.createElement("div");
topArticleDiv.setAttribute("id", "topArticleDiv");

renderTopHeadlinesButton.addEventListener("click", () => {
  articleDiv.classList.add("hide");
  topArticleDiv.classList.remove("hide");
  emptyContainer();
  renderTopHeadlines();
});

buttonForMode.addEventListener("click", () => {
  if (mode.content == "light") {
    mode.content = "dark";
    buttonForMode.style.color = "white";
    buttonForMode.style.backgroundColor = "black";
    renderTopHeadlinesButton.style.color = "white";
    renderTopHeadlinesButton.style.backgroundColor = "black";
    renderArticles.style.color = "white";
    renderArticles.style.backgroundColor = "black ";
  } else {
    mode.content = "light";
    buttonForMode.style.color = "black";
    buttonForMode.style.backgroundColor = "white";
    renderTopHeadlinesButton.style.color = "black";
    renderTopHeadlinesButton.style.backgroundColor = "white";
    renderArticles.style.color = "black";
    renderArticles.style.backgroundColor = "white";
  }
});

renderArticles.addEventListener("click", () => {
  articleDiv.classList.remove("hide");
  topArticleDiv.classList.add("hide");
  emptyContainer();
  renderNewsPaper();
});

let url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=d83b8fc981ee4157944ca434e8a4c295";

let urlForTopHeadlines =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=d83b8fc981ee4157944ca434e8a4c295";

function renderTopHeadlines() {
  fetch(urlForTopHeadlines)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.articles.forEach((obj) => {
        topArticleDiv.innerHTML += `<h2>Title:</h2> ${obj.title}
        </br>
        <h2>Author:</h2> ${obj.author}
        </br>
        <h2>Content:</h2> ${obj.content}
        </br>
        <img src="${obj.urlToImage}"/>
        <h2><a target="_blank" href="${obj.url}">Click here for the full article</a></h2>
        </br>
        <hr>
        </br>`;
        document.body.appendChild(topArticleDiv);
      });
    });
}

//Renderar allting
function renderNewsPaper() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((obj) => {
        articleDiv.innerHTML += `
        <h2>Title:</h2> ${obj.title}
        </br>
        <h2>Author:</h2> ${obj.author}
        </br>
        <h2>Content:</h2> ${obj.content}
        </br>
        <img src="${obj.urlToImage}"/>
        <h2><a target="_blank" href="${obj.url}">Click here for the full article</a></h2>
        </br>
        <hr>
        </br>
        `;
        document.body.appendChild(articleDiv);
        console.log(obj);
      });
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    });
}

function emptyContainer() {
  topArticleDiv.innerHTML = " ";
  articleDiv.innerHTML = " ";
}
