import { Schema, model } from "mongoose";
import type { IUser, UserModel } from "./user.interface";

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: String,
        image: String,
        provider: { type: String, default: "credentials" },
    },
    { timestamps: true, versionKey: false }
);

const User = model<IUser, UserModel>("user", userSchema);

export default User;
