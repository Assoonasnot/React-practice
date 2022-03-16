import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
import Welocme from './components/Welocme/Welocme'

//创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/><br/>
                <Welocme/>
            </div>
        )
    }
}