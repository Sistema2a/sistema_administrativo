/*
  Warnings:

  - You are about to alter the column `date` on the `cash_register` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `date` on the `loan_revenue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `date` on the `loans` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `cash_register` MODIFY `date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `loan_revenue` MODIFY `date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `loans` MODIFY `date` DATETIME(3) NOT NULL;
