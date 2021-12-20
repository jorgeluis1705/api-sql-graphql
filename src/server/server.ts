import express from "express";
import { createServer } from "http";
import cors from "cors";
import compression from "compression";
import { router as usersRoutes } from "../routes/users.routes";
import { router as graphqlRoutes } from "../routes/graphql.routes";
import { serverApollo } from "./../apollo-server/apollo-server.server";
import { run } from "../db/connectionDb";

export class ServerExpress {
  app: express.Express;
  httpServer: import("http").Server;
  port: number;
  pathBase: string = "/api";
  constructor() {
    this.app = express();
    this.port = 3000;
    /* middleares */
    this.middleware();
    this.routes();
    this.httpServer = createServer(this.app);
    run();
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
    this.app.use(`${this.pathBase}/users`, usersRoutes);
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
  listener(): void {
    this.httpServer.listen(this.port, () =>
      console.log(
        `app in port http://localhost:${this.port}/graphql or http://localhost:${this.port}/graphql/apollo  `
      )
    );
  }
}
