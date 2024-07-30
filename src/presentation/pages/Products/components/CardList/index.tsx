import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ROUTES } from 'application/routes/routes';
import { Badge } from 'antd';
import { CardItem } from 'presentation/pages/Products/components/CardItem';
import { Styled } from './styles';
import productsStore from 'application/stores/productsStore';

export const CardList = observer(() => {
  const { 
    products,
    isProductsFetching
  } = productsStore;

  if (isProductsFetching && products.length === 0) {
    return <Styled.Loader />;
  }

  return (
    <Styled.Products>
      {products.map((item) => {
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
  );
});
