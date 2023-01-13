let url = "adressen";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
