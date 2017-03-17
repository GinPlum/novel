import React,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router"
import {getshelf} from "../../actions"
@connect(
    (state)=>({bookshelf:state.bookshelf,user:state.user})
)

export default class Bookshelf extends Component{
    componentWillMount(){
        const {dispatch,user} = this.props;
        if(user){
            dispatch(getshelf(user.phone,dispatch));
        }
    }
    render(){
        const {bookshelf} = this.props;   
        var books=<div></div>;
        if(bookshelf.length>0){
            books = <Books bookshelf={bookshelf}/>
        }else{
            books = <div className="nobook">暂无书本，请登录后查看</div>
        }
        return (
            <div className="bookshelf-container">
                {books}
            </div>
        )
    }
} 

class Books extends Component{
    render(){
    const {bookshelf} = this.props;   
    console.log(bookshelf) 
        return(
            <div className="books">
                {
                    bookshelf.map((item,idx)=>{
                        return (
                            <Link key={idx} to={"/bookdetail/"+item.id}>
                                <img src={item.bk_cover_imgid}/>
                                <span>{item.bk_title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
