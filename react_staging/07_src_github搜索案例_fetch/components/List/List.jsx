import React,{Component} from 'react'
import PubSub from 'pubsub-js';
import './List.css'

//创建并暴露List组件
export default class List extends Component{

    //初始化状态
    state = {
        users:[], //users初始值为数组
        isFirst:true, //是否为第一次打开页面
        isLoading:false, //标识是否处于加载中
        err:'', //存储请求相关的错误信息
    };

    //页面初始化：消息订阅
    componentDidMount(){
        this.token = PubSub.subscribe('updatestate',(msg,data)=>{
            this.setState(data);
        })
    }
    //组件即将卸载:取消消息订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }

    render(){
        const {users,isFirst,isLoading,err} = this.state;
        return(
            <div className='row'>
                <h2 style={{display:isFirst ? 'block' : 'none'}}>欢迎</h2>
                <h2 style={{display:isLoading ? 'block' : 'none'}}>Loading...</h2>
                <h2 style={{color:'red'}}>{err}</h2>
                {
                    users.map((userObj)=>{
                        return(
                                <div key={userObj.id} className='card'>
                                    <a href={userObj.html_url} target="_blank" rel='noreferrer'>
                                        <img alt='avatar' src={userObj.avatar_url} style={{width:'100px'}}></img>
                                        <p className='card-text'>{userObj.login}</p>
                                    </a>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}