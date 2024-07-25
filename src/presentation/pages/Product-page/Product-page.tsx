import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basket-store';
import productsStore from 'application/stores/products-store';
import { useEffect } from 'react';

export const ProductPage: React.FC = observer(() => {
  const  { id }  = useParams();
  const navigate = useNavigate();
  const { addBusket } = basketStore;
  const { getProductAction, product } = productsStore;

  useEffect(()=>{
    if (id){
      return getProductAction(id);
    }
  }, []);

  const handleBackClick = () => {
    navigate(-1)
  };

  if (!product) {
    return <Styled.Loader />;
  }

  if (product?.state === 'pending') {
    return <Styled.Loader />;
  };
  
  if (product?.state === 'rejected') {
    return <div>Ошибка</div>
  };

  return (
    <Styled.Container>
      <Button 
        icon={<ArrowLeftOutlined />}
        onClick={handleBackClick} 
      />
      <Styled.Content>
        <Styled.ImgContainer>
          <Styled.Img src={product.value.image} alt={product.value.title}/>
          <Styled.Badge>{product.value.price} $</Styled.Badge>
        </Styled.ImgContainer>
        <Styled.DescContainer>
          <Styled.Title>{product.value.title}</Styled.Title>
          <Styled.Rating>
            <Styled.StarFilled/> 
            {product.value.rating.rate} | {product.value.category}
          </Styled.Rating>
          <Styled.SubTitle>About the product:</Styled.SubTitle>
          <Styled.Description>{product.value.description}</Styled.Description>
          <Button onClick={()=>addBusket(product.value)}>Buy {product.value.price} $</Button>
        </Styled.DescContainer>
      </Styled.Content>
    </Styled.Container>
  );
});
