import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { title, id } = props;
    const deleteTodo = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteTodo}>
                    Delete
                </button>
            </div>
            {showModal && (
                <>
                    <Modal onCancel={closeModal} />
                    <Backdrop closeModal={closeModal} />
                </>
            )}
        </div>
    );
};

export default Todo;
