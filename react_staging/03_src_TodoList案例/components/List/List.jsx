import React,{Component} from 'react'
import Item from '../Item/Item.jsx'
import propTypes from 'prop-types'
import './List.css'

//创建并暴露List组件
export default class List extends Component{

    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        todos:propTypes.array.isRequired,
        updateTodo:propTypes.func.isRequired
    }

    render(){
        const {todos,updateTodo,deleteTodo} = this.props;
        return(
            <ul className='todo-main'>
                {
                    todos.map((todos)=>{
                        return <Item key={todos.id} {...todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}