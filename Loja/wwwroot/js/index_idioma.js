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
        lang_personalizacao:"Personalização do pedido",
        lang_selecione:"Selecione um produto",
        lang_simples:"Bloco Simples",
        lang_duplo:"Bloco Duplo",
        lang_triplo:"Bloco Triplo",
        lang_bloco:"Bloco",
        lang_preto:"Preto",
        lang_vermelho:"Vermelho",
        lang_azul:"Azul",
        lang_amarelo:"Amarelo",
        lang_verde:"Verde",
        lang_branco:"Branco",
        lang_esquerda:"Esquerda",
        lang_cor:"Cor",
        lang_padrao: "Modelo",
        lang_casa:"Casa",
        lang_barco:"Barco",
        lang_estrela:"Estrela",
        lang_texto:"Texto",
        lang_frontal:"Frontal",
        lang_direita:"Direita",
        ButtomRevisarPedido:"Revisar Pedido",
    },
    es: {
        lang_personalizacao:"Personalización de Pedidos",
        lang_selecione:"Seleccione un producto",
        lang_simples:"Solo Bloque",
        lang_duplo:"Doble Bloque",
        lang_triplo:"Triple Bloque",
        lang_bloco:"Bloque",
        lang_preto:"Negro",
        lang_vermelho:"Rojo",
        lang_azul:"Azul",
        lang_amarelo:"Amarillo",
        lang_verde:"Verde",
        lang_branco:"Blanco",
        lang_esquerda:"Izquierda",
        lang_cor:"Color",
        lang_padrao: "Modelo",
        lang_casa:"Casa",
        lang_barco:"Barco",
        lang_estrela:"Estrella",
        lang_texto:"Texto",
        lang_frontal:"Frente",
        lang_direita:"Derecha",
        ButtomRevisarPedido:"Ordem de Revisión",
    },
    uk: {
        lang_personalizacao:"Order Customization",
        lang_selecione:"Select a Product",
        lang_simples:"Simple Block",
        lang_duplo:"Double Block",
        lang_triplo:"Triple Block",
        lang_bloco:"Block",
        lang_preto:"Black",
        lang_vermelho:"Red",
        lang_azul:"Blue",
        lang_amarelo:"Yellow",
        lang_verde:"Green",
        lang_branco:"White",
        lang_esquerda:"Left",
        lang_cor:"Color",
        lang_padrao:"Template",
        lang_casa:"House",
        lang_barco:"Ship",
        lang_estrela:"Star",
        lang_texto:"Text",
        lang_frontal:"Front",
        lang_direita:"Right",
        ButtomRevisarPedido:"Review Order",
    }
};
    
    // Checa se a hash existe na URL e configura o conteúdo de acordo com a hash
    if (getCookie("lang")) {

        document.getElementById("lang_personalizacao").innerText = language[getCookie("lang")].lang_personalizacao
        document.getElementById("lang_selecione").innerText = language[getCookie("lang")].lang_selecione
        document.getElementById("lang_simples").innerText = language[getCookie("lang")].lang_simples
        document.getElementById("lang_duplo").innerText = language[getCookie("lang")].lang_duplo
        document.getElementById("lang_triplo").innerText = language[getCookie("lang")].lang_triplo
        document.getElementById("ButtomRevisarPedido").value = language[getCookie("lang")].ButtomRevisarPedido

        for (let x=1; x<=3; x++){

            document.getElementById("lang_bloco_" + x).innerText = language[getCookie("lang")].lang_bloco
            document.getElementById("lang_frontal_" + x).innerText = language[getCookie("lang")].lang_frontal
            document.getElementById("lang_direita_" + x).innerText = language[getCookie("lang")].lang_direita
            document.getElementById("lang_esquerda_" + x).innerText = language[getCookie("lang")].lang_esquerda
            document.getElementById("lang_blocoPreto_" + x).innerText = language[getCookie("lang")].lang_preto
            document.getElementById("lang_blocoVermelho_" + x).innerText = language[getCookie("lang")].lang_vermelho
            document.getElementById("lang_blocoAzul_" + x).innerText = language[getCookie("lang")].lang_azul
            
            for (let y=1; y<=3; y++) {
                document.getElementById("lang_cor_" + x + "_" + y).innerText = language[getCookie("lang")].lang_cor
                document.getElementById("lang_padrao_" + x + "_" + y).innerText = language[getCookie("lang")].lang_padrao
                document.getElementById("lang_laminaVermelho_" + x + "_" + y).innerText = language[getCookie("lang")].lang_vermelho
                document.getElementById("lang_laminaAzul_" + x + "_" + y).innerText = language[getCookie("lang")].lang_azul
                document.getElementById("lang_laminaAmarelo_" + x + "_" + y).innerText = language[getCookie("lang")].lang_amarelo
                document.getElementById("lang_laminaVerde_" + x + "_" + y).innerText = language[getCookie("lang")].lang_verde
                document.getElementById("lang_laminaPreto_" + x + "_" + y).innerText = language[getCookie("lang")].lang_preto
                document.getElementById("lang_laminaBranco_" + x + "_" + y).innerText = language[getCookie("lang")].lang_branco
                document.getElementById("lang_casa_" + x + "_" + y).innerText = language[getCookie("lang")].lang_casa
                document.getElementById("lang_barco_" + x + "_" + y).innerText = language[getCookie("lang")].lang_barco
                document.getElementById("lang_estrela_" + x + "_" + y).innerText = language[getCookie("lang")].lang_estrela
                // document.getElementById("lang_texto_" + x + "_" + y).innerText = language[getCookie("lang")].lang_texto        
            }
        }  
        writeExpiresDateCookie("lang",getCookie("lang"), 100)
    }

// -------------------------------------------------------------------------------------------------------------------