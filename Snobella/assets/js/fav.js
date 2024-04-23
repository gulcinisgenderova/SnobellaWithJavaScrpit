const favoritesKey = "favorites";

function renderFavorites() {
    let productsContainer = document.querySelector(".products");
    let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
    productsContainer.innerHTML = "";
    favorites.forEach(product => {
        let productCard = document.createElement("div");
        productCard.className = "productCard";
        Object.assign(productCard.style, {
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
            display: "block",
            verticalAlign: "top",
            width: "100%", // Set width to 100% to occupy the full width of the container
            boxSizing: "border-box" // Ensure padding and border are included in the width
        });

        let newProduct = document.createElement("div");
        newProduct.className = "new-product";
        Object.assign(newProduct.style, {
            backgroundColor: "#ff9800",
            color: "white",
            padding: "3px 8px",
            borderRadius: "5px",
            display: "inline-block",
            marginBottom: "5px"
        });
        newProduct.innerText = "New";

        let heart = document.createElement("button");
        heart.className = "heart";
        Object.assign(heart.style, {
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0",
            margin: "0"
        });

        let heartIcon = document.createElement("i");
        heartIcon.className = "fa-regular fa-heart";

        let bagImage = document.createElement("img");
        bagImage.className = "bag";
        Object.assign(bagImage.style, {
            width: "100%",
            height: "auto"
        });
        bagImage.src = product.image;

        let description = document.createElement("p");
        description.className = "description";
        description.innerText = product.title;
        Object.assign(description.style, {
            fontSize: "16px",
            marginTop: "5px"
        });

        let priceBox = document.createElement("div");
        priceBox.className = "priceBox";
        priceBox.style.marginTop = "5px";

        let priceSpan = document.createElement("span");
        priceSpan.innerText = `$ ${product.price}`;
        Object.assign(priceSpan.style, {
            fontWeight: "bold",
            color: "#4caf50"
        });

        let addButton = document.createElement("button");
        addButton.innerText = "Add to Basket";
        Object.assign(addButton.style, {
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            padding: "8px 15px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "14px",
            borderRadius: "5px",
            cursor: "pointer"
        });

        productCard.appendChild(newProduct);
        productCard.appendChild(heart);
        heart.appendChild(heartIcon);
        productCard.appendChild(bagImage);
        productCard.appendChild(description);
        priceBox.appendChild(priceSpan);
        productCard.appendChild(priceBox);
        productCard.appendChild(addButton);

        productsContainer.appendChild(productCard);

        heart.addEventListener("click", () => {
            removeFromFavorites(product);
        });
    });
}

function removeFromFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];

    let updatedFavorites = favorites.filter(fav => fav.id !== product.id);

    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));

    renderFavorites();
}

async function createTable() {
    let featuredContainer = document.querySelector(".featured-container");
    let arr = await getDatas(productURL);

    arr.forEach(element => {
        let productCard = document.createElement("div");
        productCard.className = "productCard";
        Object.assign(productCard.style, {
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
            display: "block",
            verticalAlign: "top",
            width: "100%", // Set width to 100% to occupy the full width of the container
            boxSizing: "border-box" // Ensure padding and border are included in the width
        });

        let newProduct = document.createElement("div");
        newProduct.className = "new-product";
        Object.assign(newProduct.style, {
            backgroundColor: "#ff9800",
            color: "white",
            padding: "3px 8px",
            borderRadius: "5px",
            display: "inline-block",
            marginBottom: "5px"
        });
        newProduct.innerText = "New";

        let heart = document.createElement("button");
        heart.className = "heart";
        Object.assign(heart.style, {
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0",
            margin: "0"
        });

        let heartIcon = document.createElement("i");
        heartIcon.className = "fa-regular fa-heart";

        let bagImage = document.createElement("img");
        bagImage.className = "bag";
        Object.assign(bagImage.style, {
            width: "100%",
            height: "auto"
        });
        bagImage.src = element.image;

        let description = document.createElement("p");
        description.className = "description";
        description.innerText = element.title;
        Object.assign(description.style, {
            fontSize: "16px",
            marginTop: "5px"
        });

        let priceBox = document.createElement("div");
        priceBox.className = "priceBox";
        priceBox.style.marginTop = "5px";

        let priceSpan = document.createElement("span");
        priceSpan.innerText = `$ ${element.price}`;
        Object.assign(priceSpan.style, {
            fontWeight: "bold",
            color: "#4caf50"
        });

        let addButton = document.createElement("button");
        addButton.innerText = "Add to Basket";
        Object.assign(addButton.style, {
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            padding: "8px 15px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "14px",
            borderRadius: "5px",
            cursor: "pointer"
        });

        productCard.appendChild(newProduct);
        productCard.appendChild(heart);
        heart.appendChild(heartIcon);
        productCard.appendChild(bagImage);
        productCard.appendChild(description);
        priceBox.appendChild(priceSpan);
        productCard.appendChild(priceBox);
        productCard.appendChild(addButton);

        featuredContainer.appendChild(productCard);

        heart.addEventListener("click", () => {
            addToFavorites(element);
        });
    });
}

function addToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
    favorites.push(product);

    localStorage.setItem(favoritesKey, JSON.stringify(favorites));
}

createTable();
renderFavorites();
