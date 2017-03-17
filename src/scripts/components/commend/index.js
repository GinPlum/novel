import React,{Component} from "react"
import {Link} from "react-router"

import {connect} from "react-redux"

@connect(
    (state)=>({...state})
)

export default class Commend extends Component{
    render(){
        const {dispatch,selectcate,cmtitle,cmcate,commendFemale,commendMale,commendPub,commendFree} = this.props;
        var commend,selectEn;
        // console.log(selectcate);
        switch(selectcate){
            case "女频":
            commend = commendFemale;
            selectEn  = "female";
            break;
            case "男频":
            commend = commendMale;
            selectEn  = "male";
            break;
            case "出版":
            commend = commendPub;
            selectEn  = "publish";
            break;
            case "免费":
            commend = commendFree;
            selectEn  = "free";
            break;
            default:
            commend = commendFemale;
            selectEn  = "female";
            break;
        }
        return (
            <div className="commend">
                   {/* <Link className={"title "+selectEn} to={"/commend/"+cmcate}> */}
                   <Link className={"title "+selectEn}>
                        <div className="fl">
                            <i className="iconfont">&#xe797;</i>
                            <b>{cmtitle}</b>
                        </div>
                        <div className="fr">
                            <span>更多</span>
                            <i className="iconfont">&#xe601;</i>
                        </div>
                   </Link>
                   <CommendBox  commend={commend} cate={cmcate} />
            </div>
        )
    }
} 

class CommendBox extends Component{
    render(){
        const {cate,commend} = this.props;
        // console.log(cate);
        var i = 0,j=0;
        var Box1 = commend.map((item,idx)=>{
            // console.log(i);
            if(item.type==cate){
                if(i<3){ 
                i++;
                j=idx;
                   return(                          
                        <Link key={idx} to={"/bookdetail/"+item.id} className="triple">
                            <img src={item.bk_cover_imgid} />
                            <span>{item.bk_title}</span>
                        </Link>
                    )
                }
            }
        })
        var Box2 = commend.map((item,idx)=>{
            if(item.type==cate){
                // console.log(i);
                if(idx>j){
                    j++;    
                    return(
                        <Link key={idx} to={"/bookdetail/"+item.id} className="single">
                            <span>{item.bk_title}</span>
                            <span>{item.bp_au_pname}</span>
                            <span>{item.bk_description}</span>
                        </Link>   
                    )
                }
            }
        });
        return(
            <div className="commend-content">
                    <div className="muti">
                        {Box1}
                    </div>
                    {Box2}
            </div>
        )
    }
}
