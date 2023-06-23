"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var artwork_1 = require("./artwork");
var artistSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    image: String,
    style: { type: String, required: true },
    bio: { type: String, required: true },
}, { toJSON: { virtuals: true } });
artistSchema.virtual('artworks', {
    ref: 'Artwork',
    localField: '_id',
    foreignField: 'artist',
});
artistSchema.virtual('commissions', {
    ref: 'Commission',
    localField: '_id',
    foreignField: 'artist',
});
artistSchema.post('findOneAndDelete', function (doc) {
    if (doc) {
        artwork_1.default.deleteMany({ artist: doc._id })
            .then(function (status) { return console.log(status); })
            .catch(function (error) { return console.error('Error deleting associated artworks:', error); });
    }
});
var Artist = mongoose_1.default.model('Artist', artistSchema);
exports.default = Artist;
