import React,{Component} from 'react'

//创建并暴露组件
export default class Header extends Component{
    render(){
        return(
            <div className='page-header' style={{margin:'0 auto'}}><h2>React Router Demo</h2></div>
        )
    }
}