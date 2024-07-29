import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ROUTES } from 'application/routes/routes';
import { Badge } from 'antd';
import { CardItem } from 'presentation/components/Card-item/Card-item.tsx';
import { Styled } from './styles';
import productsStore from 'application/stores/productsStore';

export const CardList = observer(() => {
  const {products, isLimitReached, isProductsFetching } = productsStore;

  useEffect(() => {
    productsStore.getProducts();
  }, []);

  if (isProductsFetching && products.length === 0) {
    return <Styled.Loader />;
  }

  return (
    <Styled.Container>
      <Styled.Products>
        {products?.map((item) => {
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
      <Styled.UploadButton
        type="primary"
        icon={`Еще`}
        onClick={productsStore.fetchNext}
        loading={isProductsFetching}
        disabled={isLimitReached}
      />

    </Styled.Container>
  );
});
