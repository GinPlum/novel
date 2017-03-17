import React,{Component} from "react"
import {Link} from "react-router"

import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)

export default class Rollbar extends Component{
    render(){
        const {dispatch} = this.props;
        return (
            <div className="rollbar">
                   
            </div>
        )
    }
} 