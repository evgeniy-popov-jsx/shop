import { Layout as ANTLayout, Avatar as ANTAvatar } from 'antd';
import { Link as RLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 540px) {
    padding: 0 8px;
  }
`;

const Layout = styled(ANTLayout)`
  min-height: 100vh;
`;

const Header = styled(ANTLayout.Header)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content:space-between;
  padding: 0px 20px;
  background: #fff;
`;

const Title = styled(RLink)`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: black;

  @media (max-width: 335px) {
    display: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Content = styled(ANTLayout.Content)`
  padding: 20px 25px;
  background-color: #fff;
`;

const Sider = styled(ANTLayout.Sider)`
  padding: 0;
  background-color: #fff;
`;

const Footer = styled(ANTLayout.Footer)`
  padding: 20px;
  background-color: #fff;
`;

const Link = styled(RLink)`

`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
`;
const Avatar = styled(ANTAvatar)`
  background: #1677ff;
  cursor: pointer;
`;

export const Styled = {
  Container,
  Layout,
  Header,
  Title,
  BtnContainer,
  Content,
  Sider,
  Footer,
  Link,
  Paragraph,
  Avatar,
};
