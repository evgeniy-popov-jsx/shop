import { Card as ANTCard, Rate as ANTRate } from 'antd';
import styled from 'styled-components';

const Description = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 140px;
  height: 240px;
  padding: 2px;
  object-position: center;
  object-fit: contain;
`;

const Price = styled.div`
  font-size: 20px;
`;

const Rate = styled(ANTRate)`
  font-size: 20px;
`;

const Card = styled(ANTCard)`
  width: 240px;
  border-color: rgba(154, 154, 154, 0.532);
`;

export const Styled = {
  Card,
  Description,
  Img,
  Price,
  Rate
};