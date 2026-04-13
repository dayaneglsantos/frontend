export default function TabelaBoletos() {
  return (
    <table className="border-collapse border border-gray-300 rounded w-full text-center">
      <thead className="bg-gray-300">
        <tr>
          <th>Vencimento</th>
          <th>Valor $</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>07/01/2023</td>
          <td>500,00</td>
          <td>Pago</td>
        </tr>
        <tr>
          <td>07/02/2023</td>
          <td>500,00</td>
          <td>Pago</td>
        </tr>
        <tr>
          <td>07/03/2023</td>
          <td>500,00</td>
          <td>Pago</td>
        </tr>
      </tbody>
    </table>
  );
}
