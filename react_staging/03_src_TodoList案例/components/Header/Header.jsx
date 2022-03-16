import React,{Component} from 'react'
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import './Header.css'

//创建并暴露Demo组件
export default class Header extends Component{

    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodos:propTypes.func.isRequired
    }
    //
    handleonKeyUp = (event)=>{
        //解构赋值
        const {keyCode,target} = event;
        //判断是否是回车
        if(keyCode !== 13) return;
        //判断添加的是否为空
        if(target.value.trim() === "") {alert('输入不能为空！');return}
        //准备好一个对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        //将todoObj传递给App
        this.props.addTodos(todoObj);
        target.value = "";
    }

    render(){
        return(
            <div className="todo-header">
                <input onKeyUp={this.handleonKeyUp} type="text" placeholder="请输入你的任务名称，按下回车键确认" />
            </div>
        )
    }
}