import productsStore from 'application/stores/productsStore';
import { Styled } from './styles';
import { CardList } from './components/CardList';
import { Categories } from './components/Categories';
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
      <Categories />
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
