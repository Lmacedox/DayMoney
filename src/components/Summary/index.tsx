import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
    return(
     <Container>
       {/* CARD */}
       <div>
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Entradas</p>
           <img src={incomeImg} alt="Entradas" />
         </header>
         <strong>R$1000,00</strong>
       </div>
       {/* CARD */}
       <div>
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Saídas</p>
           <img src={outcomeImg} alt="Saidas" />
         </header>
         <strong>- R$500,00</strong>
       </div>
       {/* CARD */}
       <div className="highlight-backgroud">
         {/* CABEÇALHO DO CARD */}
         <header>
           <p>Total</p> 
           <img src={totalImg} alt="Total" />
         </header>
         <strong>R$500,00</strong>
       </div>
     </Container>
    )
}