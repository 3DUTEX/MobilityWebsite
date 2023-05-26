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

