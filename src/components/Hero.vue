<script>
	export default {
		name: `Hero`,
		data: () => ({
			items: [
				{
					id: 1,
					src: require('../assets/images/hero/img-carousel1.jpg'),
					title: 'We are creative'
				},
				{
					id: 2,
					src: require('../assets/images/hero/img-carousel2.jpg'),
					title: 'We are hard worker'
				},
				{
					id: 3,
					src: require('../assets/images/hero/img-carousel3.jpg'),
					title: 'We are professional'
				},
			],
		})
	}
</script>

<template>
	<div class="heroBlock">
		<v-carousel hide-delimiters :show-arrows="false" cycle>
			<v-carousel-item
				v-for="item in items"
				:key="item.id"
				:src="item.src"
				reverse-transition="fade-transition"
				transition="fade-transition"
				cover
			>
				<v-row class="fill-height title" align="center" justify="center" v-show="$resize && $mq.above(600)">
					{{ item.title }}
				</v-row>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>
