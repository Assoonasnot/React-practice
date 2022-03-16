import React,{Component} from 'react'

//创建并暴露组件
export default class Message extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a href="message1">message1</a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="message2">message2</a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="message3">message3</a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="message4">message4</a>&nbsp;&nbsp;
                    </li>
                </ul>
            </div>
        )
    }
}