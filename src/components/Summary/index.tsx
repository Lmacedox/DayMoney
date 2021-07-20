import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

export function Summary(){
      // CONSUMINDO CONTEXTO
      // {} -> DESESTRUTURAÇÃO => TIRO APENAS O TRANSACTIONS DE DENTRO DO CONTEXTO
      const { transactions } = useTransactions();

      // VALORES TOTAIS
      const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit'){
          acc.deposits += transaction.amount
          acc.total += transaction.amount
        } else {
          acc.withdraws += transaction.amount
          acc.total -= transaction.amount
        }
        return acc
      }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
      })

    return(
     <Container>
       {/* CARD */}
       <div>
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Entradas</p>
           <img src={incomeImg} alt="Entradas" />
         </header>
         <strong>
          {/* FORMATANDO VALORES COM INTL */}
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
           }).format(summary.deposits)}
          </strong>
       </div>
       {/* CARD */}
       <div>
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Saídas</p>
           <img src={outcomeImg} alt="Saidas" />
         </header>
         <strong>-
          {/* FORMATANDO VALORES COM INTL */}
            {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
           }).format(summary.withdraws)}
          </strong>
       </div>
       {/* CARD */}
       <div className="highlight-backgroud">
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Total</p> 
           <img src={totalImg} alt="Total" />
         </header>
         <strong>
          {/* FORMATANDO VALORES COM INTL */}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
           }).format(summary.total)}
          </strong>
       </div>
     </Container>
    )
}