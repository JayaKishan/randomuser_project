import GetUserData from './GetUserData';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Base = () => {
    

      return (
        <Layout className="layout">
        <Header>
          <div className="logo"><img src="../random_user.png" alt="User" /></div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Users</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content"><GetUserData/></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Random User</Footer>
      </Layout>
      );
  };
  
  export default Base;