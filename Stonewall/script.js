let nome = window.document.getElementById('nome')

let email = window.document.querySelector('#email')

let assunto = window.document.querySelector('#assunto')

nome.style.width = "100%"

function validaNome(){

    if(nome.value.length < 2){
        let txt = document.querySelector('txtNome')

    txt.innerHTML
        alert('NOME INVALIDO!!!')
    }

}