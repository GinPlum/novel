import React,{Component} from "react"
import axios from "axios";
import {message} from "antd"
import {connect} from "react-redux";
import {Link,router,hashHistory} from "react-router";
import {getDetail,getMore,doCollect,unCollect,stateCollect} from "../../actions";
import Listinfo from "../../components/listinfo"

@connect(state=>({...state}))

export default  class Bookdetail extends Component{

    constructor(props){
        super(props)
        this.state={
            hide:true
        }
    }
    
    togglehide=()=>{
        const {hide} = this.state;
         this.setState({
                hide:!hide
            })
    }
    turnAnother=(id)=>{
        this.props.router.push("/");
        setTimeout(()=>{
            this.props.router.replace("/bookdetail/"+id);
        })
    }
    goback=()=>{
        hashHistory.go(-1)
    }
    componentWillMount(){
        const {user,detail,dispatch} = this.props;
        dispatch(getDetail(this.props.location.pathname.split("/")[2],dispatch));
        dispatch(getMore(dispatch));
    }
    componentDidUpdate(){
        const {user,detail,dispatch} = this.props;
        if(detail.id){
            dispatch(stateCollect(user.phone,detail.id,dispatch))
        }
    }
    render(){
        const {detail,more,iscollect,dispatch,user} = this.props;
        const {hide} = this.state;
        var cates,breif;
        var that = this;
        var col;
        if(detail.bk_keywords){
            cates = detail.bk_keywords.split(',').map((item,idx)=>{
                return  <span key={idx} >{item}</span>
              })
                if(iscollect){
                    col = <Collected phone={user.phone} id = {detail.id} dispatch={dispatch}/>
                }else{
                    col = <Collect  phone={user.phone} id = {detail.id} dispatch={dispatch}/>
                }
        }else{
            cates = "";
        }
        if(hide){
            breif =  <p className="brief"onClick={this.togglehide}>{detail.bk_description}</p>
        }else{
            breif = <p className="brief-all" onClick={this.togglehide}>{detail.bk_description} <span>收起</span></p>
        }
        return(
            <div className="detail-wrapper">
                 <div className="head" >
                    <div className="head-bg" style={{backgroundImage:`url(${detail.bk_cover_imgid})`,backgroundSize:"100% 650px",backgroundPosition:"0px 0px"}}></div>
                    <i className="back iconfont" onClick={this.goback}>&#xe82a;</i>
                 </div>
                 <div className="detail">
                    <div className="detail-inner">
                        <div className="detail-top">
                            <div className="detail-bg" style={{backgroundImage:`url(${detail.bk_cover_imgid})`,backgroundSize:"100% 650px",backgroundPosition:"0 -100px"}}></div>
                            <div className="detail-top-inner">
                                <img src={detail.bk_cover_imgid}/>
                                <dl>
                                    <dd className="title">{detail.bk_title}</dd>
                                    <dd className="author">{detail.bp_au_pname}</dd>
                                    <dd className="words">{parseInt(detail.bk_total_words/10000)}万字</dd>
                                    <dd className="rating">评分: {detail.bk_total_score} 分</dd>                                    
                                </dl>
                            </div>
                        </div>
                        <div className="intro">
                            <div className="intro-inner">
                                {breif}
                                <div className="cates">{cates}</div>
                                <Link to={'/authorbook/'+detail.authorId}>更多 {detail.bp_au_pname} 的作品</Link>
                                
                            </div>
                        </div>
                       
                        <div className="seeMore">
                            <p>看本书的人还在看</p>
                            <div className="more">
                                {
                                    more.map((items,idx)=>{
                                        return <div key={idx} onClick={()=>{this.turnAnother(items.id)}}><Listinfo item={items}  /></div>
                                    })
                                }
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="foot">
                        {col}
                </div>
            </div>
        )
    }
}
class Collect extends Component{
    collect=()=>{
        const {dispatch,phone,id} = this.props;
        if(!phone){
            message.error('请先登录',1.5);
            return;
        }
        axios.post("/docollect",{
            phone:phone,
            id:id
        }).then(res=>{
        if(res.data.status=='0'){
            message.success('收藏成功',1.5,function(){
                dispatch(doCollect());
            });
        }else{
            message.error('收藏失败',1.5);
        }
        })
    }
    render(){
        
        return(
            <div className="collect" onClick={()=>{this.collect()}}>
                收藏本书
            </div>
        )
    }
}
class Collected extends Component{
    uncollect=()=>{
        const {dispatch,phone,id} = this.props;
        if(!phone){
            message.error('请先登录',1.5);
            return;
        }
        axios.post("/uncollect",{
            phone:phone,
            id:id
        }).then(res=>{
        if(res.data.status=='0'){
            message.success('取消收藏',1.5,function(){
                dispatch(unCollect());
            });
        }else{
            message.error('取消失败',1.5);
        }
        })
    }
    render(){
        return(
            <div className="collected" onClick={()=>{this.uncollect()}} >
                取消收藏 
            </div>
        )
    }
}
