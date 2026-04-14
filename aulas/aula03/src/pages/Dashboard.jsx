import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  return (
    <>
      <Layout titulo="Dashboard" subtitulo="Bem-vindo ao portal do aluno">
        <Card titulo="Mural de avisos" />
        <Card titulo="Minhas Disciplinas" />
        <Card titulo="Calendario Academico" />
      </Layout>
    </>
  );
}

export default Dashboard;
