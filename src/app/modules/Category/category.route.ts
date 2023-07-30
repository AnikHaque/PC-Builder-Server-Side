import express, { Request, Response } from "express";
import Product from "../Product/product.model";
import Category from "./category.model";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const result = await Category.find();
    res.send(result);
});

router.get("/:category", async (req: Request, res: Response) => {
    const { category } = req.params;
    const result = await Product.find({ category })
        .populate({
            path: "category",
            select: { _id: 0, name: 1 },
        })
        .populate({ path: "reviews.user", select: { _id: 0, name: 1, image: 1 } });
    res.send(result);
});

export default router;
