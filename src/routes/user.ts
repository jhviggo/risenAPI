import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

router.get(
    "/",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.listAll
);

router.get(
    "/:id(\d+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.getOneById
);

router.post(
    "/",
    UserController.newUser
);

router.patch(
    "/:id(\d+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
);

router.delete(
    "/:id(\d+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.deleteUser
);

export default router;