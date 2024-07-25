import { CardItem } from 'presentation/components/Card-item/Card-item.tsx';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Product } from 'domain/model/product';
import { ROUTES } from 'application/routes/routes';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import productsStore from 'application/stores/products-store';
import { useEffect } from 'react';

export const CardList: React.FC = observer(() => {
  const { getProductsAction, products } = productsStore;

  useEffect(()=>{
    getProductsAction()
  },[])

  if (products?.state === 'pending') {
    return <div>Загрузка...</div>
  };
  
  if (products?.state === 'rejected') {
    return <div>Ошибка</div>
  };

  return (
    <Styled.Container>
      <Styled.Products>
        {products?.value.map((item: Product) => {
          return (
            <Link to={`${ROUTES.product}/${item.id}`} key={item.id}>
              {item.rating.rate > 4 
                ? (
                  <Badge.Ribbon text="Bestseller">
                    <CardItem item={item} />
                  </Badge.Ribbon>
                )
                : <CardItem item={item} />
              }
            </Link>
          )
        })}
      </Styled.Products>
      <Styled.UploadButton type="primary">Еще</Styled.UploadButton>
    </Styled.Container>
  );
});
