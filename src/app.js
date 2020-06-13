class IndecisionApp extends React.Component{

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid item'
        } else if (this.state.options.indexOf(option) > -1 ){
            return 'This item is already present'
        }

        this.setState((prevState)=>{
            console.log(prevState.options)
            console.log(option)
            return {
                options:prevState.options.concat(option)
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)

    }
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length === 0?false:true}
                handlePick={this.handlePick}
            />
            <Options 
            options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
            </div>
        )
    }
    

    constructor(props){
        super(props)
        this.state = {
            options:['one','two','three']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }

}

class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{


    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    }


}

class Options extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }


    handleRemoveAll(){
        console.log(this.props.options)
        this.props.handleDeleteOptions()
    }

    render(){
        return (<div> 
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option)=>{
                return <Option key={option} option={option}/>
            })}
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return <p>{this.props.option}</p>
    }
}

class AddOption extends React.Component{

    handleFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        e.target.elements.option.value = ''
        const error = this.props.handleAddOption(option)



        this.setState(()=>{
            return {error}
        })

    }

    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    

    render(){

        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" placeholder="Enter Option" name="option"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }


}



ReactDOM.render(<IndecisionApp />,document.getElementById('app'))