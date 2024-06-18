import express from 'express';
import { ReposController } from '../controllers/repos.controllers';

const router = express.Router();

router.route('/').get(ReposController.ListRepos);
router.route('/:name').get(ReposController.ListCommit);

export default router;
