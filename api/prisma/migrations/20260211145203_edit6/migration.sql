/*
  Warnings:

  - You are about to drop the column `recordsId` on the `Attempt` table. All the data in the column will be lost.
  - Added the required column `levelName` to the `Attempt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attempt" DROP CONSTRAINT "Attempt_recordsId_fkey";

-- AlterTable
ALTER TABLE "Attempt" DROP COLUMN "recordsId",
ADD COLUMN     "levelName" "LevelName" NOT NULL;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_levelName_fkey" FOREIGN KEY ("levelName") REFERENCES "Records"("levelName") ON DELETE CASCADE ON UPDATE CASCADE;
