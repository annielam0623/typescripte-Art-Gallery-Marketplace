"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
// schema
var commissionSchema = new Schema({
    name: { type: String, required: true },
    artist: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Artwork'
    },
    description: { type: String, required: true },
    title: String,
    price: Number,
    due_date: Date,
});
// helper methods 
commissionSchema.methods.getCommissiondBy = function () {
    var _a;
    return "Your estimate income is ".concat(this.commission.est_earn, "!  since ").concat((_a = this.artist) === null || _a === void 0 ? void 0 : _a.startDate());
};
// model and export 
var Commission = mongoose_1.default.model('Commission', commissionSchema);
exports.default = Commission;
