const listaImagens = document.querySelector("#listaImagens");
const caixaTexto = document.querySelector("#caixaDeTexto");
const botaoAdicionar = document.querySelector("#botaoAdicionar");

botaoAdicionar.addEventListener("click", function () {
  const linkImagem = caixaTexto.value;
  caixaTexto.value = "";

  listaImagens.appendChild(adicionarImagem(linkImagem));
});

function adicionarImagem(linkImagem) {
  const elementoLi = document.createElement("li");
  const elementoSPAN = document.createElement("img");

  elementoSPAN.setAttribute("src", linkImagem);

  elementoLi.appendChild(elementoSPAN);
  elementoLi.appendChild(adicionaBotaoRemover());
  return elementoLi;
}

function adicionaBotaoRemover() {
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "x";
  botaoRemover.className = "remover";

  botaoRemover.addEventListener("click", function () {
    listaImagens.removeChild(this.parentNode);
  });

  return botaoRemover;
}
