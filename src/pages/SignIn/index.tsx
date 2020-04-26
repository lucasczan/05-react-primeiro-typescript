import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logo} alt="GoBarver" />

        <form action="">
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input name="password" icon={FiLock} placeholder="senha" type="password" />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha </a>

        </form>
        <a href="create"><FiLogIn /> Criar conta</a>
      </Content>
      <Background />
    </Container>
  </>
);


export default SignIn;
