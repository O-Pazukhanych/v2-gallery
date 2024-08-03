<script>
export default {
	name: `About`,
	data: () => ({
		items: [
			{
				id: 1,
				src: require('../assets/images/teams/team1.jpg'),
				name: 'Peter Smith',
				title: 'Director'
			},
			{
				id: 2,
				src: require('../assets/images/teams/team2.jpg'),
				name: 'Roy Perry',
				title: 'Photographer'
			},
			{
				id: 3,
				src: require('../assets/images/teams/team3.jpg'),
				name: 'Lisa White',
				title: 'Freelancer'
			}
		]
	})
}
</script>

<template>
	<v-main tag="div">
		<div class="staticHero">
			<v-img
				src="../assets/images/hero/static/img1.jpg"
			>
				<v-row align="end" class="lightbox white--text pa-2 fill-height">
					<v-col>
						<v-container>
							<div
								class="headline title"
								:class="{'text-md-h1 text-sm-h2': $resize && $mq.above(769)}"
							>
								About Us
							</div>
						</v-container>
					</v-col>
				</v-row>
			</v-img>
		</div>
		<div class="block block-mq">
			<v-container>
				<p>
					Photography is an art form that allows us to express our creativity and preserve memories for
					generations to come. It's a way to capture the world around us, from the grand landscapes to the
					small details, and to tell a story through a single image. Whether you're a professional
					photographer or just starting out, the journey of improving your craft is always exciting. You can
					experiment with different lighting, compositions, and techniques to create unique and visually
					stunning images. Additionally, photography allows us to document the world, capture social and
					political issues, and raise awareness about important causes. So grab your camera, go out and
					explore, and let your creativity run free.
				</p>
			</v-container>
		</div>
		<div class="block">
			<v-container>
				<h2 class="text-center">Our Teams</h2>
				<v-row>
					<v-col
						v-for="item in items"
						:key="item.id"
						class="col-auto"
						:class="{'col-4': $resize && $mq.above(600)}"
					>
						<v-card
							flat
							class="mx-auto"
						>
							<v-img
								class="align-end text-white"
								:src="item.src"
								cover
							>
							</v-img>
							<v-card-text class="text--primary text-center">
								<div class="title">{{ item.name }}</div>
								<p>{{ item.title }}</p>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-main>
</template>
