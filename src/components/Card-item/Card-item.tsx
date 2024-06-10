import { Card } from "antd";
import Meta from 'antd/es/card/Meta';

export const CardItem = () => {
  return (
    <Card 
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
     <Meta title="Название товара" description="Описание товара" />
    </Card>
  );
};