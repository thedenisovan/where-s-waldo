/*
  Warnings:

  - You are about to drop the `PirateCoordinates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PirateCoordinates";

-- CreateTable
CREATE TABLE "Attempt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startTime" BIGINT NOT NULL,
    "endTime" BIGINT NOT NULL,
    "attemptDuration" BIGINT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "attemptDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recordsId" INTEGER,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_recordsId_fkey" FOREIGN KEY ("recordsId") REFERENCES "Records"("id") ON DELETE SET NULL ON UPDATE CASCADE;
