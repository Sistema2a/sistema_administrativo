/*
  Warnings:

  - You are about to drop the column `age` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the column `num_month` on the `loans` table. All the data in the column will be lost.
  - You are about to drop the `debt_customers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `update_at` to the `loan_customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `loan_months` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenue` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `loans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `loan_customers` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `loan_months` ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `loans` DROP COLUMN `age`,
    DROP COLUMN `num_month`,
    ADD COLUMN `revenue` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `debt_customers`;

-- CreateTable
CREATE TABLE `loan_revenue` (
    `revenue_id` INTEGER NOT NULL AUTO_INCREMENT,
    `debt_revenue` DECIMAL(65, 30) NOT NULL,
    `num_month` INTEGER NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `loan_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`revenue_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `debt_total_customers` (
    `debt_id` INTEGER NOT NULL AUTO_INCREMENT,
    `debt` DECIMAL(65, 30) NOT NULL,
    `loan_customers_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`debt_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `loans` ADD CONSTRAINT `loans_loan_customers_id_fkey` FOREIGN KEY (`loan_customers_id`) REFERENCES `loan_customers`(`loan_customers_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `loan_revenue` ADD CONSTRAINT `loan_revenue_loan_id_fkey` FOREIGN KEY (`loan_id`) REFERENCES `loans`(`loan_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `debt_total_customers` ADD CONSTRAINT `debt_total_customers_loan_customers_id_fkey` FOREIGN KEY (`loan_customers_id`) REFERENCES `loan_customers`(`loan_customers_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
