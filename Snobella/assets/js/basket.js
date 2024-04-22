document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let cartItemsHTML = '';

    cartItems.forEach((product) => {
        cartItemsHTML += `
            <div class="shoppingbagcards">
                <img class="canta" src="${product.image}" alt="Product Image" />
                <h4>${product.title}</h4>
                <p><span>Size: ${product.size}</span> <span>Color: ${product.color}</span></p>
                <p>Delivery: ${product.delivery}</p>
                <p>Quality</p>
                <input class="shopingsize" type="number" placeholder="2-9" />
                <h3 class="price">${product.price}</h3>
                <div class="shopright2">
                    <img src="./assets/images/icon/favourite.svg" alt="" /> Favorite
                </div>
                <div class="shopright">
                    <img src="./assets/images/icon/trash 1.svg" alt="" /> Remove
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = `
        <div class="item">
            ${cartItemsHTML}
        </div>
    `;
});