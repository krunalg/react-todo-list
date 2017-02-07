import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import * as actions from '../redux/actions'

class TextInput extends Component {
    constructor(props, context) {
        super(props, context)
    }
    handleChange(e) {
        this.props.dispatch(actions.changeText(e.target.value, "inputText"));
    }
    addTodo(e){
        let id = Date.now();
        let text = this.props.inputText;
        this.props.dispatch(actions.addTodo(text,id));
        this.props.dispatch(actions.clearText("inputText"));
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Todo Text"
                    onChange={this.handleChange.bind(this)}
                    value={this.props.inputText} />
                <button onClick={this.addTodo.bind(this)}>Add Item</button>
            </div>
        )
    }
}

export default TextInput