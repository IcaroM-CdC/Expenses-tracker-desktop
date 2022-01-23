<template>
	<div id="main-div">
		<ul id="transactionsList">
			<li v-for="item in this.transactions" :key="item.id" class="listElement">
					<div class="list-element-side-card" :style="[item.isExpense ? {'background': '#F34555'} :{'background': '#00CF87'}]"></div>
					<div class="list-element-img-wraper">
						<img class="list-element-img" src="@/assets/carteira.png"  alt="a"/>
					</div>
					<span class="list-element-value">R$ {{item.value}}</span>
					<span class="list-element-description">{{item.description}}</span>
					<span class="list-element-date">{{item.createdDate.day}}</span>
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
				console.log(data)
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

	::selection {
		color: #F4B74A;
		background: transparent;
	}

	#main-div {
		display: flex;
		width: 100%;
		height: inherit;
		/*background-color: #f3c0c0;*/
		background-color: #2E3247;
		border-radius: 3px;
		padding-top: 0.15%;
		align-items: center;
		justify-content: center;

		overflow: scroll;
		overflow-scrolling: touch;
		scroll-behavior: smooth;
	}

	#transactionsList {
		display: flex;
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
			height: 10%;
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
	.list-element-side-card-expense {
		display: flex;
		width: 1%;
		height: 100%;
		position: relative;
		align-items: center;
		justify-content: start;
		background: #be1111;
		margin-right: 4%;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}
	.list-element-img {
		width: 72%;
		height: 75%;
		user-select: none;
		-webkit-user-drag: none;
	}

	.list-element-img-wraper {
		display: flex;
		justify-content: center;
		align-items: center;
		/*background-color: #FEFEFF;*/
		width: 5%;
		height: 100%;
	}
	.list-element-value {
		display: flex;
		margin-left: 10%;
		font-size: 3.9vh;
		color: #FEFEFF;
		min-width: 20%;
		text-align: start;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	.list-element-description {
		display: flex;
		margin-left: 5%;
		color: #8E8E9E;
		font-size: 2.9vh;
		min-width: 50%;
		height: 100%;
		align-items: center;

	}


</style>