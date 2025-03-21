import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// users Sign up
const userSignUp = async (request, response) => {
  const { firstName, lastName, userEmail, password } = request.body;
  try {
    let newUser;
    newUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        User_password: password,
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
  try {
    let registrationData;
    registrationData = await prisma.service_product_providers.create({
      data: {
        Establishment_Name: establishmentName,
        Establishment_email: establishmentEmail,
        Establishment_password: password,
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

  try {
    let userLoggingIn;
    userLoggingIn = await prisma.user.findUnique({
      where: {
        User_Email: userEmail,
        User_password: password,
      },
    });
    // returning te result of the findUnique function
    return response.status(200).json(userLoggingIn);
    response;
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// logging in the service and the products providers
const service_products_providers_Login = async (request, response) => {
  const { establishmentEmail, establishmentPassword } = request.body;
  try {
    let loginData;
    loginData = await prisma.service_product_providers.findUnique({
      where: {
        Establishment_email: establishmentEmail,
        Establishment_password: establishmentPassword,
      },
    });
    return response.status(200).json(loginData);
  } catch (error) {
    console.log(`Error:${error}`);
  }
};

// Complete account setup for the user
const completeAccountdataSetup = async (request, response) => {
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
const competeAccountSetup = async (request, response) => {
  const { serviceType, companyPhoneNumber, managerPhonenumber } = request.body;
  try {
    let dataForregistrationCompltion;
    dataForregistrationCompltion = prisma.service_product_providers.create({
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
    serviceDataToUpload = prisma.services.create({
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
    ProductdatatouPload = prisma.product.create({
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
    userDataTotoBeUpdated = prisma.user.update({
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
const updateServiceandProductProviders = async (request, response) => {
  const {
    establishmentName,
    servicetype,
    establishmentEmail,
    companyPhoneNumber,
    managerPhoneNumber,
  } = request.body;
  try {
    let dataToBeUpdated;
    dataToBeUpdated = prisma.service_product_providers.update({
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
