<template>
	<div id="main-div">
		<div class="list-element">
			<div class="list-element-side-card"></div>
			<img class="list-element-img" src="@/assets/creditCard.png" />
			<span class="list-element-value">44,00</span>
			<span class="list-element-description">Lorem Ipsum is simply dummy text of the printing</span>

		</div>
	</div>
</template>

<script>
export default {
	name: "TransactionsList"
}
</script>

<style scoped>
	#main-div {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #4053b6;
		/*background-color: #2E3247;*/
		border-radius: 3px;
	}

	.list-element {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		width: 100%;
		height: 12%;
		background-color: #3E4155;

	}
	.list-element-side-card {
		display: flex;
		width: 1%;
		height: 100%;
		position: relative;
		align-items: center;
		justify-content: start;
		background: #38C183;
		margin-right: 4%;
	}
	.list-element-img {
		width: 4.4%;
		height: 79.65%;
	}
	.list-element-value {
		margin-left: 10%;
		font-size: 3vh;
		color: #FEFEFF;
	}
	.list-element-description {
		margin-left: 15%;
		color: #8E8E9E;
		font-size: 2.5vh;
	}


</style>