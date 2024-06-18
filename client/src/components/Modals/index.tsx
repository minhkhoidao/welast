import { FC } from "react";
import "./styles.css";
import Tag from "../Tag";
import { useSelectItem } from "../../store/useSelectItem";
import { useShallow } from "zustand/react/shallow";
import { CommitTransform } from "../../types/commitResponse";
import dayjs from "dayjs";
import { RepoService } from "../../services/repos.service";

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
  const { isLoading, data } = RepoService.GetListCommit(item?.name!);

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
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
            <p className="text-modal">
              fork: <span className="text-info">{item.forks}</span>
            </p>
            {data?.map((item: CommitTransform, index: number) => {
              return (
                <div key={index} className="info-author">
                  <p className="text-modal">
                    Author:{" "}
                    <span className="text-info">{item?.author?.name}</span>
                  </p>
                  <p className="text-modal">
                    Message: <span className="text-info">{item?.message}</span>
                  </p>
                  <p className="text-modal">
                    Commit date:{" "}
                    <span>
                      <span className="text-info">
                        {dayjs(item?.author?.date!).format("DD/MM/YYYY hh:mm")}
                      </span>
                    </span>
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
