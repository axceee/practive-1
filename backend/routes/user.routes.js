import {Router} from "express";
import {createItem,getItem} from '../controllers/item.controller.js'

const router = Router()

router.post('/submit',createItem)
router.get('/getItem',getItem)

export default router