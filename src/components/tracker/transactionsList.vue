<template>
	<div id="main-div">
		<ul id="transactionsList">
			<li v-for="item in this.transactions" :key="item.id" class="listElement">
					<div class="list-element-side-card"></div>
					<img class="list-element-img" src="@/assets/creditCard.png" />
					<span class="list-element-value">{{item.value}}</span>
					<span class="list-element-description">{{item.description}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import DatabaseAPI from "../../persistence/databaseAPI";

	export default {
		name: "TransactionsList",

		data: () => ({
			transactions: [],
		}),

		mounted() {
			this.refreshData()
		},

		methods: {
			refreshData: function(){
				const databaseAPI = new DatabaseAPI()
				const data = databaseAPI.listTransactions()

				this.transactions = data
			}
		},
		// computed: {
		// 	transactionType: function(){
		// 		if ()
		// 	}
		// }

	}
</script>

<style scoped>
	#main-div {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #2E3247;
		/*background-color: #2E3247;*/
		border-radius: 3px;
		overflow: scroll;
		overflow-scrolling: touch;
	}

	#transactionsList {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		height: 100%;
		list-style-type: none;
		padding: 0 0 0 0;
	}

	.listElement{
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			width: 100%;
			height: 12%;
			background-color: #3E4155;
			margin-bottom: 0.2%;
	}
	/*.list-element-expense {*/
	/*	display: flex;*/
	/*	flex-direction: row;*/
	/*	align-items: center;*/
	/*	position: relative;*/
	/*	width: 100%;*/
	/*	height: 12%;*/
	/*	background-color: #3E4155;*/
	/*	margin-bottom: 0.2%;*/
	/*}*/

	/*.list-element-side-card-expense {*/
	/*	display: flex;*/
	/*	width: 1%;*/
	/*	height: 100%;*/
	/*	position: relative;*/
	/*	align-items: center;*/
	/*	justify-content: start;*/
	/*	background: #E05F5F;*/
	/*	margin-right: 4%;*/
	/*	border-top-right-radius: 2px;*/
	/*	border-bottom-right-radius: 2px;*/
	/*}*/

	/**/

	.list-element-side-card {
		display: flex;
		width: 1%;
		height: 100%;
		position: relative;
		align-items: center;
		justify-content: start;
		background: #38C183;
		margin-right: 4%;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}
	.list-element-img {
		width: 4.4%;
		height: 79.65%;
	}
	.list-element-value {
		margin-left: 10%;
		font-size: 3vh;
		color: #FEFEFF;
		min-width: 20%;
		text-align: start;
	}
	.list-element-description {
		display: flex;
		margin-left: 5%;
		color: #8E8E9E;
		font-size: 2.5vh;
		min-width: 50%;
	}


</style>