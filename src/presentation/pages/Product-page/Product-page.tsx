import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { mock } from 'domain/mock/mock';
import { Styled } from './styles';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const product = mock[0];

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
          <Styled.Img src={product.image} alt={product.title}/>
          <Styled.Badge>{product.price} $</Styled.Badge>
        </Styled.ImgContainer>
        <Styled.DescContainer>
          <Styled.Title>{product.title}</Styled.Title>
          <Styled.Rating>
            <Styled.StarFilled/> 
            {product.rating.rate} | {product.category}
          </Styled.Rating>
          <Styled.SubTitle>About the product:</Styled.SubTitle>
          <Styled.Description>{product.description}</Styled.Description>
          <Button>Buy {product.price} $</Button>
        </Styled.DescContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
