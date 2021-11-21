import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("expenses")
export class Expense {


	@PrimaryColumn()
	readonly id: String;

	@Column()
	value: String;

	@Column()
	type: String;

	@Column()
	description: String;

	@Column()
	createdAt: Date;

	@Column()
	financialPostinDate: String;

	constructor() {


		this.id == uuid()

	}
}