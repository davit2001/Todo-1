import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
export default class TodoList extends Component {
    state = {
        todos: [{
          id: 1,
          text: "todo 1"
        }, {
          id: 2,
          text: "todo 2"
        }, {
          id: 3,
          text: "todo 3"
        }]
      }

      addTodo = (text) =>{
           this.setState({
               todos: [...this.state.todos, {
                   id: Math.floor( Math.random() * 1000 ) + 1,
                   text
               }]
           })
      }
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo = (data) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id === data.id ? todo.text = data.text :  todo)
        })  
    }
    render() {
        return (
            <>
                <h1>Todo App</h1>
                <TodoForm addTodo = {this.addTodo} />
                 {this.state.todos.map((todo) => {
                    return (
                       <TodoItem 
                           todo={todo}
                           removeTodo={this.removeTodo}
                           editTodo={this.editTodo}
                           updateTodo = {this.updateTodo}
                       />
                    )
                 })}
            </>
        )
    }
}
