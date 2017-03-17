


import React,{Component} from "react"

import Foot from "../../components/foot"
import Head from "../../components/head"
import Mask from "../../components/mask"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import {change_title,getOrigin} from "../../actions"
import {connect} from "react-redux"
@connect(
    (state) =>({maskState:state.maskState})
)


export default class Novel extends Component{
    
    render(){
        const {maskState} = this.props;
        return (
            <div className="wrapper">
                <ReactCSSTransitionGroup
                        transitionName="mask"
                        transitionLeaveTimeout = {400}
                        transitionEnterTimeout = {400}
                    >
                     {maskState==true?<Mask/>:""}
                </ReactCSSTransitionGroup>
                {/* <ReactCSSTransitionGroup
                        transitionName="black"
                        transitionLeaveTimeout = {400}
                        transitionEnterTimeout = {400}
                    >
                        {maskState==true?<div className="mask-black" ></div>:""}
                    </ReactCSSTransitionGroup> */}

                <Head/>
                    <div  className="main-container" key={this.props.children.pathname}>
                            {this.props.children}
                    </div>
                <Foot/>
            </div>
        )
    }
 
    componentDidMount(){
        const {location,dispatch} = this.props;
        
        var route = location.pathname.split("/")[1];

        
        var  title = "书架";
        switch(route){
            case "discovery":
            title = "发现";
            break;
            case "select":
            title = "女频";
            break;
            case "bookstore":
            title = "书库";
            break;
            case "bookshelf":
            title = "书架";
            break;
            default:
            title="书架";
            break;
        }

        dispatch(change_title(title))
    }
} 