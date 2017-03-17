import React,{Component} from "react"
import {connect} from "react-redux"
import Bar from "../../components/bar";
@connect(
    (state)=>({...state})
)

export default class Discovery extends Component{
    render(){
        const {disList} = this.props;
        return (
            <div className="discovery">
                 {
                    disList.map((item,idx)=>{
                      return   <Bar info={item} key={idx} className="cate" />
                    })
                 }
            </div>
        )
    }
} 