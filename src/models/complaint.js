import mongoose, { Schema } from "mongoose";


const ComplaintSchema = Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0, required: true },
  dislikes: { type: Number, default: 0, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});

export default mongoose.model('Complaint', ComplaintSchema)