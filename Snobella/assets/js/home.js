function addToCart(product) {

  console.log("Product added to cart:", product);

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  cartItems.push(product);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  console.log("Updated Cart Items:", cartItems);
}
axios("https://fakestoreapi.com/products")
  .then((res) => {
    const productsContainer = document.querySelector(".products");

    res.data.forEach((element) => {
      const card = document.createElement('div');
      card.classList.add('product');

      const imageProduct = document.createElement('div');
      imageProduct.classList.add('imageProduct');
      const img = document.createElement('img');
      img.src = element.image;
      img.alt = "Product Image";
      imageProduct.appendChild(img);

      const content = document.createElement('div');
      content.classList.add('content');
      const title = document.createElement('p');
      title.textContent = element.title;
      const price = document.createElement('p');
      price.textContent = `$${element.price}`;
      const span = document.createElement('span');
      span.textContent = 'From $130';
      price.appendChild(span);
      content.appendChild(title);
      content.appendChild(price);

      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.classList.add('basketButton');

      addToCartBtn.addEventListener('click', () => {
        addToCart(element); 
      });

      const iconfav = document.createElement('div');
      iconfav.classList.add('iconfav');
      const newLabel = document.createElement('p');
      newLabel.textContent = 'New';
      const favIcon = document.createElement('img');
      favIcon.src = "/assets/images/icons/favourite.svg";
      favIcon.alt = "Favorite Icon";
      iconfav.appendChild(newLabel);
      iconfav.appendChild(favIcon);

      card.appendChild(imageProduct);
      card.appendChild(content);
      card.appendChild(addToCartBtn);
      card.appendChild(iconfav);

      productsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching products", error);
  });
