import { productURL } from "./baseURL.js";
import {getDatas} from "./request.js"
let featuredContainer=document.querySelector(".featured-container")


async function createTable() {
  let arr = await getDatas(productURL);
  arr.forEach(element => {
     console.log(element)
    let productCard=document.createElement("div");
    let newProduct= document.createElement("div");
    let newProducttext= document.createElement("p");

    let heart= document.createElement("div");
    let heartImg= document.createElement("img");
    let bagImage= document.createElement("img");
    let description= document.createElement("p");
    let priceBox= document.createElement("div");
    let addButton= document.createElement("button");
    let span= document.createElement("span");

    productCard.className = "productCard";
    newProduct.className = "new-product";
    heart.className = "heart";
    bagImage.className = "bag";
    description.className = "description";
    priceBox.className = "priceBox";

    newProducttext.innerText = "New";
    heartImg.src = "./assets/images/icon/heart (2).svg";
    bagImage.src = element.image;
    description.innerText = element.title;
    span.innerText = `$ ${element.price}`;
    addButton.innerText = "Add to basket";

   newProduct.append(newProducttext);
   heart.append(heartImg);
   priceBox.append(span);
   productCard.append(newProduct,heart,bagImage,description,priceBox,addButton)
   featuredContainer.append(productCard)
  })
}
createTable()


