import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  gap: 5px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Count = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const Styled = {
  Container,
  BtnContainer,
  Count,
  Paragraph,
};