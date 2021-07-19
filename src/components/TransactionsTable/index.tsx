import { useContext } from 'react'
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";



export function TransactionsTable(){
    // CONSUMINDO CONTEXTO
    const transactions = useContext(TransactionsContext)

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
            {transactions.map(transaction =>(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                
                <td className={transaction.type}>
                  {/* FORMATANDO VALORES COM INTL */}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>

                <td>{transaction.category}</td>

                <td>
                  {/* FORMATANDO DATAS COM INTL */}
                  {new Intl.DateTimeFormat('pt-BR',).format(
                    new Date(transaction.createdAt)
                  )}
                </td>

              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}