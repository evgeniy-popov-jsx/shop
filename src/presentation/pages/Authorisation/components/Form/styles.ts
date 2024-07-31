import { Input as ANTInput, Form as ANTForm} from 'antd';
import styled from 'styled-components';

const Form = styled(ANTForm)`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 350px;
`;

const Input = styled(ANTInput)`
`;

export const Styled = {
  Form,
  Input,
  Container,
};