"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//GET ALL
app.get('/', function (req, res) {
    res.status(200);
});
exports.default = app;
