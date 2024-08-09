import { useState } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { observer } from 'mobx-react-lite';
import { Styled } from './styles';
import { CardItem } from 'presentation/pages/Products/components/CardItem';
import productsStore from 'application/stores/productsStore';

const ITEM_HEIGHT = 480;
const ITEM_WIDTH = 280;

const getColumnCount = (windowWidth: number) => {
  if (windowWidth >= 1500) return 5;
  if (windowWidth >= 1200) return 4;
  if (windowWidth >= 890) return 3;
  if (windowWidth >= 620) return 2;
  return 1;                          
};

const Cell = ({ columnIndex, rowIndex, style }: {columnIndex:number, rowIndex: number, style: any}) => {
  const { products } = productsStore;
  const columnCount = getColumnCount(window.innerWidth);
  const index = rowIndex * columnCount + columnIndex;
  const item = products[index];

  return (
    <div style={style}>
      {item ? <CardItem data={item} /> : null}
    </div>
  );
};
export const CardList = observer(() => {
  const { products, isProductsFetching } = productsStore;
  const [columnCount] = useState(getColumnCount(window.innerWidth));

  if (isProductsFetching && products.length === 0) {
    return <Styled.Loader />;
  }

  const rowCount = Math.ceil(products.length / columnCount);

  return (
    <Grid
      columnCount={columnCount}
      columnWidth={ITEM_WIDTH}
      height={window.innerHeight}
      rowCount={rowCount}
      rowHeight={ITEM_HEIGHT}
      width={window.innerWidth}
    >
      {Cell}
    </Grid>
  );
});
