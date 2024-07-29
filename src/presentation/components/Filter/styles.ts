import { Button, Radio } from 'antd';
import styled from 'styled-components';

const Filters = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SaveButton = styled(Button)`
`;

export const Styled = {
  Filters,
  SaveButton,
  Container
};
