import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :root{
        --color-primary: #27ae60;
        --color-primary-50: #93d7af;
        --color-secundary: #eb5757;
        --color-grey-0: #f5f5f5;
        --color-grey-20: #e0e0e0;
        --color-grey-40: #bdbdbd;
        --color-grey-50: #828282;
        --color-grey-100: #333333;

        --size-1: 26px;
        --size-2: 22px;
        --size-3: 18px;
        --size-4: 16px;
        --size-5: 14px;
        --size-6: 12px;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 8px;
        --radius-2: 5px;

    }

    body{
        font-family: 'Inter', sans-serif;
    }

    main{
        padding: 0px 10px;
    }

    .container{
        max-width: 1375.82px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 32px 0px;
    }

    .listProducts{
        max-width: 940px;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .list-filtered{
        width: 940px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .list-filtered div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .list-filtered h2{
        color: var(--color-grey-100);
        font-size: var(--size-1);
        font-weight: var(--weight-1);
    }

    .list-filtered span{
        color: var(--color-grey-50);
    }

    button{
        cursor: pointer;
    }

    .div-cart-total{
        display: flex;
        flex-direction: column;
    }

    .cart{
        width: 365px;
    }

    .cart-title{
        background-color: var(--color-primary);
        padding: 22px 0px 13px 20px;
        border: transparent;
        border-radius: 5px 5px 0 0;
    }

    .cart-title h2{
        color: white;
        font-size: var(--size-3);
        font-weight: var(--weight-1);
    }

    .empty-cart{
        padding: 50px 10px;
        background-color: var(--color-grey-0);
        border: transparent;
        border-radius: 0 0 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .empty-cart h3{
        color: var(--color-grey-100);
        font-size: var(--size-3);
        font-weight: var(--weight-1);
    }

    .empty-cart span{
        color: var(--color-grey-50);
        font-size: var(--size-5);
        font-weight: var(--weight-4);
    }

    .listCart{
        padding: 20px 10px;
        background-color: var(--color-grey-0);
        display: flex;
        flex-direction: column;
        gap: 23px;
    }

    @media(max-width: 800px){
        .container{
            padding: 15px 6px;
            flex-direction: column;
            gap: 20px;
        }

        .listProducts{
            flex-wrap: nowrap;
            overflow-x: scroll;
        }

        .cart{
            width: 100%;
        }

        .list-filtered{
            width: 100%;
        }

        .list-filtered div{
            width: 100%;
            flex-direction: column;
            gap: 15px;
        }
    }

    @media(min-width: 800px){
        .listProducts{
            flex-wrap: wrap;
        }
    }
   
`