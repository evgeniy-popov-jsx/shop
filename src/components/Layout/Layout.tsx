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
    <Layout>
      <Header style={{background: "#c6c6c6", padding: "0px 20px"}}>
        <Button type="primary" icon={<MenuOutlined />} onClick={toggleSider} />
      </Header>
      <Layout>
        <Drawer
          title="Сайдбар"
          placement="left"
          closable={true}
          onClose={toggleSider}
          open={isOpen}
        >
          <Sider style={{ background: "#F0F2F3", padding: '20px 20px' }} width={200}>
            Сайдбар
          </Sider>
        </Drawer>
        <Content style={{ height: "100vh", padding: '20px 25px' }}>
          {children}
        </Content>
      </Layout>
      <Footer style={{background: "#b0b0b0", padding: "20px 20px"}}>Футер</Footer>
    </Layout>
  );
};
