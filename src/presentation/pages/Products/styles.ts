import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UploadButton = styled(Button)`
  width: 200px !important;
  margin: 0 auto;
`;

export const Styled = {
  Container,
  UploadButton,
};
