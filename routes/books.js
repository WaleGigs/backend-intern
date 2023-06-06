import express from 'express'
import { createEvent, deleteEvent, getAllEvent, getEventBySearch, getEventCount, getFeaturedEvent, getSingleEvent, updateEvent} from '../controllers/bookController.js'
import { verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()
router.post('/', verifyAdmin, createEvent)
router.put('/:id', verifyAdmin, updateEvent)
router.delete('/:id', verifyAdmin, deleteEvent)
router.get('/:id', getSingleEvent)
router.get('/', getAllEvent)
router.get('/search/getEventBySearch', getEventBySearch)
router.get('/search/getFeaturedEvent', getFeaturedEvent)
router.get('/search/getEventCount', getEventCount)
export default router;