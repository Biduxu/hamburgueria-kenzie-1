import styled from "styled-components";

export const StyleInputSearch = styled.div`
    width: 365px;

    form{
        padding: 10px;
        border: 2px solid var(--color-grey-20);
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
    }

    input{
        border: transparent;
        font-size: var(--size-4);
        padding: 10px 0;
        outline: none;
    }

    input::placeholder{
        color: var(--color-grey-20);
    }

    form:hover{
        border: 2px solid var(--color-grey-100);
    }

    @media(max-width: 800px){
        width: 100%;
    }
`