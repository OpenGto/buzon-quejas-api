import express from 'express'
import { handleError } from '../utils'
import { findComplaintMiddleware } from '../middleware'
import { complaint } from '../db-api'

const app = express.Router()



// GET :: /api/complaints/
app.get('/', async (req, res) => {

  try {
    const { sort } = req.query
    const response = await complaint.findAll(sort)
    res.status(200).json(response)
  } catch (error) {
    handleError(error, res)
  }

})

// GET :: /api/complaints/:id
app.get('/:id', findComplaintMiddleware, async (req, res) => {

  try {
    res.status(200).json(req.complaint)
  } catch (error) {
    handleError(error, res)
  }

})

// POST :: /api/complaints/
app.post('/',async (req, res) => {

  try {

    const { title, imageUrl, description, likes, dislikes, status } = req.body

    const c = { title, imageUrl, description, likes, dislikes, status }

    const savedComplaint = await complaint.createComplaint(c)
    res.status(201).json(savedComplaint)

  } catch (error) {
    handleError(error, res)
  }

})


export default app