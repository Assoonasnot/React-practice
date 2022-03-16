import React,{Component} from "react";
import { NavLink } from "react-router-dom";

//创建并暴露组件
export default class MyNavLink extends Component{
    render(){
        // console.log('this.props',this.props)
        return(
            <NavLink className='list-group-item' {...this.props} />
        )
    }
}