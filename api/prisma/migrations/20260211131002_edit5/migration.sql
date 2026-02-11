/*
  Warnings:

  - You are about to drop the column `levelId` on the `Records` table. All the data in the column will be lost.
  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[levelName]` on the table `Records` will be added. If there are existing duplicate values, this will fail.
  - Made the column `recordsId` on table `Attempt` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `levelName` to the `Records` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attempt" DROP CONSTRAINT "Attempt_recordsId_fkey";

-- DropForeignKey
ALTER TABLE "Records" DROP CONSTRAINT "Records_levelId_fkey";

-- AlterTable
ALTER TABLE "Attempt" ALTER COLUMN "recordsId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Records" DROP COLUMN "levelId",
ADD COLUMN     "levelName" "LevelName" NOT NULL;

-- DropTable
DROP TABLE "Level";

-- CreateIndex
CREATE UNIQUE INDEX "Records_levelName_key" ON "Records"("levelName");

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_recordsId_fkey" FOREIGN KEY ("recordsId") REFERENCES "Records"("id") ON DELETE CASCADE ON UPDATE CASCADE;
