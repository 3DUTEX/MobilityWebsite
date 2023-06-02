function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    const menuIcon = document.querySelector(".icon");

    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open")

        menuIcon.src = "images/menu_white_36dp.svg"
    } else {
        menuIcon.src = "images/close_white_36dp.svg"
        
        menuMobile.classList.add("open")     
    }
}

let btn = document.querySelector("#btn")
let locar = document.querySelector(".locar")
let xCancelar = document.querySelector("#X")

xCancelar.addEventListener("click", function(){
    locar.style.display = "none";
    cont = 0;
})

let cont = 0;
function formsLocar () {
    if(cont == 1){
        alert("Por favor, preencha os campos")   
    };

    locar.style.display = "block";
    
    cont = 1;
}

let dropDownList = document.querySelector("#planoEscolhido")
let valorTotal = document.querySelector("#valorTotal")

function valueSelected() {

    const dropDownListValue = dropDownList.value;
    
    if(dropDownListValue == "pStandard"){
        valorTotal.textContent = "R$ 100,00"
    } else if (dropDownListValue == "pVIP"){
        valorTotal.textContent = "R$ 180,00"
    } else if(dropDownListValue == "pSuper"){
        valorTotal.textContent = "R$ 210,00"
    } else{
        valorTotal.textContent = "R$ 0,00"
    }
    
}

