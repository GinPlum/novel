import React,{Component} from "react"
import {Link} from "react-router"
import {connect} from "react-redux"
import {showmask} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Listinfo extends Component{
    render(){
        const {item,dispatch} = this.props;
        return (
            <Link className="searchlist-item" to={"/bookdetail/"+item.id}>
                <div className="left">
                    <img src={item.bk_cover_imgid} />
                </div>
                <div className="right">
                    <div className="bkname">{item.bk_title}</div>
                    <div className="mid" >
                        <span className="author">{item.bp_au_pname}</span>
                        {
                            item.bk_keywords.split(",").map((items,idx)=>{
                                return <i key={idx} className="tag">{items}</i>
                            })
                        }
                    </div>
                    <div className="breif">{item.bk_description}</div>
                </div>
            </Link>
        )
    }
} 