-- CreateTable
CREATE TABLE `users_account_receivable` (
    `users_account_receivable_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(191) NOT NULL,
    `debt_total` DECIMAL(65, 30) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`users_account_receivable_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_account_receivable` (
    `history_debt_sistema_id` INTEGER NOT NULL AUTO_INCREMENT,
    `amount` DECIMAL(65, 30) NOT NULL,
    `concept` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `users_account_receivable_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`history_debt_sistema_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `history_account_receivable` ADD CONSTRAINT `history_account_receivable_users_account_receivable_id_fkey` FOREIGN KEY (`users_account_receivable_id`) REFERENCES `users_account_receivable`(`users_account_receivable_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
