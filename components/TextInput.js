import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            inputText : ""
        }
    }
    handleChange(event){
        this.setState({inputText:event.target.value});
    }
    render(){
        return (
            <div>
                <TextDisplay text={this.state.inputText} />
                <input type="text" placeholder="sample value" 
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.inputText} />
            </div>
        )
    }
}

export default TextInput