import React, { useState } from 'react';
import { Badge, Button, Drawer, Layout } from "antd";
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Typography } from "antd";
import Sider from 'antd/es/layout/Sider';
import { BasketList } from 'components/Basket-list/Basket-list';
import styles from './Layout.module.css';

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
    <div className={styles.container}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Typography.Title>Ларёк</Typography.Title>
          <div className={styles.btnContainer}>
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
            <Sider width={"84%"} className={styles.siderFilter}>
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
            <Sider width={"84%"} className={styles.siderBasket}>
              <BasketList />
            </Sider>
          </Drawer>
          <Content className={styles.content}>
            {children}
          </Content>
        </Layout>
        <Footer className={styles.footer}>© Организация по производству и продаже товаров</Footer>
      </Layout>
    </div>
  );
};
