import express from 'express';
const router = express.Router();
router.get('/all').route('/').get().post().put().delete();
export default router;
