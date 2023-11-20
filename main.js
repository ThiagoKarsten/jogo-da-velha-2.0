var tabela = ["", "", "", "", "", "", "", "", ""]
var jogador = "X"

function marcar(celula) {
    if(tabela[celula]) return
    tabela[celula] = jogador
    if (jogador == "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
    render()

    /* add cores nas celulas */
    const cell = document.querySelectorAll('td')[celula];

     if (jogador === "X") {
    cell.className = 'red-text';
    }else{
    cell.className = 'green-text';
    }
}

function render() {
    const tds = document.querySelectorAll("td")

    var celula = 0  /* Começa no indice 0 do array */
    while(celula < tabela.length) {  /* O loop para quando o indice chegar no tamanho da tabela */
        tds[celula].innerHTML = tabela[celula]
        celula++ 
    }
}
render()