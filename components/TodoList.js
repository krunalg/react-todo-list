import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        const list = this.props.todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default TodoList