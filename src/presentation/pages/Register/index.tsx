import { useState } from 'react';
import { Form } from './components/Form';
import { Styled } from './styles';
import { useNavigate } from 'react-router-dom';
import authStore from 'application/stores/authStore';
import { Alert } from 'antd';

export const Register = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await authStore.register(email, password);

    if (success) {
      navigate('/products');
    }
  };
  return (
    <Styled.Container>
      <Styled.Paragraph>Register</Styled.Paragraph>
        <Form setEmail={setEmail} setPassword={setPassword} />
      <Styled.Button 
        onClick={handleSubmit}
        type="primary"
        disabled={password === '' || email === ''}
      >
        Register
      </Styled.Button>
      <Styled.Link to={'/authorisation'} type="link">Sign up</Styled.Link>
      {authStore.error &&  <Alert message="Некорректные данные" type="error" />}
    </Styled.Container>
  );
};