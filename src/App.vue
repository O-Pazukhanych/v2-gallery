<script>
	import Header from './components/Header.vue';
	import Footer from "@/components/Footer.vue";

	export default {
		name: 'App',

		components: {
			Header,
			Footer
		},

		data: () => ({
			//
		}),
	};
</script>

<template>
	<v-app>
		<v-app-bar
			app
		>
			<Header/>
		</v-app-bar>

		<v-main style="padding: 0">
			<router-view />
		</v-main>

		<v-footer>
			<Footer />
		</v-footer>
	</v-app>
</template>
