import { useCallback, useMemo, useState } from "react";
import { RepoService } from "../services/repos.service";

const useDataRepos = () => {
  const { data, isLoading } = RepoService.GetListRepost();
  const [dataLanguage, setDataLanguage] = useState<string>("All");

  //filter language and set language to state dataLanguage
  const filterByLanguage = useCallback(
    (language: string) => {
      setDataLanguage(language);
      return data?.filter((item) => item.language === language);
    },
    [data]
  );

  // render field langeuage in data
  const languages = useMemo(() => {
    const uniqueLanguages = data
      ?.map((repo) => repo.language)
      .filter(Boolean) || [
      "TypeScript",
      "JavaScript",
      "R",
      "Python",
      "CSS",
      "Jupyter Notebook",
    ];
    return ["All", ...new Set(uniqueLanguages)];
  }, [data]);

  //render data by language
  const renderDataByLanguage = useMemo(() => {
    if (dataLanguage) {
      if (dataLanguage === "All") {
        return data || [];
      }
      return data?.filter((item) => {
        return item.language === dataLanguage;
      });
    }
  }, [data, dataLanguage]);

  return {
    renderDataByLanguage,
    isLoading,
    languages,
    filterByLanguage,
  };
};

export default useDataRepos;
