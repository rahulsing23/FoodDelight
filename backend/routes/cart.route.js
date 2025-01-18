import express from 'express'
import { addCart, getCart } from '../controllers/cart.controller.js';

const router  = express.Router();

router.get('/', getCart) 
router.post('/', addCart)

export default router