import styled from "styled-components";

export const StyledCartProduct = styled.li`
    width: 100%;
    display: flex;

    img{
        background-color: var(--color-grey-20);
        max-width: 80px;
        max-height: 80px;
        border-radius: var(--radius-2);
    }

    .div-cart-description{
        display: flex;
        width: 100%;
        padding: 5px 0 0 10px;
        justify-content: space-between;
    }

    .div-cart-description div{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h4{
        color: var(--color-grey-100);
        font-size: var(--size-5);
        font-weight: var(--weight-1);
    }

    span{
        color: var(--color-grey-50);
        font-size: var(--size-6);
        font-weight: var(--weight-4);
    }

    p{
        color: var(--color-secundary);
        font-size: var(--size-6);
        font-weight: var(--weight-4);
    }

    button{
        background-color: var(--color-grey-0);
        color: var(--color-grey-40);
        width: fit-content;
        height: fit-content;
        border: transparent;
        font-size: var(--size-6);
        font-weight: var(--weight-3);
    }

    button:hover{
        color: var(--color-grey-100);
    }
`