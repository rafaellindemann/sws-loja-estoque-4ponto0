const uri = '/api/requisicoes/';
const ProductionOrders = 'http://localhost:5678/api/productionOrders/';
const version = 'v3.0.1'
let todos = [];
var giro = false;
var intervalID;
var latestProcessId;

// footer com informando a versão
var divs = document.getElementsByClassName('version');
for (let i = 0; i < divs.length; i++) {
    divs[i].getElementsByTagName('span')[0].innerHTML = version;
}

function addItem() {
    document.getElementById("aviso").innerHTML = " ";

    // Pega todos os valores digitados pelo usuário
    const addCodigoTextbox = getCookie("QuantidadeAndares");

    const addBloco1CorTextbox = getCookie("CorBloco1");
    const addBloco1Lamina1Textbox = getCookie("CorBloco1Lamina1");
    const addBloco1Lamina2Textbox = getCookie("CorBloco1Lamina2");
    const addBloco1Lamina3Textbox = getCookie("CorBloco1Lamina3");

    //leitura do textos dos inputs
    var addBloco1Padrao1Textbox;
    var addBloco1Padrao2Textbox;
    var addBloco1Padrao3Textbox;

    if (getCookie("Bloco1Padrao1") == "4") {
        addBloco1Padrao1Textbox = getCookie("Bloco1Texto1");
    } else {
        addBloco1Padrao1Textbox = getCookie("Bloco1Padrao1");
    }
    if (getCookie("Bloco1Padrao2") == "4") {
        addBloco1Padrao2Textbox = getCookie("Bloco1Texto2");
    } else {
        addBloco1Padrao2Textbox = getCookie("Bloco1Padrao2");
    }
    if (getCookie("Bloco1Padrao3") == "4") {
        addBloco1Padrao3Textbox = getCookie("Bloco1Texto3");
    } else {
        addBloco1Padrao3Textbox = getCookie("Bloco1Padrao3");
    }

    const addBloco2CorTextbox = getCookie("CorBloco2");
    const addBloco2Lamina1Textbox = getCookie("CorBloco2Lamina1");
    const addBloco2Lamina2Textbox = getCookie("CorBloco2Lamina2");
    const addBloco2Lamina3Textbox = getCookie("CorBloco2Lamina3");

    //leitura do textos dos inputs
    var addBloco2Padrao1Textbox;
    var addBloco2Padrao2Textbox;
    var addBloco2Padrao3Textbox;

    if (getCookie("Bloco2Padrao1") == "4") {
        addBloco2Padrao1Textbox = getCookie("Bloco2Texto1");
    } else {
        addBloco2Padrao1Textbox = getCookie("Bloco2Padrao1");
    }
    if (getCookie("Bloco2Padrao2") == "4") {
        addBloco2Padrao2Textbox = getCookie("Bloco2Texto2");
    } else {
        addBloco2Padrao2Textbox = getCookie("Bloco2Padrao2");
    }
    if (getCookie("Bloco2Padrao3") == "4") {
        addBloco2Padrao3Textbox = getCookie("Bloco2Texto3");
    } else {
        addBloco2Padrao3Textbox = getCookie("Bloco2Padrao3");
    }

    const addBloco3CorTextbox = getCookie("CorBloco3");
    const addBloco3Lamina1Textbox = getCookie("CorBloco3Lamina1");
    const addBloco3Lamina2Textbox = getCookie("CorBloco3Lamina2");
    const addBloco3Lamina3Textbox = getCookie("CorBloco3Lamina3");

    //leitura do textos dos inputs
    var addBloco3Padrao1Textbox;
    var addBloco3Padrao2Textbox;
    var addBloco3Padrao3Textbox;

    if (getCookie("Bloco3Padrao1") == "4") {
        addBloco3Padrao1Textbox = getCookie("Bloco3Texto1");
    } else {
        addBloco3Padrao1Textbox = getCookie("Bloco3Padrao1");
    }
    if (getCookie("Bloco3Padrao2") == "4") {
        addBloco3Padrao2Textbox = getCookie("Bloco3Texto2");
    } else {
        addBloco3Padrao2Textbox = getCookie("Bloco3Padrao2");
    }
    if (getCookie("Bloco3Padrao3") == "4") {
        addBloco3Padrao3Textbox = getCookie("Bloco3Texto3");
    } else {
        addBloco3Padrao3Textbox = getCookie("Bloco3Padrao3");
    }

    // Cria o objeto para ser enviado pela API
    const item = {
        codigoProduto: parseInt(addCodigoTextbox),
        bloco1: {
            cor: parseInt(addBloco1CorTextbox),
            lamina1: parseInt(addBloco1Lamina1Textbox),
            lamina2: parseInt(addBloco1Lamina2Textbox),
            lamina3: parseInt(addBloco1Lamina3Textbox),
            padrao1: addBloco1Padrao1Textbox,
            padrao2: addBloco1Padrao2Textbox,
            padrao3: addBloco1Padrao3Textbox
        },
        bloco2: {
            cor: parseInt(addBloco2CorTextbox),
            lamina1: parseInt(addBloco2Lamina1Textbox),
            lamina2: parseInt(addBloco2Lamina2Textbox),
            lamina3: parseInt(addBloco2Lamina3Textbox),
            padrao1: addBloco2Padrao1Textbox,
            padrao2: addBloco2Padrao2Textbox,
            padrao3: addBloco2Padrao3Textbox
        },
        bloco3: {
            cor: parseInt(addBloco3CorTextbox),
            lamina1: parseInt(addBloco3Lamina1Textbox),
            lamina2: parseInt(addBloco3Lamina2Textbox),
            lamina3: parseInt(addBloco3Lamina3Textbox),
            padrao1: addBloco3Padrao1Textbox,
            padrao2: addBloco3Padrao2Textbox,
            padrao3: addBloco3Padrao3Textbox
        }
    };

    // Realiza a requisição
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })

        .then(function (response) {
            if (!(response.status == 201 || response.status == 200)) {
                console.log(response.status);
                console.log(response)
                document.getElementById("aviso").style.color = "red";
                document.getElementById("aviso").innerHTML = "Blocos insuficientes no estoque!";
                response.json()
                    .then(data => console.log(data));
                    
            }
            else {
                document.getElementById("aviso").style.color = "green";
                document.getElementById("aviso").innerHTML = "Pedido gerado com sucesso!";
            }

            response.json().then(function (data) {
                // Converte os dados recebidos em JSON
                let obj = JSON.parse(data);
                var str = parseInt(obj[0]["code"].substring(2,));
                writeExpiresDateCookie("NumPedido1", str, 1);
                openWindow(3);
            })

        })
        .catch(function (err) {
            console.log('Fetch error: ' + err);
        });
}

