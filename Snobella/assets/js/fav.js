// let fav = JSON.parse(localStorage.getItem("fav")) || []
// console.log(fav);
// const favPage = document.querySelector(".favPage");

// createCard()
// function createCard(){
//     // basketPage.innerHTML = ""

//     fav.forEach(element => {

//         // console.log(element);
    
//         const prodCard = document.createElement("div");
//         const prodImage = document.createElement("img");
//         const prodCardTitle = document.createElement("div");
//         const prodTitle = document.createElement("p");
//         const prodPrice = document.createElement("p");
//         const prodQuantity = document.createElement("p");
//         const prodTotalPrice = document.createElement("p");
//         const prodRemove = document.createElement("button");
    
//         prodImage.src = element.image;
//         prodCardTitle.innerText = element.title;
//         prodPrice.innerText = element.price;
//         prodQuantity.innerText = element.count;
//         prodTotalPrice.innerText = element.price * element.count

//         prodImage.className = "prodImage"
    
//         prodCard.append(prodImage,prodCardTitle,prodTitle,prodPrice,prodQuantity,prodTotalPrice);
//         favPage.append(prodCard)
    
               
      

    
//         // prodBasket.setAttribute("data", element.id);
       
//     });
// }