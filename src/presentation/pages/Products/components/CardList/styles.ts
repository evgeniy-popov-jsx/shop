import { Button, Spin } from 'antd';
import { List as VirtualList} from 'react-virtualized';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Products = styled.div`
 
`;

const UploadButton = styled(Button)`
  width: 200px !important;
  margin: 0 auto;
`;

const Loader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const List = styled(VirtualList)`
  border: 1px solid #e0e0e0;
`;
const Row = styled.div`

`;

export const Styled = {
  Container,
  Products,
  UploadButton,
  Loader,
  List,
  Row
};
