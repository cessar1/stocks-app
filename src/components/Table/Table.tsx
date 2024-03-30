import { Link } from "react-router-dom";
import { type TransformedStock } from "../../types";
import './Table.css';



interface TableProps {
  currentItems: TransformedStock[];
  isLoading: boolean;
  error: boolean;
}
export function Table({ currentItems, isLoading, error }: TableProps) {
  if (isLoading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="table-container">
      <table >
        <thead>
          <tr>
            <th>Simbolo</th>
            <th>Nombre</th>
            <th>Moneda</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>

          {
            currentItems.map((item, index) => {
              return (
                <tr key={`${index} ${item.symbol}`}>
                  <td>
                    <Link to={`/details/${item.symbol}`}>{item.symbol}</Link>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.currency}</td>
                  <td>{item.type}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>

  )
}
