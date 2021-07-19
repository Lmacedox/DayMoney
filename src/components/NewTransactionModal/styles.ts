import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2{
    color: var(--text-tile);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 0.25rem;
    
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    /* SEMPRE QUE HOUVER UM INPUT ANTES */
    & + input{
      margin-top: 1rem;
    }
  }

  /* TODO INPUT QUE FOR DO TIPO SUBMIT */
  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
  }
`;

// BTN'S DE SAIDA
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

// PROPS
interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E5231D'
}

// COMO PASSAR PROS "<PROPS>""
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    /* SE A PROPRIEDADE ACTIVE FOR TRUE RECEBE COR SE NÃO TRANSPARENTE */
    background: ${(props) =>  props.isActive 
    ?  transparentize(0.7, colors[props.activeColor])
    : 'transparent'};

    /* ALINHA AO CENTRO E NA MESMA LINHA */
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      /* USANDO POLISHED */
      border-color: ${darken(0.1, '#D7D7D7')};
    }

    img{
       width: 20px;
       height: 20px;
    }

    span{
      display: inline-block;
      margin-left: 0.20rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`;