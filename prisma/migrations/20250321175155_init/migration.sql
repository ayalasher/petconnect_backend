/*
  Warnings:

  - Added the required column `Establishment_password` to the `Service_product_providers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service_product_providers" ADD COLUMN     "Establishment_password" TEXT NOT NULL;
