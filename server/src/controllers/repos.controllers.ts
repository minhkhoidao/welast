import { Request, Response } from 'express';
import { ListCommitService, ListReposService } from '../services/repo.service';
import { IRepo } from '../types';

export namespace ReposController {
  export const ListRepos = async (_req: Request, res: Response) => {
    try {
      const data = await ListReposService();
      const dataWithCommit = await Promise.all(
        data?.map((item: IRepo) => {
          return ListCommitService(item?.name!);
        }),
      );
      res.status(201).json({
        success: true,
        data,
        commit: dataWithCommit,
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
