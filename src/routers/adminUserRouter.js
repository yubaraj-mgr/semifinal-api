import express from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { newAdminUserValidation } from "../middlewares/joiValidation/AdminUserValidation.js";
import { insertAdminUser } from "../models/adminUser/adminUserModel.js";

const router = express.Router();

router.post("/", newAdminUserValidation, async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPassword(password);
    const user = await insertAdminUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message:
            "We have sent you an email to verify the account, please check your mail box including junk folder",
        })
      : res.json({
          status: "error",
          message: "Unable to create user, please try again later",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already another user with this email, please try different email";
    }
    next(error);
  }
});

export default router;
