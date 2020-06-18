import React from 'react'
import Option from './Option'



const Options = (props) =>{



    const handleRemoveAll = () =>{
        console.log(props.options)
        props.handleDeleteOptions()
    }

        return (
            <div> 
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                <button className="button--link" onClick={handleRemoveAll}>Remove All</button>
            </div>
            {props.options.length === 0 && 
            <p className="widget__message">
                Please Enter some options 
            </p>}
            {props.options.map((option,index)=> {
                return <Option 
                key={option} 
                option={option} 
                count={index+1}
                handleDeleteOption={props.handleDeleteOption}
                />
            })}
            </div>
        )
}
export default Options



