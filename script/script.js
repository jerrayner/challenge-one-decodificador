const criptBotao = document.querySelector("#criptografar");
const decriptBotao = document.querySelector("#descriptografar");

function output(text) {
    result.innerHTML = text;
    input.value = "";
    input.focus(); 
}

function criptografa(text) {
    var criptografia = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'};
    var criptografado = text.replace(/[aeiou]/g, m => encrypt[m]);
    output(criptografia);
}

function descriptografa(text) {
    var decript = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'};
    for (var key in decript) {
        if (text.includes(key, 0)) {
            text = text.replace(new RegExp(key, 'g'), decript[key]);
        }
    }
    output(text);
}


function copyToClipboard() {
    var copyText = result.innerHTML;
    navigator.clipboard.writeText(copyText).then(
        function() {
            alert.style.color = "green";
            alert.innerHTML = "Copiado!";
        }
    )
    .catch(
        function() {
            alert.style.color = "red";
            alert.innerHTML = "Infelizmente não foi possivel copiar";
        }
    );
}

encryptButton.addEventListener("click", () => {
    var text = input.value;
    if (text == "") {
        showElements();
    } else {
        hideElements();
        encrypt(text);
    }
})

decryptButton.addEventListener("click", () => {
    var text = input.value;
    if (text == "") {
        showElements();
    } else {
        hideElements();
        decrypt(text);
    }
})

copyButton.addEventListener("click", () => {
    copyToClipboard();
})