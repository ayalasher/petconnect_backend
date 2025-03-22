import express from "express";

const appRouter = express.Router();
// Preparing the routes buana...

import {
  deleteService,
  service_products_providers_SignUp,
  userLogin,
  userSignUp,
  deleteProduct,
  deleteServiceProviderAccount,
  userAccountDelete,
  updateProduct,
  updateService,
  updateServiceandProductProvidersdata,
  updateUserData,
  searchProductorService,
  viewProducts,
  viewservices,
  uploadAProduct,
  uploadService,
  completeAccountSetupForServiceAndProductProviders,
  completeUserAccountDataSetup,
  service_products_providers_Login,
} from "../controllers/controllers.mjs";
appRouter.delete("/delete/service", deleteService);
appRouter.delete("/delete/product", deleteProduct);
appRouter.delete(
  "/delete/serviceAndProductProvidersAccount",
  deleteServiceProviderAccount
);
appRouter.delete("/delete/userAccount", userAccountDelete);
appRouter.put("/update/product", updateProduct);
appRouter.put("update/Service", updateService);
appRouter.put(
  "/update/serviceAndProductData",
  updateServiceandProductProvidersdata
);
appRouter.put("/update/userData", updateUserData);
appRouter.get("/Search", searchProductorService);
appRouter.get("/get/products", viewProducts);
appRouter.get("/get/services", viewservices);
appRouter.post("/post/Product", uploadAProduct);
appRouter.post("/post/service", uploadService);
appRouter.post(
  "/post/completeAccountSetupForServiceAndProductProviders",
  completeAccountSetupForServiceAndProductProviders
);
appRouter.post("/post/completeUserAccountSetup", completeUserAccountDataSetup);
appRouter.post(
  "/post/loginForServiceAndProductProviders",
  service_products_providers_Login
);
appRouter.post("/post/userLogin", userLogin);
appRouter.post("/post/userSignUp", userSignUp);
appRouter.post(
  "/post/SignUpForServiceAndProductProviders",
  service_products_providers_SignUp
);

export default appRouter;
