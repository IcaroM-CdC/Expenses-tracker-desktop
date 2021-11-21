import { EntityRepository, Repository } from "typeorm";
import { Expense } from "../entities/expenses"

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense>{}