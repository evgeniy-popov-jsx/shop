import { Form } from './Form';
import { Styled } from './styles';

export const Authorisation = () => {
  return (
    <Styled.Container>
      <Styled.Paragraph>Authorisation</Styled.Paragraph>
      <Form />
      <Styled.Button type="primary">Sign up</Styled.Button>
      <Styled.Link to={'/'} type="link">Register</Styled.Link>
    </Styled.Container>
  );
};
