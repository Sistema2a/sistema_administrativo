/*
  Warnings:

  - Added the required column `concept` to the `payment_loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment_loan` ADD COLUMN `concept` VARCHAR(191) NOT NULL;
