import "./style.css";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const matricula = document.querySelector("#matricula");
  const matriculaError = document.querySelector("#matriculaError");
  const senha = document.querySelector("#senha");
  const senhaError = document.querySelector("#senhaError");

  matriculaError.textContent = "";
  senhaError.textContent = "";

  if (matricula.value === "") {
    matriculaError.textContent = "Matrícula é obrigatória";
    return;
  }

  if (parseInt(matricula.value) <= 0) {
    matriculaError.textContent = "Matrícula deve ser um número positivo";
    return;
  }

  if (senha.value === "") {
    senhaError.textContent = "Senha é obrigatória";
    return;
  }

  if (senha.value.length < 8) {
    senhaError.textContent = "Senha deve ter pelo menos 8 caracteres";
    return;
  }
});
