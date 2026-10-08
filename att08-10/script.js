const H2elemento = document.getElementById("subtitulo")

H2elemento.innerText =" oi gilberto! "

const topicosElemento.innerText= <h3>getElementById</h3>


const botaoImprime = document.getElementById("imprime")
botaoImprime.addEventListener("click", () => {
    const entrada = document.getElementById("nome").value
    const mensagemEle = document.getElementById("mensagem")
    mensagemEle.innerText = `bom dia, ${entrada}!`
})