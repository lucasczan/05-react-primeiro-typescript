import styled from 'styled-components';
import { shade } from 'polished';
import SignUpBg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display:  flex;
    align-items: stretch;

`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;

    align-items:center;
    width:100%;
    max-width: 700px;

    form{
        margin: 70px 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        button{

        }

        a{
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover{
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }
    > a {
        color: #F4EDE8;
        display: flex;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        align-items: center;

        &:hover{
            color: ${shade(0.2, '#F4EDE8')};
        }
        svg{
            margin-right: 16px;
        }
    }
`;
export const Background = styled.div`
    flex:1;
    background: url(${SignUpBg}) no-repeat center;
    background-size:cover;
`;
