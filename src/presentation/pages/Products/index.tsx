import productsStore from 'application/stores/productsStore';
import { Styled } from './styles';
import { CardList } from './components/CardList';
import { Categories } from './components/Categories';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const Products = observer(() => {

  useEffect(() => {
    productsStore.getProducts();
  }, []);

  return (
    <Styled.Container>
      <Categories />
      <CardList />
    </Styled.Container>
  )
});