function removeItem() {
    const numeroPedido = getCookie("NumPedido1");

    // Realiza a requisição
    fetch(uri + numeroPedido, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.status == 200) {
                console.log("Removido expedicao");
            }
        })
        .catch(function (err) {
            console.log('Fetch error: ' + err);
        });
}

function verifyStorage() {
    // Pega todos os valores digitados pelo usuário
    const codigoTextbox = parseInt(document.getElementById('add-codigo').value);
    const bloco1CorTextbox = parseInt(document.getElementById('bloco1-cor').value);
    const bloco2CorTextbox = parseInt(document.getElementById('bloco2-cor').value);
    const bloco3CorTextbox = parseInt(document.getElementById('bloco3-cor').value);
    let corBlocos = [bloco1CorTextbox, bloco2CorTextbox, bloco3CorTextbox];

    // Esconde e mostra as os divs dos dados dos blocos
    for (let i = 1; i <= codigoTextbox; i++) {
        document.getElementById("divAndar" + i).style.display = "inline-block";
    }
    for (let i = 3; i > codigoTextbox; i--) {
        document.getElementById("divAndar" + i).style.display = "none";
    }

    // Realiza a requisição
    fetch(uri, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            response.json().then(function (data) {
                // Converte os dados recebidos em JSON
                let obj = JSON.parse(data);

                var totalBlocos = 0;
                // Desabilita todos as opções de cores que não estão disponíveis
                for (let i = 1; i < 4; i++) {
                    totalBlocos += obj['color' + (i)];
                    let resultado = obj['color' + (i)] == 0;
                    document.getElementById("bloco1-cor").options[i].disabled = resultado;
                    document.getElementById("bloco2-cor").options[i].disabled = resultado;
                    document.getElementById("bloco3-cor").options[i].disabled = resultado;

                }

                for (let i = 0; i < 3; i++) {
                    document.getElementById("add-codigo").options[i].disabled = totalBlocos <= i;
                }

                var podeGerar = true;
                for (let i = 0; i < codigoTextbox; i++) {
                    if (obj['color' + corBlocos[i]] > 0 || corBlocos[i] == 0) {
                        obj['color' + corBlocos[i]]--;

                        // Caso algum dos campos estejam sem uma cor selecionada, nao pode gerar
                        if (corBlocos[i] == 0) {
                            podeGerar = false;
                        }

                        // Verifica se é possivel selecionar a mesma cor para outros blocos, caso não, é bloqueado a opção
                        for (let j = 0; j < 3; j++) {
                            if (corBlocos[i] != corBlocos[j]) {
                                document.getElementById("bloco" + (j + 1) + "-cor").options[corBlocos[i]].disabled = obj['color' + corBlocos[i]] == 0;
                            }
                        }

                        // Limpa texto de aviso da tela caso ele estiver com algum texto
                        document.getElementById("aviso").innerHTML = "";
                        document.getElementById("ButtomRevisarPedido").disabled = false;
                    }

                    // Caso haja alguma exceção desabilita o botão de gerar e escreve um aviso
                    else {
                        document.getElementById("aviso").style.color = "ivory";
                        if (document.getElementById("bloco1-cor").value == '' && document.getElementById("bloco2-cor").value == '' && document.getElementById("bloco3-cor").value == '') {
                            document.getElementById("aviso").innerHTML = "";
                        } else {
                            if (getCookie("lang") == 'es') {
                                document.getElementById("aviso").innerHTML = "*No tiene suficientes bloques en stock para generar el pedido.";
                            } else if (getCookie("lang") == 'uk') {
                                document.getElementById("aviso").innerHTML = "*Does not have enough blocks in stock to generate the order.";
                            } else {
                                document.getElementById("aviso").innerHTML = "*Não possui blocos suficientes em estoque para gerar o pedido.";
                            }
                        }
                        podeGerar = false;
                    }
                }
                document.getElementById("ButtomRevisarPedido").disabled = !podeGerar;
                if (!podeGerar) {
                    document.getElementById("ButtomRevisarPedido").style.opacity = "0.3";
                }
                else {
                    document.getElementById("ButtomRevisarPedido").style.opacity = "1";
                }

            })
        })
        .catch(function (err) {
            // document.getElementById("lang_gerar").disabled = true;
            console.log('Fetch error: ' + err);
        });
}

