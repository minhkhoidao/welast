import { FC, memo, ReactElement } from "react";
import { useShallow } from "zustand/react/shallow";
import { useSelectItem } from "../../store/useSelectItem";
import { IRepoResonpseTransform } from "../../types/repoResponseTransform";
import Tag from "../Tag";
import "./styles.css";

interface CardItemProps {
  item?: IRepoResonpseTransform;
  onOpen: () => void;
}

const CardItem: FC<CardItemProps> = ({ item, onOpen }): ReactElement => {
  const { name, description, language, forks } = item || {};
  const { setItem } = useSelectItem(
    useShallow((state) => ({
      setItem: state.setItem,
    }))
  );
  const handleOpenModal = () => {
    setItem(item!);
    onOpen();
  };

  return (
    <div className="card" onClick={handleOpenModal} role="button">
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <Tag language={language} />
      <p className="fork">forks: {forks}</p>
    </div>
  );
};

export default memo(CardItem);
