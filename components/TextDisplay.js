import React, {Component} from 'react'

class TextDisplay extends Component{
    render(){
        return <div>Text: {this.props.text}</div>
    }
}

export default TextDisplay