//The button that fires the function renderNewsPaper()
let buttonForRenderingNewspaper = document.getElementById(
  "buttonForRenderingNewspaper"
);


let articleOne = document.getElementById("article-one");

buttonForRenderingNewspaper.addEventListener("click", () => {
  renderNewsPaper();
  console.log("hej du har klickat mig");
});

let url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=d83b8fc981ee4157944ca434e8a4c295";

function renderNewsPaper() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.articles.forEach((obj) => {
        console.log(obj);
      });

      console.log(data);
    });
}
