import React,{Component} from 'react'
import './Footer.css'

//创建并暴露组件
export default class Fotter extends Component{
    //handleAllChange
    handleAllChange = (event)=>{
        this.props.checkAllTodo(event.target.checked);
    }

    //handleClearAll
    handleClearAll = ()=>{
        this.props.clearAllTodo();
    }

    render(){
        const {todos} = this.props;
        //已完成的个数
        const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0);
        //总数
        const total = todos.length;
        return(
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" onChange={this.handleAllChange} checked={doneCount === total && total !== 0 ? true : false}/>
                </label>
                <span>
                    <span>已完成:{doneCount}</span>/全部:{total}
                </span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}