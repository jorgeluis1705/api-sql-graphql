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
exports.ServerExpress = void 0;
const connectionDb_1 = require("./../db/connectionDb");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const graphql_routes_1 = require("../routes/graphql.routes");
const apollo_server_server_1 = require("./../apollo-server/apollo-server.server");
class ServerExpress {
    constructor() {
        this.pathBase = "/api";
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 3000;
        this.dbSql();
        this.middleware();
        this.routes();
        this.httpServer = (0, http_1.createServer)(this.app);
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.apolloServerInit();
        this.app.use(`/`, graphql_routes_1.router);
    }
    apolloServerInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield apollo_server_server_1.serverApollo.start();
            apollo_server_server_1.serverApollo.applyMiddleware({
                app: this.app,
                cors: { credentials: false, origin: ["*"] },
            });
        });
    }
    dbSql() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectionDb_1.sequelizeDB.authenticate();
                console.log("db is online");
            }
            catch (error) {
                console.log("Error in db connection");
                console.log({ error });
            }
        });
    }
    listener() {
        this.httpServer.listen(this.port, () => console.log(`app in port http://localhost:${this.port}/graphql or http://localhost:${this.port}/graphql/apollo  `));
    }
}
exports.ServerExpress = ServerExpress;
