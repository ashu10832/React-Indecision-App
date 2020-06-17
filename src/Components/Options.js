import React from 'react'
import Option from './Option'



export default class Options extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }


    handleRemoveAll(){
        console.log(this.props.options)
        this.props.handleDeleteOptions()
    }

    render(){
        return (
            <div> 
            {this.props.options.length === 0 && <p>Please Enter some options </p>}
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option)=> {
                return <Option 
                key={option} 
                option={option} 
                handleDeleteOption={this.props.handleDeleteOption}
                />
            })}
            </div>
        )
    }
}




