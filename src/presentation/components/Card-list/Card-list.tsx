import { CardItem } from 'presentation/components/Card-item/Card-item.tsx';
import { mock } from 'domain/mock/mock';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Product } from 'domain/model/product';
import { Styled } from './styles';

export const CardList: React.FC = () => {
  return (
    <Styled.Container>
      {mock.map((item: Product) => {
        return (
          <Link to={`/product/${item.id}`} key={item.id}>
            {item.rating.rate > 4 
              ? (
                <Badge.Ribbon text="Bestseller">
                  <CardItem item={item}/>
                </Badge.Ribbon>
              )
              : <CardItem item={item}/>}
          </Link>
        )
      })}
    </Styled.Container>
  );
};
