import { PrismaClient } from "@prisma/client";
import { hashpassword } from "../utils/hashpassword";

const prisma = new PrismaClient();

// users Sign up
const userSignUp = async (request, response) => {
  const { firstName, lastName, userEmail, password } = request.body;
  const hashedPassword = hashpassword(password);
  try {
    let newUser;
    newUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        User_password: hashedPassword,
        User_Email: userEmail,
      },
    });
    // returning  JSON data of the user
    return response.status(201).json(newUser);
  } catch (error) {
    console.log("Error", error);
  }
};

// Service and product providers signup
const service_products_providers_SignUp = async (request, response) => {
  const { establishmentName, establishmentEmail, password } = request.body;
  // Hash the passowrd
  const hashedPassword = hashpassword(password);
  try {
    let registrationData;
    registrationData = await prisma.service_product_providers.create({
      data: {
        Establishment_Name: establishmentName,
        Establishment_email: establishmentEmail,
        // save the hashed password to the database...
        Establishment_password: hashedPassword,
      },
    });
    return response.status(201).json(registrationData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// logging the user in
const userLogin = async (request, response) => {
  const { userEmail, password } = request.body;
  // Hashing the password
  const hashedPassword = hashpassword(password);
  try {
    let userLoggingIn;
    userLoggingIn = await prisma.user.findUnique({
      where: {
        User_Email: userEmail,
        // The hashed passord is the one to be queried...
        User_password: hashedPassword,
      },
    });

    // Checking whether the use exists after finding the email and password...
    if (!userLoggingIn) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    // returning te result of the findUnique function
    return response.status(200).json(userLoggingIn);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// logging in the service and the products providers
const service_products_providers_Login = async (request, response) => {
  const { establishmentEmail, establishmentPassword } = request.body;
  // hashing the password...
  const hashedPassowrd = hashpassword(establishmentPassword);
  try {
    let loginData;
    loginData = await prisma.service_product_providers.findUnique({
      where: {
        Establishment_email: establishmentEmail,
        // Querying the hashed password in the DB
        Establishment_password: hashedPassowrd,
      },
    });

    if (!loginData) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    return response.status(200).json(loginData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Complete account setup for the user
const completeUserAccountDataSetup = async (request, response) => {
  const { petType, PetBreed, petName, phoneNumber } = request;
  try {
    let remaningData;
    remaningData = await prisma.user.create({
      data: {
        Pet_type: petType,
        Pet_Breed: PetBreed,
        Pet_name: petName,
        Phone_number: phoneNumber,
      },
    });
    // returning the remaining data to show that the operation was succesfull
    return response.status(201).json(remaningData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

//complete account setup for the service and products providers
const completeAccountSetupForServiceAndProductProviders = async (
  request,
  response
) => {
  const { serviceType, companyPhoneNumber, managerPhonenumber } = request.body;
  try {
    let dataForregistrationCompltion;
    dataForregistrationCompltion =
      await prisma.service_product_providers.create({
        data: {
          Service_Type: serviceType,
          company_phone_number: companyPhoneNumber,
          manager_phone_number: managerPhonenumber,
        },
      });
    return response.status(201).json(dataForregistrationCompltion);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// upload a service
const uploadService = async (request, response) => {
  const { establishmentName, serviceName, ratePerHour } = request.body;
  try {
    let serviceDataToUpload;
    serviceDataToUpload = await prisma.services.create({
      data: {
        service_provider_company_name: establishmentName,
        Service_name: serviceName,
        Service_rate_per_hour: ratePerHour,
      },
    });
    return response.status(201).json(serviceDataToUpload);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Upload a product
const uploadAProduct = async (request, response) => {
  const { establishmentName, productName, itemPrice } = request.body;
  try {
    let ProductdatatouPload;
    ProductdatatouPload = await prisma.product.create({
      data: {
        Product_seller_name: establishmentName,
        product_name: productName,
        Item_price: itemPrice,
      },
    });
    return response.status(201).json(ProductdatatouPload);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// see all services for everyone
const viewservices = async (request, response) => {
  try {
    let servicesData;
    servicesData = await prisma.services.findMany();
    return response.status(200).json(servicesData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// see all products for everyone...
const viewProducts = async (request, response) => {
  try {
    let productsData;
    productsData = await prisma.product.findMany();
    return response.status(200).json(productsData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Search for products and services for both users , service providers and providers sellers
const searchProductorService = async (request, response) => {
  const {
    productservice,
    serviceProviderName,
    serviceName,
    serviceratePerHour,
    productSellerName,
    productName,
    Itemprice,
  } = request.body;
  if (productservice === "product") {
    try {
      let product;
      product = await prisma.product.findUnique({
        where: {
          Product_seller_name: productSellerName,
          product_name: productName,
          Item_price: Itemprice,
        },
      });
      return response.status(200).json(product);
    } catch (error) {
      console.log(`Error:${error}`);
    }
  } else if (productservice === "service") {
    try {
      let service;
      service = await prisma.services.findMany({
        where: {
          service_provider_company_name: serviceProviderName,
          Service_name: serviceName,
          Service_rate_per_hour: serviceratePerHour,
        },
      });
    } catch (error) {
      console.log(`Error:${error}`);
    }
  } else {
  }
};

// Updating user data
const updateUserData = async (request, response) => {
  const {
    firstName,
    lastName,
    petType,
    petBreed,
    petName,
    userEmail,
    phoneNumber,
  } = request.body;
  try {
    let userDataTotoBeUpdated;
    userDataTotoBeUpdated = await prisma.user.update({
      where: {
        User_Email: userEmail,
      },
      data: {
        first_name: firstName,
        last_name: lastName,
        Pet_type: petType,
        Pet_Breed: petBreed,
        Pet_name: petName,
        User_Email: userEmail,
        Phone_number: phoneNumber,
      },
    });
    return response.status(200).json(userDataTotoBeUpdated);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Updating services and product providers data
const updateServiceandProductProvidersdata = async (request, response) => {
  const {
    establishmentName,
    servicetype,
    establishmentEmail,
    companyPhoneNumber,
    managerPhoneNumber,
  } = request.body;
  try {
    let dataToBeUpdated;
    dataToBeUpdated = await prisma.service_product_providers.update({
      where: {
        Establishment_email: establishmentEmail,
      },
      data: {
        Establishment_Name: establishmentName,
        Service_Type: servicetype,
        Establishment_email: establishmentEmail,
        company_phone_number: companyPhoneNumber,
        manager_phone_number: managerPhoneNumber,
      },
    });
    return response.status(200).json(dataToBeUpdated);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// updating service data
const updateService = async (request, response) => {
  const { companyName, serviceName, serviceRatePerhour, ID } = request.body;
  try {
    let updatedata;
    updatedata = await prisma.services.update({
      where: {
        id: ID,
      },
      data: {
        service_provider_company_name: companyName,
        Service_name: serviceName,
        Service_rate_per_hour: serviceRatePerhour,
      },
    });
    return response.status(200).json(updatedata);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Updating product data
const updateProduct = async (request, response) => {
  const { companyName, productName, itemPrice, ID } = request.body;
  try {
    let updatedata;
    updatedata = await prisma.product.update({
      where: {
        id: ID,
      },
      data: {
        Product_seller_name: companyName,
        product_name: productName,
        Item_price: itemPrice,
      },
    });
    return response.status(200).json(updatedata);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// deleting user account
const userAccountDelete = async (request, response) => {
  const { userEmail, userpassword } = request.body;
  // Hashing the password
  const hashedPassword = hashpassword(userpassword);
  try {
    let userToBeDeleted;
    userToBeDeleted = await prisma.user.delete({
      where: {
        User_Email: userEmail,
        // Querting the password
        User_password: hashedPassword,
      },
    });
    return response
      .status(200)
      .json({ message: "user deleted", data: userToBeDeleted });
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// deleting service  providers and  product providers
const deleteServiceProviderAccount = async (request, response) => {
  const { companyEmail, establishmentPassword, establishmentName } =
    request.body;
  // hashing the password
  const hashedPassword = hashpassword(establishmentPassword);
  try {
    let toBeDeleted;
    toBeDeleted = await prisma.service_product_providers.delete({
      where: {
        Establishment_Name: establishmentName,
        Establishment_email: companyEmail,
        // Querying the hashed password
        Establishment_password: hashedPassword,
      },
    });
    return response.status(200).json(toBeDeleted);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// deleting a product
const deleteProduct = async (request, response) => {
  const { sellerName, productName, ItemPrice } = request.body;
  try {
    let updateData;
    updateDate = await prisma.product.delete({
      where: {
        Product_seller_name: sellerName,
        product_name: productName,
        Item_price: ItemPrice,
      },
    });
    return response.status(200).json(updateDate);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Deleting a service
const deleteService = async (request, response) => {
  const { serviceProviderName, serviceName, ratePerHour } = request.body;
  try {
    let updateData;
    updateData = await prisma.services.delete({
      where: {
        service_provider_company_name: serviceProviderName,
        Service_name: serviceName,
        Service_rate_per_hour: ratePerHour,
      },
    });
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// exporting all controllers
export {
  deleteService,
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
  userLogin,
  userSignUp,
  service_products_providers_SignUp,
};
