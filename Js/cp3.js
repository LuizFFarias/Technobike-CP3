const entrada = document.forms["entrada"];
const btnEntrar = document.getElementById("btnSubmit");

btnEntrar.addEventListener("click", function(event) {
    event.preventDefault();

    const inputNome = document.querySelector("#idNome").value;
    const inputSegNome = document.forms["formulario"]["txtSegNome"].value;
    const inputEmail = document.forms["formulario"]["txtEmail"].value;
    const inputSenha = document.forms["formulario"]["txtPass"].value;
    const inputConfirmSenha = document.forms["formulario"]["txtConfirmPass"].value;

if(inputEmail.length <= 5){
    alert("O e-mail tem que ter no mínimo 5 caracteres!")
    return;
}

if(inputNome.length <= 5){
    alert("O nome tem que ter no mínimo 5 caracteres!")
    return;
}
    
if(inputSegNome.length <= 5){
    alert("O segundo nome tem que ter no mínimo 5 caracteres!")
    return;
}

if(inputSenha.length <= 6 || inputSenha >= 8 ){
    alert("A senha tem que ter no mínimo 5 caracteres e no máximo 8 caracteres!")
    return;
}

if(inputConfirmSenha.length <= 5 || inputConfirmSenha >= 8){
    alert("A senha tem que ter no mínimo 5 caracteres e no máximo 8 caracters!")
    return;
}

entrada.submit();
});