import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { mock } from 'domain/mock/mock';
import { Styled } from './styles';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1)
  };

  return (
    <Styled.Container>
      <Button 
        icon={<ArrowLeftOutlined />}
        onClick={handleBackClick} 
      />
      <Styled.Content>
        <Styled.ImgContainer>
          <Styled.Img src={mock[0].image} alt={mock[0].title}/>
          <Styled.Badge>{mock[0].price} $</Styled.Badge>
        </Styled.ImgContainer>
        <Styled.DescContainer>
          <Styled.Title>{mock[0].title}</Styled.Title>
          <Styled.Rating>
            <Styled.StarFilled/> 
            {mock[0].rating.rate} | {mock[0].category}
          </Styled.Rating>
          <Styled.SubTitle>About the product:</Styled.SubTitle>
          <Styled.Description>{mock[0].description}</Styled.Description>
          <Button>Buy {mock[0].price} $</Button>
        </Styled.DescContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
