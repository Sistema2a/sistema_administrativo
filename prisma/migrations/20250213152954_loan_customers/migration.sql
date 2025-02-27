-- CreateTable
CREATE TABLE `loan_customers` (
    `loan_customers_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `ci` VARCHAR(191) NOT NULL,
    `direction` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `loan` DECIMAL(65, 30) NOT NULL,
    `percentage` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `num_month` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Pending',

    PRIMARY KEY (`loan_customers_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
