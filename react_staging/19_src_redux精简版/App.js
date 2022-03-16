import React,{Component} from 'react'
import Count from './components/Count'

//创建并导出App组件
export default class App extends Component{
  render(){
    return(
      <div>
        <Count/>
      </div>
    )
  }
}