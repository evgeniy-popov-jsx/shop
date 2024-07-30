import { Button as ANTBtn } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 350px;
  gap: 10px;
`;

const Button = styled(ANTBtn)`
`;

const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Styled = {
  Container,
  Button,
  Paragraph,
};