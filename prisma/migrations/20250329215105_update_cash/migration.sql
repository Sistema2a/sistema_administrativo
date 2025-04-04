/*
  Warnings:

  - Added the required column `date` to the `cash_register` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cash_register` ADD COLUMN `date` DATETIME(3) NOT NULL;
