import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { Container,RadioBox,TransactionTypeContainer } from './styles'
import { api } from '../../services/api'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'


interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps ){
  //CONSUMINDO CONTEXTO
  const { createTransaction } = useTransactions();

  // STATE INPS
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  

  async function handleCreateNewTransaction(event: FormEvent){
    // PREVENIR O FUNCIONAMENTO PADRÃO
    event.preventDefault()

    // FUNÇÃO VEIO DO CONTEXTO
    await createTransaction({
      title,
      amount,
      category,
      type
    })
  
  // LIMPANDO INPS
  setTitle('');
  setAmount(0);
  setCategory('');
  setType('deposit')

  // CLOSE MODAL
  onRequestClose();

  }



  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    <button 
      type="button" 
      className="react-modal-close" 
      onClick={onRequestClose}>
      <img 
        src={closeImg} 
        alt="Botao de Fechar o Modal"
      />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar Transação</h2>

    <input
      placeholder="Título"
      value={title}
      onChange={event => setTitle(event.target.value)}
    />

    <input
      type="number"
      placeholder="Valor"
      value={amount}
      onChange={event => setAmount(Number(event.target.value))}
    />

    <TransactionTypeContainer>
      <RadioBox 
        type="button"
        // FUNÇÃO DIRETO NO BTN
        onClick={() => {setType('deposit')}}
        isActive={type === 'deposit'}
        activeColor="green"
      >
      <img src={incomeImg} alt="Imagem de Entrada" />
      <span>Entrada</span>
      </RadioBox>

      <RadioBox 
        type="button"
        // FUNÇÃO DIRETO NO BTN
        onClick={() => {setType('withdraw')}}
        isActive={type === 'withdraw'}
        activeColor="red"
      >
      <img src={outcomeImg} alt="Imagem de Saída" />
      <span>Saída</span>
      </RadioBox>

    </TransactionTypeContainer>

    <input 
      placeholder="Categoria"
      value={category}
      onChange={event => setCategory(event.target.value)}
    />

    <button type="submit">
      Cadastrar 
    </button>

    </Container>
    </Modal>
  )
}