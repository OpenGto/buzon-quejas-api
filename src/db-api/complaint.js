import Debug from 'debug'
import { Complaint } from '../models'

const debug = new Debug('buzon-quejas-api:db-api:complaint')

export default {
  findAll: (sort = '-createdAt') => {
    debug('Finding all complaints')

    return Complaint.find().sort(sort)
  },

  findById: (_id) => {
    debug(`Finding complaint with id: ${_id}`)

    return Complaint.findOne({ _id })
  },

  createComplaint: (c) => {
    debug(`Creating new complaint ${c}`)

    const complaint = new Complaint(c)
    return complaint.save()
  }
}