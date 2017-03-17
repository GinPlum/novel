import React,{Component} from "react"
import {connect} from "react-redux"
import Ophead from "../../components/ophead";
import Listinfo from "../../components/listinfo"
import { searchType } from "../../actions/index";
@connect(
    (state)=>({...state})
)

export default class Category extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(searchType(this.props.params.id,dispatch));
    }
    render(){
        const {dispatch,searchList} = this.props;
        var title;
        var item;
        if(searchList.length>0){
           item =  searchList.map((item,idx)=>{
                return <Listinfo item={item} key={idx}/>
            })
        }else{
            item = ""
        }
        
        switch(this.props.params.id){
            case "1":
            title="现代言情";
            break;
            case "2":
            title="古言穿越";
            break;
            case "3":
            title="浪漫青春";
            break;
            case "4":
            title="幻想言情";
            break;
            case "5":
            title="悬疑灵异";
            break;
            case "6":
            title="纯爱同人";
            break;
            case "7":
            title="都市小说";
            break;
            case "8":
            title="玄幻魔幻";
            break;
            case "9":
            title="武侠仙侠";
            break;
            case "10":
            title="修真异能";
            break;
            case "11":
            title="架空历史";
            break;
            case "12":
            title="游戏竞技";
            break;
            case "13":
            title="流行小说";
            break;
            case "14":
            title="经典名著";
            break;
            case "15":
            title="励志成功";
            break;
            case "16":
            title="心灵情感";
            break;
            case "17":
            title="侦探推理";
            break;
            case "18":
            title="历史军事";
            break;
            default:
            title = "";
            break;
        }
        return (
            <div className="categorys">
                 <Ophead title={title}/>
                 <div className="categorys-list">
                 <div className="searchlist-content">
                    {item}
                 </div>
                 </div>
            </div>
        )
    }
} 