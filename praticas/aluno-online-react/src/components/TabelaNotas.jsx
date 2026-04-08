export default function TabelaNotas() {
  return (
    <table className="border-collapse border border-gray-300 rounded w-full text-center mb-6">
      <thead className="bg-gray-300">
        <tr>
          <th>Disciplina</th>
          <th>A1</th>
          <th>A2</th>
          <th>A3</th>
          <th>Menção</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Matemática</td>
          <td>5.5</td>
          <td>8.0</td>
          <td>9.0</td>
          <td>SR</td>
        </tr>
        <tr>
          <td>Português</td>
          <td>5.5</td>
          <td>8.0</td>
          <td>9.0</td>
          <td>SR</td>
        </tr>
      </tbody>
    </table>
  );
}
