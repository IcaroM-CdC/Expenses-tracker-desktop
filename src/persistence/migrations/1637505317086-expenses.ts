import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class expenses1637505317086 implements MigrationInterface {

	// @ts-ignore
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "expenses",
				columns: [

					/* user provided info */

					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						isNullable: false,
						isUnique: true,
					},
					{
						name: "value",
						type: "varchar",
						isNullable: false,
						isUnique: false,
					},
					{
						name: "type",
						type: "varchar",
						isNullable: false,
						isUnique: false,
					},
					{
						name: "financialPostinDate",
						type: "timestamp",
						default: "now()",
						isNullable: false,
						isUnique: false
					},
					{
						name: "description",
						type: "varchar",
						isNullable: false,
						isUnique: false,
					},

					/* system provided info */

					{
						name: "createdAt",
						type: "timestamp",
						default: "now()",
						isNullable: false,
						isUnique: false
					},
				]
			})
		)
	}

    // @ts-ignore
	public async down(queryRunner: QueryRunner): Promise<void> {

	}

}
