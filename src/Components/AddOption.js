import React from 'react'

export default class AddOption extends React.Component{

    handleFormSubmit = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        const error = this.props.handleAddOption(option)
        if(!error){
            e.target.elements.option.value = ''
        }

        this.setState(()=> ({error}))
    };
    
    state = {
        error: undefined
    }
    

    render(){

        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleFormSubmit}>
                    <input className="add-option__input" type="text" placeholder="Enter Option" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}