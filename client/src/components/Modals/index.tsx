import { FC } from "react";
import "./styles.css";
import Tag from "../Tag";
import { useSelectItem } from "../../store/useSelectItem";
import { useShallow } from "zustand/react/shallow";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
  const { item } = useSelectItem(
    useShallow((state) => ({
      item: state.item,
    }))
  );

  console.log(item, "item");
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-header">
            <h1>{item.name}</h1>
            <span className="close" onClick={onClose} role="button">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <p>{item.description}</p>
            <Tag language={item.language} />
            <p>fork: {item.forks}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
