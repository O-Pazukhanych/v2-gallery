<script>
	import Header from './components/Header.vue';
	import Hero from "@/components/Hero.vue";
	import Gallery from "@/components/Gallery.vue";
	import LatestPost from "@/components/LatestPost.vue";
	import Footer from "@/components/Footer.vue";

	export default {
		name: 'App',

		components: {
			Header,
			Hero,
			Gallery,
			LatestPost,
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

		<v-main>
			<Hero />
			<Gallery />
			<LatestPost />
		</v-main>

		<v-footer>
			<Footer />
		</v-footer>
	</v-app>
</template>
