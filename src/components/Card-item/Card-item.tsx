import { Card, Skeleton } from "antd";
import Meta from 'antd/es/card/Meta';

export const CardItem = () => {
  return (
    <Card 
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" width={100} height={300}/>}
    >
      <Skeleton loading={false} active>
        <Meta
          title="Название товара"
          description="Описание товара"
        />
      </Skeleton>
    </Card>
  );
};