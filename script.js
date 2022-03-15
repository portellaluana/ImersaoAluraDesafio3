// imagens default
let listaImagens = [
  "https://cdn-icons-png.flaticon.com/512/4771/4771681.png",
  "https://cdn-icons-png.flaticon.com/512/4771/4771420.png",
  "https://cdn-icons-png.flaticon.com/512/4771/4771549.png",
];

let elementoListaInput = document.getElementById("listaImagens");

// imagens default
for (let i = 0; i < listaImagens.length; i++) {
  let elementoNovoInput = "<img src=" + listaImagens[i] + ">";
  elementoListaInput.innerHTML =
    elementoListaInput.innerHTML + elementoNovoInput;
}

// função para adicionar imagens
function Adicionar() {
  let campoNovoInput = document.getElementById("Input").value;
  if (campoNovoInput.endsWith(".png")) {
    let elementoNovoInput = "<img src=" + campoNovoInput + ">";
    elementoListaInput = document.getElementById("listaImagens");
    elementoListaInput.innerHTML =
      elementoListaInput.innerHTML + elementoNovoInput;
  }

  document.getElementById("Input").value = "";
}
