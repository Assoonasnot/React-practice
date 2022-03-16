import React,{Component} from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

//创建并暴露Search组件
export default class Search extends Component{
    //search：消息发布
    handleSearch = async()=>{
        //获取输入的值
        const {value} = this.keyWord;
        if(value==="") return alert("请输入点东西吧~") ;
        //发送请求前通知List更新状态
        PubSub.publish('updatestate',{isFirst:false,isLoading:true});
        //发送网络请求---axios发送请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response => {
        //         //请求成功后通知List更新状态
        //         PubSub.publish('updatestate',{isLoading:false,users:response.data.items})
        //     },
        //     error => {
        //         //请求失败后通知List更新状态
        //         PubSub.publish('updatestate',{isLoading:false,err:error.message});
        //     }
        // )

        //发送网络请求---fetch发送请求(未优化)
        // fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response =>{
        //         console.log('联系服务器成功了');
        //         return response.json() //返回response中的.json()方法
        //     },
        //     error =>{
        //         console.log('联系服务器失败了',error);
        //         return new Promise(()=>{}) //返回一个空的Promise对象
        //     }
        // ).then(
        //     response => {
        //         console.log('获取数据成功了',response)
        //     },
        //     error => {
        //         console.log('获取数据失败了',error)
        //     }
        // )

        //发送网络请求---fetch发送请求(优化1)
        // fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json()
        //     },
        // ).then(
        //     response => {console.log('获取数据成功了',response)},
        // ).catch(
        //     error => {
        //         console.log('获取数据出错',error)
        //     }
        // )

        //发送网络请求---fetch发送请求(优化2)
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${value}`);
            const result = await response.json();
            const {items} = result;
            //console.log('请求成功！',result);
            PubSub.publish('updatestate',{isLoading:false,users:items});
        } catch (error) {
            console.log('请求出错！',error);
            PubSub.publish('updatestate',{isLoading:false,err:error.message});
        }

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