import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Styled } from './styles';
import { observer } from 'mobx-react-lite';
import basketStore from 'application/stores/basketStore';
import { Basket } from 'presentation/components/Basket';
import { Filter } from 'presentation/components/Filter';

export const LayoutPage: React.FC<{ children : React.ReactNode }> = observer(({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const toggleSider = () => {
    setIsOpen(!isOpen);
  };

  const toggleBasket = () => {
    setIsOpenBasket(!isOpenBasket);
  };

  return (
    <Styled.Container>
      <Styled.Layout>
        <Styled.Header>
          <Styled.Title>Ларёк</Styled.Title>
          <Styled.BtnContainer>
            <Button type="primary" icon={<MenuOutlined />} onClick={toggleSider}>Фильтр</Button>
            <Badge count={basketStore.totalCount} >
              <Button type="primary" icon={<ShoppingCartOutlined />} onClick={toggleBasket} />
            </Badge>
          </Styled.BtnContainer>
        </Styled.Header>
        <Layout>
          <Drawer
            title="Фильтры"
            placement="left"
            closable={true}
            onClose={toggleSider}
            open={isOpen}
          >
            <Styled.Sider width={"100%"}>
              <Filter toggleSider={toggleSider}/>
            </Styled.Sider>
          </Drawer>
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
