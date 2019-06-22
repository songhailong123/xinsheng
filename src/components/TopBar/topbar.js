import React,{Component} from 'react'
import './topbar.less'
import {NavLink} from "react-router-dom"
import '././../../App.css'
export default class TopBar extends Component{
    constructor(props){
        super(props);
        this.state={
            routerName:[
                {name:"渣男",router:"./new"},
                {name:"宋海龙",router:"./api"},
                {name:"纪官凯",router:"./about"}
            ],

        }
    }
    createList=()=>{
      return   this.state.routerName.map((item,index)=>{
            return (
                <li key={index}>
                    <NavLink to={item.router}>{item.name}</NavLink>
                </li>
            )
        })
    }
    render(){
        return (
            <div>
                <div className="header-nav">
                    <div className="header-content clearfix">
                        <NavLink to='/' className="header-logo"></NavLink>
                        <ul className="navList"> 
                            <li className="header-home">
                                <NavLink to='./'>首页</NavLink>
                            </li>
                            {this.createList()}
                        </ul>                    
                        <form method="" action="">
                            <input type="text" name="search"  placeholder="搜索..." className="search v-center"/>
                        </form>
                        <div className="header-login v-center">
                             <NavLink to='./login'>登陆/注册</NavLink>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:"56px"}}></div>
            </div>
            
        )
    }
}