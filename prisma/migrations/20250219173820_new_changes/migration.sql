/*
  Warnings:

  - You are about to drop the column `debt` on the `debt_total_customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[loan_customers_id]` on the table `debt_total_customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `debt_total` to the `debt_total_customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `debt_total_customers` DROP COLUMN `debt`,
    ADD COLUMN `debt_total` DECIMAL(65, 30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `debt_total_customers_loan_customers_id_key` ON `debt_total_customers`(`loan_customers_id`);
