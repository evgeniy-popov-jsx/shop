import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { BasketList } from 'presentation/components/Basket-list/Basket-list';
import { Styled } from './styles';

export const LayoutPage: React.FC<{ children : React.ReactNode }> = ({ children }) => {
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
            <Badge count={5} >
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
              Фильтров нет
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
              <BasketList />
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
};