function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".icon");

  if (menuMobile.classList.contains("open")) {
    //se menuMobile estiver aberto, feche
    menuMobile.classList.remove("open");

    menuIcon.src = "images/menu_white_36dp.svg";
  } else {
    //se não, abra
    menuIcon.src = "images/close_white_36dp.svg";

    menuMobile.classList.add("open");
  }
}

let btn = document.querySelector("#btn");
let locar = document.querySelector(".locar");
let xCancelar = document.querySelector("#X");
let cont = 0; //cont começa 0
let dropDownList = document.querySelector("#planoEscolhido");
let valorTotal = document.querySelector("#valorTotal");
let form = document.querySelector("#forms");

xCancelar.addEventListener("click", function () {
  //quando clicado, altera locar para display none
  locar.className = "locar off";
  form.className = "formOff";
  cont = 0; //quando clicado cont recebe 0
});

function formsLocar(plano) {
  //prop plano seleciona o plano na dropDownList
  if (cont == 1) {
    //se cont for 1, abre alerta
    alert("Por favor, preencha os campos");
  }

  // locar.style.display = "block"; //quando clicado, altera locar para display block
  locar.className = "locar on";
  form.className = "formOn";

  cont = 1; //quando clicado cont recebe 1

  dropDownList.value = plano;

  valueSelected();
}

function valueSelected() {
  const dropDownListValue = dropDownList.value; //pega valor da dropDownList

  if (dropDownListValue == "pStandard") {
    valorTotal.textContent = "R$ 100,00";
    valorTotal.style.transition = "all 3s";
  } else if (dropDownListValue == "pVIP") {
    valorTotal.textContent = "R$ 180,00";
  } else if (dropDownListValue == "pSuper") {
    valorTotal.textContent = "R$ 210,00";
  } else {
    valorTotal.textContent = "R$ 0,00";
  }
}
