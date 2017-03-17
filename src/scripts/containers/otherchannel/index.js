import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import Banner from "../../components/banner";
import Bar from "../../components/bar"
import Commend from "../../components/commend"
import Ophead from "../../components/ophead"
import { malecommend } from "../../actions/index";
@connect(
    (state)=>({...state})
)

export default class Manchannel extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(malecommend(dispatch));
    }
    render(){
        const {selectCate} = this.props;
        var title;
        switch(this.props.params.id){
            case "male":
            title = "男频";
            break;
            case "pub":
            title = "出版";
            break;
            case "free":
            title = "免费";
            break;
            default:
            title = "男频"
            break;

        }
        return (
            
           <div className="select">
                <Ophead title={title}/>
                <Banner/>
                <Bar info={{path:"/bookdetail/194",icon:"",txt:"",name:"用十年光阴换一世暖婚",bg:"#fff"}} />
                <Commend cmtitle="主编推荐" cmcate="zhubian" selectcate={title} />
                <Commend cmtitle="都市精品" cmcate="city" selectcate={title} />
                <Commend cmtitle="玄幻精品" cmcate="xuanhuan" selectcate={title} />
           </div>
        )
    }
} 

