const inputNome = document.querySelector("#idNome");
const inputSegNome = document.forms["formulario"]["txtSegNome"].value;
const inputEmail = document.forms["formulario"]["txtEmail"].value;
const inputSenha = document.forms["formulario"]["txtSenha"].value;
const inputConfirmSenha = document.forms["formulario"]["txtConfirmSenha"].value;
const entrada = document.forms["Entrada"];

btnEntrar.addEventListener("")
if(inputEmail.length <= 5){
    alert("O email tem que ter no mínimo 5 caracteres!")
}

if(inputNome.length <= 5){
    alert("O nome tem que ter no mínimo 5 caracteres!")
}

if(inputSegNome.length <= 5){
    alert("O segundo nome tem que ter no mínimo 5 caracteres!")
}

if(inputSenha.length <= 6 || inputSenha >= 8 ){
    alert("A tem que ter no mínimo 5 caracteres e no máximo 8 caracteres!")
}

if(inputConfirmSenha.length <= 5 || inputConfirmSenha >= 8){
    alert("O email tem que ter no mínimo 5 caracteres e no máximo 8 caracters!")
}
