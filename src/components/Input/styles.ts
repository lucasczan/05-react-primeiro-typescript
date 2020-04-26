import styled, { css } from 'styled-components';

interface Container{
    isFocused: boolean;
    isFilled: boolean;
}
export const Container = styled.div<Container>`

    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    display:flex;
    align-items: center;

    border : 2px solid #232129;
    color: #666360;

    & + div{
            margin-top:8px;
        }

    ${(props) => props.isFocused && css`
    border-color : #ff9000;
    color: #ff9000;`}

    ${(props) => props.isFilled && css`
    color: #ff9000;`}

    input{
        flex: 1;
        background: transparent;
        color: #F4EDE8;
        border: 0;


        &::placeholder{
            color: #666360;
        }
    }

    svg{
        margin-right: 16px;
    }
`;
