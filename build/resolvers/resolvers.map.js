"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolversMap = void 0;
const query_1 = require("./query");
const type_1 = require("./type");
const mutation_1 = require("./mutation");
exports.resolversMap = Object.assign(Object.assign(Object.assign({}, query_1.query), type_1.type), mutation_1.mutation);
