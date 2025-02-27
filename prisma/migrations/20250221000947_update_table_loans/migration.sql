/*
  Warnings:

  - A unique constraint covering the columns `[ci]` on the table `loan_customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `loan_revenue` ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE `loans` ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';

-- CreateIndex
CREATE UNIQUE INDEX `loan_customers_ci_key` ON `loan_customers`(`ci`);
