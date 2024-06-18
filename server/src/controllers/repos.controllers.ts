import { Request, Response } from 'express';
import { ListCommitService, ListReposService } from '../services/repo.service';

export namespace ReposController {
  export const ListRepos = async (_req: Request, res: Response) => {
    try {
      const data = await ListReposService();

      res.status(201).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  };
  export const ListCommit = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const data = await ListCommitService(name);
      res.status(201).json({
        success: true,
        data: data,
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
