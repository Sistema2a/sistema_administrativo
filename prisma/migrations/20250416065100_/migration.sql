/*
  Warnings:

  - You are about to drop the column `debt_responsable` on the `debt_sistema` table. All the data in the column will be lost.
  - Added the required column `date` to the `debt_sistema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `debt_sistema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `debt_sistema` DROP COLUMN `debt_responsable`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
