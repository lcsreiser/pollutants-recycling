import { MigrationInterface, QueryRunner } from "typeorm";

export class manyToManyRel1655846092652 implements MigrationInterface {
  name = "manyToManyRel1655846092652";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dump_spots_categories_categories" ("dumpSpotsDumpSpotId" uuid NOT NULL, "categoriesCategoryId" uuid NOT NULL, CONSTRAINT "PK_856f37fdf972a38564251dbcd87" PRIMARY KEY ("dumpSpotsDumpSpotId", "categoriesCategoryId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_74bb58f3525888830c203a6b00" ON "dump_spots_categories_categories" ("dumpSpotsDumpSpotId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1dcc3da632276167b4cdb2d156" ON "dump_spots_categories_categories" ("categoriesCategoryId") `
    );
    await queryRunner.query(
      `ALTER TABLE "dump_spots_categories_categories" ADD CONSTRAINT "FK_74bb58f3525888830c203a6b009" FOREIGN KEY ("dumpSpotsDumpSpotId") REFERENCES "dumpSpots"("dumpSpot_id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "dump_spots_categories_categories" ADD CONSTRAINT "FK_1dcc3da632276167b4cdb2d1566" FOREIGN KEY ("categoriesCategoryId") REFERENCES "categories"("categoryId") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dump_spots_categories_categories" DROP CONSTRAINT "FK_1dcc3da632276167b4cdb2d1566"`
    );
    await queryRunner.query(
      `ALTER TABLE "dump_spots_categories_categories" DROP CONSTRAINT "FK_74bb58f3525888830c203a6b009"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_1dcc3da632276167b4cdb2d156"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_74bb58f3525888830c203a6b00"`
    );
    await queryRunner.query(`DROP TABLE "dump_spots_categories_categories"`);
  }
}
