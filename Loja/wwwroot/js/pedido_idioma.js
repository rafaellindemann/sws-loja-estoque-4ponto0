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
        lang_pedido:"Pedido",
        lang_editar:"Editar Pedido",
        lang_gerar:"Gerar Pedido",
        lang_andar:"Andar",
        lang_cores:"Cores das Lâminas",
        lang_padroes:"Padrões das Lâminas",
        lang_preto:"Preto",
        lang_vermelho:"Vermelho",
        lang_azul:"Azul",
        lang_amarelo:"Amarelo",
        lang_verde:"Verde",
        lang_branco:"Branco",
        lang_casa:"Casa",
        lang_barco:"Barco",
        lang_estrela:"Estrela",
        lang_texto:"Texto",
        lang_giro_horario:"<<< Girar horário",
        lang_giro_anti_horario:"Girar anti-horário >>>",
    },
    es: {
        lang_pedido:"El Pedido",
        lang_editar:"Editar Orden",
        lang_gerar:"Generar Orden",
        lang_andar:"Nivel",
        lang_cores:"Colores Laterales",
        lang_padroes:"Patrones Laterales",
        lang_preto:"Negro",
        lang_vermelho:"Rojo",
        lang_azul:"Azul",
        lang_amarelo:"Amarillo",
        lang_verde:"Verde",
        lang_branco:"Blanco",
        lang_casa:"Casa",
        lang_barco:"Barco",
        lang_estrela:"Estrella",
        lang_texto:"Texto",
        lang_giro_horario:"<<< Girar horario",
        lang_giro_anti_horario:"Girar antihorario >>>",
    },
    uk: {
        lang_pedido:"Order",
        lang_editar:"Edit Order",
        lang_gerar:"Generate Order",
        lang_andar:"Level",
        lang_cores:"Side Colors",
        lang_padroes:"Side Patterns",
        lang_preto:"Black",
        lang_vermelho:"Red",
        lang_azul:"Blue",
        lang_amarelo:"Yellow",
        lang_verde:"Green",
        lang_branco:"White",
        lang_casa:"House",
        lang_barco:"Ship",
        lang_estrela:"Star",
        lang_texto:"Text",
        lang_giro_horario:"<<< Rotate clockwise",
        lang_giro_anti_horario:"Rotate counterclockwise >>>",
    }
};
    
    // Checa se a hash existe na URL e configura o conteúdo de acordo com a hash
    if (getCookie("lang")) {

        document.getElementById("lang_pedido").innerText = language[getCookie("lang")].lang_pedido
        document.getElementById("lang_editar").value = language[getCookie("lang")].lang_editar
        document.getElementById("lang_gerar").value = language[getCookie("lang")].lang_gerar
        document.getElementById("lang_giro_horario").value = language[getCookie("lang")].lang_giro_horario
        document.getElementById("lang_giro_anti_horario").value = language[getCookie("lang")].lang_giro_anti_horario

        writeExpiresDateCookie("lang",getCookie("lang"), 100)
    }

// -------------------------------------------------------------------------------------------------------------------