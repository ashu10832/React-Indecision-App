import Modal from 'react-modal';
import React from 'react';

 const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Text"
        onRequestClose={props.handleClearSelected}
        closeTimeoutMS={200}
        className="modal"
    >
    
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelected}>Okay</button>
    
    </Modal>
)
export default OptionModal