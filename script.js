let url = "https://newsapi.org/v2/everything?q=keyword&apiKey=d83b8fc981ee4157944ca434e8a4c295";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
