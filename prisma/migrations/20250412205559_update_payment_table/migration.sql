/*
  Warnings:

  - You are about to drop the column `payment_loan_id` on the `payment_loan` table. All the data in the column will be lost.
  - Added the required column `loan_revenue_id` to the `payment_loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment_loan` DROP COLUMN `payment_loan_id`,
    ADD COLUMN `loan_revenue_id` INTEGER NOT NULL;
