import express from 'express'
import { menuItems, addMenuItem} from '../controllers/menu.controller.js';
const router = express.Router();

router.get('/', menuItems)
router.post('/', addMenuItem)
export default router