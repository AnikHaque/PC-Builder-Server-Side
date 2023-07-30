import cors from "cors";
import express, { Application } from "express";
import useCategoryModule from "./app/modules/Category/category.route";
import useProductModule from "./app/modules/Product/product.route";
import useUserModule from "./app/modules/User/user.route";
const app: Application = express();

// Middle Wire
app.use(cors());
app.use(express.json());

//Modules
app.use("/api/category", useCategoryModule);
app.use("/api/product", useProductModule);
app.use("/api/user", useUserModule);

export default app;
