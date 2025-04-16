/*
  Warnings:

  - You are about to drop the column `num_month` on the `loan_revenue` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `loan_revenue` DROP COLUMN `num_month`,
    ADD COLUMN `month` VARCHAR(191) NOT NULL DEFAULT '';
