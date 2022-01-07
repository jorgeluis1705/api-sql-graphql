import { sequelizeDB } from "./../db/connectionDb";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import compression from "compression";
import { router as graphqlRoutes } from "../routes/graphql.routes";
import { serverApollo } from "./../apollo-server/apollo-server.server";

export class ServerExpress {
  app: express.Express;
  httpServer: import("http").Server;
  port: number;
  pathBase: string = "/api";
  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
    /* middleares */
    this.dbSql();
    this.middleware();
    this.routes();
    this.httpServer = createServer(this.app);
  }

  middleware() {
    /* CORS */
    this.app.use(cors());
    /* Compress */
    this.app.use(compression());
    /* ParseBody */
    this.app.use(express.json());
  }
  routes() {
    this.apolloServerInit();
    this.app.use(`/`, graphqlRoutes);
  }
  async apolloServerInit() {
    await serverApollo.start();
    serverApollo.applyMiddleware({
      app: this.app,
      cors: { credentials: false, origin: ["*"] },
    });
  }
  async dbSql() {
    try {
      await sequelizeDB.authenticate();
      console.log("db is online");
    } catch (error) {
      console.log("Error in db connection");
      console.log({ error });
    }
  }
  listener(): void {
    this.httpServer.listen(this.port, () =>
      console.log(
        `app in port http://localhost:${this.port}/graphql or http://localhost:${this.port}/graphql/apollo  `
      )
    );
  }
}
