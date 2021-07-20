import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

// INTERFACE CHILDREN
interface TransactionProviderProps{
  children: ReactNode;
}

// INTERFACE TRANSACTION
interface Transaction{
  id:number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// O OMIT PEGA TODA TIPAGEM DE TRANSACTION MENOS ID E CREATEDAT
// O PICK SELECIONO OS QUE EU QUERO 
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;



// INTERFACE QUE EU FAÇO A TIPAGEM DO MEU CONTEXTO  
interface TransactionsContextData{
  transactions: Transaction[];
  // QUANDO UMA FUNÇÃO É ASYNC PASSO Promise<> NA TIPAGEM
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// EXPORTAÇÃO QUE EU CONSUMO NOS COMPONENTS
const TransactionsContext = createContext<TransactionsContextData>(
  // FORNÇANDO TIPAGEM
  {} as TransactionsContextData
);


export function TransactionsProvider({children}:TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  // FUNÇÃO DE CRIAÇÃO DE TRANSAÇÕES
  async function createTransaction(transactionInput:TransactionInput) {
    // FAZ INSERT NO BD E PEGA RESPOSTA DO INSERT
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data
    // SEMPRE QUE QUERO ADICIONAR UMA NOVA INFORMAÇÕA NO ESTADO DO VETOR 
    setTransactions([
      // EU COPIO TUDO QUE ESTA LÁ
      ...transactions,
      // E DEPOIS INSIRO
      transaction
    ])
  }

  return(
  <TransactionsContext.Provider value={{ transactions,createTransaction }}>
    {children}
  </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context
}