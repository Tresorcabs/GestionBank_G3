
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function SignoutConfirm(){
    
    let choix = confirm("Voulez-vous vraiment vous déconnecter ?")
    if ( choix == false ){
        event.preventDefault();
    }
}

let Popup1 = document.getElementById("op1");
let Popup2 = document.getElementById("op2");
let PopupGenerale = document.getElementsByClassName("operatioPopup");

function startWithdrawPopup(){
    Popup2.classList.toggle("open");
}
function closePopup2(){
    Popup2.classList.remove("open");
}


function startTransfertPopup(){
    Popup1.classList.toggle("open");
}
function closePopup1(){
    Popup1.classList.remove("open");
}
