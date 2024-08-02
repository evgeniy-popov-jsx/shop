import { Form } from './components/Form';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import authStore from 'application/stores/authStore';
import { useState } from 'react';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Authorisation = observer(() => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await authStore.signIn(email, password);

    if (success) {
      navigate('/products');
    }
  };

  return (
    <Styled.Container>
      <Styled.Paragraph>Authorisation</Styled.Paragraph>
      <Form setEmail={setEmail} setPassword={setPassword} />
      <Styled.Button 
        onClick={handleSubmit} 
        type="primary"
        disabled={password === '' || email === ''}
      >
        Sign up
      </Styled.Button>
      <Styled.Link to={'/register'} type="link">Register</Styled.Link>
      {authStore.error &&  <Alert message="Неверный логин или пароль" type="error" />}
    </Styled.Container>
  );
});
