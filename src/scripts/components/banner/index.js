import React,{Component} from "react"
import {Link} from "react-router"
import {Carousel} from "antd"
import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)

export default class Banner extends Component{
    render(){
        const {dispatch} = this.props;
        return (
            <div className="banner">
                <Carousel
                 autoplay
                 >
                    <div><h3 id="a"><img  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=499271365,182484652&fm=27&gp=0.jpg"/></h3></div>
                    <div><h3 id="b"><img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512142601293&di=bc065774c8533cb1b2f4c0403ef268b7&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1122588735%2C3637876076%26fm%3D214%26gp%3D0.jpg"/></h3></div>
                    <div><h3 id="c"><img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512142631760&di=550b0cc090a58aa5a4814b8be58250f1&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3923299405%2C3979287090%26fm%3D214%26gp%3D0.jpg"/></h3> </div>
                </Carousel>
            </div>
        )
    }
} 