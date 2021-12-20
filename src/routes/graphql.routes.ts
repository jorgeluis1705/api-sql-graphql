import { Router } from "express";
import expressPlayGround from "graphql-playground-middleware-express";

export const router = Router();

router.get(
  "/graphql",
  expressPlayGround({
    endpoint: "/graphql/apolloserver",
  })
);
router.post(
  "/",
  expressPlayGround({
    endpoint: "/graphql",
  })
);
