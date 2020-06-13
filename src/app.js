class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['one','two','three']

        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options = {options}/>
            <AddOption />
            </div>
        )

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
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return (<div> {this.props.options.map((option)=>{
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
    render(){

        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Option"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }

    
}



ReactDOM.render(<IndecisionApp />,document.getElementById('app'))