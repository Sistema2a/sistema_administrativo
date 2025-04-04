-- CreateTable
CREATE TABLE `debt_sistema` (
    `debt_sistema_id` INTEGER NOT NULL AUTO_INCREMENT,
    `debt_responsable` VARCHAR(191) NOT NULL,
    `debt` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`debt_sistema_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
