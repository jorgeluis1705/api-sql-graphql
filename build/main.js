"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const server = new server_1.ServerExpress();
server.listener();
