function Abre_Pagina () {
let botaoInsta = document.getElementById("header-instagram")
let botaoWhats = document.getElementById("header-whatsapp")

botaoInsta.addEventListener("click", function() {
    window.open("https://www.instagram.com/folheadosdosul/", "_blank")
});

botaoWhats.addEventListener("click", function() {
    window.open("http://wa.me/61983139408/", "_blank")
});
}

function Abre_Fecha_Menu () {
    let botaoMenu = document.getElementById("botao-menu")
    let menuOpcoes = document.getElementById("menu")

    botaoMenu.addEventListener("click", function() {
        if (menuOpcoes.style.display == 'block') {
            menuOpcoes.style.display = 'none'
            botaoMenu.src = "/src/imagens/menu.png"
            botaoMenu.style.width = '27px'
       } else {
            menuOpcoes.style.display = 'block'
            botaoMenu.src = "/src/imagens/fechar.png"
            botaoMenu.style.width = '20px'
       }
    })
}

Abre_Fecha_Menu()
Abre_Pagina()