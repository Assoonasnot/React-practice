import React,{Component} from 'react'
import './Hello.css'

//创建并暴露Hello组件
export default class Hello extends Component{
    render(){
        return(
            <h2 className='title'>Hello React!</h2>
        )
    }
}