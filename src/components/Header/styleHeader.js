import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding: 10px 10px;
    background-color: var(--color-grey-0);

    .div-header{
        max-width: 1375.82px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1{
        font-size: var(--size-1);
        color: var(--color-grey-100);
        font-weight: var(--weight-1);
    }

    span{
        font-size: var(--size-5);
        color: var(--color-secundary);
        font-weight: var(--weight-1);
    }


    @media(max-width: 800px){
        padding: 10px 16px;

        .div-header{
            flex-direction: column;
            width: 100%;
            gap: 13.9px;
        }
    }
`