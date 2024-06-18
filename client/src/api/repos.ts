import axiosInstance from "../config/axios";
import { IRepoResonpse } from "../types/repoResponse";

export const ListRepos = async (): Promise<IRepoResonpse.Data[]> => {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: "/",
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const ListCommit = async (name: string) => {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: `/${name}`,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
