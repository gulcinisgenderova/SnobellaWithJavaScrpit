import { productURL } from "./baseURL.js";
import { deleteBYId, getDatas, getDatasById, putById, pathById, postDatas } from "./request.js";
let tboody = document.querySelector(".tbody")
let modal = document.querySelector(".modal-body")
let saveButton = document.querySelector(".saveButton")


async function createTable() {
    let arr = await getDatas(productURL);
    arr.forEach(element => {
        let idTd = document.createElement("td");
        let tr = document.createElement("tr");
        let titleTd = document.createElement("td");
        let imageTd = document.createElement("td");
        let descTd = document.createElement("td");
        let categoryTd = document.createElement("td");
        let priceTd = document.createElement("td");
        let deleteTd = document.createElement("td");
        let deleteButton = document.createElement("button");
        let editTd = document.createElement("td");
        let editButton = document.createElement("button");
        let detailTd = document.createElement("td");
        let detailButton = document.createElement("button");

        deleteButton.setAttribute("data", element.id);
        editButton.setAttribute("data", element.id);
        editButton.setAttribute("data-bs-toggle", "modal");
        editButton.setAttribute("data-bs-target", "#exampleModal");
        detailButton.setAttribute("data", element.id)

        deleteButton.className = "btn btn-outline-danger";
        editButton.className = "btn btn-outline-warning";
        detailButton.className="btn btn-outline-success"

        idTd.innerText = element.id;
        titleTd.innerText = element.title;
        imageTd.innerText = element.image;
        descTd.innerText = element.description;
        categoryTd.innerText = element.category;
        priceTd.innerText = element.price;
        deleteButton.innerText = "Delete";
        editButton.innerText = "Edit";
        detailButton.innerText= "Detail"

        deleteTd.append(deleteButton)
        editTd.append(editButton)

        detailTd.appendChild(detailButton)

        tr.append(idTd,imageTd, titleTd, priceTd, categoryTd, descTd, deleteTd, editTd, detailTd)
        tboody.append(tr)

        deleteButton.addEventListener("click", (e) => {
            deleteBYId(productURL, e.target.getAttribute("data"))
        })

        editButton.addEventListener("click", async (e) => {
            let element = await getDatasById(productURL, e.target.getAttribute("data"))
            // console.log(element)
            modal.innerHTML = `
             <p class="elemId">ID-${element.id}</p>
           <label for="">Title</label>
           <input class="elemTitle" type="text" value=${element.title} />
           <label for="">Image</label>
           <input class="elemImg" type="url" value=${element.image} />
           <label for="">Price</label>
           <input class="elemPrice" type="text" value=${element.price} />
           <label for="">Description</label>
           <input
           class="elemDesc" type="text" value=${element.description} />
           <label  for="">Category</label>
           <input class="elemCategory" type="text" value=${element.category} />`
        })
    })
}
createTable()

saveButton.addEventListener("click", async () => {

    const elemId = document.querySelector(".elemId")
    const elemTitle = document.querySelector(".elemTitle")
    const elemImg = document.querySelector(".elemImg")
    const elemPrice = document.querySelector(".elemPrice")
    const elemDesc = document.querySelector(".elemDesc")
    const elemCategory = document.querySelector(".elemCategory")

    let obj = await getDatasById(productURL, elemId.innerText);

    obj.title = elemTitle.value;
    obj.image = elemImg.value;
    obj.price = elemPrice.value;
    obj.description = elemDesc.value;
    obj.category = elemCategory.value;

    await pathById(productURL, elemId.innerText, obj)
})

const postForm = document.querySelector(".postForm")
const titleElem = document.querySelector(".titleElem")
const imageElem = document.querySelector(".imageElem")
const priceElem = document.querySelector(".priceElem")
const descElem = document.querySelector(".descElem")
const categoryElem = document.querySelector(".categoryElem")

postForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {
        title: titleElem.value,
        img: imageElem.value,
        price: priceElem.value,
        description: descElem.value,
        category: categoryElem.value,
    };
    console.log(obj.img)
    postDatas(productURL, obj)

})