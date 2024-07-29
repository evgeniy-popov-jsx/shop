import { Button, Spin } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const UploadButton = styled(Button)`
  width: 200px !important;
`;

const Loader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Styled = {
  Container,
  Products,
  UploadButton,
  Loader
};
