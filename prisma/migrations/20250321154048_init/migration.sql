-- CreateEnum
CREATE TYPE "PET_TYPE" AS ENUM ('CAT', 'DOG', 'BIRD', 'REPTILE_PET', 'FISH', 'TURTLE', 'CATTLE');

-- CreateEnum
CREATE TYPE "Service_Types" AS ENUM ('Product_seller', 'Service_provider');

-- CreateEnum
CREATE TYPE "products_available" AS ENUM ('Food', 'Treats', 'Toys', 'Beds', 'Carriers', 'PetOffspring', 'AdultPet');

-- CreateEnum
CREATE TYPE "ServiceAvailable" AS ENUM ('Boarding', 'Grooming', 'Veterinary', 'Sitting', 'Walking');

-- CreateTable
CREATE TABLE "Usertable" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "Pet_type" "PET_TYPE" NOT NULL,
    "Pet_Breed" TEXT NOT NULL,
    "Pet_name" TEXT NOT NULL,
    "User_Email" TEXT NOT NULL,
    "Date_Time_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Phone_number" INTEGER NOT NULL,

    CONSTRAINT "Usertable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service_product_providers" (
    "id" SERIAL NOT NULL,
    "Establishment_Name" TEXT NOT NULL,
    "Service_Type" "Service_Types" NOT NULL,
    "Establishment_email" TEXT NOT NULL,
    "company_phone_number" INTEGER NOT NULL,
    "manager_phone_number" INTEGER NOT NULL,

    CONSTRAINT "Service_product_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "Product_seller_name" TEXT NOT NULL,
    "product_name" "products_available" NOT NULL,
    "Item_price" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "service_provider_company_name" TEXT NOT NULL,
    "Service_name" "ServiceAvailable" NOT NULL,
    "Service_rate_per_hour" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usertable_User_Email_key" ON "Usertable"("User_Email");

-- CreateIndex
CREATE UNIQUE INDEX "Usertable_Phone_number_key" ON "Usertable"("Phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Service_product_providers_Establishment_email_key" ON "Service_product_providers"("Establishment_email");

-- CreateIndex
CREATE UNIQUE INDEX "Service_product_providers_company_phone_number_key" ON "Service_product_providers"("company_phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Service_product_providers_manager_phone_number_key" ON "Service_product_providers"("manager_phone_number");
