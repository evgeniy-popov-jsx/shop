import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout } from "antd";
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Typography } from "antd";
import Sider from 'antd/es/layout/Sider';
import { BasketList } from 'components/Basket-list/Basket-list';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const toggleSider = () => {
    setIsOpen(!isOpen);
  };
  const toggleBasket = () => {
    setIsOpenBasket(!isOpenBasket);
  };

  return (
    <div className='container'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{
            display: "flex", 
            flexWrap: "wrap", 
            gap: "10px", 
            alignItems: "center", 
            justifyContent:"space-between", 
            background: "#fff", 
            padding: "0px 20px"
          }}
        >
          <Typography.Title style={{margin: "0"}}>Ларёк</Typography.Title>
          <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
            <Button type="primary" icon={<MenuOutlined />} onClick={toggleSider}>Фильтр</Button>
            <Badge count={5} >
              <Button type="primary" icon={<ShoppingCartOutlined />} onClick={toggleBasket} />
            </Badge>
          </div>
        </Header>
        <Layout>
          <Drawer
            title="Фильтры"
            placement="left"
            closable={true}
            onClose={toggleSider}
            open={isOpen}
          >
            <Sider style={{ background: "#fff", padding: '20px 20px' }} width={200}>
              Фильтров нет
            </Sider>
          </Drawer>
          <Drawer
            title="Корзина"
            placement="right"
            closable={true}
            onClose={toggleBasket}
            open={isOpenBasket}
          >
            <Sider width={"94%"} style={{ background: "#fff", padding: '20px 10px'}}>
              <BasketList />
            </Sider>
          </Drawer>
          <Content style={{ background: "#fff", padding: '20px 25px' }}>
            {children}
          </Content>
        </Layout>
        <Footer style={{background: "#fff", padding: "20px 20px"}}>© Организация по производству и продаже товаров</Footer>
      </Layout>
    </div>
  );
};
