"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};
const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: {type: String }
  , species: { type: String }
  , picUrl: { type: String }
  , picUrlSq: { type: String }
  , avatarUrl: { type: String, required: true }
  , favoriteFood: { type: String }
  , description: { type: String, minlength: 140 }
  , price: {type: Number, required: true }
}, {
  timestamps: true
});
PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' });

PetSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('Pet', PetSchema);