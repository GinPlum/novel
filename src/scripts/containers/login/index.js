

import React,{Component} from "react";
import {Link} from "react-router";
import {Input,Button,message} from "antd"
import {connect} from "react-redux";
import {userlogin,getuser} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import axios from "axios"
import Ophead from "../../components/ophead"
axios.defaults.baseURL="http://localhost:1234"


@connect(
    (state)=>({showPassword:state.showPassword})
)

export default class Login extends Component{
    back(){
        browserHistory.go(-1)
    }
    toregister(){
        browserHistory.push("/register")
    }
    login=()=>{
        const {dispatch} = this.props;
        var phone = this.refs.phone.refs.input.value;
        var password = this.refs.password.refs.input.value;
        message.config({
            top: 1000,
            duration:5,
          });
        // dispatch(login(phone,password))
        axios.post("/login",{
                phone:phone,
                password:password
        }).then(res=>{
            if(res.data.status=='0'){
                message.success('登录成功',1,function(){
                    dispatch(userlogin(res.data.data,dispatch));
                    browserHistory.push("/");
                });
            }else{
                message.error('用户名或密码错误',2);
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="login_head">
                    <Ophead title="登录" type="easy"/>
                </div>

                <div className="login_main">
                    <div className="username">
                        <i className="iconfont icon-youxiang"></i>
                        <Input placeholder="输入电话号码" name="phone" ref="phone"/>
                    </div>
                    
                    <div className="password">
                        <i className="iconfont icon-yaochi"></i>
                        <Input placeholder="输入密码" type="password" name="password" ref="password"/>
                    </div>

                    <Button type="primary" className="login_btn" onClick={this.login}>登录</Button>

                    <Link className="register" to="/register">注册用户</Link>

                    <p className="login_more">
                        <span>你还可以选择第三方登录</span>
                        <i></i>
                    </p>

                    <div className="more_box">
                        <span className="qq"></span>
                        <span className="sina"></span>
                        <span className="wx"></span>
                    </div>
                </div>



            </div>
        );
    }


}