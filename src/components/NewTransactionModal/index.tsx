import Modal from 'react-modal'
import { Container,RadioBox,TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'


interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps ){

  // STATE INPS
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  

  function handlwCreateNewTransaction(event: FormEvent){
    // PREVENIR O FUNCIONAMENTO PADRÃO
    event.preventDefault()
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
    <Container onSubmit={handlwCreateNewTransaction}>
    <h2>Cadastrar Transação</h2>

    <input
      placeholder="Título"
      value={title}
      onChange={event => setTitle(event.target.value)}
    />

    <input
      type="number"
      placeholder="Valor"
      value={value}
      onChange={event => setValue(Number(event.target.value))}
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