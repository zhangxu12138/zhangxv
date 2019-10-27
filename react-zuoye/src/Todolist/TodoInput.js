import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
           
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }

    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>ToDoList</h1>
                <input onKeyDown={(e)=>this.handleInput(e)} onChange={(e)=>this.handleChange(e)} type="text" className='input'placeholder='请输入待办事项'/>
                
                
            </div>
        )
    }
}
