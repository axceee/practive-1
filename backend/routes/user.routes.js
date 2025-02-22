import {Router} from "express";
import {createItem} from '../controllers/item.controller.js'

const router = Router()

router.post('/submit',createItem)

export default router