
import React,{Component} from "react"
import {Link} from "react-router"


export default class Bar extends Component{
    render(){
        const {dispatch,info,className} = this.props;
        return (
            <Link className={"bar "+className} to={info.path} style={{backgroundColor:info.bg}}>
                    <div className="fl">
                        <i className="iconfont">{info.icon}</i>
                        <span>{info.name}</span>
                    </div>
                    <div className="fr">
                        <span>{info.txt}</span>
                        <i className="iconfont">&#xe601;</i>
                    </div>
            </Link>
        )
    }
} 