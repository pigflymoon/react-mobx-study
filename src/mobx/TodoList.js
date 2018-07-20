import React from "react"
import {observer} from 'mobx-react'
@observer
export default class TodoList extends React.Component {
    
   createNew = (e) => {
       if(e.which === 13){
           this.props.store.createTodo(e.target.value)
           e.target.value = ""
       }
   }
    filter = (e) => {
        this.props.store.filter = e.target.value
    }
    
    render() {
        const {filter, todos,filteredTodos} =this.props.store
        const todoList = filteredTodos.map((todo,i) => (
            <li key={i}>{todo}</li>
        ))
        return <div>
            <h1>todos</h1>
            <div>{filter}</div>
            <input className="create" onKeyPress={this.createNew}/>
            <input className="filter" value={filter} onChange={this.filter}/>
            <ul>{todoList}</ul>
        </div>
    }
}