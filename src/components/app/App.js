import React, {Component} from 'react'
import {IndexLink,Link} from 'react-router'
import {Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu
import './app.css'
import logo from './logo.png'

export default class App extends Component {

  render() {
    return (
      <div className="app">
          <div className="head">
              <img src={logo}   className="logo"/>
          </div>
          <div className="leftMenu">
            <Menu theme="dark"
                style={{width:250}}
                mode='inline'>
            <Menu.Item>
              <IndexLink to='/'>首页</IndexLink>
            </Menu.Item>
            <SubMenu title={<span><Icon type="bars"/><span>主导航</span></span>}>
                <Menu.Item><Link to='/form'>信息门户</Link></Menu.Item>
                <SubMenu title="公共服务">
                    <Menu.Item><Link to='/myMap'>学校预览</Link></Menu.Item>
                    <Menu.Item><Link to='/library'>图书馆</Link></Menu.Item>
                    <SubMenu title="学校医院">
                       <Menu.Item ><Link to="/hospital/introduction">医院介绍</Link></Menu.Item>
                       <Menu.Item ><Link to="/hospital/navigation">科室导航</Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
                <Menu.Item><Link to='/carousel'>成电风光</Link></Menu.Item>
            </SubMenu>
            </Menu>
          </div>
          <div className="right">
              <div className="right-box">{this.props.children}</div>
          </div>
      </div>
    )
  }
}