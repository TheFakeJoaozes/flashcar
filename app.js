function cartao(categoria, pergunta, resposta) {
    var container = document.getElementById("container")
    var cartao = document.createElement("article")
    cartao.className = "cartao"

    cartao.innerHTML = `
             <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
            </div>
    `

    var respostaVisivel = false

    function viraCartao(){
        respostaVisivel = !respostaVisivel
        cartao.classList.toggle("active", respostaVisivel)
    }
    cartao.addEventListener("click", viraCartao)


    container.appendChild(cartao)
}   