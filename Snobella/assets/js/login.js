// <<<<<<< HEAD
{
    
}
let users = [
    {
      id: 1,
      username: "gurban",
      password: "123",
    },
    {
      id: 2,
      username: "gulchin",
      password: "gulcin12",
    },
    {
        id: 3,
        username: "ali",
        password: "a12",
      },
  ];
  

  const logForm= document.querySelector(".logForm");
  const userName= document.createElement('input')
  const passWord= document.createElement('input')
  const submits= document.createElement('button')

  
  userName.className=(".userName")
  passWord.className=(".passWord")
  submits.className=(".submits")



  userName.placeholder=" Username"
  passWord.placeholder=" Password"
  submits.textContent=" Submit"


  logForm.append(userName,passWord,submits);
//   console.log(submits);

logForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      users.find((elem) => {
        return (
          elem.password == passWord.value && elem.username == userName.value
        );
      })
    ) {
      window.location.href = "index.html";
    } else {
     alert("Username ve passwordunuzu daxil edin!")
    }
  });
// >>>>>>> fe333e220ff18d389cb962885f70cc39c5accb11
