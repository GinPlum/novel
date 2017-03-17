import React,{Component} from "react"
import {Link,router,hashHistory} from "react-router";
import {connect} from "react-redux"
import { searchbook } from "../../actions";
@connect(
    (state)=>({...state})
)

export default class OpHead extends Component{
    render(){
        const {type,dispatch,title,headTitle,word,backs} = this.props
        var item;
        if(type!="input"&&type!="easy"){
            item = <Box1 dispatch={dispatch} title={title}/>
        }else if(type=="easy"){
            item = <Box3 dispatch={dispatch} title={title} />
        }else{
            item = <Box2 dispatch={dispatch} headTitle={headTitle} backs={backs} word={word}/>
        }
        return (
            <header className="head">
                {item}
            </header>
        )
    }
} 
class Box1 extends Component{
    goback=()=>{
            hashHistory.go(-1);
    }
    render(){
        const {title,headTitle} = this.props;
        
        return(
            <div className="head-box op">
                <Link  className="fl" onClick={()=>{this.goback()}}>
                        <i className="iconfont">&#xe82a;</i>
                </Link>
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="fr">
                    <Link to="/search" className="btn">
                        <i className="iconfont">&#xe70e;</i>
                    </Link>
                </div>
            </div>
        )
    }
}
class Box2 extends Component{
    constructor(props){
        super(props);
        this.state={
            input:false
        }
    }
    // componentWillReceiveProps(){
    //      console.log(this.props.word)
    // } 
    goback=()=>{
        const {headTitle,backs} = this.props;
        var back;
        switch(headTitle){
            case "发现":
            back = "/discovery";
            break;
            case "女频":
            back = "/select";
            break;
            case "书库":
            back = "/bookstore";
            break;
            case "书架":
            back = "/bookshelf";
            break;
            default:
            back="/bookshelf";
            break;
        }
        // const {title,back} = this.props;
        
        if(backs!="backs"){
            hashHistory.push(back);
        }else{
            hashHistory.push("/search");
        }
    }
    changeInp=()=>{
        if(this.refs.inp.value!=""){
            this.setState({
                input:true
            })
        }else{
            this.setState({
                input:false
            })
        }
    }
    clearInp=()=>{
        this.refs.inp.value="";
    }
    dosearch=()=>{
        const {dispatch} = this.props;
        console.log(this.refs.inp.value);
        dispatch(searchbook(this.refs.inp.value,dispatch));
        hashHistory.push("/searchlist")
    }
    render(){
        const {dispatch} = this.props;
        const {input} = this.state;
       
        
        return(
            <div className="head-box op">
                <Link  className="fl" onClick={()=>{this.goback()}}>
                        <i className="iconfont">&#xe82a;</i>
                </Link>
                <div className="input">
                    <div className="input-box">
                         <input type="text" placeholder="搜索书库" ref="inp" onChange={this.changeInp}/>
                         {input==false?"":<i className="iconfont" onClick={()=>{this.clearInp()}}>&#xe64c;</i>}
                    </div>
                </div>
                <div className="fr">
                    <div className="btn" onClick={()=>{this.dosearch()}}>
                        <i className="iconfont">&#xe70e;</i>
                    </div>
                </div>
            </div>
        )
    }
}

class Box3 extends Component{
    goback=()=>{
        hashHistory.push('/');
    }
    render(){
        const {title} = this.props;
        return(
            <div className="head-box op">
                <Link  className="fl" onClick={()=>{this.goback()}}>
                        <i className="iconfont">&#xe82a;</i>
                </Link>
                <div className="title" >
                    <span style={{display:"block",width:"540px"}}>{title}</span>
                </div>
            </div>
        )
    }
}