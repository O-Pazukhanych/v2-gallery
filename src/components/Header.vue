<script>
	export default {
		name: `Header`,

		data: () => ({
			items: [
				{ href: '/', title: 'Home' },
				{ href: '/about', title: 'About' },
				{ href: '/contacts', title: 'Contact' },
			],
		}),
	}
</script>

<template>
	<v-container>
		<v-toolbar tag="div" color="transparent" flat>
			<v-toolbar-title>
				<router-link to="/" class="router-link">
					v2-Gallery
				</router-link>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items v-if="$resize && $mq.above(600)">
				<v-btn
					text
					v-for="(item, index) in items"
					:key="index"
				>
					<router-link :to="item.href" class="router-link">
						{{item.title}}
					</router-link>
				</v-btn>
			</v-toolbar-items>
			<v-toolbar-items v-else>
				<v-app-bar-nav-icon id="menu-activator"></v-app-bar-nav-icon>
				<v-menu activator="#menu-activator">
					<v-list>
						<v-list-item v-for="(item, index) in items" :key="index" :value="index">
							<v-list-item-title>
								<router-link :to="item.href" class="router-link">
									{{item.title}}
								</router-link>
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar-items>
		</v-toolbar>
	</v-container>
</template>
