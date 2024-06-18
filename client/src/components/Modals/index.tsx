import { FC } from "react";
import "./styles.css";
import Tag from "../Tag";
import { useSelectItem } from "../../store/useSelectItem";
import { useShallow } from "zustand/react/shallow";
import { CommitTransform } from "../../types/commitResponse";
import dayjs from "dayjs";

interface ModalProps {
  open?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
  const { item, data } = useSelectItem(
    useShallow((state) => ({
      item: state.item,
      data: state.data,
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
            {data?.map((item: CommitTransform, index: number) => {
              return (
                <div key={index}>
                  <p>author: {item?.author?.name}</p>
                  <p>message: {item?.message}</p>
                  <p>
                    author:{" "}
                    {dayjs(item?.author?.date!).format("DD/MM/YYYY hh:mm")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
