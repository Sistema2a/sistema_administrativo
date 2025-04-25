/*
  Warnings:

  - You are about to drop the column `user` on the `users_account_receivable` table. All the data in the column will be lost.
  - Added the required column `account` to the `users_account_receivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users_account_receivable` DROP COLUMN `user`,
    ADD COLUMN `account` VARCHAR(191) NOT NULL;
