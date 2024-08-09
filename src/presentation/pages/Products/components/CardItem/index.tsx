import { Skeleton } from "antd";
import Meta from 'antd/es/card/Meta';
import { Product } from 'domain/model/product';
import { Styled } from './styles';

export const CardItem: React.FC<{ data: Product }> = ({ data }) => {
  const {
    image, 
    title, 
    category, 
    price, 
    rating,
    description
  } = data;

  return (
    <Styled.Card hoverable cover={<Styled.Img alt={title} src={image} />}>
      <Skeleton loading={false} active>
        <Meta 
          title={title} 
          description={category} 
        />
        <Styled.Description>{description}</Styled.Description>
        <Styled.Price>{price} $</Styled.Price>
        <Styled.Rate disabled defaultValue={rating.rate}/>
      </Skeleton>
    </Styled.Card>
  );
};
