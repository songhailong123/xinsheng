import React, { Component } from "react";
import { Calendar } from 'antd';
import './contentList.less';
import Swiper from "../Swiper/swiper";
import NavBar from '../NavBar/navbar';
import MessageList from '../MessageList/messagelist'
export default class ContentList extends Component {

    render() {
        function onPanelChange(value, mode) {
            console.log(value, mode);
        }
        return (
            <div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", background: "#f5f6f7" }}>
                    <div style={{ width: "80%", paddingTop: "30px" }}>
                        <Swiper />
                        <NavBar></NavBar>
                        <div>
                            <MessageList></MessageList>
                            <div style={{ width: 280, border: '1px solid #d9d9d9', borderRadius: 4, float: "left",marginLeft:20}}>
                                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )

    }
}