<template>
	<div id="main-div">
		<div id="top-bar">

		</div>
		<div id="body">
			<div id="side-bar">

			</div>
			<div id="charts-info">
				<div id="profits-expenses-div">
					<div class="profit-loan-card">
						<span class="profit-loan-card-title">Total profits</span>
						<span class="profit-loan-card-value">R$ 200,00</span>
					</div>
					<div class="profit-loan-card">
						<span class="profit-loan-card-title">Total expenses</span>
						<span class="profit-loan-card-value">R$ 44,00</span>
					</div>
					<div class="profit-loan-card">
						<span class="profit-loan-card-title">Upcoming</span>
						<span class="profit-loan-card-value">R$ 4.000,00</span>
					</div>
				</div>
				<div id="chart">
<!--					<Chart options={chartOptions} type="line" height={"95%"} width={"95%"} series={chartSeries.series} ></Chart>-->
				</div>
			</div>
			<div id="profits-expenses">

			</div>
		</div>

	</div>
</template>

<script>
	export default {

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
		background-color: #fff;
		height: 10vh;
		width: 100%;
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

	#side-bar {
		display: flex;
		flex-direction: column;
		width: 15%;
		margin-left: 2vw;
		background-color:#2E3247;
		border-radius: 3px;
	}

	#charts-info {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 60%;
		margin-left: 1vw;
		background-color: #2B2E44;
		border-radius: 3px;
	}

	#profits-expenses {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 19%;
		margin-left: 1vw;
		background-color:#2E3247;
		border-radius: 3px;
	}

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
		flex-direction: column;
		align-items: start;
		justify-content: center;
		height:100%;
		width: 32.5%;
		background-color:#2E3247;
		border-radius: 3px;
	}

	.profit-loan-card-title {
		color: #8E8E9E;
		margin-left: 2vw;
		font-size: 3vh;
		margin-bottom: 1vh;
	}

	.profit-loan-card-value {
		color: #FEFEFF;
		margin-left: 2vw;
		font-size: 3.5vh
	}

	/* ###################### */

	#chart {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 67vh;
		margin-top: 2vh;
		background-color:#2E3247;
	}

</style>