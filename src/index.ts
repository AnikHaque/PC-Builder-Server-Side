import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

//Database Connection
dotenv.config();
const MONGODB_URL: string | undefined = process.env.MONGODB_URL;

if (typeof MONGODB_URL === "string") {
    mongoose
        .connect(MONGODB_URL)
        .then(() => app.listen(5000, () => console.log("Connection Successful")))
        .catch(() => console.log(`MongoDB Connection Error`));
} else {
    console.log("Database URL Not Found");
}

//Test Server
app.get("/", (req, res) => {
    res.send("Hello World");
});
