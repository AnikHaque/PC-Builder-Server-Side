import express, { Request, Response } from "express";
import User from "./user.model";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const result = await User.find();
    res.send(result);
});

router.get("/:user", async (req: Request, res: Response) => {
    const { user } = req.params;
    const result = await User.findById(user);

    res.send(result);
});

export default router;
