import { useQuery } from "@tanstack/react-query";
import { ListRepos } from "../api/repos";
import { transformKeysToCamelCase } from "../utils/toCamelCase";
import { ConvertToTimeStamp } from "../utils/convertTimestampt";

//query key to invalidate cache
export const QUERY_KEY_LIST_REPOS = "REPOKEY";
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
}
