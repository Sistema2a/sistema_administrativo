/*
  Warnings:

  - You are about to drop the column `concept` on the `debt_sistema` table. All the data in the column will be lost.
  - You are about to drop the column `debt` on the `debt_sistema` table. All the data in the column will be lost.
  - Added the required column `debt_total` to the `debt_sistema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `debt_sistema` DROP COLUMN `concept`,
    DROP COLUMN `debt`,
    ADD COLUMN `debt_total` DECIMAL(65, 30) NOT NULL;

-- CreateTable
CREATE TABLE `history_debt_sistema` (
    `history_debt_sistema_id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DECIMAL(65, 30) NOT NULL,
    `concept` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `debt_sistema_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`history_debt_sistema_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `history_debt_sistema` ADD CONSTRAINT `history_debt_sistema_debt_sistema_id_fkey` FOREIGN KEY (`debt_sistema_id`) REFERENCES `debt_sistema`(`debt_sistema_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
