const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitorMessageSchema = new Schema({
  user: { type: Number, required: true },
  session: { type: String, required: true },
  sender: { type: Number, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: 0 },
},{
  timestamps: true,
});

const VisitorMessage = mongoose.models.visitor_messages || mongoose.model('visitor_messages', VisitorMessageSchema);
module.exports = VisitorMessage;
