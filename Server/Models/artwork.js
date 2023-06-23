"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require mongoose
var mongoose_1 = require("mongoose");
// Creating shorthand for the Schema constructor
var Schema = mongoose_1.default.Schema;
// Schema
var artworkSchema = new Schema({
    title: { type: String, required: true },
    pic: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId,
        required: true,
        ref: 'Artist'
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    year: Date,
    style: String,
    size: { type: String, required: true },
    sold: Boolean,
    copies: Number,
});
// Helper Methods
artworkSchema.methods.getArtworkBy = function () {
    var _a;
    return "This ".concat(this.title, " was created by ").concat((_a = this.artist) === null || _a === void 0 ? void 0 : _a.name, "!");
};
// model
var Artwork = mongoose_1.default.model('Artwork', artworkSchema);
exports.default = Artwork;
