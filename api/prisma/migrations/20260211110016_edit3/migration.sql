/*
  Warnings:

  - Added the required column `levelId` to the `Records` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LevelName" AS ENUM ('PIRATES', 'AIRPORT', 'LIBRARY');

-- AlterTable
ALTER TABLE "Records" ADD COLUMN     "levelId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "name" "LevelName" NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