//Chama menu
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Seleciona Cor do Bloco
function selectImage(i) {
    let corBloco1;

    switch (i) {

        case 1:
            corBloco1 = document.getElementById('bloco1-cor').value;
            corBloco1 == "" ? corBloco1 = 0 : null
            document.getElementById("andar1").src = "images/bloco/BlocoCor" + corBloco1 + ".png";

            // verifica se foi selecionada alguma cor no bloco para habilitar lâminas
            if (corBloco1 == 0) {
                document.getElementById("bloco1-lamina1").disabled = true
                document.getElementById("bloco1-lamina2").disabled = true
                document.getElementById("bloco1-lamina3").disabled = true
                document.getElementById("bloco1-lamina1").value = 0
                document.getElementById("bloco1-lamina2").value = 0
                document.getElementById("bloco1-lamina3").value = 0
                document.getElementById("bloco1-lamina2-texto").style.display = 'none'
                document.getElementById("bloco1-lamina2-texto-label").style.display = 'none'
                selectLamina(1, 1)
                selectLamina(1, 2)
                selectLamina(1, 3)
            } else {
                document.getElementById("bloco1-lamina1").disabled = false
                document.getElementById("bloco1-lamina2").disabled = false
                document.getElementById("bloco1-lamina3").disabled = false
            }

            break;

        case 2:
            corBloco1 = document.getElementById('bloco2-cor').value;
            corBloco1 == "" ? corBloco1 = 0 : null
            document.getElementById("andar2").src = "images/bloco/BlocoCor" + corBloco1 + ".png";

            // verifica se foi selecionada alguma cor no bloco para habilitar lâminas
            if (corBloco1 == 0) {
                document.getElementById("bloco2-lamina1").disabled = true
                document.getElementById("bloco2-lamina2").disabled = true
                document.getElementById("bloco2-lamina3").disabled = true
                document.getElementById("bloco2-lamina1").value = 0
                document.getElementById("bloco2-lamina2").value = 0
                document.getElementById("bloco2-lamina3").value = 0
                selectLamina(2, 1)
                selectLamina(2, 2)
                selectLamina(2, 3)
            } else {
                document.getElementById("bloco2-lamina1").disabled = false
                document.getElementById("bloco2-lamina2").disabled = false
                document.getElementById("bloco2-lamina3").disabled = false
            }

            break;

        case 3:
            corBloco1 = document.getElementById('bloco3-cor').value;
            corBloco1 == "" ? corBloco1 = 0 : null
            document.getElementById("andar3").src = "images/bloco/BlocoCor" + corBloco1 + ".png";

            // verifica se foi selecionada alguma cor no bloco para habilitar lâminas
            if (corBloco1 == 0) {
                document.getElementById("bloco3-lamina1").disabled = true
                document.getElementById("bloco3-lamina2").disabled = true
                document.getElementById("bloco3-lamina3").disabled = true
                document.getElementById("bloco3-lamina1").value = 0
                document.getElementById("bloco3-lamina2").value = 0
                document.getElementById("bloco3-lamina3").value = 0
                selectLamina(3, 1)
                selectLamina(3, 2)
                selectLamina(3, 3)
            } else {
                document.getElementById("bloco3-lamina1").disabled = false
                document.getElementById("bloco3-lamina2").disabled = false
                document.getElementById("bloco3-lamina3").disabled = false
            }

            break;

        default:
            document.getElementById("andar3").src = "images/bloco/BlocoCor0.png";
    }

}

//Seleciona Cor da Lâmina
function selectLamina(andar, pos) {
    let cor = document.getElementById("bloco" + andar + "-lamina" + pos).value;
    document.getElementById("pos" + pos + "andar" + andar).src = "images/laminas/lamina" + pos + "-" + cor + ".png";

    // inverte cor do padrão se lamina for preta
    if (pos != 3) {
        if (document.getElementById("bloco" + andar + "-lamina" + pos).value == 5) {
            document.getElementById("padrao" + pos + "andar" + andar).style.filter = "invert(1)"
        } else {
            document.getElementById("padrao" + pos + "andar" + andar).style.filter = "invert(0)"
        }
    }

    if (cor == 0) {
        if (pos != 3) {
            document.getElementById("padrao" + pos + "andar" + andar).src = "images/padroes/padrao0-1.png";
            document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").value = 0;
            document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").disabled = true;
        }
        else {
            document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").value = 0;
            document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").disabled = true;
        }
    }
    else {
        document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").disabled = false;
    }
}

//Seleciona Imagem do Padrão
function selectPadrao(andar, pos) {
    let padrao = document.getElementById("bloco" + andar + "-lamina" + pos + "-padrao").value;
    if (pos != 3) {
        if (padrao == 0) {
            document.getElementById("padrao" + pos + "andar" + andar).src = "images/padroes/padrao0-1.png";
        } else {
            document.getElementById("padrao" + pos + "andar" + andar).src = "images/padroes/padrao" + padrao + "-" + pos + ".png";

            // inverte cor do padrão se lamina for preta
            if (document.getElementById("bloco" + andar + "-lamina" + pos).value == 5) {
                document.getElementById("padrao" + pos + "andar" + andar).style.filter = "invert(1)"
            } else {
                document.getElementById("padrao" + pos + "andar" + andar).style.filter = "invert(0)"
            }

        }
    }

    //alterar visibilidade do label e input texto
    if (padrao == 4) {
        document.getElementById("bloco" + andar + "-lamina" + pos + "-texto").style.display = "block";
        document.getElementById("bloco" + andar + "-lamina" + pos + "-texto-label").style.display = "block";
    } else {
        document.getElementById("bloco" + andar + "-lamina" + pos + "-texto").style.display = "none";
        document.getElementById("bloco" + andar + "-lamina" + pos + "-texto-label").style.display = "none";
    }
}

