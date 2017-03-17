import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import {showmask} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Head extends Component{
    render(){
        const {user,dispatch,loginState} = this.props
        return (
            <header className="head">
                <div className="head-box">
                    <div className="fl" onClick={()=>{dispatch(showmask())}}> 
                    <img src={(user.avatar==""||loginState==false)?"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2043830891,3717215658&fm=27&gp=0.jpg":user.avatar}/>                    </div>
                    <div className="title">
                        <span>{this.props.headTitle}</span>
                    </div>
                    <div className="fr">
                        <Link to="/search" >
                            <i className="iconfont">&#xe70e;</i>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
} 