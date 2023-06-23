"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var artists = require("express").Router();
var artist_1 = require("../Models/artist");
var artistSeedData = require('../Seeders/artist_data');
//FIND ALL ARTISTS
artists.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundArtists, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.find()
                        .populate({ path: 'artworks', options: { limit: 5 } })];
            case 1:
                foundArtists = _a.sent();
                res.json(foundArtists);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//SEED DATA
//will be removed for final implementation
artists.get('/seed', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.insertMany(artistSeedData)];
            case 1:
                _a.sent();
                res.status(201).json({ message: 'Seeded data successfully' });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                res.status(500).json({ message: 'request failed' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//FIND SPECIFIC ARTIST
artists.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundArtist, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.findById(req.params.id)
                        .populate('artworks')
                        .populate('commissions')];
            case 1:
                foundArtist = _a.sent();
                res.status(200).json(foundArtist);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//CREATE ARTIST
artists.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newArtist, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.create(req.body)];
            case 1:
                newArtist = _a.sent();
                res.status(201).json({
                    message: 'Successfully insert a new artist',
                    data: newArtist
                });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                console.log(err_4);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//UPDATE ARTIST INFORMATION
artists.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedArtist, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.findByIdAndUpdate(req.params.id, req.body, {
                        new: true
                    })];
            case 1:
                updatedArtist = _a.sent();
                res.status(200).json({
                    message: 'Successfully updated Artist',
                    data: updatedArtist
                });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log(err_5);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//DELETE AN ARTIST
artists.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedArtist, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, artist_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                deletedArtist = _a.sent();
                res.status(200).json({
                    message: "Successfully deleted artist",
                    data: deletedArtist
                });
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                console.log(err_6);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//exports 
exports.default = artists;
