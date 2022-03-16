import React,{Component} from 'react'
export default class Count extends Component{
    state = {
        // num:0,
    }

    // componentDidMount(){ //组件挂载完毕
    //     //检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({});
    //     })
    // }
    /*== 加 ==*/
    handleAdd = ()=>{
        const {value} = this.selectNumber;
        this.props.jia(value*1);
    }
    /*== 减 ==*/
    handleSubtraction = ()=>{
        const {value} = this.selectNumber;
        this.props.jian(value*1);
    }
    /*== 奇数加 ==*/
    handleOdd = ()=>{
        const {value} = this.selectNumber;
        if(this.props.count % 2 !==0) {
            this.props.jia(value*1);
        }
    }/*== 异步加 ==*/
    handleAsync = ()=>{
        const {value} = this.selectNumber;
        this.props.yibu(value*1,500);
    }
    render(){
        //console.log('@==',this.props);
        return(
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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