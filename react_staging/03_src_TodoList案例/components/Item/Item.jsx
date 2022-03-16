import React,{Component} from 'react'
import './Item.css'

//创建并暴露Item组件
export default class Item extends Component{
    //状态
    state = {mouse:false}
    
    //更新样式
    handleMouse = (flag)=>{
        return ()=>{
            //更新
            this.setState({mouse:flag});
        }
    }
    
    //更新checked状态
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    //删除一个todos的回调
    handleDetele = (id)=>{
        if(window.confirm('确定删除？')){
            this.props.deleteTodo(id);
        }
    }

    render(){
        const {id,name,done} = this.props;
        return(
            <li style={{backgroundColor:this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDetele(id)}} className="btn btn-danger" style={{display:this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}