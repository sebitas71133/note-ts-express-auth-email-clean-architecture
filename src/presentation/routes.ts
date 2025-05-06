import { Router } from "express";
import { AuthRoutes } from "./routes/auth.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
