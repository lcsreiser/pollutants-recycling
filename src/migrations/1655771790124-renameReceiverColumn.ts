import { MigrationInterface, QueryRunner } from "typeorm";

export class renameReceiverColumn1655771790124 implements MigrationInterface {
    name = 'renameReceiverColumn1655771790124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_a31bff9c589cac2107a968b4c60"`);
        await queryRunner.query(`ALTER TABLE "histories" RENAME COLUMN "userCollectorUserId" TO "receiverUserId"`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_121fb81b66e32a0246469bc81a4" FOREIGN KEY ("receiverUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_121fb81b66e32a0246469bc81a4"`);
        await queryRunner.query(`ALTER TABLE "histories" RENAME COLUMN "receiverUserId" TO "userCollectorUserId"`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_a31bff9c589cac2107a968b4c60" FOREIGN KEY ("userCollectorUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
