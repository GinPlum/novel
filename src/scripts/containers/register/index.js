

import React,{Component} from "react";
import {Link} from "react-router";
import {Input,Button,Radio,message} from "antd"
import {connect} from "react-redux";
import {showpassword,register,userlogin} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import axios from "axios"
import Ophead from "../../components/ophead"
axios.defaults.baseURL="http://112.74.49.86:1234"


@connect(
    (state)=>({showPassword:state.showPassword})
)

export default class Register extends Component{
    register=()=>{
        const {dispatch} = this.props;
        var istrue = true;
        var phone = this.refs.phone.refs.input.value;
        var password = this.refs.password.refs.input.value;
        var repassword = this.refs.repassword.refs.input.value;
        if(phone.length==0){
            message.warning('手机号不能为空',2);
            istrue = false;
        }
        else if(!/^1[34578]\d{9}$/.test(phone)){
            message.warning('手机格式错误',2);
            istrue = false;
        }
        else if(password.length<6 || password.length>16){
            message.warning('密码在6位到16位',2);
            istrue = false;
        }
        else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
            message.warning('密码只能由字母数字下划线组成',2);
            istrue = false;
        }else if(password!=repassword){
            message.warning('两次输入密码不一致',2);
            istrue = false;
        }
        if(istrue){
                // dispatch(register(phone,name,password))
                axios.post("/register",{
                        phone:phone,
                        password:password
                }).then(res=>{
                    if(res.data.status=="1"){        //注册成功
                        message.success('注册成功，登录中',1,function(){
                            dispatch(userlogin("",dispatch));
                            dispatch(getuser(phone,dispatch));
                            
                            browserHistory.push("/");
                        });
                    }else{
                        message.error('用户名已被注册',2);
                    }
                })
        }
        
    }
    back(){
        browserHistory.go(-1)
    }
    showPassword=()=>{
        const {dispatch,showPassword} = this. props;
        if(this.refs.password.refs.input.type=="password"){
            this.refs.password.refs.input.type="text";
            this.refs.repassword.refs.input.type="text";
            dispatch(showpassword("隐藏密码"))
        }else{
            this.refs.password.refs.input.type="password";
            this.refs.repassword.refs.input.type="password";
            dispatch(showpassword("显示密码"))
        }
    }
    render() {
        const {showPassword} = this. props
        return (
            <div className="register">
                <div className="register_head">
                     <Ophead title="注册" type="easy"/>    
                </div>

                <div className="register_box">
                    <div className="inp">
                        <Input placeholder="手机号" ref="phone"/>
                        <span></span>
                    </div>
                    <div className="inp">
                        <div className="password_box">
                            <Input placeholder="密码" type="password" className="password" ref="password"/>
                        </div>
                    </div>
                    <div className="inp">
                        <div className="password_box">
                            <Input placeholder="重复密码" type="password" className="password" ref="repassword"/>
                            <div className="show_password" onClick={this.showPassword} ref="showPassword">{showPassword}</div>
                        </div>
                        <span></span>
                    </div>
                    <Button type="primary" className="reg_btn" onClick={this.register}>注册</Button>
                </div>
                




            </div>
        );
    }


}