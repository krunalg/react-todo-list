import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextInput from './TextInput'

function mapStateToProps(state) {
    return state
}
class App extends Component {
    render() {
        return (
                <TextInput inputText={this.props.todosreducer.inputText} dispatch={this.props.dispatch} todos={this.props.todosreducer.todos} />
        )
    }
}

export default connect(mapStateToProps)(App)