import "./App.css";
import learn from "./assets/learn.svg";

export default function App() {
  return (
    <main>
      <img src={learn} alt="Icone de formatura" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaError"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaError"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}
