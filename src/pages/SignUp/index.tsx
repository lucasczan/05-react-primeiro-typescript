import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import getValidtionsErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email('Digite um emil válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
    } catch (error) {
      const errors = getValidtionsErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);


  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarver" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" type="text" />
          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

          <Button type="submit">Cadastrar conta</Button>


        </Form>
        <a href="create"><FiArrowLeft />Voltar para logon</a>
      </Content>
    </Container>
  );
};
export default SignUp;
