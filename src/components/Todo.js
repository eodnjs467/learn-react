import React, {useCallback, useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

let count = 1;
function Todo(props) {
  console.log(count+=1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => setModalIsOpen(true);
  const closeModalHandler = useCallback(() => setModalIsOpen(false), []);
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className={"actions"}>
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onClick={closeModalHandler} />}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
  );
}

export default Todo;
