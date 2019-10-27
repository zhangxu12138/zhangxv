import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.doing}</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=>{
                            if(!item.check){
                                return (
                                    <li key={idx}>
                                        <input type='checkbox' checked={item.check} onChange={()=>this.props.change(idx)} />
                                        {item.data}<button onClick={()=>this.props.del(idx)} className='button'>删除</button>
                                    </li>
                                )
                            }
                                
                                
                        })
                    }
                </ul>
                
                <h1>已经完成{this.props.end}</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=>{
                            if(item.check){
                                return (
                                    <li key={idx}>
                                        <input type='checkbox' checked={item.check} onChange={()=>this.props.change(idx)} />
                                        {item.data}<button onClick={()=>this.props.del(idx)} className='button'>删除</button>
                                    </li>
                                )
                            }    
                        })
                    }
                </ul>
            </div>    
        )
    }
}
