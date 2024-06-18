import clsx from "clsx";
import "./styles.css";
import { memo } from "react";

const ListButton = ({
  languages,
  filterByLanguage,
}: {
  languages: string[];
  filterByLanguage: (language: string) => void;
}) => {
  return (
    <div className="list-button">
      {languages?.map((language) => (
        <button
          key={language}
          onClick={() => filterByLanguage(language)}
          className={clsx("button-language", {
            typescript: language === "TypeScript",
            javascript: language === "JavaScript",
            r: language === "R",
            python: language === "Python",
            notebook: language === "Jupyter Notebook",
            css: language === "CSS",
          })}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default memo(ListButton);
