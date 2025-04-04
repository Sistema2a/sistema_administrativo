/*
  Warnings:

  - You are about to drop the `cash` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `cash`;

-- CreateTable
CREATE TABLE `cash_principal` (
    `cash_id` INTEGER NOT NULL,
    `cash_total` DECIMAL(65, 30) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cash_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
