import React, { Component } from 'react'
import { find } from 'lodash'

import { editTodo, resetTodo, changeText } from '../redux/actions'

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleClick(id, e) {
        this.props.dispatch(editTodo(find(this.props.todos, function (todo) {
            return todo.id === id;
        }).id));
        e.preventDefault();
    }
    handleOnKeyUp(e) {
        if (e.keyCode === 13) {
            console.log("enter pressed")
        } else if (e.keyCode === 27) {
            this.props.dispatch(resetTodo(e.target.id));
        } else {
            this.props.dispatch(changeText(e.target.value, "editText"));
        }
        e.preventDefault();
    }
    handleBlur(id, e) {
        this.props.dispatch(resetTodo(find(this.props.todos, function (todo) {
            return todo.id === id;
        }).id));
        e.preventDefault();
    }
    handleChange(e) { }
    render() {
        const list = this.props.todos.map((todo) => {
            var listItem = <li onClick={this.handleClick.bind(this, todo.id)} key={todo.id}>{todo.text}</li>;
            var editableItem = <li key={todo.id}><input type="text"
                placeholder={todo.text}
                onChange={this.handleChange.bind(this)}
                onBlur={this.handleBlur.bind(this, todo.id)}
                onKeyUp={this.handleOnKeyUp.bind(this)}
                autoFocus id={todo.id}/></li>
            if (todo.canEdit) {
                return editableItem;
            } else {
                return listItem;
            }
        });

        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default TodoList