//Deixa visivel a tampa e blocos na aba pedidos
function visibilyBlocosPedido() {
    var andares = getCookie("QuantidadeAndares");

    //Define a sequencia das imagens
    document.getElementById("divAlturaAndar1").style.zIndex = "5";
    document.getElementById("divAlturaLaminaAndar1Pos1").style.zIndex = "6";
    document.getElementById("divAlturaLaminaAndar1Pos3").style.zIndex = "7";
    document.getElementById("divAlturaLaminaAndar1Pos2").style.zIndex = "8";
    document.getElementById("divAlturaPadraoAndar1Pos1").style.zIndex = "9";
    document.getElementById("divAlturaPadraoAndar1Pos2").style.zIndex = "10";

    document.getElementById("divAlturaAndar2").style.zIndex = "11";
    document.getElementById("divAlturaLaminaAndar2Pos1").style.zIndex = "12";
    document.getElementById("divAlturaLaminaAndar2Pos3").style.zIndex = "13";
    document.getElementById("divAlturaLaminaAndar2Pos2").style.zIndex = "14";
    document.getElementById("divAlturaPadraoAndar2Pos1").style.zIndex = "15";
    document.getElementById("divAlturaPadraoAndar2Pos2").style.zIndex = "16";

    document.getElementById("divAlturaAndar3").style.zIndex = "17";
    document.getElementById("divAlturaLaminaAndar3Pos1").style.zIndex = "18";
    document.getElementById("divAlturaLaminaAndar3Pos3").style.zIndex = "19";
    document.getElementById("divAlturaLaminaAndar3Pos2").style.zIndex = "20";
    document.getElementById("divAlturaPadraoAndar3Pos1").style.zIndex = "21";
    document.getElementById("divAlturaPadraoAndar3Pos2").style.zIndex = "22";

    document.getElementById("divAlturaTampa").style.zIndex = "23";
    document.height

    //Define se precisa colocar a tampa
    if (getCookie("CorBloco1") != 0) {
        document.getElementById("tampa").src = "images/bloco/Tampa.png";
    }
    else {
        document.getElementById("tampa").src = "images/bloco/BlocoCor00.png";
    }



    //Defina a cor do Bloco que deve aparecer
    document.getElementById("andar1Pedido").src = "images/bloco/BlocoCorPedido" + getCookie("CorBloco1") + ".png";
    document.getElementById("andar2Pedido").src = "images/bloco/BlocoCorPedido" + getCookie("CorBloco2") + ".png";
    document.getElementById("andar3Pedido").src = "images/bloco/BlocoCorPedido" + getCookie("CorBloco3") + ".png";

    //Defina a cor das laminas que deve aparecer
    document.getElementById("pos1andar1Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco1Lamina1") + ".png";
    document.getElementById("pos1andar2Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco2Lamina1") + ".png";
    document.getElementById("pos1andar3Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco3Lamina1") + ".png";

    document.getElementById("padrao1andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao1") + "-1.png";
    document.getElementById("padrao2andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao2") + "-2.png";

    document.getElementById("pos2andar1Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco1Lamina2") + ".png";
    document.getElementById("pos2andar2Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco2Lamina2") + ".png";
    document.getElementById("pos2andar3Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco3Lamina2") + ".png";

    document.getElementById("padrao1andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao1") + "-1.png";
    document.getElementById("padrao2andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao2") + "-2.png";

    document.getElementById("pos3andar1Pedido").src = "images/laminas/lamina3-" + getCookie("CorBloco1Lamina3") + ".png";
    document.getElementById("pos3andar2Pedido").src = "images/laminas/lamina3-" + getCookie("CorBloco2Lamina3") + ".png";
    document.getElementById("pos3andar3Pedido").src = "images/laminas/lamina3-" + getCookie("CorBloco3Lamina3") + ".png";

    document.getElementById("padrao1andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao1") + "-1.png";
    document.getElementById("padrao2andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao2") + "-2.png";

    // loop para inverter a cor do padrão se a lâmina for preta
    for (andar = 1; andar <= 3; andar++) {
        for (pos = 1; pos <= 2; pos++) {
            if (getCookie("CorBloco" + andar + "Lamina" + pos) == "5") {
                document.getElementById("padrao" + pos + "andar" + andar + "Pedido").style.filter = "invert(1)"
            } else {
                document.getElementById("padrao" + pos + "andar" + andar + "Pedido").style.filter = "invert(0)"
            }
        }
    }


    var alturaimagem = document.getElementById("andar1Pedido").offsetHeight;
    var fatorMultiplicador = 0.445;

    var altura1 = "0px";
    var altura2 = 1 * fatorMultiplicador * alturaimagem + "px";
    var altura3 = 2 * fatorMultiplicador * alturaimagem + "px";
    var altura4 = 3 * fatorMultiplicador * alturaimagem + "px";

    //Define altura do top que cada imagem ira aparecer na tela Pedido
    switch (andares) {

        case "1":
            document.getElementById("divAlturaTampa").style.top = altura1;

            document.getElementById("divAlturaAndar1").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar1Pos1").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar1Pos2").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar1Pos3").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar1Pos1").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar1Pos2").style.top = altura2;

            document.getElementById("divAlturaAndar2").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar2Pos1").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar2Pos2").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar2Pos3").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar2Pos1").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar2Pos2").style.display = 'none';

            document.getElementById("divAlturaAndar3").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos1").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos2").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos3").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar3Pos1").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar3Pos2").style.display = 'none';

            document.getElementById("rotacionar").style.paddingTop = "450px";

            break;

        case "2":
            document.getElementById("divAlturaTampa").style.top = altura1;

            document.getElementById("divAlturaAndar1").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar1Pos1").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar1Pos2").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar1Pos3").style.top = altura3;
            document.getElementById("divAlturaPadraoAndar1Pos1").style.top = altura3;
            document.getElementById("divAlturaPadraoAndar1Pos2").style.top = altura3;

            document.getElementById("divAlturaAndar2").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar2Pos1").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar2Pos2").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar2Pos3").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar2Pos1").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar2Pos2").style.top = altura2;

            document.getElementById("divAlturaAndar3").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos1").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos2").style.display = 'none';
            document.getElementById("divAlturaLaminaAndar3Pos3").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar3Pos1").style.display = 'none';
            document.getElementById("divAlturaPadraoAndar3Pos2").style.display = 'none';

            document.getElementById("rotacionar").style.paddingTop = "550px";

            break;
        case "3":
            document.getElementById("divAlturaTampa").style.top = altura1;

            document.getElementById("divAlturaAndar1").style.top = altura4;
            document.getElementById("divAlturaLaminaAndar1Pos1").style.top = altura4;
            document.getElementById("divAlturaLaminaAndar1Pos2").style.top = altura4;
            document.getElementById("divAlturaLaminaAndar1Pos3").style.top = altura4;
            document.getElementById("divAlturaPadraoAndar1Pos1").style.top = altura4;
            document.getElementById("divAlturaPadraoAndar1Pos2").style.top = altura4;

            document.getElementById("divAlturaAndar2").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar2Pos1").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar2Pos2").style.top = altura3;
            document.getElementById("divAlturaLaminaAndar2Pos3").style.top = altura3;
            document.getElementById("divAlturaPadraoAndar2Pos1").style.top = altura3;
            document.getElementById("divAlturaPadraoAndar2Pos2").style.top = altura3;

            document.getElementById("divAlturaAndar3").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar3Pos1").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar3Pos2").style.top = altura2;
            document.getElementById("divAlturaLaminaAndar3Pos3").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar3Pos1").style.top = altura2;
            document.getElementById("divAlturaPadraoAndar3Pos2").style.top = altura2;

            document.getElementById("rotacionar").style.paddingTop = "670px";

            break;

        default:
            document.getElementById("divAlturaAndar1").style.top = "0px";
            document.getElementById("divAlturaAndar2").style.top = "0px";
            document.getElementById("divAlturaAndar3").style.top = "0px";
    }

}

