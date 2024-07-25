import { CardItem } from 'presentation/components/Card-item/Card-item.tsx';
import { mock } from 'domain/mock/mock';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Product } from 'domain/model/product';
import { ROUTES } from 'application/routes/routes';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import productsStore from 'application/stores/products-store';
import { useEffect } from 'react';

export const CardList: React.FC = observer(() => {
  const { getProductsAction } = productsStore;

  useEffect(()=>{
    getProductsAction()
  },[])

  return (
    <Styled.Container>
      {mock.map((item: Product) => {
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
    </Styled.Container>
  );
});
