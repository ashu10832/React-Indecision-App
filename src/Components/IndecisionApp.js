import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Options from './Options'
import Header from './Header'

export default class IndecisionApp extends React.Component{


    state = {
        options:[]
    }

    handleDeleteOptions = () => {
        this.setState(()=> ({options:[]}))
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({options:prevState.options.filter(item => item!==option)}))
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid item'
        } else if (this.state.options.indexOf(option) > -1 ){
            return 'This item is already present'
        }

        this.setState((prevState)=> ({options:prevState.options.concat(option)}))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    componentDidMount(){
        try {
            console.log('Fetching data!')
            const json = localStorage.getItem('options')
            if(json){
                this.setState(()=> ({options:JSON.parse(json)}))   
            }
        } catch (error) {
            // Do nothing
        }

    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log('saving data')
            localStorage.setItem('options',JSON.stringify(this.state.options))

        }
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
            <Header subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length === 0?false:true}
                handlePick={this.handlePick}
            />
            <Options 
            options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
            </div>
        )
    }



}
