

function creepTexto() {
    let texto = document.querySelector('textarea').value;
    let textoCreep = '';

    // Criptografando o texto onclick
    for (let index = 0; index < texto.length; index++) {
       
        switch(texto[index]) {
            case 'a':
              textoCreep = textoCreep+'ai';
              break;

            case 'e':
              textoCreep = textoCreep+'enter';
              break;

            case 'i':
              textoCreep = textoCreep+'imes';
              break;

            case 'o':
              textoCreep = textoCreep+'ober';
              break;    
            case 'u':
              textoCreep = textoCreep+'ufat';
              break;  

            default:
                textoCreep = textoCreep+texto[index];
          }
    
    }

    exibirTextoNaTela('h4', textoCreep);
    copiarTextocripto();
    exibirTextoNaTela('.pResp', 'Texto copiado, use CTRL+V para colar sua mensagem criptografada. <br><br><a class="pResp" href="">Reiniciar</a>');
}


//descriptografando a mensagem usando replance com busca global = usando 'g' ele pega ao mesmo tempo todas as letras que constarem na palavra

function descreepTexto() {
    let textodescreep = document.querySelector('textarea').value;
    
    textodescreep = textodescreep.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    console.log(textodescreep);

    exibirTextoNaTela('h4', textodescreep);
    copiarTextocripto();
    exibirTextoNaTela('.pResp', 'Texto copiado, use CTRL+V para colar sua mensagem descriptografada onde quiser. <br><br> <a class="pResp" href="">Reiniciar</a>'); 
             
  }


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function copiarTextocripto() {
    let descreep = document.getElementById('resposta').innerHTML;
    navigator.clipboard.writeText(descreep);
}

function validarTextoAoDigitar() {
    // Obtém o valor do textarea
    let texto = document.getElementById('areaTexto').value;

    // Expressão regular para verificar se há apenas caracteres de texto
    let regex = /^[a-zA-Z\s]+$/;

    // Testa o texto usando a expressão regular
    if (regex.test(texto)) {
      document.getElementById('alerta').innerText = '';

      document.getElementById('criptografar').disabled = false;  
      document.getElementById('descriptografar').disabled = false;  

    } else {
      document.getElementById('alerta').innerText = 'Texto inválido! Por favor, insira apenas letras.';
      
      document.getElementById('criptografar').disabled = true;  
      document.getElementById('descriptografar').disabled = true;  
    }
  }



//código abaixo não funcionou para criptografar porque analisa parte já alterada da string e modifica o que já foi criptografado.

//     let textoCreep = texto.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
//     console.log(textoCreep);
// }