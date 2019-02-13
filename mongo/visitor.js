const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoordsSchema = new Schema({
  lat: {type: Number},
  lon: {type: Number},
})

const VisitorSchema = new Schema({
  session: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  timezone: { type: String, required: true },
  browser: { type: String, required: true },
  browser_version: { type: String, required: true },
  os: { type: String, required: true },
  platform: { type: String, required: true },
  mobile: { type: Boolean, required: true },
  desktop: { type: Boolean, required: true },
  coords: CoordsSchema,
},{
  timestamps: true,
});

const Visitor = mongoose.models.company || mongoose.model('visitors', VisitorSchema);
module.exports = Visitor;
