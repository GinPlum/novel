import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import OpHead from "../../components/ophead";
import Listinfo from "../../components/listinfo"
import Ophead from "../../components/ophead";
import { getAuhtorBook } from "../../actions/index";
@connect(
    (state)=>({...state})
)

export default class AuthorBook extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getAuhtorBook(this.props.location.pathname.split("/")[2],dispatch));
    }
    render(){
       const {authorList} = this.props;
       console.log(authorList);
       var items;
       var author;
       if(authorList.length>0){
            author = authorList[0].bp_au_pname;
            items = authorList.map((item,idx)=>{
                return <Listinfo item={item} key={idx}/>
            })
       }
       else{
            author="";
            items="";
       }
       return( 
        <div className="categorys">
            <Ophead title={author}/>
                <div className="categorys-list">
                    <div className="searchlist-content">
                        {items}
                    </div>
                </div>
        </div>
        )
    }
} 