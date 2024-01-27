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

Abre_Pagina()