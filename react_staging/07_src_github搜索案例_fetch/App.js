import React,{Component} from 'react'
import Search from './components/Search/search'
import List from './components/List/List'


//创建并暴露组件
export default class App extends Component{

  render(){
    return(
      <div className='container'>
        <Search />
        <List />
      </div>
    )
  }
}