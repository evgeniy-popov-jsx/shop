import styled from 'styled-components';

const Basket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50px;
`;
const Items = styled.div`

`;

const Price = styled.div`
  font-weight: 600;
`;

export const Styled = {
  Basket,
  Price,
  Items
};