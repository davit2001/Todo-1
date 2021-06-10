import React, { Component } from 'react'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import TodoForm from './TodoForm'

export default class TodoItem extends Component {
    state = {
        isEditing: false,
        edit: {
            id: '',
            text: ''
        }
    }

    editTodo = (id, text) => {
      this.setState({
          isEditing: true,
          edit: {id, text}
        })
    }
    
    inputChange = (text) => {
       this.setState({
        edit: {
            id: this.state.edit.id,
            text
        }
       })
    }
    render() {
      
        return (
            <>
            
                <div   key = {this.props.todo.id} className = "todo-row">
                   { this.state.isEditing ? (
                      <div className = "todo-edit">
                        <input 
                              onChange = {(e) => {
                                  this.inputChange(e.target.value)
                                }
                             }
                              type = "text"
                               value = {this.state.edit.text}
                        />
                        <div className="icons"> 
                          <IoCheckmarkCircleSharp onClick = {() => { 
                              this.setState({isEditing: false})
                              this.props.updateTodo(this.state.edit) 
                              }} />
                           <MdCancel onClick = {() => {
                               this.setState({isEditing: false})
                           }}/>
                        </div>
                      </div>
                      ) :  <p>{this.props.todo.text} </p> 
                   }
                   <div className="icons">
                     
                    { !this.state.isEditing && (
                         <>
                         <TiDeleteOutline onClick = {() => this.props.removeTodo(this.props.todo.id)} />
                          <TiEdit onClick = {() => this.editTodo(this.props.todo.id, this.props.todo.text)}/>
                         </>
                     )}  
                   </div>
                 </div>
            </>
        )
    }
}
