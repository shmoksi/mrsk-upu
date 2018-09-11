import React from 'react';
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom';

import "./index.less";


const HEADER_ROUTES = [{url: '/', text: 'Home'}, {url: 'about-us', text: 'About'}];

const Main = ({children}) => (
  <Layout>
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {HEADER_ROUTES.map(opt => (
          <Menu.Item key={opt.url}>
            <Link to={opt.url}>
              {opt.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
    <div className="main-container">
      <Layout.Content>{children}</Layout.Content>
    </div>
  </Layout>
);

export default Main;
