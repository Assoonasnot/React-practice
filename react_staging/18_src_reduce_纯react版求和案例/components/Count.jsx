import React,{Component} from 'react'

export default class Count extends Component{
    state = {
        num:0,
    }
    /*== 加 ==*/
    handleAdd = ()=>{
        const {value} = this.selectNumber;
        const {num} = this.state;
        this.setState({num:num+value*1});
    }
    /*== 减 ==*/
    handleSubtraction = ()=>{
        const {value} = this.selectNumber;
        const {num} = this.state;
        this.setState({num:num-value*1});
    }
    /*== 奇数加 ==*/
    handleOdd = ()=>{
        const {value} = this.selectNumber;
        const {num} = this.state;
        if(num % 2 !==0) {
            this.setState({num:num+value*1});
        }
    }/*== 异步加 ==*/
    handleAsync = ()=>{
        const {value} = this.selectNumber;
        const {num} = this.state;
        setTimeout(()=>{
            this.setState({num:num+value*1});
        },500)
    }
    render(){
        return(
            <div>
                <h1>当前求和为：{this.state.num}</h1>
                <hr/>
                <select ref={(c)=>{this.selectNumber = c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.handleAdd}>+</button>&nbsp;
                <button onClick={this.handleSubtraction}>-</button>&nbsp;
                <button onClick={this.handleOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.handleAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}