import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout } from "antd";
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basketStore';
import { Basket } from 'presentation/components/Basket';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const LayoutPage: React.FC<{ children : React.ReactNode }> = observer(({ children }) => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const toggleBasket = () => {
    setIsOpenBasket(!isOpenBasket);
  };

  return (
    <Styled.Container>
      <Styled.Layout>
        <Styled.Header>
          <Styled.Title>Ларёк</Styled.Title>
          <Styled.BtnContainer>
            <Badge count={basketStore.totalCount} >
              <Button 
                type="primary" 
                icon={<ShoppingCartOutlined />} 
                onClick={toggleBasket}
              />
            </Badge>
          </Styled.BtnContainer>
        </Styled.Header>
        <Layout>
          <Drawer
            title="Корзина"
            placement="right"
            closable={true}
            onClose={toggleBasket}
            open={isOpenBasket}
          >
            <Styled.Sider width={"100%"}>
              <Basket />
            </Styled.Sider>
          </Drawer>
          <Styled.Content>
            {children}
          </Styled.Content>
        </Layout>
        <Styled.Footer>© Организация по продаже товаров</Styled.Footer>
      </Styled.Layout>
    </Styled.Container>
  );
});
