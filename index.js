let logo = document.querySelector("#logo")
let navigation = document.querySelector("#navigation")
let mainContentH1 = document.querySelector("#main-contentH1")

let line = document.querySelector("#line-content")

let navButton = document.querySelector("#nav-button")
let mainButton = document.querySelector("#main-button")

let links = document.querySelectorAll("nav ul li a")

let blurMobile = document.querySelector("#blur-mobile")

window.onload = 
    document.body.onresize = function() {
    if (document.body.clientWidth < 868) {

        logo.innerHTML = "<img src='assets/logo-mobile.svg' alt='rocketseatLogo'>"
        mainContentH1.innerHTML = '<h1 class="text-content">O café que fará seu <br>código decolar para<br>o próximo nível.</h1>'
        line.innerHTML = "<div class='line'></div>"

        mainButton.innerHTML = "<button id='button' class='button'>PEGAR MEU CAFÉ</button>"
        navButton.innerHTML = ""

        blurMobile.innerHTML = "<img src='assets/blur-mobile.png'>"

    } else {

        mainContentH1.innerHTML = ''
        logo.innerHTML = "<img src='assets/logo-desktop.svg' alt='rocketseatLogo'>"
        line.innerHTML = ""

        mainButton.innerHTML = ""
        navButton.innerHTML = "<button id='button' class='button'>PEGAR MEU CAFÉ</button>"

        blurMobile.innerHTML = ""

        //Caso altere o tamanho da tela remove o show para evitar de aparecer de aparecer o buttonClose
        navigation.classList.remove("show")
 
    }
};

mainButton.addEventListener("click", ()=> {
    window.open('https://www.rocketseat.com.br/', '_blank')
})
navButton.addEventListener("click", ()=> {
    window.open('https://www.rocketseat.com.br/', '_blank')
})

let openMenu = function() {
    navigation.classList.add("show")
}

let closeMenu = function() {
    navigation.classList.remove("show")
}

for ( const link of links) {
    link.addEventListener("click",() => {
        navigation.classList.remove("show")
    })
}