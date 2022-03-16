import React,{Component} from 'react'
import './List.css'

//创建并暴露List组件
export default class List extends Component{
    render(){
        return(
            <div className='row'>
                <h2 style={{display:this.props.isFirst ? 'block' : 'none'}}>欢迎</h2>
                <h2 style={{display:this.props.isLoading ? 'block' : 'none'}}>Loading...</h2>
                <h2 style={{color:'red'}}>{this.props.err}</h2>
                {
                    this.props.users.map((userObj)=>{
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