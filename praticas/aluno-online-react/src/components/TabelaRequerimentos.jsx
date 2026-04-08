export default function TabelaRequerimentos() {
  return (
    <table className="border-collapse border border-gray-300 rounded w-full text-center mb-6">
      <thead className="bg-gray-300">
        <tr>
          <th>Tipo de requerimento</th>
          <th>Data da solicitação</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Revisão de Menção</td>
          <td>07/01/2023</td>
          <td>Indeferido</td>
        </tr>
        <tr>
          <td>Dispensa de disciplina</td>
          <td>07/02/2023</td>
          <td>Deferido</td>
        </tr>
        <tr>
          <td>Mudança de Turno</td>
          <td>07/03/2023</td>
          <td>Deferido</td>
        </tr>
      </tbody>
    </table>
  );
}
