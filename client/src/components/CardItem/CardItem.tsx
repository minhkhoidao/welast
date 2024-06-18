import clsx from "clsx";
import { FC, memo, ReactElement, useState } from "react";
import { IRepoResonpseTransform } from "../../types/repoResponseTransform";
import "./styles.css";
import Tag from "../Tag";
import useOpenModal from "../../hooks/useOpenModal";

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
