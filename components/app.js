import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextInput from './TextInput'
import TodoList from './TodoList'

function mapStateToProps(state) {
    return state
}
class App extends Component {
    render() {
        return (
            <div>
                <TextInput inputText={this.props.todosreducer.inputText} dispatch={this.props.dispatch} />
                <TodoList todos={this.props.todosreducer.todos} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(App)