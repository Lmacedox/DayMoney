import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import  Modal  from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';



Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen,setisNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionMoldal(){
      setisNewTransactionModalOpen(true)
  }

  function closeOpenNewTransactionMoldal(){
      setisNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionMoldal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeOpenNewTransactionMoldal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

