/*
  Warnings:

  - Made the column `product_name` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Establishment_email` on table `Service_product_providers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "product_name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Service_product_providers" ALTER COLUMN "Establishment_email" SET NOT NULL,
ALTER COLUMN "company_phone_number" DROP NOT NULL,
ALTER COLUMN "manager_phone_number" DROP NOT NULL;