function rotacao_horario() {
    
        //realiza o giro das lâminas para visualização

        document.getElementById("pos1andar1Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco1Lamina2") + ".png";
        document.getElementById("pos1andar2Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco2Lamina2") + ".png";
        document.getElementById("pos1andar3Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco3Lamina2") + ".png";

        document.getElementById("padrao1andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao2") + "-1.png";
        document.getElementById("padrao2andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao3") + "-2.png";

        document.getElementById("pos2andar1Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco1Lamina3") + ".png";
        document.getElementById("pos2andar2Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco2Lamina3") + ".png";
        document.getElementById("pos2andar3Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco3Lamina3") + ".png";

        document.getElementById("padrao1andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao2") + "-1.png";
        document.getElementById("padrao2andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao3") + "-2.png";

        document.getElementById("padrao1andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao2") + "-1.png";
        document.getElementById("padrao2andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao3") + "-2.png";

        document.getElementById("lang_giro_horario").style.display = "none"
        document.getElementById("lang_giro_anti_horario").style.display = "block"
        giro = true
}

function rotacao_anti_horario() {

        //realiza o giro das lâminas para visualização

        document.getElementById("pos1andar1Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco1Lamina1") + ".png";
        document.getElementById("pos1andar2Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco2Lamina1") + ".png";
        document.getElementById("pos1andar3Pedido").src = "images/laminas/lamina1-" + getCookie("CorBloco3Lamina1") + ".png";

        document.getElementById("padrao1andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao1") + "-1.png";
        document.getElementById("padrao2andar3Pedido").src = "images/padroes/padrao" + getCookie("Bloco3Padrao2") + "-2.png";

        document.getElementById("pos2andar1Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco1Lamina2") + ".png";
        document.getElementById("pos2andar2Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco2Lamina2") + ".png";
        document.getElementById("pos2andar3Pedido").src = "images/laminas/lamina2-" + getCookie("CorBloco3Lamina2") + ".png";

        document.getElementById("padrao1andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao1") + "-1.png";
        document.getElementById("padrao2andar2Pedido").src = "images/padroes/padrao" + getCookie("Bloco2Padrao2") + "-2.png";

        document.getElementById("padrao1andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao1") + "-1.png";
        document.getElementById("padrao2andar1Pedido").src = "images/padroes/padrao" + getCookie("Bloco1Padrao2") + "-2.png";

        document.getElementById("lang_giro_horario").style.display = "block"
        document.getElementById("lang_giro_anti_horario").style.display = "none"
        giro = false

}

