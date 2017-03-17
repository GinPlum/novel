import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import OpHead from "../../components/ophead";
import Listinfo from "../../components/listinfo"
@connect(
    (state)=>({...state})
)

export default class Search extends Component{
    render(){
        const {searchList} = this.props;
        var list;
        if(searchList.length>0){
            list = searchList.map((item,idx)=>{
                return <Listinfo item={item} key={idx}/>
            })
        }else{
            list =<div className="nobook">没有这本书</div>
        }
        console.log(searchList);
        return (
            <div className="searchlist">
                 <OpHead type="input" backs="backs"/>
                 <div className="searchlist-content">
                    {list}
                 </div>
            </div>  
        )
    }
} 