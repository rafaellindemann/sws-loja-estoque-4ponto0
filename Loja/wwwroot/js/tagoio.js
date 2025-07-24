const urlProdutividade = "https://admin.tago.io/public/dashboard/62d9ae5c877fe70011b6b3d6/7c0f8285-4696-449f-a237-0d99bc3fa56c"
const urlConsumo = "https://admin.tago.io/public/dashboard/62da7947746d0b0018d138f4/f1db44f9-31a6-42b5-bd2b-7c45e226b660"

document.getElementById("redirectProdutividade").href = urlProdutividade
document.getElementById("linkProdutividade").href = urlProdutividade

document.getElementById("redirectConsumo").href = urlConsumo
document.getElementById("linkConsumo").href = urlConsumo

// ------------------------------------------------------ Idioma ------------------------------------------------------
// Carrega o valor da página
function changeLanguage(lang) {
    location.hash = lang;
    writeExpiresDateCookie("lang", lang, 100)
    location.reload();
}

// Define as traduções
var language = {
br: {
    lang_produtividade: "PRODUTIVIDADE",
    lang_energia: "DADOS DE ENERGIA"
},
es: {
    lang_produtividade: "PRODUCTIVIDAD",
    lang_energia: "DATOS DE ENERGÍA"
},
uk: {
    lang_produtividade: "PRODUCTIVITY",
    lang_energia: "ENERGY DATA"
}
};

// Checa se a hash existe na URL e configura o conteúdo de acordo com a hash
if (getCookie("lang")) {

    document.getElementById("lang_produtividade").innerText = language[getCookie("lang")].lang_produtividade
    document.getElementById("lang_energia").innerText = language[getCookie("lang")].lang_energia

    writeExpiresDateCookie("lang",getCookie("lang"), 100)
}


// -------------------------------------------------------------------------------------------------------------------