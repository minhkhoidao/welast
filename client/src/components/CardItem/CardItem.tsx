import clsx from "clsx";
import { FC, memo, ReactElement, useState } from "react";
import { IRepoResonpseTransform } from "../../types/repoResponseTransform";
import "./styles.css";

interface CardItemProps {
  item?: IRepoResonpseTransform;
}

const CardItem: FC<CardItemProps> = ({ item }): ReactElement => {
  const {
    name,
    description,
    language,
    id,
    forks,
    updatedAt,
    fullName,
    gitCommitsUrl,
    owner,
  } = item || {};
  const [idDetail, setIdDetail] = useState<number>(0);

  const handleShowDetail = (id: number) => {
    setIdDetail(id);
  };

  const handleShowLessDetail = () => {
    setIdDetail(0);
  };

  const renderButtonMore = () => {
    if (idDetail === 0) {
      return (
        <div
          className="detail"
          role="button"
          onClick={() => handleShowDetail(id!)}
        >
          <span>{">>"}</span>
          <p>More Details</p>
        </div>
      );
    }
    return (
      <div className="detail" role="button" onClick={handleShowLessDetail}>
        <span>{">>"}</span>
        <p>Less</p>
      </div>
    );
  };

  return (
    <div className="card">
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <div
        className={clsx("tag", {
          typescript: language === "TypeScript",
          javascript: language === "JavaScript",
          r: language === "R",
          python: language === "Python",
          notebook: language === "Jupyter Notebook",
          css: language === "CSS",
        })}
      >
        <p className="language">{language}</p>
      </div>
      <p className="fork">forks: {forks}</p>
      {renderButtonMore()}
      {idDetail === id && (
        <>
          <p className="description">
            Commit date:<span className="text-detail">{updatedAt}</span>
          </p>
          <p className="description">
            Author: <span className="text-detail">{owner?.login}</span>
          </p>
          <p className="description">
            Message: <span className="text-detail">{gitCommitsUrl}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default memo(CardItem);
