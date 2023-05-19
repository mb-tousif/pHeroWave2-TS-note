import express from 'express';
import { getAllUsers, postBulkData, postUserData } from './user.controller';

const router = express.Router();

router.post("/user/bulkData", postBulkData);
router.post("/user/userData", postUserData);

router.get("/user/allUsers", getAllUsers);

export default router;