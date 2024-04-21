axios("https://fakestoreapi.com/products").then((res) => {
  res.data.forEach((element) => {
    console.log(element);
    const products = document.querySelector(".products");
    const cardsDiv = document.createElement("div");
    const imageProduct = document.createElement("img");
    const titleProduct = document.createElement("p");
    const priceProduct = document.createElement("p");
    // const basketButton = document.createElement("button");
    // const favButton = document.createElement("button");


    imageProduct.src=element.image;
    titleProduct.innerText=element.title;
    priceProduct.innerText=element.price;

    imageProduct.className = "imageProduct"
    titleProduct.className = "titleProduct"
    priceProduct.className = "priceProduct"


    cardsDiv.append(imageProduct,titleProduct,priceProduct);
    products.appendChild(cardsDiv)


  });
});
