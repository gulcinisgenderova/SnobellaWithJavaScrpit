import { getDatas } from "./request.js";
import { userURL } from "./baseURL.js";

const page = JSON.parse(localStorage.getItem("isLogin"))
if (page) {
  window.location.href = "index.html";
} else {
  const logForm = document.querySelector(".logForm");
  const userName = document.querySelector('.userName')
  const passWord = document.querySelector('.passWord')

  logForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let obj = {
      name: userName.value,
      pass:passWord.value
    }
    let allUsers= await getDatas(userURL)
    let findUser =allUsers.find((elem)=> obj.name && elem.pass== obj.pass)
    if (findUser) {
      
      // localStorage.setItem("isLogin", JSON.stringify(true))
      // window.location.href = "index.html";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "False password or username",
        footer: '<a href="/login.html">Why do I have this issue?</a>'
      });
    }
  });
}
