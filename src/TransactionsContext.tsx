import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction{
  id:number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext<Transaction[]>([]);

// INTERFACE CHILDREN
interface TransactionProviderProps{
  children: ReactNode;
}


export function TransactionsProvider({children}:TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  return(
  <TransactionsContext.Provider value={transactions}>
    {children}
  </TransactionsContext.Provider>
  );
}