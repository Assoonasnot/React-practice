import React,{Component} from 'react'
import { Link,Route,Routes } from 'react-router-dom';
import List from './List';

//创建并暴露组件
export default class Message extends Component{
    state = { 
        messageArray:[
            {id:'01',title:'消息01'},
            {id:'02',title:'消息02'},
            {id:'03',title:'消息03'},
            {id:'04',title:'消息04'}
        ]
    }
    render(){
        const {messageArray} = this.state;
        return(
            <div>
                <ul>
                    {
                        messageArray.map((msgObj) => {
                            return(
                                <li key={msgObj.id}>
                                    {/*向路由组件传递search参数*/}
                                    <Link to={`/home/message/list/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> {/*路由链接*/}
                                </li>
                            )
                        })
                    }
                </ul>

                <hr/>
                {/*search参数无需声明接收，正常注册路由即可*/}
                <Routes>
                    <Route  path='list' element={<List/>} />
                </Routes>
            </div>
        )
    }
}