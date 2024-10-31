function criarCartao(pergunta,resposta){
    let conteudo = document.getElementById("conteudo")
    let cartao = document.createElement('aeticle')
    cartao.classList = 'cartao'

    cartao.innerHTML = `
    <div class="cartao--conteudo">
                <div class="cartao--pergunta"><p>Qual o maior animal aquático do mundo?</p></div>
                <div class="cartao--resposta"><p>Baleia-azul.</p></div>
            </div>
            `

    conteudo.appendChild(cartao)
}
criarCartao(1,2)