//Função que descide o que deve ser aberto quando inicia o site
function openSite() {
    if (!(getCookie("NumPedido1") == "")) {
        openWindow(3);
    }
    else {
        if (document.cookie == undefined || document.cookie == "") {
            verifyStorage();
        }
        else {
            retrieveValue();
            verifyStorage();
        }
    }
}

//Chama outra tela
function openWindow(tela) {


    switch (tela) {

        case 1:
            window.open('index.html', '_top');
            break;

        case 10:
            stopRefresh();
            // removeItem();
            reset()
            deleteAllCookies();
            window.open('index.html', '_self');
            break;

        case 11:
            stopRefresh()
            pause()
            deleteAllCookies();
            window.open('index.html', '_self');
            break;

        case 2:
            if ((document.getElementById("bloco1-lamina2-padrao").value != 4) || (document.getElementById("bloco1-lamina2-texto").value != '' && document.getElementById("bloco1-lamina2-padrao").value == 4)) {
                setCookie();
                window.open('pedido.html', '_top');
            } else {
                alert("O campo texto está vazio!")
            }
            break;

        case 3:
            window.open('status.html', '_self');
            reset();
            break;

        default:
            window.open('index.html', '_self');
    }


}

//Função Cookie - Para armazenar os valores
function setCookie(tela) {

    writeExpiresDateCookie("Windows=", tela, 1);
    writeExpiresDateCookie("QuantidadeAndares", document.getElementById('add-codigo').value, 1);

    for (var andar = 1; andar < 4; andar++) {
        if (document.getElementById('bloco' + andar + '-cor').value > 0) {
            writeExpiresDateCookie("CorBloco" + andar, document.getElementById('bloco' + andar + '-cor').value, 1);
        } else {
            writeExpiresDateCookie("CorBloco" + andar, '0', 1);
        }

        for (var i = 1; i < 4; i++) {
            writeExpiresDateCookie("CorBloco" + andar + "Lamina" + i, document.getElementById('bloco' + andar + '-lamina' + i).value, 1);

            if (document.getElementById('bloco' + andar + '-lamina' + i).value == 0) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "-----", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 1) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Vermelho", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 2) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Azul", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 3) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Amarelo", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 4) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Verde", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 5) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Preto", 1);
            } else if (document.getElementById('bloco' + andar + '-lamina' + i).value == 6) {
                writeExpiresDateCookie("NomeCorBloco" + andar + "Lamina" + i, "Branco", 1);
            }
        }

        for (var i = 1; i < 4; i++) {
            writeExpiresDateCookie("Bloco" + andar + "Padrao" + i, document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value, 1);

            //cookie com textos dos inputs
            if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 4) {
                writeExpiresDateCookie("Bloco" + andar + "Texto" + i, document.getElementById("bloco" + andar + "-lamina" + i + "-texto").value, 1);
            }

            if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 0) {
                writeExpiresDateCookie("NomeBloco" + andar + "Padrao" + i, "-----", 1);
            } else if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 1) {
                writeExpiresDateCookie("NomeBloco" + andar + "Padrao" + i, "Casa", 1);
            } else if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 2) {
                writeExpiresDateCookie("NomeBloco" + andar + "Padrao" + i, "Barco", 1);
            } else if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 3) {
                writeExpiresDateCookie("NomeBloco" + andar + "Padrao" + i, "Estrela", 1);
            } else if (document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value == 4) {
                writeExpiresDateCookie("NomeBloco" + andar + "Padrao" + i, "Texto", 1);
            }
        }
    }

}

