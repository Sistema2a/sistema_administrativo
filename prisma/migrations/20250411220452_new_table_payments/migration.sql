-- CreateTable
CREATE TABLE `payment_loan` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `payment_amount` DECIMAL(65, 30) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_loan_id` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
