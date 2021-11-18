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

</style>
