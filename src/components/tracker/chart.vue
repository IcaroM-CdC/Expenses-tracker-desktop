<template id="main">

	<apexcharts width="97%" height="93%" type="line" :options="chartOptions" :series="series"></apexcharts>

</template>

<script>

	import VueApexCharts from 'vue-apexcharts'
	import DatabaseAPI from "../../persistence/databaseAPI"

	export default {
		name: 'Chart',
		components: {
			apexcharts: VueApexCharts,
		},
		data: function() {
			return {
				chartOptions: {
					// colors:['#F44336', '#E91E63', '#9C27B0'],
					chart: {
						background: "transparent",

						type: 'line',
						zoom: {
							enabled: false
						},
					},
					// dataLabels: {
					// 	enabled: false,
					// 	color: "#FFFFFF"
					// },
					dataLabels: {
						style: {
							colors: ['#ffffff', '#ffffff', '#ffffff']
						}
					},
					stroke: {
						curve: 'straight'
					},
					title: {
						text: 'Product Trends by Month',
						align: 'left'
					},
					grid: {
						row: {
							colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
							opacity: 1
						},
					},
					xaxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
					}
				},
				series: [{
					name: "Desktops",
					data: []
				}],
			}
		},

		mounted() {
			this.fetchData()
		},

		methods: {

			fetchData: function(){
				const databaseAPI = new DatabaseAPI()
				const data = databaseAPI.listTransactions()

				data.forEach((transaction) => {
					this.series[0].data.push(transaction.value)
				})
			}

		}
	}
</script>

<style>
</style>