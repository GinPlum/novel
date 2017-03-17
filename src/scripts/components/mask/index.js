import React,{Component} from "react";
import {Link} from "react-router"
import {connect} from "react-redux";
import {hidemask,getOrigin} from "../../actions"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
@connect(
    (state)=>({originDot:state.originDot,category:state.category,user:state.user,loginState:state.loginState,maskState:state.maskState})
) 

export default class Mask extends Component{
        start=(event)=>{
            const {dispatch} = this.props;
            this.refs.mask.style.transition="";
            dispatch(getOrigin(event.targetTouches[0].clientX));
        }
        move=(event)=>{
            var mx = document.body.clientWidth;
            const {dispatch,originDot} = this.props;
            var e = event.targetTouches[0];
            var x = (originDot -  e.clientX)<0?0:originDot - e.clientX;
            // this.refs.mask.style.transform=`translateX(-${x}px)`;
            this.refs.mask.style.left=`-${x}px`;
            if(x>0.7*mx){
                this.refs.mask.style.transition="all .4s ease";
                // this.refs.mask.style.transform=`translateX(-100%)`;
                this.refs.mask.style.left=`-100%`;
                dispatch(hidemask())
            }
        }
        moveback=(event)=>{
            const {maskState} = this.props;
            if(maskState){
                this.refs.mask.style.transition="all .4s ease";
                this.refs.mask.style.left=`0px`;
            }
        }
        render(){
            const {dispatch,category,user,loginState,maskState} = this.props;
            var userBox;
            if(!loginState){
                userBox = (
                <div className="mask-box-info">
                    <Link to="/login" className="firstbtn">手机号初次登录即送100代金券 <i className="iconfont">>></i></Link>
                    <UserBox user={user} loginState={loginState}/>
                </div>
              )
            }else{
            userBox = (
                  <div className="mask-box-info">
                    <UserBox user={user} loginState={loginState}/>
                  </div>
                )
            }
            return(
                <div className="mask" ref="mask" onTouchStart={this.start} onTouchMove={this.move} onTouchEnd={this.moveback}>
                    <MaskBox user={user} loginState={loginState} userBox={userBox} category={category} dispatch={dispatch}/>
                </div>
            )
        }
} 

class UserBox extends Component{
    render(){
        const {user,loginState} = this.props;
        return(
            <div className="my">
                  <div  className="my-account">
                    <Link to={loginState==false?"/login":"/"} className="account"/>
                    <span>我的账户</span>
                    <Link to={loginState==false?"/login":"/"} className="recharge">充值</Link>
                  </div>
                  <div className="my-gold">
                  <Link to={loginState==false?"/login":"/"} className="money">
                    <span>{loginState==false?0:user.gold}</span>
                    <span>金币</span>
                  </Link>
                  <Link to={loginState==false?"/login":"/"} className="voucher">
                    <span>{loginState==false?0:user.voucher}</span>
                    <span>代金券</span>
                  </Link>
                  <Link to={loginState==false?"/login":"/"} className="vipday">
                    <span>{loginState==false?0:user.vip}</span>
                    <span>VIP天数</span>
                  </Link>
                  </div>       
            </div>
        )
    }
}

class MaskBox extends Component{
    render(){
        const {user,userBox,category,dispatch,loginState} = this.props;
        return(
            <div className="mask-box">
                <div className="mask-box-head">
                    <div onClick={()=>{dispatch(hidemask())}} className="iconfont">&#xe82a;</div>
                    <Link className="user" to={loginState==false?"/login":"/"}>
                        <img src={(user.avatar==""||loginState==false)?"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2043830891,3717215658&fm=27&gp=0.jpg":user.avatar}/>
                        <span>{loginState==false?"临时用户":user.name}</span>
                    </Link>
                </div>
                {userBox}
                <div className="mask-box-category">
                    {
                        category.map((item,idx)=>{
                            return (
                                <Link className="category" key={idx} to={loginState==false?"/login":"/"}>
                                    <div className="fl">
                                        <i className="iconfont">{item.icon}</i>
                                        <span>{item.txt}</span>
                                    </div>
                                    <div className="fr">
                                        <i className="iconfont">&#xe601;</i>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}