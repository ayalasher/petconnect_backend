-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "product_name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Service_product_providers" ALTER COLUMN "Service_Type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "Pet_type" DROP NOT NULL;
