// variável auxiliar para receber o valor dos campos
var output = "";
var input = "";

// em vez de declarar dentro da função , declare fora da função para reaproveitar o código
var textParaCriptografar = document.getElementById("texto");
var textCriptografado = document.getElementById("output-resultado");
// Função para criptografar:
function criptografa() {
  // input recebe o value do campo
  input = textParaCriptografar.value;

  var palavraCriptografada = "";

  for (let x = 0; x < input.length; x++) {
    // console.log(textParaCriptografar[x]);

    if (input[x] === "a") {
      palavraCriptografada += "ai";
    } else if (input[x] === "e") {
      palavraCriptografada += "enter";
    } else if (input[x] === "i") {
      palavraCriptografada += "imes";
    } else if (input[x] === "o") {
      palavraCriptografada += "ober";
    } else if (input[x] === "u") {
      palavraCriptografada += "ufat";
    } else {
      palavraCriptografada += input[x];
    }
    // console.log(palavraCriptografada);
    textCriptografado.innerHTML = palavraCriptografada;
  }
}
function descriptografa() {
  // fiz uma variável auxiliar receber o value
  output = textParaCriptografar.value;

  // reduzi um pouco o código
  var descriptografado = output
    .replaceAll(/ai/g, "a")
    .replaceAll(/enter/g, "e")
    .replaceAll(/imes/g, "i")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ufat/g, "u");
  console.log(descriptografado);

  textCriptografado.innerHTML = descriptografado;
}

/* Função do botao de copiar */
function copiarTexto() {
    let textoCopiado = document.getElementById("output-resultado");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto é: " + textoCopiado.value);
}