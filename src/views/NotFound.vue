<script>
export default {
	name: `NotFound`,
	data: () => ({
		timeToRedirect: 15,
		intervalMethod: null
	}),
	mounted() {
		this.intervalMethod = setInterval(() => {
			this.timeToRedirect--;
			if (this.timeToRedirect <= 0) {
				return this.$router.push({ path: '/'})
			}
		}, 1000)
	},
	beforeDestroy() {
		clearInterval(this.intervalMethod);
	}
}
</script>

<template>
	<v-main tag="div">
		<v-container>
			<div class="block text-center notFound">
				<h2>Page not found</h2>
				<i class="mdi mdi-alert-remove red--text" style="font-size: 64px"></i>
				<p>
					We're sorry, the page you requested could not be found. Please go back to the homepage or contact us
					at o.pazukhanych@gmail.com.
				</p>
				<p>
					Don't worry, you will be automatically redirected to the Home page after the time is up:
					<b>{{ timeToRedirect }}s</b>.
				</p>
			</div>
		</v-container>
	</v-main>
</template>
