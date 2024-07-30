import { Form } from 'presentation/components/Form';
import { Styled } from './styles';

export const Register = () => {
  return (
    <Styled.Container>
      <Styled.Paragraph>Register</Styled.Paragraph>
        <Form />
      <Styled.Button type="primary">Register</Styled.Button>
      <Styled.Link to={'/authorisation'} type="link">Sign up</Styled.Link>
    </Styled.Container>
  );
};