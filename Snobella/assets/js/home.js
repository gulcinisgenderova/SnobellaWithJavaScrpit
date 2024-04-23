import { productURL } from "./baseURL.js";
import { getDatas } from "./request.js";

let featuredContainer = document.querySelector(".featured-container");
let searchBarSection = document.querySelector(".container.searchBar");
let basket = JSON.parse(localStorage.getItem("basket")) || []

async function createTable() {
  let arr = await getDatas(productURL);


  
  function renderProducts(products) {
    featuredContainer.innerHTML = "";

   
    products.forEach(product => {
      let productCard = document.createElement("div");
      productCard.className = "productCard";

      let newProduct = document.createElement("div");
      newProduct.className = "new-product";
      newProduct.innerText = "New";

      let heart = document.createElement("button");
      heart.className = "heart";
      let heartIcon = document.createElement("i");
      heartIcon.className = "fa-regular fa-heart";
      heart.appendChild(heartIcon);

      let bagImage = document.createElement("img");
      bagImage.className = "bag";
      bagImage.src = product.image;

      let description = document.createElement("p");
      description.className = "description";
      description.innerText = product.title;

      let priceBox = document.createElement("div");
      priceBox.className = "priceBox";
      let priceSpan = document.createElement("span");
      priceSpan.innerText = `$ ${product.price}`;
      priceBox.appendChild(priceSpan);

      let addButton = document.createElement("button");
      addButton.innerText = "Add to Basket";
      addButton.setAttribute("data", product.id)

      productCard.appendChild(newProduct);
      productCard.appendChild(heart);
      productCard.appendChild(bagImage);
      productCard.appendChild(description);
      productCard.appendChild(priceBox);
      productCard.appendChild(addButton);

      featuredContainer.appendChild(productCard);

      addButton.addEventListener("click", (e) => {
        e.stopPropagation();
    
        const checkItem = basket.find(
          (elem) => elem.id == e.target.getAttribute("data")
        );
    
        if (checkItem) {
          checkItem.count += 1;
          localStorage.setItem("basket", JSON.stringify(basket));
        } else {
          let elem = products.find(
            (elem) => elem.id == e.target.getAttribute("data")
          );
          elem.count = 1;
          basket.push(elem);
          console.log(basket);
          localStorage.setItem("basket", JSON.stringify(basket));
        }
      });

      heart.addEventListener("click", () => {
        if (isInFavorites(product)) {
          removeFromFavorites(product);
          showToast("Removed from Favorites");
        } else {
          addToFavorites(product);
          showToast("Added to Favorites");
        }
      });
      addButton.addEventListener("click", (e) => {
        e.stopPropagation();
    
        const checkItem = basket.find(
          (elem) => elem.id == e.target.getAttribute("data")
        );
    
        if (checkItem) {
          checkItem.count += 1;
          localStorage.setItem("basket", JSON.stringify(basket));
        } else {
          let elem = arr.find(
            (elem) => elem.id == e.target.getAttribute("data")
          );
          elem.count = 1;
          basket.push(elem);
          console.log(basket);
          localStorage.setItem("basket", JSON.stringify(basket));
        }
      });
    });
  }

  renderProducts(arr);

  if (searchBarSection) {
    let homeButtonsDiv = searchBarSection.querySelector(".home-buttons");

    if (homeButtonsDiv) {
      let btnAZ = homeButtonsDiv.querySelector("button:nth-child(1)");
      let btnZA = homeButtonsDiv.querySelector("button:nth-child(2)");
      let btnHighLow = homeButtonsDiv.querySelector("button:nth-child(3)");
      let btnLowHigh = homeButtonsDiv.querySelector("button:nth-child(4)");
      let searchBoxDiv = searchBarSection.querySelector(".bot.serachboxG");

      if (searchBoxDiv) {
        let searchInput = searchBoxDiv.querySelector("input");
        let searchIcon = searchBoxDiv.querySelector("img");

        btnAZ.addEventListener("click", () => {
          arr.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          });
          renderProducts(arr);
        });

        btnZA.addEventListener("click", () => {
          arr.sort((a, b) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
          });
          renderProducts(arr);
        });

        btnHighLow.addEventListener("click", () => {
          arr.sort((a, b) => a.price - b.price);
          renderProducts(arr);
        });

        btnLowHigh.addEventListener("click", () => {
          arr.sort((a, b) => b.price - a.price);
          renderProducts(arr);
        });
      }
    }
  }
}

function isInFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.some(fav => fav.id === product.id);
}

function addToFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFromFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let updatedFavorites = favorites.filter(fav => fav.id !== product.id);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true
  }).showToast();
}

createTable();