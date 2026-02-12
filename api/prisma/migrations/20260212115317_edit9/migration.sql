-- AlterTable
ALTER TABLE "Attempt" ADD COLUMN     "charOneAlive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "charThreeAlive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "charTwoAlive" BOOLEAN NOT NULL DEFAULT true;
