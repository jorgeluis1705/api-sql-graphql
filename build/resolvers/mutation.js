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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = void 0;
const user_model_1 = require("./../models/user.model");
const uuid_1 = require("uuid");
exports.mutation = {
    Mutation: {
        createUser: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const body = args;
                return yield user_model_1.UserModel.create(Object.assign(Object.assign({}, body), { id: (0, uuid_1.v4)() }));
            }
            catch (error) {
                return null;
            }
        }),
        updateUser: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            try {
                const userUopdated = yield user_model_1.UserModel.findByPk(id);
                yield (userUopdated === null || userUopdated === void 0 ? void 0 : userUopdated.update(args));
                return args;
            }
            catch (error) {
                return null;
            }
        }),
        deleteUser: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { id } = args;
                const userDelete = yield user_model_1.UserModel.findByPk(id);
                userDelete === null || userDelete === void 0 ? void 0 : userDelete.destroy();
                return id;
            }
            catch (error) {
                return "Error";
            }
        }),
    },
};
