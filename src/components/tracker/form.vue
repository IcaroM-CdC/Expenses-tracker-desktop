<template>
	<div id="main-div2">
			<div id="textfield-div">
				<v-text-field
					label="Outlined"
					outlined
				></v-text-field>
				<v-text-field
					label="Outlined"
					outlined
				></v-text-field>
				<v-select
					v-model="select"
					:items="items"
					:error-messages="errors"
					label="Select"
					data-vv-name="select"
					outlined
					required
				></v-select>
				<v-text-field
					label="Label Text"
					value="12:30:00"
					type="date"
					outlined
				></v-text-field>
			</div>
		<div id="btn-div">

		</div>
	</div>


</template>

<script>
export default {
	name: 'ExpenseProfitForm',
	data: () => ({

	}),

	methods: {

	},
}
</script>

<style>
	#main-div2 {
		width: 100%;
		height: 100%;
		/*background-color: #00bcd4;*/
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}


	#btn-div {
		width: 50%;
		height: 7%;
		background-color: #4f1d1d;
	}

	#textfield-div {
		padding-top: 5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color:#2E3247;
		width: 50%;
	}


	.v-text-field {
		width: 95%;
	}

</style>