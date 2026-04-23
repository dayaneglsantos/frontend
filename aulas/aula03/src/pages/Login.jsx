import { useState } from "react";
import learn from "../assets/learn.svg";

export default function Login() {
  const [matricula, setMatricula] = useState();
  const [errorMatricula, setErrorMatricula] = useState();
  const [senha, setSenha] = useState();
  const [errorSenha, setErrorSenha] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setErrorMatricula("Matrícula é obrigatória");
    }
    if (!senha) {
      setErrorSenha("Senha é obrigatória");
    }
    console.log(matricula, senha);
  };

  return (
    <>
      <img src={learn} alt="Icone de formatura" />
      <h1>Aluno Online</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="matricula">Matricula</label>
        <input
          type="number"
          id="matricula"
          name="matricula"
          onChange={(e) => {
            setMatricula(e.target.value);
            setErrorMatricula(null);
          }}
          value={matricula}
        />
        <p>{errorMatricula}</p>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          onChange={(e) => {
            setSenha(e.target.value);
            setErrorSenha(null);
          }}
          value={senha}
        />
        <p>{errorSenha}</p>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
