import React,{Component} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Fotter from './components/Footer/Footer'
import './App.css'

//创建并暴露App组件
export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

    //初始化状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'喝水',done:false},
        {id:'003',name:'敲代码',done:false}
    ]}
    
    //addTodos用于添加一个todos 接收的是todo对象
    addTodos = (todoObj)=>{
        //获取初始化状态
        const {todos} = this.state;
        //处理
        const newTodos = [todoObj,...todos]
        //更新
        this.setState({todos:newTodos});
    }

    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        //获取原状态
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done:done}
            else return todoObj
        })
        //更新
        this.setState({todos:newTodos});
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id)=>{
        //获取原状态
        const {todos} = this.state;
        //匹配处理数据
        const newTodos = todos.filter((todoObj)=>{
                return todoObj.id !== id
            })

        //更新
        this.setState({todos:newTodos});
    }

    //checkAllTodo用于修改全选/全不选状态
    checkAllTodo = (done)=>{
        //获取原状态
        const {todos} = this.state;
        //处理数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        //更新
        this.setState({todos:newTodos});
    }

    //clearAllTodo用于一键删除已完成任务
    clearAllTodo = ()=>{
        //获取原状态
        const {todos} = this.state;
        //处理数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.done !== true;
        })
        //更新
        this.setState({todos:newTodos});
    }

    render(){
        const {todos} = this.state;
        return(
           <div className='todo-container'>
               <div className='todo-wrap'>
                <Header addTodos={this.addTodos}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Fotter todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}/>
               </div>
           </div>
        )
    }
}