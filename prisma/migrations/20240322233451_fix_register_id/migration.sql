/*
  Warnings:

  - The primary key for the `register` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "register" DROP CONSTRAINT "register_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "register_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "register_id_seq";
