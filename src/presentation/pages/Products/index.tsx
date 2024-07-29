import productsStore from 'application/stores/productsStore';
import { Styled } from './styles';
import { CardList } from './components/CardList';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const Products = observer(() => {
  const {
    isLimitReached,
    isProductsFetching
  } = productsStore;

  useEffect(() => {
    productsStore.getProducts();
  }, []);

  return (
    <Styled.Container>
      <CardList />
      <Styled.UploadButton
        type="primary"
        icon={<p>Еще</p>}
        onClick={productsStore.fetchNext}
        loading={isProductsFetching}
        disabled={isLimitReached}
      />
    </Styled.Container>
  )
});
