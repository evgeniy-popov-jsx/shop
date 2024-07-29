import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import productStore from 'application/stores/productStore';
import basketStore from 'application/stores/basketStore';

export const ProductPage: React.FC = observer(() => {
  const navigate = useNavigate();
  const  { id }  = useParams();
  const { product, isLoading } = productStore;

  useEffect(()=>{
    if (id) {
      productStore.getProduct(id);
    }
  }, []);

  const handleBackClick = () => {
    navigate(-1)
  };

  if (isLoading) { 
    return <Styled.Loader />;
  }
  
  if (!product) { 
    return <Styled.Loader />;
  }

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
          <Button onClick={()=>basketStore.addProduct(product)}>Buy {product.price} $</Button>
        </Styled.DescContainer>
      </Styled.Content>
    </Styled.Container>
  );
});
