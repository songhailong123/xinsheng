import React,{Component} from "react";
import {  Icon,Menu } from 'antd';
const { SubMenu } = Menu;
export default class ContentList extends Component{
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render(){
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
            <Icon type="mail" />
            Navigation One
            </Menu.Item>

            <SubMenu
            title={
                <span className="submenu-title-wrapper">
                <Icon type="setting" />
                Navigation Three - Submenu
                </span>
            }
            >
            <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">渣男宋海龙</Menu.Item>
                <Menu.Item key="setting:2">渣男纪官凯</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:5">Option 5</Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
            </Menu.Item>
        </Menu>

        )
    }

}