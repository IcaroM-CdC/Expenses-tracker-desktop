<template>
	<div id="main-div">
		<div id="main-page-btn">

		</div>
		<div id="month-chart-button">

		</div>
	</div>
</template>

<script>
export default {
	name: "SideBar"
}
</script>

<style scoped>
	#main-div {
		width: 100%;
		height: 100%;
		/*background: #2E3247;*/
		background: #9fa8d0;
		display: flex;
		flex-direction: column;
		padding: 3px;

	}

	#main-page-btn {
		width: 100%;
		height: 10%;
		background-color: #F4B74A;
		margin-bottom: 3px;
	}

	#month-chart-button {
		width: 100%;
		height: 10%;
		background-color: #F4B74A;
	}
</style>