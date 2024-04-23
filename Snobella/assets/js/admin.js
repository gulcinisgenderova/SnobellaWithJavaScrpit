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
        let priceTd = document.createElement("td");
        let deleteTd = document.createElement("td");
        let deleteButton = document.createElement("button");
        let editTd = document.createElement("td");
        let editButton = document.createElement("button");

        deleteButton.setAttribute("data", element.id);
        editButton.setAttribute("data", element.id);
        editButton.setAttribute("data-bs-toggle", "modal");
        editButton.setAttribute("data-bs-target", "#exampleModal");

        deleteButton.className = "btn btn-outline-danger";
        editButton.className = "btn btn-outline-warning";

        idTd.innerText = element.id;
        titleTd.innerText = element.title;
        priceTd.innerText = element.price;
        deleteButton.innerText = "Delete";
        editButton.innerText = "Edit";

        deleteTd.append(deleteButton)
        editTd.append(editButton)


        tr.append(idTd, titleTd, priceTd, deleteTd, editTd)
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
           <input class="elemPrice" type="text" value=${element.price} />`
        })
    })
}
createTable()

saveButton.addEventListener("click", async () => {
    console.log("first")
    const elemId = document.querySelector(".elemId")
    const elemTitle = document.querySelector(".elemTitle")
    const elemPrice = document.querySelector(".elemPrice")

    let obj = await getDatasById(productURL, elemId.innerText);

    obj.title = elemTitle.value;
    obj.price = elemPrice.value;
    await pathById(productURL, elemId.innerText, obj)
    console.log("first")
});

const postForm = document.querySelector(".postForm")
const titleElem = document.querySelector(".titleElem")
const priceElem = document.querySelector(".priceElem")

postForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {
        title: titleElem.value,
        price: priceElem.value,
    };
    postDatas(productURL, obj)

})