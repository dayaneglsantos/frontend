import Tabela from "../components/Tabela";

import Layout from "./Layout";

function Notas() {
  return (
    <>
      <Layout titulo="Notas" subtitulo="Histórico de notas por semestre">
        <Tabela />
        <Tabela />
        <Tabela />
      </Layout>
    </>
  );
}

export default Notas;
