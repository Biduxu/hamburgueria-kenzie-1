import styled from "styled-components";

export const TotalStyle = styled.div`
    width: 100%;
    padding: 14px 10px 20px 10px;
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    gap: 22px;
    border-top: 2px solid var(--color-grey-20);
    border-radius: 0px 0px 5px 5px;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h4{
        font-size: var(--size-5);
        color: var(--color-grey-100);
        font-weight: var(--weight-2);
    }

    strong{
        font-size: var(--size-5);
        color: var(--color-grey-50);
        font-weight: var(--weight-2);
    }

    button{
        padding: 20.5px;
        background-color: var(--color-grey-20);
        border: 2px solid var(--color-grey-20);
        border-radius: var(--radius-1);
        color: var(--color-grey-50);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    button:hover{
        background-color: var(--color-grey-50);
        color: var(--color-grey-20);
    }
`