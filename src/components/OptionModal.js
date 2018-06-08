import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Confirm delete expense?"
  >
    <h3>Confirm delete expense?</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleConfirmation}>Yes</button>
    <button onClick={props.handleClearSelectedOption}>No</button>
  </Modal>
);

export default OptionModal;