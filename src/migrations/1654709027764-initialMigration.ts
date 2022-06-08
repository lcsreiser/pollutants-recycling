import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1654709027764 implements MigrationInterface {
    name = 'initialMigration1654709027764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stocks" ("stockId" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "categoryCategoryId" uuid, "dumpSpotDumpSpotId" uuid, CONSTRAINT "PK_17fe126989bcddf544ae0758fab" PRIMARY KEY ("stockId"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("categoryId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "unit" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_c9594c262e6781893a1068d91be" PRIMARY KEY ("categoryId"))`);
        await queryRunner.query(`CREATE TABLE "transactionsCollect" ("transCollectId" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "itemItemId" uuid, "providerDumpSpotId" uuid, "collectorUserId" uuid, CONSTRAINT "PK_b98b1538c5f19f441915af6e79c" PRIMARY KEY ("transCollectId"))`);
        await queryRunner.query(`CREATE TABLE "items" ("itemId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "quantity" integer NOT NULL, "categoryCategoryId" uuid, "ownerUserId" uuid, "dumpSpotDumpSpotId" uuid, CONSTRAINT "PK_151f283a98f27c634dacfdb965b" PRIMARY KEY ("itemId"))`);
        await queryRunner.query(`CREATE TABLE "dumpSpots" ("dumpSpot_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "addressAddressId" uuid, CONSTRAINT "UQ_44083d54d5b17c61163aeb49216" UNIQUE ("name"), CONSTRAINT "REL_8788c75c599840b10347e77867" UNIQUE ("addressAddressId"), CONSTRAINT "PK_10f7c3035d365f90b2304c743cb" PRIMARY KEY ("dumpSpot_id"))`);
        await queryRunner.query(`CREATE TABLE "transactionsDiscard" ("transDiscardId" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "itemItemId" uuid, "providerUserId" uuid, "collectorDumpSpotId" uuid, CONSTRAINT "PK_1269860116980ae4b37f7ec8a6e" PRIMARY KEY ("transDiscardId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "addressAddressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_11821a5044e5dcfbf42fd4f914" UNIQUE ("addressAddressId"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("addressId" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying NOT NULL, "complement" character varying NOT NULL, "number" integer NOT NULL, "isDumpSpot" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_ff59275f5928941ce06f1d8890c" PRIMARY KEY ("addressId"))`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_2b55977dd3e10296bd8697ad46e" FOREIGN KEY ("categoryCategoryId") REFERENCES "categories"("categoryId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_651f36d779f245d6bc047e42e0a" FOREIGN KEY ("dumpSpotDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" ADD CONSTRAINT "FK_eafacb642b565159a955f088a68" FOREIGN KEY ("itemItemId") REFERENCES "items"("itemId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" ADD CONSTRAINT "FK_407b5791eb8f212d5e6f7ef2ce3" FOREIGN KEY ("providerDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" ADD CONSTRAINT "FK_4b7132f7f3d42e3d9909b60130d" FOREIGN KEY ("collectorUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_4b96768b71174aeee98d1840765" FOREIGN KEY ("categoryCategoryId") REFERENCES "categories"("categoryId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_1ad53983b2477b72bcc777dcb79" FOREIGN KEY ("ownerUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_d27742fab49652eaabc1cc203cc" FOREIGN KEY ("dumpSpotDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dumpSpots" ADD CONSTRAINT "FK_8788c75c599840b10347e778672" FOREIGN KEY ("addressAddressId") REFERENCES "addresses"("addressId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" ADD CONSTRAINT "FK_f949b1a6ff892625bc9a306ba4a" FOREIGN KEY ("itemItemId") REFERENCES "items"("itemId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" ADD CONSTRAINT "FK_d949f1cb5682898a0874070bad8" FOREIGN KEY ("providerUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" ADD CONSTRAINT "FK_1e3efce58fa10fd5da81bff84e2" FOREIGN KEY ("collectorDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_11821a5044e5dcfbf42fd4f9143" FOREIGN KEY ("addressAddressId") REFERENCES "addresses"("addressId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_11821a5044e5dcfbf42fd4f9143"`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" DROP CONSTRAINT "FK_1e3efce58fa10fd5da81bff84e2"`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" DROP CONSTRAINT "FK_d949f1cb5682898a0874070bad8"`);
        await queryRunner.query(`ALTER TABLE "transactionsDiscard" DROP CONSTRAINT "FK_f949b1a6ff892625bc9a306ba4a"`);
        await queryRunner.query(`ALTER TABLE "dumpSpots" DROP CONSTRAINT "FK_8788c75c599840b10347e778672"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_d27742fab49652eaabc1cc203cc"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_1ad53983b2477b72bcc777dcb79"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_4b96768b71174aeee98d1840765"`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" DROP CONSTRAINT "FK_4b7132f7f3d42e3d9909b60130d"`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" DROP CONSTRAINT "FK_407b5791eb8f212d5e6f7ef2ce3"`);
        await queryRunner.query(`ALTER TABLE "transactionsCollect" DROP CONSTRAINT "FK_eafacb642b565159a955f088a68"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_651f36d779f245d6bc047e42e0a"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_2b55977dd3e10296bd8697ad46e"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transactionsDiscard"`);
        await queryRunner.query(`DROP TABLE "dumpSpots"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "transactionsCollect"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "stocks"`);
    }

}
