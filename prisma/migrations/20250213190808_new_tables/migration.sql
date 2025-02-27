/*
  Warnings:

  - You are about to drop the column `age` on the `loan_customers` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `loan_customers` table. All the data in the column will be lost.
  - You are about to drop the column `loan` on the `loan_customers` table. All the data in the column will be lost.
  - You are about to drop the column `num_month` on the `loan_customers` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `loan_customers` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `loan_customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `loan_customers` DROP COLUMN `age`,
    DROP COLUMN `date`,
    DROP COLUMN `loan`,
    DROP COLUMN `num_month`,
    DROP COLUMN `percentage`,
    DROP COLUMN `status`,
    ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `loan_months` (
    `month_id` INTEGER NOT NULL AUTO_INCREMENT,
    `num_month` INTEGER NOT NULL,
    `month` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`month_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loans` (
    `loan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `loan` DECIMAL(65, 30) NOT NULL,
    `percentage` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `num_month` INTEGER NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `loan_customers_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`loan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `debt_customers` (
    `debt_id` INTEGER NOT NULL AUTO_INCREMENT,
    `debt` DECIMAL(65, 30) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Pending',
    `loan_id` INTEGER NOT NULL,
    `loan_customers_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`debt_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
