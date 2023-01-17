let renderArticles = document.getElementById("renderArticles");
let buttonForMode = document.getElementById("buttonForMode");
<<<<<<< Updated upstream
let renderTopHeadlinesButton = document.getElementById("renderTopHeadlines");

renderTopHeadlinesButton.addEventListener("click", () => {
  articleDiv.classList.add("hide");
  topArticleDiv.classList.remove("hide");
  emptyContainer();
  renderTopHeadlines();
});
=======
let body = document.getElementById("body");
>>>>>>> Stashed changes

buttonForMode.addEventListener("click", () => {
  if (mode.content == "light") {
    mode.content = "dark";
    body.style.color = "orange";
    buttonForMode.style.color = "orange";
    renderArticles.style.color = "orange";
  } else {
    mode.content = "light";
    body.style.color = "black";
    buttonForMode.style.color = "black";
    renderArticles.style.color = "black";
  }
});

renderArticles.addEventListener("click", () => {
  articleDiv.classList.remove("hide");
  topArticleDiv.classList.add("hide");
  emptyContainer();
  renderNewsPaper();
});

let articleDiv = document.createElement("div");
articleDiv.setAttribute("id", "articleDiv");

let topArticleDiv = document.createElement("div");
topArticleDiv.setAttribute("id", "topArticleDiv");

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
