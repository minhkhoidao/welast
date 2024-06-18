import { useQuery } from "@tanstack/react-query";
import { ListCommit, ListRepos } from "../api/repos";
import { ConvertToTimeStamp } from "../utils/convertTimestampt";
import { transformKeysToCamelCase } from "../utils/toCamelCase";

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
    return useQuery({
      queryKey: [QUERY_KEY_LIST_COMMIT, name],
      queryFn: async () => {
        const data = await ListCommit(name!);
        const dataTransform = data?.map((item) =>
          transformKeysToCamelCase(item?.commit)
        );
        return dataTransform;
      },
      staleTime: STALE_TIME,
      enabled: !!name,
    });
  };
}
