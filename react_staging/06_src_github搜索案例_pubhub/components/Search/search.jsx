import React,{Component} from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

//创建并暴露Search组件
export default class Search extends Component{
    //search：消息发布
    handleSearch = ()=>{
        //获取输入的值
        const {value} = this.keyWord;
        if(value==="") return alert("请输入点东西吧~") ;
        //发送请求前通知List更新状态
        PubSub.publish('updatestate',{isFirst:false,isLoading:true});
        //发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                //请求成功后通知List更新状态
                PubSub.publish('updatestate',{isLoading:false,users:response.data.items})
            },
            error => {
                //请求失败后通知List更新状态
                PubSub.publish('updatestate',{isLoading:false,err:error.message});
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