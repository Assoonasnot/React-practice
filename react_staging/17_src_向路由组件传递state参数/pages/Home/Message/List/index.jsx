import React,{Component} from 'react'
import { useLocation } from 'react-router-dom';

const ListData = [
    {id:'01',content:'你好，春天'},
    {id:'02',content:'你好，夏天'},
    {id:'03',content:'你好，秋天'},
    {id:'04',content:'你好，冬天'}
]
//创建并暴露组件
export default function List(){
    //render(){
        //接受参数
        const location = useLocation();
        console.log(location);
        const {id,title} = location.state;

        const result = ListData.find((ListDataObj)=>{
            return ListDataObj.id === id;
        })
        return(
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{result.content}</li>
            </ul>
)
   // }
}