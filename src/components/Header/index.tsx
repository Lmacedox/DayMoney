import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps{
	// FUNÇÃO TIPADA
	onOpenNewTransactionMoldal: () => void;
}
export function Header({ onOpenNewTransactionMoldal }: HeaderProps){

   return(
       <Container>
           <Content>
            <img src={logoImg} alt="dt money" />
            <button 
                type="button"
                onClick={onOpenNewTransactionMoldal}
            >
                Nova Transação
            </button>


           </Content>
        </Container>
   ) 
}