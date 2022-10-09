import AdminUserSchema from "./adminUserSchema.js";

// insert user

export const insertAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};
