import React, { Component } from 'react'
import { find } from 'lodash'

import { editTodo, changeText } from '../redux/actions'

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleDoubleClick(id) {
        this.props.dispatch(editTodo(find(this.props.todos, function (todo) {
            return todo.id === id;
        }).id));
    }
    handleOnKeyUp(e) {
        if (e.keyCode === 13) {
            console.log("enter pressed")
        } else {
            this.props.dispatch(changeText(e.target.value, "editText"));
        }
    }
    handleChange(e) {
        //this.props.dispatch(actions.changeText(e.target.value, "editText"));
    }
    render() {
        const list = this.props.todos.map((todo) => {
            var listItem = <li onDoubleClick={this.handleDoubleClick.bind(this, todo.id)} key={todo.id}>{todo.text}</li>;
            var editableItem = <li key={todo.id}><input type="text"
                placeholder={todo.text}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handleOnKeyUp.bind(this)} /></li>
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