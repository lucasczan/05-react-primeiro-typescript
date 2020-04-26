import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import AuthContext from '../../context/AuthContext';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const auth = useContext(AuthContext);
  console.log(auth);
  const handleSubmit = useCallback(async (data: object) => {
    try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            email: Yup.string().required('E-mail obrigatório').email('Digite um emil válido'),
            password: Yup.string().required('Senha obrigatória'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });
    } catch (error) {
      const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarver" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input name="password" icon={FiLock} placeholder="senha" type="password" />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha </a>

        </Form>
        <a href="create"><FiLogIn /> Criar conta</a>
      </Content>
      <Background />
    </Container>
  );
};


export default SignIn;
