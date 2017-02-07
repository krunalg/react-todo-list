import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import * as actions from '../redux/actions'

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleChange(e) {
        this.props.dispatch(actions.changeText(e.target.value, "inputText"));
        e.preventDefault();
    }
    handleOnKeyUp(e) {
        if (e.keyCode === 13) {
            let id = Date.now();
            let text = this.props.inputText;
            this.props.dispatch(actions.addTodo(text, id));
            this.props.dispatch(actions.clearText("inputText"));
            e.preventDefault();
        }
        e.preventDefault();
    }
    addTodo(e) {
        let id = Date.now();
        let text = this.props.inputText;
        this.props.dispatch(actions.addTodo(text, id));
        this.props.dispatch(actions.clearText("inputText"));
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Todo Text"
                    onChange={this.handleChange.bind(this)}
                    value={this.props.inputText} onKeyUp={this.handleOnKeyUp.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add Item</button>
            </div>
        )
    }
}

export default TextInput