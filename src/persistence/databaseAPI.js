import {v4} from "uuid";

export default class DatabaseAPI {
	constructor() {

		const databaseExists = window.localStorage.getItem("database");

		if (databaseExists == null){
			const database = {
				data: []
			}

			const jsonData = JSON.stringify(database)

			window.localStorage.setItem("database", jsonData)
		}
	}

	addTransaction(value, type, description, createdDate, releaseDate, isExpense){
		const transaction = {
			id: v4(),
			value: value,
			type: type,
			description: description,
			createdDate: createdDate,
			releaseDate: releaseDate,
			isExpense: isExpense
		}

		const database = window.localStorage.getItem("database")
		const parsedData = JSON.parse(database)

		// console.log(parsedData)


		parsedData.data.push(transaction)

		const jsonData = JSON.stringify(parsedData)
		window.localStorage.setItem("database", jsonData)
	}

	listTransactions(parameter = "all", value = 0){
		const database = window.localStorage.getItem("database")
		const parsedData = JSON.parse(database)

		if (parameter == "all"){
			const transactions = parsedData.data
			return transactions
		}

		else {
			const transactions = parsedData.data.filter(transaction => {
				if (transaction[parameter] === value){
					return transactions
				}
			})
		}
	}
}
