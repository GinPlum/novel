import React,{Component} from "react"
import {render} from "react-dom"
import {hashHistory,Router,Route,IndexRedirect,Redirect} from "react-router"


import App from "./app"
import Login from "./login"
import Bookshelf from "./bookshelf"
import Select from "./select"
import BookStore from "./bookstore"
import Discovery from "./discovery"
import Search from "./search"
import SearchList from "./searchlist"
import Category from "./category"
import Bookdetail from "./bookdetail";
import Otherchannel from "./otherchannel";
import BookList from "./booklist";
import Register from "./register";
import AuthorBook from "./authorbook/index";

export default class Layout extends Component{
    render(){
        return (
            <Router history={hashHistory}>
            <Redirect from="/csxs/dist" to="/" />
                <Route path="/" component={App}>
                    <IndexRedirect to="/bookshelf" />
                    <Route path="bookshelf" component={Bookshelf} />
                    <Route path="select" component={Select}/>
                    <Route path="bookstore" component={BookStore}/>
                    <Route path="discovery" component={Discovery}/>
                </Route>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/searchlist" component={SearchList}/>
                <Route path="/booklist" component={BookList}/>
                <Route path="/category/:id" component={Category}/>
                <Route path="/channels/:id" component={Otherchannel}/>
                <Route path="/bookdetail/:id" component={Bookdetail}/>
                <Route path="/authorbook/:author" component={AuthorBook}/>
            </Router>
        )
    }
}
