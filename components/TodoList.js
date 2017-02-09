import React, { Component } from 'react'
import { find } from 'lodash'

import { editTodo, saveTodo, resetTodo, changeText } from '../redux/actions'

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    handleClick(id, e) {
        this.props.dispatch(editTodo(find(this.props.todos, function (todo) {
            return todo.id === id;
        }).id));
    }
    handleOnKeyUp(e) {
        if (e.keyCode === 13) {
            this.props.dispatch(saveTodo(e.target.id, e.target.value));
        } else if (e.keyCode === 27) {
            this.props.dispatch(resetTodo(e.target.id));
        } else {
            this.props.dispatch(changeText(e.target.value, "editText"));
        }
    }
    handleBlur(id, e) {
        this.props.dispatch(resetTodo(find(this.props.todos, function (todo) {
            return todo.id === id;
        }).id));
    }
    handleChange(e) { }
    render() {
        const list = this.props.todos.map((todo, index) => {
            var listItem = <div key={todo.id}
                className={todo.completed ? "todo-completed list-group-item" : "list-group-item"}>
                <span className="todo-text" onClick={this.handleClick.bind(this, todo.id)}>{todo.text}</span>
                <div className="pull-right">
                    <button type="button" className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </button>&nbsp;
                <button type="button" className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                    </button>
                </div>
            </div>;
            var editableItem = <div key={todo.id} className="list-group-item"><input type="text"
                className="form-control"
                placeholder={todo.text}
                onChange={this.handleChange.bind(this)}
                onBlur={this.handleBlur.bind(this, todo.id)}
                onKeyUp={this.handleOnKeyUp.bind(this)}
                autoFocus id={todo.id} />
            </div>
            if (todo.canEdit) {
                return editableItem;
            } else {
                return listItem;
            }
        });

        return (
            <div className="col-lg-13 clear">
                <div className="list-group">
                    {list}
                </div>
            </div>
        )
    }
}

export default TodoList