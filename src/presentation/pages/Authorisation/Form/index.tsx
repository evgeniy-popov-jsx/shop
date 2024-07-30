
import { Styled } from './styles';

export const Form = () => {
  return (
    <Styled.Form name="basic" >
      <Styled.Container>
        <Styled.Form.Item
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Styled.Input placeholder='Email' />
        </Styled.Form.Item>
        <Styled.Form.Item
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Styled.Input.Password placeholder='Password' />
        </Styled.Form.Item>
      </Styled.Container>
    </Styled.Form>
  );
};
