import React from 'react'
import Option from './Option'



const Options = (props) =>{



    const handleRemoveAll = () =>{
        console.log(props.options)
        props.handleDeleteOptions()
    }

        return (
            <div> 
            {props.options.length === 0 && <p>Please Enter some options </p>}
            <button onClick={handleRemoveAll}>Remove All</button>
            {props.options.map((option)=> {
                return <Option 
                key={option} 
                option={option} 
                handleDeleteOption={props.handleDeleteOption}
                />
            })}
            </div>
        )
}
export default Options



