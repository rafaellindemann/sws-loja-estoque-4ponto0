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
        lang_status: "Status do Pedido",
        lang_estoque: "Estoque",
        lang_processo:"Processo",
        lang_montagem:"Montagem",
        lang_expedicao:"Expedição",
        lang_esteira:"Esteira",
        lang_blocoEsteira:"Bloco na Esteira",
        lang_tempoProducao:"Tempo de Produção",
        lang_graficoEstoque:"Desestocando blocos",
        lang_graficoProcesso:"Processando lâminas",
        lang_graficoMontagem:"Montando bloco",
        lang_graficoExpedicao:"Armazenando bloco",
        lang_start:"Início: ",
        lang_finish:"Previsão: ",
        lang_ordem: "Ordem de Produção: ",
        lang_posicao: "Posição ",
        lang_pronta:"Peça pronta! Solicite remoção da peça.",
        lang_voltar:"Voltar ao início",
        lang_cancelar:"Cancelar acompanhamento!",
        lang_telegram:"Acompanhe pelo Telegram ",
    },
    es: {
        lang_status: "Estado del Pedido",
        lang_estoque: "Inventario",
        lang_processo:"Proceso",
        lang_montagem:"Montaje",
        lang_expedicao:"Expedición",
        lang_esteira:"Correa",
        lang_blocoEsteira:"Pieza en la Correa",
        lang_tempoProducao:"Tiempo de Producción",
        lang_graficoEstoque:"Tomando los bloques",
        lang_graficoProcesso:"Procesando las cuchillas",
        lang_graficoMontagem:"Ensamblando el bloque",
        lang_graficoExpedicao:"Almacenando el bloque",
        lang_start:"Comienzo: ",
        lang_finish:"Predicción: ",
        lang_ordem: "Orden de Producción: ",
        lang_posicao: "Posición ",
        lang_pronta:"¡Pieza lista! Solicitar retirada de pieza.",
        lang_voltar:"Regresar al comienzo",
        lang_cancelar:"¡Dejar de seguir!",
        lang_telegram:"Acompañar por Telegram ",
    },
    uk: {
        lang_status: "Order Status",
        lang_estoque: "Inventory",
        lang_processo:"Process",
        lang_montagem:"Assembly",
        lang_expedicao:"Expedition",
        lang_esteira:"Belt",
        lang_blocoEsteira:"Piece on Belt",
        lang_tempoProducao:"Production Time",
        lang_graficoEstoque:"Destocking blocks",
        lang_graficoProcesso:"Processing blades",
        lang_graficoMontagem:"Assembling block",
        lang_graficoExpedicao:"Storing block",
        lang_start:"Start: ",
        lang_finish:"Foreseen: ",
        lang_ordem: "Production Order: ",
        lang_posicao: "Position ",
        lang_pronta:"Piece ready! Request part removal.",
        lang_voltar:"Back to start",
        lang_cancelar:"Unfollow!",
        lang_telegram:"Follow by Telegram ",
    }
};
    
    // Checa se a hash existe na URL e configura o conteúdo de acordo com a hash
    if (getCookie("lang")) {

        document.getElementById("lang_status").innerText = language[getCookie("lang")].lang_status
        document.getElementById("lang_estoque").innerText = language[getCookie("lang")].lang_estoque
        document.getElementById("lang_processo").innerText = language[getCookie("lang")].lang_processo
        document.getElementById("lang_montagem").innerText = language[getCookie("lang")].lang_montagem
        document.getElementById("lang_expedicao").innerText = language[getCookie("lang")].lang_expedicao
        document.getElementById("lang_tempoProducao").innerText = language[getCookie("lang")].lang_tempoProducao
        document.getElementById("startTime").innerText = language[getCookie("lang")].lang_start
        document.getElementById("plannedFinishTime").innerText = language[getCookie("lang")].lang_finish
        document.getElementById("textOp").innerText = language[getCookie("lang")].textOp
        document.getElementById("lang_pronta").innerText = language[getCookie("lang")].lang_pronta
        document.getElementById("lang_voltar").value = language[getCookie("lang")].lang_voltar
        document.getElementById("lang_cancelar").value = language[getCookie("lang")].lang_cancelar

        var telegram = document.createElement('i')
        telegram.classList = ('fa fa-telegram fa-2')
        document.getElementById("lang_telegram").innerText = language[getCookie("lang")].lang_telegram
        document.getElementById("lang_telegram").appendChild(telegram)

        writeExpiresDateCookie("lang",getCookie("lang"), 100)
    }

// -------------------------------------------------------------------------------------------------------------------