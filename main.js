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

xCancelar.addEventListener("click", function () {
  //quando clicado, altera locar para display none
  locar.style.display = "none";
  cont = 0; //quando clicado cont recebe 0
});

function formsLocar(plano) {
  //prop plano seleciona o plano na dropDownList
  if (cont == 1) {
    //se cont for 1, abre alerta
    alert("Por favor, preencha os campos");
  }

  locar.style.display = "block"; //quando clicado, altera locar para display block

  cont = 1; //quando clicado cont recebe 1

  dropDownList.value = plano;

  valueSelected();
}

function valueSelected() {
  const dropDownListValue = dropDownList.value; //pega valor da dropDownList

  if (dropDownListValue == "pStandard") {
    valorTotal.textContent = "R$ 100,00";
  } else if (dropDownListValue == "pVIP") {
    valorTotal.textContent = "R$ 180,00";
  } else if (dropDownListValue == "pSuper") {
    valorTotal.textContent = "R$ 210,00";
  } else {
    valorTotal.textContent = "R$ 0,00";
  }
}

const indicator = document.querySelector("#indicator");

//pegando a altura do DOM menos a altura da janela
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  //scrollY retorna o a quantidade de pixel já escrolada verticalmente
  const percentage = (window.scrollY / maxHeight) * 100;

  /* A lógica é: a propriedade scrollY calcula quantos pixels já foram scrollados 
  divide pela quantidade máxima que falta 
  e multiplica por 100 para pegar a procentagem*/

  indicator.style.width = `${percentage}%`;
});

// const playlistImg = document.querySelector("#playlistImg");
// const playlistModal = document.querySelector("#playlistModal");

// playlistImg.addEventListener("click", () => {
//   if (playlistModal.className === "hidden") {
//     playlistModal.className = "visible";
//   } else {
//     playlistModal.className = "hidden";
//   }
// });

// const closeModal = document.querySelector("#closeModal");

// closeModal.addEventListener("click", () => {
//   playlistModal.className = "hidden";
// });
