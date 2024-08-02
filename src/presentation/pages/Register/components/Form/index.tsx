
import { Styled } from './styles';

interface FormProps {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
};

export const Form: React.FC<FormProps> = ({ setEmail, setPassword }) => {

  return (
    <Styled.Form name="basic" >
      <Styled.Container>
        <Styled.Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Styled.Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        </Styled.Form.Item>
        <Styled.Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Styled.Input.Password placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        </Styled.Form.Item>
      </Styled.Container>
    </Styled.Form>
  );
};
