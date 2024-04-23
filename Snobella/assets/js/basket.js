let basket = JSON.parse(localStorage.getItem("basket")) || [];
console.log(basket);
const bagboxes = document.querySelector(".bagboxes")
const orderbag = document.querySelector(".orderbag")

createCard()
function createCard(){
    bagboxes.innerHTML = ""
    basket.forEach(element => {
        console.log(element);
    
    let bagbox= document.createElement("div");
    let imgbag= document.createElement("div");
    let basketBagImg = document.createElement("img");
    let aboutbag = document.createElement("div")
    let hbag = document.createElement("div")
    let hbagText = document.createElement("h2")
    let hbagPrice = document.createElement("h3")
    let spann = document.createElement("span")
    let colorp = document.createElement("p")
    let delivery = document.createElement("p")
    let quality = document.createElement("p")
    let plusandminus = document.createElement("div")
    let minusBottom = document.createElement("button")
    let count = document.createElement("p")
    let plusBottom = document.createElement("button")
    let fav = document.createElement("div")
    let favImg = document.createElement("img")
    let favText = document.createElement("p")
    let remove = document.createElement("div")
    let removeImg = document.createElement("img")
    let rmvText = document.createElement("p")


    bagboxes.className = "bagboxes";
    bagbox.className = "bagbox";
    imgbag.className = "imgbag";
    basketBagImg.className = "basketBagImg"
    aboutbag.className = "aboutbag";
    plusandminus.className="plusandminus"
    hbag.className = "hbag"
    delivery.className = "p1";
    quality.className = "p2";
    fav.className = "fav"
    remove.className = "rmv";
    rmvText.className = "rmvText"

    basketBagImg.src = element.image;
    hbagText.innerText = element.title;
    hbagPrice.innerText = element.price;
    spann.innerText = "Size: XS";
    colorp.innerText = "Color: Grey";
    delivery.innerText = "Delivery: 25-32 days";
    quality.innerText = "Quality";
    count.innerText = element.count 
    minusBottom.innerText = "-";
    plusBottom.innerText = "+";
    favImg.src = "./assets/images/icon/heart (2).svg";
    favText.innerText = "Favorite"
    removeImg.src = "./assets/images/icons/trash 1.svg";
    rmvText.innerText = "Remove"
    a=element.price

    imgbag.append(basketBagImg);
    hbag.append(hbagText, hbagPrice);
    spann.append(colorp);
    plusandminus.append(plusBottom,count,minusBottom)
    fav.append(favImg,favText);
    remove.append(removeImg,rmvText)
    aboutbag.append(hbag,spann,delivery,quality,plusandminus,fav,remove);
    bagbox.append(imgbag,aboutbag);
    bagboxes.append(bagbox);

    
    
        plusBottom.addEventListener("click", (e) => {
            // console.log(e.target);
    
           basket.find((elem) => elem.id == e.target.getAttribute("data")).count += 1;
           localStorage.setItem("basket",JSON.stringify(basket));
        //    basketPage.innerHTML = "";
           createCard()
        })

        minusBottom.addEventListener("click", (e) => {
            // console.log(e.target);

            if(basket.find((elem) => elem.id == e.target.getAttribute("data")).count <= 1){
                basket = basket.filter(elem => elem.id != e.target.getAttribute("data"))
                // basketPage.innerHTML=""
                createCard()
            }else{
                basket.find((elem) => elem.id == e.target.getAttribute("data")).count -= 1;
                localStorage.setItem("basket",JSON.stringify(basket));
                // basketPage.innerHTML=""
                createCard()
            }          
        })

        remove.addEventListener("click", function(e){
            bagbox.remove()
        })



    
        // prodBasket.setAttribute("data", element.id);
        plusBottom.setAttribute("data", element.id);
        minusBottom.setAttribute("data", element.id);
    });
    
    let total = document.createElement("div")
    let totalTitle = document.createElement("h4")
    let totalPrice = document.createElement("p")

    
    total.className = "total";

    
    totalTitle.innerText = "Total Price"
    totalPrice.innerText = element.price * element.count

    
    total.append(totalTitle,totalPrice)
    orderbag.append(total)
}