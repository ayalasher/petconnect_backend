/*
  Warnings:

  - You are about to drop the `Usertable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Usertable";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "User_password" TEXT NOT NULL,
    "Pet_type" "PET_TYPE" NOT NULL,
    "Pet_Breed" TEXT NOT NULL,
    "Pet_name" TEXT NOT NULL,
    "User_Email" TEXT NOT NULL,
    "Date_Time_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Phone_number" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_User_Email_key" ON "User"("User_Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Phone_number_key" ON "User"("Phone_number");
