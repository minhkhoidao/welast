import { FC } from "react";
import "./styles.css";
import Tag from "../Tag";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-header">
            <h1>Some text in the Modal..</h1>
            <span className="close" onClick={onClose} role="button">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <p>Some text in the Modal..</p>
            <Tag language={"Typescript"} />
            <p>fork: 43</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
