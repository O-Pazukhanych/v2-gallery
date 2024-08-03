<script>
	export default {
		name: `Gallery`,
		data: () => ({
			items: [
				{
					id: 1,
					src: require('../assets/images/gallery/img1.jpg'),
				},
				{
					id: 2,
					src: require('../assets/images/gallery/img2.jpg'),
				},
				{
					id: 3,
					src: require('../assets/images/gallery/img3.jpg'),
				},
				{
					id: 4,
					src: require('../assets/images/gallery/img4.jpg'),
				},
				{
					id: 5,
					src: require('../assets/images/gallery/img5.jpg'),
				},
				{
					id: 6,
					src: require('../assets/images/gallery/img6.jpg'),
				},
				{
					id: 7,
					src: require('../assets/images/gallery/img7.jpg'),
				},
				{
					id: 8,
					src: require('../assets/images/gallery/img8.jpg'),
				},
				{
					id: 9,
					src: require('../assets/images/gallery/img9.jpg'),
				},
				{
					id: 10,
					src: require('../assets/images/latest-post/img1.jpg'),
				},
				{
					id: 11,
					src: require('../assets/images/latest-post/img2.jpg'),
				},
				{
					id: 12,
					src: require('../assets/images/latest-post/img3.jpg'),
				}
			]
		})
	}
</script>

<template>
	<div class="block galleryBlock">
		<v-container>
			<h2 class="text-center">Gallery</h2>
			<v-row v-if="$resize && $mq.above(600)">
				<v-col
					v-for="item in items"
					:key="item.id"
					class="d-flex child-flex col-2"
					:class="{'col-4': $resize && $mq.above(768)}"
				>
					<v-img
						:src="item.src"
						aspect-ratio="1"
						class="bg-grey-lighten-2"
						cover
					>
						<template v-slot:placeholder>
							<v-row
								align="center"
								class="fill-height ma-0"
								justify="center"
							>
								<v-progress-circular
									color="grey-lighten-5"
									indeterminate
								></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</v-col>
			</v-row>
			<v-carousel
				v-else
				height="320"
				hide-delimiter-background
			>
				<v-carousel-item
					v-for="item in items"
					:key="item.id"
					:src="item.src"
					reverse-transition="fade-transition"
					transition="fade-transition"
					cover
				></v-carousel-item>
			</v-carousel>
		</v-container>
	</div>
</template>
