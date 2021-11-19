<template id="main">

	<apexcharts width="1000" height="600vh" type="line" :options="chartOptions" :series="series"></apexcharts>

</template>

<script>

import VueApexCharts from 'vue-apexcharts'

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
					background: "#F44336",

					type: 'line',
					zoom: {
						enabled: false
					},
				},
				dataLabels: {
					enabled: false
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
						colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				}
			},
			series: [{
				name: "Desktops",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
			}],
		}
	},
}
</script>

<style>
</style>