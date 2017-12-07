import { complaint } from '../db-api'
import { handleError } from '../utils'

export const findComplaintMiddleware = async (req, res, next)  => {

  try {
    req.complaint = await complaint.findById(req.params.id)
    next()
  } catch (error) {
    handleError(error, res)
  }
}
