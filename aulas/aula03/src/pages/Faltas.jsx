import Card from "../components/Card";
import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Dashboard() {
  return (
    <Layout titulo="Minhas Faltas" subtitulo="Histórico de faltas por semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Dashboard;
