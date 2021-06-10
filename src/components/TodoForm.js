import React, { Component } from 'react'

export default class TodoForm extends Component {
    state = {
        text: ''
    }
    inputChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        return (
            <>
                <form className='todo-form' onSubmit = {(e) => {
                    e.preventDefault()
                    this.props.addTodo(this.state.text)
                    this.setState({text: ''})
                }}>
                    <input 
                        className='todo-input '
                        type="text"
                        value = {this.state.text}
                        onChange = {this.inputChange}/>
                    <button className="todo-button">add</button>
                </form>
            </>
        )
    }
}
