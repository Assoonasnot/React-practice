import React,{Component} from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Routes,Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component{
    render(){
        return(
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to={'/home/news'}>News</MyNavLink> {/* 编写路由链接 */}
                        </li>
                        <li>
                            <MyNavLink to={'/home/message'}>Message</MyNavLink> {/* 编写路由链接 */}
                        </li>
                    </ul>
                    {/*注册路由*/}
                    <Routes>
                        {/* 首次进入页面是重定向到 message */}
                        <Route path='*' element={<Navigate to="message" />} />

                        <Route  path='news' element={<News/>} />
                        <Route  path='message/*' element={<Message />} />
                    </Routes>
                </div>
            </div>
        )
    }
}