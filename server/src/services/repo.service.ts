import axiosInstance from '../config/axios';
import { IRepo } from '../types';

export const ListReposService = async () => {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: `${process.env.ADAPTER_ENPOINT}/repos`,
    });
    const repos = response.data.filter((repo: IRepo) => !repo.fork && repo.forks > 5);
    const data = repos.map((item: IRepo) => {
      return {
        name: item?.name,
        description: item?.description,
        language: item?.language,
        forks: item?.forks,
        id: item?.id,
        nodeId: item?.node_id,
      };
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const ListCommitService = async (name?: string) => {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: `${process.env.REPOS_ENPOINT}/${name!}/commits`,
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
