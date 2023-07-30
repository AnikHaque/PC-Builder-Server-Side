import express, { Request, Response } from "express";
import Product from "./product.model";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const result = await Product.find();
    res.send(result);
});

router.get("/random", async (req: Request, res: Response) => {
    const result = await Product.aggregate([
        { $sample: { size: 6 } },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $unwind: "$category",
        },
    ]);
    res.send(result);
});

router.get("/:product", async (req: Request, res: Response) => {
    const { product } = req.params;
    const result = await Product.findById(product)
        .populate({
            path: "category",
            select: { _id: 0, name: 1 },
        })
        .populate({ path: "reviews.user", select: { _id: 0, name: 1, image: 1 } });

    res.send(result);
});

export default router;
