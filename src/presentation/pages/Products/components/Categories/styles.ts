import { Button, Radio } from 'antd';
import styled from 'styled-components';

const Categories = styled(Radio.Group)`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const SaveButton = styled(Button)`
`;

export const Styled = {
  Categories,
  SaveButton,
  Container
};
