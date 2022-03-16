import React,{Component} from 'react'
import Search from './components/Search/search'
import List from './components/List/List'


//创建并暴露组件
export default class App extends Component{

  //初始化状态
  state = {
    users:[], //users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false, //标识是否处于加载中
    err:'', //存储请求相关的错误信息
  };

  //saveUsers
  saveUsers = (users)=>{
    //更新状态
    this.setState({users});
  }

  //handleisFirst
  handleisFirst = (value)=>{
    //更新状态
    this.setState({isFirst:value});
  }

  //handleisLoading
  handleisLoading = (value)=>{
    //更新状态
    this.setState({isLoading:value});
  }

  //handleErr
  handleErr = (value)=>{
    //更新状态
    this.setState({err:value});
  }

  render(){
    const {users,isFirst,isLoading,err} = this.state;
    return(
      <div className='container'>
        <Search saveUsers={this.saveUsers} handleisFirst={this.handleisFirst} handleisLoading={this.handleisLoading} handleErr={this.handleErr}/>
        <List users={users} isFirst={isFirst} isLoading={isLoading} err={err}/>
      </div>
    )
  }
}