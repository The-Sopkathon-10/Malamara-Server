import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/userInfo";

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
