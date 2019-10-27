import React, { Component } from 'react'
import Todoinput from './TodoInput'
import Todoing from './ToDoing'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:JSON.parse(localStorage.getItem('aa'))||[],
            doing:0,
            end:0
        }
    }
    componentWillMount(){
        this.count();
    }
    addItem = (data)=>{
        var a = {
            data:''+data,
            check:false
        }
        var todo = [...this.state.todo]
        todo.push(a)
        this.setState({
            todo:todo,
            // doing:this.state.doing+1
        },()=>{
            this.count();
            localStorage.setItem('aa',JSON.stringify(this.state.todo))
        })
    }
    delItem = (idx)=>{
        var todo = [...this.state.todo]
        todo.splice(idx,1);
        localStorage.setItem('aa',JSON.stringify(todo))
        this.count()
        this.setState({
            todo:todo
            
        },()=>{
            this.count()
        })
    }
    changeItem = (check)=>{
        var todo = [...this.state.todo]
        todo[check].check = !todo[check].check
        localStorage.setItem('aa',JSON.stringify(todo))
        this.count()
        this.setState({
            todo:todo
        },()=>{
            this.count()
        })
    }
    count=()=>{
        var doing = 0;
        var end = 0;
        var todo = this.state.todo;
        for(var i=0;i<todo.length;i++){
            if(!todo[i].check){
                doing++;
            }else{
                end++;
            }
        }
        this.setState({
            doing:doing,
            end:end
        })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo} change={this.changeItem} check={this.state.check} changeone={this.state.changeItem1} doing={this.state.doing} end={this.state.end} count={this.count}/>
            </div>
        )
    }
}
