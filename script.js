let buttonForRenderingNewspaper = document.getElementById(
  "buttonForRenderingNewspaper"
);

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
      console.log(data);
    });
}
