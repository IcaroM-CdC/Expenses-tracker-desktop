<template>
  <v-app>
      <tracker></tracker>
  </v-app>
</template>

<script>

	import tracker from "@/components/tracker/tracker";

	export default {
		name: 'App',

		components: {
			tracker
		},
		data: () => ({

		}),
	};
</script>
<style>

	/* this comand remove the damn scrollbar */
	::-webkit-scrollbar {
		display: none;
	}
</style>
<!--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-->