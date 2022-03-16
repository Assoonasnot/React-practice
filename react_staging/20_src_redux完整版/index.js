//引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import store from '../src/redux/store'

//渲染组件
ReactDOM.render(<App/>,document.getElementById('root'));

//store.subscribe 订阅redux状态更新
store.subscribe(()=>{ //检测redux状态，更新则重新render整个App
    //渲染组件
    ReactDOM.render(<App/>,document.getElementById('root'));
})
