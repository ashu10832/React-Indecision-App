// JSX - Javascript expressions
console.log('App.js loaded')

const app = {
    title:'Indecision App',
    subtitle:'Let computer decide',
    options:[]
}

const onFormSubmit = (e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value
    if(!option){
        return
    }
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
    
    console.log('Form Submitted')


}


const removeAll = ()=>{
    app.options = []
    renderApp()
}

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}




const renderApp = ()=>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subtitle}</p>}
            <p>{app.options.length >= 3 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>


            <ol>
                {app.options.map((opt)=> <li key={opt}>{opt}</li>)}
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Submit</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById('app')

    ReactDOM.render(template,appRoot)


}

renderApp()