export default function TabelaFaltas() {
  return (
    <table className="border-collapse border border-gray-300 rounded w-full text-center mb-6">
      <thead className="bg-gray-300">
        <tr>
          <th>2025.02</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Disciplina</th>
          <th>Faltas</th>
          <th>Presença</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Matemática</td>
          <td>3</td>
          <td>80%</td>
        </tr>
        <tr>
          <td>Português</td>
          <td>2</td>
          <td>90%</td>
        </tr>
      </tbody>
    </table>
  );
}
