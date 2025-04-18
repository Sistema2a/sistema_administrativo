/*
  Warnings:

  - You are about to drop the column `description` on the `debt_sistema` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `debt_sistema` table. All the data in the column will be lost.
  - Added the required column `concept` to the `debt_sistema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsable` to the `debt_sistema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `debt_sistema` DROP COLUMN `description`,
    DROP COLUMN `name`,
    ADD COLUMN `concept` VARCHAR(191) NOT NULL,
    ADD COLUMN `responsable` VARCHAR(191) NOT NULL;
