import { MigrationInterface, QueryRunner } from "typeorm";

export class addedCity1655211169083 implements MigrationInterface {
    name = 'addedCity1655211169083'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "histories" ("history_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "itemItemId" uuid, "providerUserId" uuid, "dumpSpotDumpSpotId" uuid, "receiverUserId" uuid, CONSTRAINT "REL_e70c424e9182871dc00a710e76" UNIQUE ("itemItemId"), CONSTRAINT "PK_d13a4d4f5e36631b44b58ce71b5" PRIMARY KEY ("history_id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("itemId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "quantity" integer NOT NULL, "categoryCategoryId" uuid, "ownerUserId" uuid, CONSTRAINT "PK_151f283a98f27c634dacfdb965b" PRIMARY KEY ("itemId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "addressAddressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_11821a5044e5dcfbf42fd4f914" UNIQUE ("addressAddressId"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("addressId" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying NOT NULL, "street" character varying NOT NULL, "complement" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "number" integer NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "isDumpSpot" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_ff59275f5928941ce06f1d8890c" PRIMARY KEY ("addressId"))`);
        await queryRunner.query(`CREATE TABLE "dumpSpots" ("dumpSpot_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "addressAddressId" uuid, CONSTRAINT "UQ_44083d54d5b17c61163aeb49216" UNIQUE ("name"), CONSTRAINT "REL_8788c75c599840b10347e77867" UNIQUE ("addressAddressId"), CONSTRAINT "PK_10f7c3035d365f90b2304c743cb" PRIMARY KEY ("dumpSpot_id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("categoryId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unit" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_c9594c262e6781893a1068d91be" PRIMARY KEY ("categoryId"))`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_e70c424e9182871dc00a710e76f" FOREIGN KEY ("itemItemId") REFERENCES "items"("itemId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_0418d15b48d18774bca488e239d" FOREIGN KEY ("providerUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_72424f66a26843eaa1bd9382e93" FOREIGN KEY ("dumpSpotDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "histories" ADD CONSTRAINT "FK_a31bff9c589cac2107a968b4c60" FOREIGN KEY ("receiverUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_4b96768b71174aeee98d1840765" FOREIGN KEY ("categoryCategoryId") REFERENCES "categories"("categoryId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1ad53983b2477b72bcc777dcb79" FOREIGN KEY ("ownerUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_11821a5044e5dcfbf42fd4f9143" FOREIGN KEY ("addressAddressId") REFERENCES "addresses"("addressId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dumpSpots" ADD CONSTRAINT "FK_8788c75c599840b10347e778672" FOREIGN KEY ("addressAddressId") REFERENCES "addresses"("addressId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dumpSpots" DROP CONSTRAINT "FK_8788c75c599840b10347e778672"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_11821a5044e5dcfbf42fd4f9143"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1ad53983b2477b72bcc777dcb79"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_4b96768b71174aeee98d1840765"`);
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_a31bff9c589cac2107a968b4c60"`);
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_72424f66a26843eaa1bd9382e93"`);
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_0418d15b48d18774bca488e239d"`);
        await queryRunner.query(`ALTER TABLE "histories" DROP CONSTRAINT "FK_e70c424e9182871dc00a710e76f"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "dumpSpots"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "histories"`);
    }

}
