import React,{Component} from 'react'
import axios from 'axios';

//创建并暴露Search组件
export default class Search extends Component{
    //search
    handleSearch = ()=>{
        //处理isFirst
        this.props.handleisFirst(false);
        //处理错误后成功的err
        this.props.handleErr(" ");
        //获取输入的值
        const {value} = this.keyWord;
        if(value==="") return alert("请输入点东西吧~") ;
        //处理isLoading
        this.props.handleisLoading(true);
        //发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                //处理isLoading
                this.props.handleisLoading(false);
                //处理users
                this.props.saveUsers(response.data.items);
            },
            error => {
                //处理isLoading
                this.props.handleisLoading(false);
                //处理err
                this.props.handleErr(error.message);
            }
        )
    }

    render(){
        return(
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'>Search Github Users</h3>
                <div>
                    <input ref={(currentNode)=>{this.keyWord=currentNode}} type="text" placeholder='enter the name you search'/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}