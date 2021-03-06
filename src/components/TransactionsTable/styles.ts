import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    /* POR PADRÃO A TABLE Ñ OCUPA 100% */
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 5rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.20rem;

       /* SE FOR O PRIMEIRO TD */
      &:first-child{
        color: var(--text-title);
      }

      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }

    }
    
  }
`