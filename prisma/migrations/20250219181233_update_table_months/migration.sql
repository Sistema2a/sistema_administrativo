/*
  Warnings:

  - You are about to drop the column `month` on the `loan_months` table. All the data in the column will be lost.
  - You are about to alter the column `age` on the `loan_months` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `loan_months` DROP COLUMN `month`,
    MODIFY `age` INTEGER NOT NULL;
