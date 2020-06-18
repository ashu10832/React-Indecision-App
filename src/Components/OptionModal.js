import Modal from 'react-modal';
import React from 'react';

 const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Text"
        onRequestClose={props.handleClearSelected}
    >
    
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelected}>Okay</button>
    
    </Modal>
)
export default OptionModal