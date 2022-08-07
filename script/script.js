/*
Resumo do desafio:
Troca das vogais por essas strings:
	a = ai
	e = enter
	i = imes
	o = ober
	u = ufat

    Regras:
	aceitar somente letras minúsculas
	impedir caracteres especiais e letras com acentos
	criptografar e decriptografar textos;

	Extra:
	- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.
	 */

    // Função para criptografar:

    function criptografa(){
        var textParaCriptografar = document.getElementById("texto").value;
        var textCriptografado = document.getElementById("output-resultado");
        var palavraCriptografada = "";

        for(let x =0; x < textValue.length; x++) {
            console.log(textParaCriptografar[x]);

        if (textParaCriptografar[x] === "a") {
            palavraCriptografada += "ai"
        } else if (textParaCriptografar[x] === "e") {
            palavraCriptografada += "enter"
        } else if (textParaCriptografar[x] === "i") {
            palavraCriptografada += "imes"
        } else if (textParaCriptografar[x] === "o") {
            palavraCriptografada += "ober"
        } else if (textParaCriptografar[x] === "u") {
            palavraCriptografada += "ufat"
        }
		else { 
            palavraCriptografada += textParaCriptografar[x]
        }
        console.log(palavraCriptografada);
        textCriptografado.value = palavraCriptografada;
        }
    }   

    function descriptografa() {
    
        var textoCriptografado = document.getElementById("output-resultado").value;
        var textDescriptografado = document.getElementById("texto");

    
        var descriptografado = textoCriptografado.replace(/ai/g, 'a')
        descriptografado = descriptografado.replace(/enter/g, 'e')
        descriptografado = descriptografado.replace(/imes/g, 'i')
        descriptografado = descriptografado.replace(/ober/g, 'o')
        descriptografado = descriptografado.replace(/ufat/g, 'u')
    
        textDescriptografado.value = descriptografado;
    
    }

