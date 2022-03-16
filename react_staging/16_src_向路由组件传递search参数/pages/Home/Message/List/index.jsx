import React,{Component} from 'react'
import { useSearchParams } from 'react-router-dom';

const ListData = [
    {id:'01',content:'你好，春天'},
    {id:'02',content:'你好，夏天'},
    {id:'03',content:'你好，秋天'},
    {id:'04',content:'你好，冬天'}
]
//创建并暴露组件
export default function List(){
    //render(){
        //接收search参数
        //const [params] = useSearchParams();
        const [searchParams,setSearchParams] = useSearchParams();
        //获取参数
        // const id = params.get("id");
        // console.log('id',id);
        // const title = params.get("title");
        // console.log('title',title);
        const id = searchParams.get('id');
        const title = searchParams.get('title');

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