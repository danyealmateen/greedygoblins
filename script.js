let renderArticles = document.getElementById("renderArticles");
let buttonForMode = document.getElementById("buttonForMode");

buttonForMode.addEventListener("click", () => {
  if (mode.content == "light") {
    mode.content = "dark";
  } else {
    mode.content = "light";
  }
});

renderArticles.addEventListener("click", () => {
  renderNewsPaper();
});

let articleDiv = document.createElement("div");
articleDiv.setAttribute("id", "articleDiv");

let url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=d83b8fc981ee4157944ca434e8a4c295";

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
