<template>
	<div id="main-div">
		<div id="top-bar">
			<TopBar></TopBar>
		</div>
		<div id="body">
			<div id="side-bar">
				<div id="side-bar-wrapper">
					<SideBar/>
				</div>
					<Button_new @newTransactionState="a">

					</Button_new>
<!--				<v-btn-->
<!--					x-large-->
<!--					color="#38C183"-->
<!--					v-on:click="handleNewTransactionBtnClick"-->
<!--				>-->
<!--					<span>Confirm</span>-->
<!--				</v-btn>-->
			</div>
			<div id="charts-info">
				<div id="profits-expenses-div">
					<div class="profit-loan-card">
						<div class="profit-loan-card-wrapper">
							<span class="profit-loan-card-title">Total profits</span>
							<span class="profit-loan-card-value">R$ 200,00</span>
						</div>
						<img id="profit-loan-card-image-profit" src="@/assets/moneyUp.png"  alt=""/>
					</div>
					<div class="profit-loan-card">
						<div class="profit-loan-card-wrapper">
							<span class="profit-loan-card-title">Total expenses</span>
							<span class="profit-loan-card-value">R$ 40,00</span>
						</div>
						<img id="profit-loan-card-image-expense" src="@/assets/moneyDown.png" />
					</div>
					<div class="profit-loan-card">
						<div class="profit-loan-card-wrapper">
							<span class="profit-loan-card-title">Upcoming</span>
							<span class="profit-loan-card-value">R$ 4.000,00</span>
						</div>
						<img id="profit-loan-card-image-upcoming" src="@/assets/moneyStack.png" />
					</div>
					<div class="profit-loan-card">
						<div class="profit-loan-card-wrapper">
							<span class="profit-loan-card-title">Balance</span>
							<span class="profit-loan-card-value">R$ 160,00</span>
						</div>
						<img id="profit-loan-card-image-balance" src="@/assets/bank.png" />
					</div>
				</div>
				<div id="chart">

					<TransactionsList></TransactionsList>


				</div>
			</div>
		</div>

		<ExpenseProfitForm id="expense-profit-form" ref="form"></ExpenseProfitForm>

	</div>
</template>

<script>
	// import Chart from "./chart"
	import Button_new from "../singleComponents/button"
	import ExpenseProfitForm from "./form"
	import TopBar from "./topBar"
	import SideBar from "./sideBar"
	import TransactionsList from "./transactionsList"

	export default {
		name: "tracker",


		data: () => ({
			state: false,
		}),

		components: {
			// Chart,
			Button_new,
			ExpenseProfitForm,
			TransactionsList,
			TopBar,
			SideBar,
		},

		methods: {
			handleNewTransactionBtnClick: function(){
				this.$refs.form.setNewTransactionState(true);
			},
			a: function(e){
				console.log(e)
				this.handleNewTransactionBtnClick()
			}

		},
		// beforeMount() {
		// 	console.log(this.$refs.form.getCancelClickState())
		// },
		// beforeUpdate() {
		// 	console.log("aaaaa")
		// }
	}


</script>

<style>

	#main-div {
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: #2B2E44;
	}

	#top-bar {
		background-color: #2E3247;
		height: 10vh;
		width: 100%;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
	}

	#body {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100%;
		background: #2B2E44;
		margin-top: 4vh;
		margin-bottom: 4vh;
	}

	/* Side bar elements styles */

	#side-bar {
		display: flex;
		flex-direction: column;
		width: 15%;
		margin-left: 2vw;
		background-color: #2E3247;
		border-radius: 3px;
	}

	#side-bar-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 92%;
		background-color: #2E3247;
		border-bottom: 10px solid #2B2E44;
	}

	/* profits and expenses list style*/

	#profits-expenses-div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 15vh;
		width: 100%;
		background-color: transparent;
		border-radius: 3px;
	}

	/* profits info cards style */

	.profit-loan-card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		height:100%;
		width: 24%;
		background-color: #2E3247;
		border-radius: 3px;
	}

	.profit-loan-card-wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 70%;
		background-color: #2E3247;
		margin-right: 1vw;
		justify-content: center;
		align-items: start;
	}

	.profit-loan-card-title {
		color: #8E8E9E;
		margin-left: 1vw;
		font-size: 3vh;
		margin-bottom: 1vh;
	}

	.profit-loan-card-value {
		color: #FEFEFF;
		margin-left: 1vw;
		font-size: 3vh
	}

	#profit-loan-card-image-profit {
		width: 20%;
	}

	#profit-loan-card-image-expense {
		width: 20%;
	}

	#profit-loan-card-image-upcoming {
		width: 20%;
	}

	#profit-loan-card-image-balance{
		width: 20%;
	}

	/* ###################### */

	#chart {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 67vh;
		margin-top: 2vh;
		border-radius: 2px;
		/*background-color: #2E3247;*/
		background-color: #33374A;
	}

	#charts-info {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 80%;
		margin-left: 1vw;
		background-color: #2B2E44;
		border-radius: 3px;
	}

	/* expenses and profits add screen */


	#expense-profit-form {
		width: 100%;
		height: 100%;
		position: absolute;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background:rgba(57,60,80,0.98); /* define the opacity */
		/*2B4B53*/
		/*43,46,68*/
	}

</style>

