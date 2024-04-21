axios("https://fakestoreapi.com/products").then((res) => {
  res.data.forEach((element) => {
    const products = document.querySelector(".products");
    const cardsDiv = document.createElement("div");
    const imageProduct = document.createElement("img");
    const titleProduct = document.createElement("p");
    const priceProduct = document.createElement("p");
    const raitingProduct = document.createElement("p");
    const basketButton = document.createElement("button");
    const favButton = document.createElement("button");


  });
});
