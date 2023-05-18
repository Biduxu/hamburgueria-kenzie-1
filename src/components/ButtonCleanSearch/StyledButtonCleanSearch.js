import styled from "styled-components";

export const StyledButtonCleanSearch = styled.button`
    padding: 11.5px 20px;
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-1);
    font-size: var(--size-5);
    font-weight: var(--weight-3);
    color: white;

    :hover{
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }
`