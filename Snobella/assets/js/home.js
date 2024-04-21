axios("https://fakestoreapi.com/products")
  .then((res) => {
    res.data.forEach((element) => {
      console.log(element);
      const products = document.querySelector(".products");
      const cardsDiv = document.createElement("div");
      const imageProduct = document.createElement("img");
      const titleProduct = document.createElement("p");
      const priceProduct = document.createElement("p");
      const basketButton = document.createElement("button");
      const favButton = document.createElement("button");

      imageProduct.src = element.image;
      titleProduct.innerText = element.title;
      priceProduct.innerText = `$${element.price}`;

      imageProduct.className = "imageProduct";
      titleProduct.className = "titleProduct";
      priceProduct.className = "priceProduct";

      basketButton.innerText = "Add Basket";
      basketButton.className = "basketButton";
      basketButton.addEventListener("click", () => {
        addToCart(element);
      });

      favButton.innerHTML = '<i class="fa-solid fa-heart"></i>';
      favButton.className = "favButton";
      favButton.addEventListener("click", () => {
        addToFavorites(element);
      });

      cardsDiv.append(imageProduct, titleProduct, priceProduct, basketButton, favButton);
      products.appendChild(cardsDiv);
    });
  })
  .catch((error) => {
    console.error("Dont add to basket", error);
  });

function addToCart(product) {
  console.log(" Add to basket:", product.title);

}

function addToFavorites(product) {
  console.log("Add to favorite:", product.title);

}
