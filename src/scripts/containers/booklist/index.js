import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import OpHead from "../../components/ophead";
import Listinfo from "../../components/listinfo"
@connect(
    (state)=>({...state})
)

export default class Booklist extends Component{
    render(){
        const {allList} = this.props;
        var list;
        if(allList.length>0){
            list = allList.map((item,idx)=>{
                return <Listinfo item={item} key={idx}/>
            })
        }else{
            list =<div className="nobook">暂时没有书本</div>
        }
        return (
            <div className="alllist">
                 <OpHead title="书单" />
                 <div className="alllist-content">
                    {list}
                 </div>
            </div>  
        )
    }
} 