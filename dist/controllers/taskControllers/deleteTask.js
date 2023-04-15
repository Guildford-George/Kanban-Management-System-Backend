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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../dbConfig/db"));
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ status: "error", message: "The task is not found!!" });
        }
        const deleteTargetTask = yield (0, db_1.default)('DELETE FROM tasks WHERE id=$1', [id]);
        console.log(deleteTargetTask);
        if (deleteTargetTask.rowCount == 0) {
            console.log("here");
            return res.status(400).json({ status: "error", message: "The task does not exist!!" });
        }
        res.status(200).json({ status: 'success' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "There was ann error while deleting the task" });
    }
});
exports.default = deleteTask;
