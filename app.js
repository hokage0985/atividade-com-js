function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

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
    let categoriaEstaVisivel = true
    let perguntaEstaVisivel = true
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
        perguntaEstaVisivel = !perguntaEstaVisivel
        cartao.classList.toggle('active', perguntaEstaVisivel)
        categoriaEstaVisivel = !categoriaEstaVisivel
        cartao.classList.toggle('active', categoriaEstaVisivel)

    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
