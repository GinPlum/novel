import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import Banner from "../../components/banner";
import Bar from "../../components/bar"
import Commend from "../../components/commend"
import { femalecommend } from "../../actions/index";
@connect(
    (state)=>({...state})
)

export default class Select extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(femalecommend(dispatch));
    }
    render(){
        const {selectCate,headTitle} = this.props;
        return (
           <div className="select">
                <Banner/>
                <div className="category">
                    {
                        selectCate.map((item,idx)=>{
                          return( 
                            <Link className="category-item" key={idx} to={item.path.indexOf("/")==-1?"/channels/"+item.path:item.path}>
                              <div className="category-item-box">
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.txt}</span>
                              </div>
                            </Link>
                            )
                         })
                    }
                </div>
                <Bar info={{path:"/bookdetail/194",icon:"",txt:"",name:"用十年光阴换一世暖婚",bg:"#fff"}} />
                <Commend cmtitle="本期主打" cmcate="current" selectcate="女频" />
                <Commend cmtitle="火热推荐" cmcate="hot" selectcate="女频" />
                <Commend cmtitle="最新完本" cmcate="new" selectcate="女频" />
           </div>
        )
    }
} 

