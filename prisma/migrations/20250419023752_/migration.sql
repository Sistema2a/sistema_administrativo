/*
  Warnings:

  - You are about to drop the column `debt_sistema_id` on the `history_debt_sistema` table. All the data in the column will be lost.
  - You are about to drop the `debt_sistema` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_debt_sistema_id` to the `history_debt_sistema` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `history_debt_sistema` DROP FOREIGN KEY `history_debt_sistema_debt_sistema_id_fkey`;

-- DropIndex
DROP INDEX `history_debt_sistema_debt_sistema_id_fkey` ON `history_debt_sistema`;

-- AlterTable
ALTER TABLE `history_debt_sistema` DROP COLUMN `debt_sistema_id`,
    ADD COLUMN `user_debt_sistema_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `debt_sistema`;

-- CreateTable
CREATE TABLE `users_debt_sistema` (
    `user_debt_sistema_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(191) NOT NULL,
    `debt_total` DECIMAL(65, 30) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`user_debt_sistema_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `history_debt_sistema` ADD CONSTRAINT `history_debt_sistema_user_debt_sistema_id_fkey` FOREIGN KEY (`user_debt_sistema_id`) REFERENCES `users_debt_sistema`(`user_debt_sistema_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
