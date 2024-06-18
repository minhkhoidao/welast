import { FC, memo, ReactElement } from "react";
import useOpenModal from "../../hooks/useOpenModal";
import { IRepoResonpseTransform } from "../../types/repoResponseTransform";
import Tag from "../Tag";
import "./styles.css";

interface CardItemProps {
  item?: IRepoResonpseTransform;
}

const CardItem: FC<CardItemProps> = ({ item }): ReactElement => {
  const { name, description, language, forks } = item || {};
  const { handleOpen } = useOpenModal();

  return (
    <div className="card" onClick={handleOpen} role="button">
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <Tag language={language} />
      <p className="fork">forks: {forks}</p>
    </div>
  );
};

export default memo(CardItem);
