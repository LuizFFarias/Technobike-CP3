const entrada = document.forms["formulario"];
const btnEntrar = document.getElementById("btnSubmit");

btnEntrar.addEventListener("click", function(event) {
    event.preventDefault();

    const inputNome = entrada.elements["#idNome"].value;
    const inputSegNome = entrada.elements["txtSegNome"].value;
    const inputEmail = entrada.elements["txtEmail"].value;
    const inputSenha = entrada.elements["txtPass"].value;
    const inputConfirmSenha = entrada.elements["txtConfirmPass"].value;

    if (inputEmail.length < 5) {
        alert("O e-mail deve ter no mínimo 5 caracteres!");
        return;
    }

    if (inputNome.length < 5) {
        alert("O nome deve ter no mínimo 5 caracteres!");
        return;
    }

    if (inputSegNome.length < 5) {
        alert("O segundo nome deve ter no mínimo 5 caracteres!");
        return;
    }

    if (inputSenha.length < 6 || inputSenha.length > 8) {
        alert("A senha deve ter entre 6 e 8 caracteres!");
        return;
    }

    if (inputSenha !== inputConfirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    entrada.submit();
});

const btnDarkModeToggle = document.getElementById("btnDarkModeToggle");
const body = document.body;

btnDarkModeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});
