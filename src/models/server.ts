import express from "express";
import { createServer } from "http";
import cors from "cors";
import compression from "compression";
import { router as usersRoutes } from "../routes/users.routes";

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
    this.httpServer = createServer(this.app);
    this.routes();
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
  }
  listener(): void {
    this.httpServer.listen(this.port, () =>
      console.log(`app in port ${this.port}`)
    );
  }
}
