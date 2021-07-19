import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'
import  Modal  from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id:1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionMoldal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeOpenNewTransactionMoldal}
      />
      <GlobalStyle />
    </>
  );
}

