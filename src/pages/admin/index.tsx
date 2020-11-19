import React, { Component, useState } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useRouteMatch,
  useHistory,

} from 'react-router-dom'

import './index.css';

import ActivityQuery from './activityQuery'
import ActivitySetting from './activitySetting'
import MachineSetting from './machineSetting'
import PublishQuery from './publishQuery'
import PublishSetting from './publishSetting'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux'

import { logout as logoutAction } from '../../redux/modules/user'
//antd
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
// antd
const menuItems = [
  {
    key: 'machineSetting',
    title: '廣告機設定',
    name: '廣告機設定',
    icon: <UserOutlined />
  },
  {
    key: 'activitySetting',
    title: '活動產品設定',
    name: '活動產品設定',
    icon: <UserOutlined />
  },
  {
    key: 'publishSetting',
    title: '廣告發布設定',
    name: '廣告發布設定',
    icon: <UserOutlined />
  },
  {
    key: 'publishQuery',
    title: '廣告發怖',
    name: '廣告發怖',
    icon: <UserOutlined />
  },
  {
    key: 'activityQuery',
    title: '活動產品查詢',
    name: '活動產品查詢',
    icon: <UserOutlined />
  },
  {
    key: 'logout',
    title: '登出',
    name: '登出',
    icon: <UserOutlined />
  }
]
function findMenuItemByKey(key: string) {
  let items = menuItems.filter(elem => (elem.key === key))
  if (items.length > 0) {
    return items[0]
  } else {
    return menuItems[0]
  }
}
function Pages() {
  let { path, url } = useRouteMatch();
  let location = useLocation()
  let history = useHistory();
  let menuItem = findMenuItemByKey(location.pathname.split('/')[2])
  let dispatch = useDispatch()
  function logout() {
    dispatch(logoutAction())
    history.push(`${url}`)
  }
  type onSelectEventType = {
    key: React.Key;
  }
  function onSelectHandle(info: onSelectEventType) {
    if (info.key === 'logout') {
      logout()
    } else {
      history.push(`${url}/${info.key}`)
    }
  }
  return (
    <div className="App">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[menuItem.key]} onSelect={onSelectHandle}>
            {
              menuItems.map(elem => (
                <Menu.Item key={elem.key} icon={elem.icon}>
                  {elem.name}
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
            <h1 style={{ color: 'white' }}>{menuItem.title}</h1>
          </Header>
          <Content style={{ margin: '24px 16px 24' }}>
            <div className="site-layout-background" style={{ textAlign: 'left', padding: 24, minHeight: 640 }}>
              <Switch>
                <Route exact path={path}>
                  <Redirect to={{ pathname: `${path}/machineSetting`, state: { from: location } }} />
                </Route>
                <Route path={`${path}/activityQuery`}>
                  <ActivityQuery />
                </Route>
                <Route path={`${path}/activitySetting`}>
                  <ActivitySetting />
                </Route>
                <Route path={`${path}/machineSetting`}>
                  <MachineSetting />
                </Route>
                <Route path={`${path}/publishQuery`}>
                  <PublishQuery />
                </Route>
                <Route path={`${path}/publishSetting`}>
                  <PublishSetting />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer className="site-layout-sub-footer-background" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </div>
  );
}

export default Pages;
