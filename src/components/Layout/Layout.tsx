import React, { useState } from 'react';
import { Button, Drawer, Layout } from "antd";
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { MenuOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>

    <Layout>
      <Header style={{background: "#fff", padding: "0px 20px"}}>
        <Button type="primary" icon={<MenuOutlined />} onClick={toggleSider}>Фильтр</Button>
      </Header>
      <Layout>
        <Drawer
          title="Сайдбар"
          placement="left"
          closable={true}
          onClose={toggleSider}
          open={isOpen}
        >
          <Sider style={{ background: "#fff", padding: '20px 20px' }} width={200}>
            Сайдбар
          </Sider>
        </Drawer>
        <Content style={{ background: "#fff", height: "100vh", padding: '20px 25px' }}>
          {children}
        </Content>
      </Layout>
      <Footer style={{background: "#fff", padding: "20px 20px"}}>Футер</Footer>
    </Layout>
    </div>
  );
};
