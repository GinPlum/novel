import React,{Component} from "react"
import {connect} from "react-redux"
import {Link,router,hashHistory} from "react-router";
import OpHead from "../../components/ophead";
import { hotsearch,searchbook } from "../../actions/index";
@connect(
    (state)=>({...state})
)

export default class Search extends Component{
    
    changeList=()=>{
        const {dispatch} = this.props;
        dispatch(hotsearch(dispatch));
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(hotsearch(dispatch));
    }
    dosearch=(title)=>{
        const {dispatch} = this.props;
        dispatch(searchbook(title,dispatch));
        hashHistory.push("/searchlist")
    }
    render(){
        const {hotList} = this.props;
        var list;  
        if(hotList.length>0){
            list = hotList.map((item,idx)=>{
                return <Link key={idx} className="sbtn" onClick={()=>{this.dosearch(item.bk_title)}}>{item.bk_title}</Link>
            })
        }else{
            list-""
        }
        return (
            <div className="search">
                 <OpHead type="input"/>
                 <div className="hot">
                     <div className="hot-head">
                         <i className="iconfont"></i>
                         <span>热门搜索</span>
                     </div>
                     <div className="hot-content">
                           {list}
                     </div>
                     <div  className="hot-foot">
                        <div onClick={this.changeList}>换一批</div>
                     </div>
                 </div>
            </div>
        )
    }
} 