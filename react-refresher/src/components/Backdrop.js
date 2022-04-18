import React from "react";

const Backdrop = (props) => {
    const { closeModal } = props;
    return <div className="backdrop" onClick={closeModal} />;
};

export default Backdrop;
