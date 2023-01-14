let renderArticles = document.getElementById("renderArticles");
renderArticles.addEventListener("click", () => {
  renderNewsPaper();
  console.log("hej du har klickat mig");
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
        <h2><a href="${obj.url}">Click here for the full article</a></h2>
        </br>
        <hr>
        </br>
        `;
        document.body.appendChild(articleDiv);
        console.log(obj);
      });

      console.log(data);
    });
}
