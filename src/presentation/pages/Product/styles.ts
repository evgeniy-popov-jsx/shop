import { StarFilled as ANTStarFilled } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  max-width: 400px;
  height: auto;
  border: 18px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

const DescContainer = styled.div`
  flex-grow: 1;
  max-width: 500px;

  @media (max-width: 1000px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  padding: 5px 20px;
  border-radius: 18px;
  color: black;
  background-color: rgb(242, 151, 31);
  font-weight: 600;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  border-bottom: solid gray 1px;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  margin-bottom: 20px;
`;

const Rating = styled.div`
  color: gray;
  font-weight: 600;
  margin-bottom: 30px;
`;

const StarFilled = styled(ANTStarFilled)`
  color: rgb(255, 166, 0);
`;

const Loader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Styled = {
  Container,
  ImgContainer,
  DescContainer,
  Title,
  Content,
  Img,
  Badge,
  SubTitle,
  Description,
  Rating,
  StarFilled,
  Loader
};
