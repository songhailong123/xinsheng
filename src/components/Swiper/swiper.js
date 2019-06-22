import React,{Component} from 'react'
import {Carousel} from 'antd'
import './swiper.less'
import Bg from '../../images/cnode.png'
export default class Swiper extends Component{
    render(){
        return (
            <div>
                <Carousel autoplay>
                        <div>
                        <h3>渣男宋海龙</h3>
                        </div>
                        <div>
                            <img src={Bg} alt=""></img>
                        </div>
                        <div>
                        <h3>3</h3>
                        </div>
                        <div>
                        <h3>4</h3>
                        </div>
                    </Carousel>
            </div>
        )
    }
}