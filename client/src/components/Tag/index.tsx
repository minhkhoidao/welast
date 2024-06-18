import clsx from "clsx";
import { memo } from "react";
import "./styles.css";

const Tag = ({ language }: { language?: string }) => {
  return (
    <div
      className={clsx("tag", {
        typescript: language === "Typescript",
        javascript: language === "JavaScript",
        r: language === "R",
        python: language === "Python",
        notebook: language === "Jupyter Notebook",
        css: language === "CSS",
      })}
    >
      <p className="language">{language}</p>
    </div>
  );
};

export default memo(Tag);
