
var output = "";
var input = "";
  
/* variaveis para receber os valores */
var textParaCriptografar = document.getElementById("texto");
var textCriptografado = document.getElementById("output-resultado");
// Função para criptografar:
function criptografa() {
  // input recebe o value do campo
  input = textParaCriptografar.value;

  var palavraCriptografada = "";

  for (let x = 0; x < input.length; x++) {
   

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
  
    textCriptografado.innerHTML = palavraCriptografada;
  }
}
/* função descriptografar */
function descriptografa() {
  
  output = textParaCriptografar.value;

  
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
        alert("Texto copiado para a área de transferência.");
}