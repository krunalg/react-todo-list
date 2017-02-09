import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoList from './TodoList'
import * as actions from '../redux/actions'

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleChange(e) {
        this.props.dispatch(actions.changeText(e.target.value, "inputText"));
    }
    handleOnKeyUp(e) {
        if (e.keyCode === 13) {
            let id = Date.now();
            let text = this.props.inputText;
            this.props.dispatch(actions.addTodo(text, id));
            this.props.dispatch(actions.clearText("inputText"));
            e.preventDefault();
        }
    }
    addTodo(e) {
        let id = Date.now();
        let text = this.props.inputText;
        this.props.dispatch(actions.addTodo(text, id));
        this.props.dispatch(actions.clearText("inputText"));
    }
    render() {
        return (
            <div className="panel panel-default col-lg-4">
                <div className="panel-body">
                    <div className="input-group col-lg-12 todo-textbox">
                        <input className="form-control" type="text" placeholder="Todo Text"
                            onChange={this.handleChange.bind(this)}
                            value={this.props.inputText} onKeyUp={this.handleOnKeyUp.bind(this)} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>Add Item</button>
                        </span>
                    </div>
                    <TodoList todos={this.props.todos} dispatch={this.props.dispatch} />
                </div>
            </div>
        )
    }
}

export default TextInput