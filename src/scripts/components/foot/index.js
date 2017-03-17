import React,{Component} from "react"
import {Link} from "react-router"

import {connect} from "react-redux"

import {change_title} from "../../actions"

@connect(
    (state)=>({...state})
)

export default class Foot extends Component{
    render(){
        const {dispatch,footList} = this.props;
        return (
            <div className="foot">
                    {
                        footList.map((item,d)=>{
                            return (
                                <Link key={d} to={item.path} activeClassName="active" onClick={()=>dispatch(change_title(item.txt))}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.txt}</span>
                                </Link>
                            )
                        })
                    }
            </div>
        )
    }
} 