function retrieveValue() {
    document.getElementById("add-codigo").value = getCookie("QuantidadeAndares");

    for (var andar = 1; andar < 4; andar++) {
        document.getElementById("bloco" + andar + "-cor").value = getCookie("CorBloco" + andar);
        for (var i = 1; i < 4; i++) {
            document.getElementById("bloco" + andar + "-lamina" + i).value = getCookie("CorBloco" + andar + "Lamina" + i);
            document.getElementById("bloco" + andar + "-lamina" + i + "-padrao").value = getCookie("Bloco" + andar + "Padrao" + i)
        }
        for (i = 1; i < 4; i++) {
            selectImage(i);
            for (var j = 1; j < 4; j++) {
                selectLamina(i, j);
            }

            for (var j = 1; j < 3; j++) {
                selectPadrao(i, j);
            }
        }
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Delete todos os cookies
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// Inicia verificações de status do pedido
function startRefresh() {
    intervalID = setInterval(statusPedido, 5000);
}

// Para verificações de status do pedido
function stopRefresh() {
    clearInterval(intervalID);
}

// Verifica o status do pedido
function statusPedido() {
    const numeroPedido = getCookie("NumPedido1");

    if (getCookie("NumPedido1") == '') {
        document.getElementById("divVoltaInicio").style.display = "inline-block";
    }

    // Realiza a requisição
    fetch(uri + "status/" + numeroPedido, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if (response.status != 200) {
                console.log(response.statusText);
            }
            response.json().then(function (data) {
                // Converte os dados recebidos em JSON
                let obj = JSON.parse(data);
                var status = obj["status"];
                var startTime = (new Date(obj["startTime"])).toLocaleString();
                var plannedFinishTime = (new Date(obj["plannedFinishTime"])).toLocaleString();
                var componentDetails = obj["componentDetails"];
                var latestStartedProcessId = obj["latestStartedProcessId"];

                // verifica se latestProcessId já tem algum valor
                window.latestProcessId === undefined ? latestProcessId = 0 : null;

                // Compara para atualizar somente se o último processo é maior
                if (latestStartedProcessId > latestProcessId) {
                    latestProcessId = latestStartedProcessId
                }

                if (obj['startTime'] == null) {
                    document.getElementById("containerTime").style.display = "none"
                } else {
                    document.getElementById("containerTime").style.display = "block"
                }
                // check de idioma
                if (getCookie('lang')){
                    document.getElementById("startTime").innerHTML = language[getCookie("lang")].lang_start + startTime;
                    document.getElementById("plannedFinishTime").innerHTML = language[getCookie("lang")].lang_finish + plannedFinishTime;
                } else {
                    document.getElementById("startTime").innerHTML = "Início: " + startTime;
                    document.getElementById("plannedFinishTime").innerHTML = "Previsão: " + plannedFinishTime;
                }
                if (typeof numeroPedido !== 'undefined') {
                    document.getElementById("divOp").style.display = "block"

                    // check de idioma
                    if (getCookie("lang")) {
                        document.getElementById("textOp").innerHTML = language[getCookie("lang")].lang_ordem + numeroPedido                        
                    } else {
                        document.getElementById("textOp").innerHTML = "Ordem de Produção: " + numeroPedido
                    }
                    document.getElementById("telegramLink").href = "https://t.me/smart40_bot/start=" + numeroPedido
                }
                if (status == "Completa") {

                    document.getElementById("divCancelPedido").style.display = "none";
                    document.getElementById("divConfirmaRemocao").style.display = "inline-block";

                    // condição caso peça seja removida da expedição
                    if (obj["position"] == 0) {
                        alert('O bloco da ordem de produção OP' + numeroPedido + ' foi removida da posição ' + getCookie('posicaoExpedicao') + '!')
                        openWindow(10)
                    } else {
                        writeExpiresDateCookie('posicaoExpedicao',obj["position"],1)
                        if (getCookie("lang")) {
                            document.getElementById("num-posicao").value = language[getCookie("lang")].lang_posicao + getCookie('posicaoExpedicao');
                        } else {
                            document.getElementById("num-posicao").value = "Posição " + getCookie('posicaoExpedicao');
                        }
                        statusProcessos(6);
                    }
                }

                else if ((status == "Empenhado") || (status == "Pendente")) {
                    document.getElementById("divConfirmaRemocao").style.display = "none";
                    document.getElementById("divVoltaInicio").style.display = "none";

                    document.getElementById("divCancelPedido").style.display = "inline-block";

                    statusProcessos(7);
                }
                else if (latestProcessId == 1) {
                    document.getElementById("divCancelPedido").style.display = "inline-block";
                    statusProcessos(1);
                }
                else if (latestProcessId == 2) {
                    document.getElementById("divCancelPedido").style.display = "inline-block";
                    statusProcessos(2);
                }
                else if (latestProcessId == 3) {
                    document.getElementById("divCancelPedido").style.display = "inline-block";
                    statusProcessos(3);
                }
                else if (latestProcessId == 4) {
                    document.getElementById("divCancelPedido").style.display = "inline-block";
                    statusProcessos(4);
                }
                else if (status.indexOf("Falha") >= 0) {
                    document.getElementById("divCancelPedido").style.display = "none";
                    document.getElementById("divVoltaInicio").style.display = "inline-block";
                    statusProcessos(8);
                }
                else {
                    document.getElementById("divConfirmaRemocao").style.display = "none";
                    document.getElementById("divVoltaInicio").style.display = "none";
                    document.getElementById("divCancelPedido").style.display = "inline-block";
                    statusProcessos(0);
                }

                // estoque
                if (componentDetails[0].currentProcessId == -1) {
                    document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus aguardando";
                } else if (componentDetails[0].currentProcessId === null && latestProcessId >= 1) {
                    document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus pronto";
                } else if (componentDetails[0].currentProcessId !== null) {
                    document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus andamento";
                } else {
                    document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus";
                }
                // processo
                if (componentDetails[1].currentProcessId == -1) {
                    document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus aguardando";

                } else if (componentDetails[1].currentProcessId === null && latestProcessId >= 2) {
                    document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus pronto";
                } else if (componentDetails[1].currentProcessId !== null) {
                    document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus andamento";
                } else {
                    document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus";
                }
                // montagem
                if (componentDetails[2].currentProcessId == -1) {
                    document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus aguardando";

                } else if (componentDetails[2].currentProcessId === null && latestProcessId >= 3) {
                    document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus pronto";
                } else if (componentDetails[2].currentProcessId !== null) {
                    document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus andamento";
                } else {
                    document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus";
                }
                // expedição
                if (componentDetails[3].currentProcessId == -1) {
                    document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus aguardando";

                } else if (componentDetails[3].currentProcessId === null && latestProcessId >= 4) {
                    document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus pronto";
                } else if (componentDetails[3].currentProcessId !== null) {
                    document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus andamento";
                } else {
                    document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus";
                }
                //transporte
                if (componentDetails[4].currentProcessId !== null) {
                    //check de idioma
                    if (getCookie("lang")) {
                        document.getElementById("nomeStatusEsteira").innerHTML = language[getCookie("lang")].lang_blocoEsteira;
                    } else {
                        document.getElementById("nomeStatusEsteira").innerHTML = "BLOCO NA ESTEIRA";
                    }
                    document.getElementById("nomeStatusEsteira").style.backgroundColor = "rgb(55, 52, 219)";
                } else {
                    // check de idioma
                    if (getCookie("lang")) {
                        document.getElementById("nomeStatusEsteira").innerHTML = language[getCookie("lang")].lang_esteira;
                    } else {
                        document.getElementById("nomeStatusEsteira").innerHTML = "ESTEIRA";
                    }
                    document.getElementById("nomeStatusEsteira").style.backgroundColor = "rgb(121, 121, 121)";
                }
            })
        })
        .catch(function (err) {
            console.log('Fetch error: ' + err);
        });
}

//Atribui a data para expiração do Cookie
function writeExpiresDateCookie(key, value, days) {
    var date = new Date();

    // Default at 2 days.
    days = days || 2;

    // Get unix milisegundoss at current time plus number of days
    date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

    window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return value;
};

if (window.location.toString().includes("index")) {
    if (document.getElementById("add-codigo").value != '1' || document.getElementById("add-codigo").value != '2' || document.getElementById("add-codigo").value != '3') {
        document.getElementById("divAndar2").style.display = 'none'
        document.getElementById("divAndar3").style.display = 'none'
        document.getElementById("add-codigo").value = 1
    }
}

function statusProcessos(processo) {

    switch (processo) {

        case 1:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso passo1";
            if (getCookie('lang')){
                document.getElementById("divBarGraphTotal").innerHTML = language[getCookie("lang")].lang_graficoEstoque
            } else {
                document.getElementById("divBarGraphTotal").innerHTML = "Desestocando blocos";
            }
            break;
        case 2:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso passo3";
            if (getCookie('lang')){
                document.getElementById("divBarGraphTotal").innerHTML = language[getCookie("lang")].lang_graficoProcesso
            } else {
                document.getElementById("divBarGraphTotal").innerHTML = "Processando lâminas";
            }
            break;
        case 3:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso passo5";
            if (getCookie('lang')){
                document.getElementById("divBarGraphTotal").innerHTML = language[getCookie("lang")].lang_graficoMontagem
            } else {
                document.getElementById("divBarGraphTotal").innerHTML = "Montando bloco";
            }
            break;
        case 4:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso passo7";
            if (getCookie('lang')){
                document.getElementById("divBarGraphTotal").innerHTML = language[getCookie("lang")].lang_graficoExpedicao
            } else {
                document.getElementById("divBarGraphTotal").innerHTML = "Armazenando bloco";
            }
            break;
        case 5:
            document.getElementById("nomeStatusEsteira").innerHTML = "BLOCO NA ESTEIRA";
            document.getElementById("nomeStatusEsteira").style.backgroundColor = "red";
            break;
        case 6:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso finalizado";
            document.getElementById("divBarGraphTotal").innerHTML = "Pronto";
            document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus pronto";
            document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus pronto";
            document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus pronto";
            document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus pronto";
            break;
        case 7:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso";
            document.getElementById("divBarGraphTotal").innerHTML = "Pendente";
            document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus";
            break;
        case 8:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso falha";
            document.getElementById("divBarGraphTotal").innerHTML = "Falha";
            document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus falha";
            document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus falha";
            document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus falha";
            document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus falha";
            break;
        default:
            document.getElementById("divBarGraphTotal").classList = "barraProgresso";
            document.getElementById("divBarGraphTotal").textContent = "Em processo";
            document.getElementById("divBarGraphExpedicao").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphMontagem").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphProcesso").classList = "containerVertical responsiveStatus";
            document.getElementById("divBarGraphEstoque").classList = "containerVertical responsiveStatus";
            break;
    }
}

