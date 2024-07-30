import { Form } from './Form';
import { Styled } from './styles';

export const Authorisation = () => {
  return (
    <Styled.Container>
      <Styled.Paragraph>Authorisation</Styled.Paragraph>
      <Form />
      <Styled.Button type="primary">Login</Styled.Button>
      <Styled.Button type="primary">Register</Styled.Button>
    </Styled.Container>
  );
};
