import React,{Component} from 'react'
import Count from '../src/containers/Count'
import store from './redux/store'
// import Count from './components/Count'

//创建并导出App组件
export default class App extends Component{
  render(){
    return(
      <div>
        {/* 给容器组件传递store */}
        <Count store={store}/>
      </div>
    )
  }
}