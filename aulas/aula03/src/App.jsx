import avatar from "./assets/avatar.svg";
import logo from "./assets/learn.svg";

export default function App() {
  return (
    <>
      <aside>
        <header>
          <img src={logo} alt="Logo da aplicação" />
          <h1>Aluno online</h1>
        </header>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>
      <main>
        <header>
          <h1>Olá, aluno</h1>
          <img src={avatar} alt="Avatar do usuário" />
        </header>
        <h2>Bem vindo ao portal do aluno</h2>
        <section>
          <article>
            <h3>Mural de avisos</h3>
            <ul>
              <li>Eleição para representante</li>
              <li></li>
              <li></li>
            </ul>
          </article>
          <article>
            <h3>Calendário acadêmico</h3>
            <ul>
              <li>23/04 - Aplicação P1</li>
            </ul>
          </article>
          <article>
            <h3>Minhas disciplinas</h3>
            <ul>
              <li>Contrução Front-end</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