//temporizador tela Status
if (window.location.toString().includes("status")) {

    let horas, minutos, segundos, cron;

    typeof (sessionStorage.getItem("horas")) != 'string' ? horas = 0 : horas = parseInt(sessionStorage.getItem("horas"));
    typeof (sessionStorage.getItem("minutos")) != 'string' ? minutos = 0 : minutos = parseInt(sessionStorage.getItem("minutos"));
    typeof (sessionStorage.getItem("segundos")) != 'string' ? segundos = 0 : segundos = parseInt(sessionStorage.getItem("segundos"));

    if (getCookie("NumPedido1") != '') {
        start();
    }

    function start() {
        pause();
        cron = setInterval(() => { timer(); }, 1000);
    }

    function pause() {
        clearInterval(cron);
    }

    function reset() {
        horas = 0;
        minutos = 0;
        segundos = 0;

        sessionStorage.setItem("horas", horas);
        sessionStorage.setItem("minutos", minutos);
        sessionStorage.setItem("segundos", segundos);

        document.getElementById('tempoProducaoHoras').innerText = '00';
        document.getElementById('tempoProducaoMinutos').innerText = '00';
        document.getElementById('tempoProducaoSegundos').innerText = '00';
    }

    function timer() {
        if ((segundos += 1) == 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos == 60) {
            minutos = 0;
            horas++;
        }

        //salva o tempo para possível refresh de página
        if (document.getElementById("divConfirmaRemocao").style.display != "inline-block") {
            sessionStorage.setItem("horas", horas);
            sessionStorage.setItem("minutos", minutos);
            sessionStorage.setItem("segundos", segundos);
        }

        document.getElementById('tempoProducaoHoras').innerText = returnData(sessionStorage.getItem("horas"));
        document.getElementById('tempoProducaoMinutos').innerText = returnData(sessionStorage.getItem("minutos"));
        document.getElementById('tempoProducaoSegundos').innerText = returnData(sessionStorage.getItem("segundos"));
    }

    function returnData(input) {
        return input >= 10 ? input : `0${input}`
    }
}



