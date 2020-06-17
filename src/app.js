class IndecisionApp extends React.Component{

    handleDeleteOptions(){
        this.setState(()=> ({options:[]}))
    }

    handleDeleteOption(option){
        this.setState((prevState) => ({options:prevState.options.filter(item => item!==option)}))
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid item'
        } else if (this.state.options.indexOf(option) > -1 ){
            return 'This item is already present'
        }

        this.setState((prevState)=> ({options:prevState.options.concat(option)}))
    }

    handlePick(){
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
    

    constructor(props){
        super(props)
        this.state = {
            options:props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

}

IndecisionApp.defaultProps = {
    options:[]
}


const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title:'Indecision App'
}


const Action = (props) =>{
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions} 
            >
                What should I do?
            </button>
        </div>
    )

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


const Option = (props) => {
    return (
    <div>
        <p>{props.option}</p>
        <button
        onClick={(e)=>{
            props.handleDeleteOption(props.option)
        }}
        >
        remove
        </button>

    </div>
    )
}


class AddOption extends React.Component{

    handleFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        const error = this.props.handleAddOption(option)
        if(!error){
            e.target.elements.option.value = ''
        }

        this.setState(()=> ({error}))
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





ReactDOM.render(<IndecisionApp options={['one']} />,document.getElementById('app'))