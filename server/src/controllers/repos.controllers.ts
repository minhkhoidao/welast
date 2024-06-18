import { Request, Response } from 'express';
import { ListCommitService, ListReposService } from '../services/repo.service';
import { IRepo } from '../types';

export namespace ReposController {
  export const ListRepos = async (_req: Request, res: Response) => {
    try {
      const data = await ListReposService();
      const listCommit = await Promise.all(
        data?.map((item: IRepo) => {
          return ListCommitService(item?.name!);
        }),
      );
      const commits = listCommit.map((item) => item?.commit!);

      const dataWithCommit = data.map((item: IRepo, index: number) => {
        return {
          ...item,
          commit: commits[index],
        };
      });
      console.log(data, 'dataWithCommit');
      res.status(201).json({
        success: true,
        data: dataWithCommit,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  };
}
