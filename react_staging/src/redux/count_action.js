import { INCREMENT,DECREMENT } from "./constant"
// import store from "./store"

/*
    该文件专门为Count组件生成action对象
*/
// function createIncrementAction (data) {
//     return {type:'increment',data:data}
// }
/*  || || || */
export const createIncrementAction = data => ({type:INCREMENT,data})  //执行同步action return 一个 Object

export const createDecrementAction = data => ({type:DECREMENT,data})

export const createIncrementAsyncAction = (data,time) => { //执行异步action return 一个 function
    return (dispatch)=>{
        setTimeout(()=>{
            return dispatch(createIncrementAction(data))
        },time)
    }
}
