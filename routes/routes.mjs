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
appRouter.delete("/service", deleteService);
appRouter.delete("/product", deleteProduct);
appRouter.delete(
  "/serviceAndProductProvidersAccount",
  deleteServiceProviderAccount
);
appRouter.delete("/userAccount", userAccountDelete);
appRouter.put("/product", updateProduct);
appRouter.put("/Service", updateService);
appRouter.put(
  "/update/serviceAndProductData",
  updateServiceandProductProvidersdata
);
appRouter.put("/userData", updateUserData);
appRouter.get("/Search", searchProductorService);
appRouter.get("/products", viewProducts);
appRouter.get("/services", viewservices);
appRouter.post("/Product", uploadAProduct);
appRouter.post("/service", uploadService);
appRouter.post(
  "/post/completeAccountSetupForServiceAndProductProviders",
  completeAccountSetupForServiceAndProductProviders
);
appRouter.post("/completeUserAccountSetup", completeUserAccountDataSetup);
appRouter.post(
  "/loginForServiceAndProductProviders",
  service_products_providers_Login
);
appRouter.post("/userLogin", userLogin);
appRouter.post("/userSignUp", userSignUp);
appRouter.post(
  "/SignUpForServiceAndProductProviders",
  service_products_providers_SignUp
);

export default appRouter;
