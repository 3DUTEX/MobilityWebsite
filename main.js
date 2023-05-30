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

let sla = document.querySelector("#btn")
let locar = document.querySelector(".locar")
let X = document.querySelector("#X")

let cont = 0;
sla.addEventListener("click", function(){
    
    if(cont == 1){
        alert("Preencha os campos")   
    };

    locar.style.display = "block";
    
    cont = 1;

})

X.addEventListener("click", function(){
    locar.style.display = "none";
    cont = 0;
})
