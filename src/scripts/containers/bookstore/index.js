import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router";
@connect(
    (state)=>({storeCategory:state.storeCategory})
)

export default class Bookstore extends Component{
    render(){
        const {storeCategory} = this.props;
        var cates;
        if(storeCategory.length>0){
            cates = storeCategory.map((item,idx)=>{
                return <StoreBox cate={item} key={idx}/>
            })
        }
        return (
           <div className="store">
                {cates}
           </div>
        )
    }
} 

class StoreBox extends Component{
    render(){
        const {cate} = this.props;
        
        var box="";
        box = cate.category.map((item,idx)=>{
                return <Link className="cate-item" to={"/category/"+item.cateid} key={idx}>{item.txt}</Link>    
        })
        return(
            <div className="category">
                <div className="category-head">
                    <div className={"category-head-box "+cate.type}>
                        <i className="iconfont">&#xe797;</i>
                        <span>{cate.txt}</span>
                        <i className="iconfont">&#xe797;</i>
                    </div>
                </div>
                <div className="category-container">
                     {box}
                </div>
            </div>
        )
    }
}