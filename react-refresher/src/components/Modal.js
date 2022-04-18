import React from "react";

const Modal = (props) => {
    const { onCancel } = props;
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={onCancel}>
                Cancel
            </button>
            <button className="btn">Confirm</button>
        </div>
    );
};

export default Modal;
