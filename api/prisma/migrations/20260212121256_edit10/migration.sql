/*
  Warnings:

  - You are about to drop the column `charOneAlive` on the `Attempt` table. All the data in the column will be lost.
  - You are about to drop the column `charThreeAlive` on the `Attempt` table. All the data in the column will be lost.
  - You are about to drop the column `charTwoAlive` on the `Attempt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Attempt" DROP COLUMN "charOneAlive",
DROP COLUMN "charThreeAlive",
DROP COLUMN "charTwoAlive",
ADD COLUMN     "char1Alive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "char2Alive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "char3Alive" BOOLEAN NOT NULL DEFAULT true;
