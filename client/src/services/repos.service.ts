import { useQuery } from "@tanstack/react-query";
import { ListCommit, ListRepos } from "../api/repos";
import { transformKeysToCamelCase } from "../utils/toCamelCase";
import { ConvertToTimeStamp } from "../utils/convertTimestampt";
import { useSelectItem } from "../store/useSelectItem";
import { useShallow } from "zustand/react/shallow";

//query key to invalidate cache
export const QUERY_KEY_LIST_REPOS = "REPOKEY";
export const QUERY_KEY_LIST_COMMIT = "COMMITKEY";
// time to invalidate cache
const STALE_TIME = 1000 * 60 * 5;

export namespace RepoService {
  export const GetListRepost = () => {
    return useQuery({
      queryKey: [QUERY_KEY_LIST_REPOS],
      queryFn: async () => {
        const data = await ListRepos();
        const dataTransform = data
          ?.map((item) => transformKeysToCamelCase(item))
          .sort(
            (a, b) =>
              ConvertToTimeStamp(b.createdAt) - ConvertToTimeStamp(a.createdAt)
          );
        return dataTransform;
      },
      staleTime: STALE_TIME,
      enabled: true,
    });
  };
  export const GetListCommit = (name?: string) => {
    const { setData } = useSelectItem(
      useShallow((state) => ({
        setData: state.setData,
      }))
    );
    return useQuery({
      queryKey: [QUERY_KEY_LIST_COMMIT, name],
      queryFn: async () => {
        const data = await ListCommit(name!);
        const dataTransform = data?.map((item) =>
          transformKeysToCamelCase(item?.commit)
        );
        setData(dataTransform);
        return dataTransform;
      },
      staleTime: STALE_TIME,
      enabled: !!name,
    });
  };
}
