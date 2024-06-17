import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;
export const Styled = {
  Container
};
