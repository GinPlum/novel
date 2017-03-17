import React,{Component} from "react"
import {connect} from "react-redux"
import Bar from "../../components/bar";
@connect(
    (state)=>({...state})
)

export default class Discovery extends Component{
    render(){
        return (
            <div className="setter">
                 <div className="quit">退出登录</div>
            </div>
        )
    }
} 