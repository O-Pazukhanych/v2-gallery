<script>
export default {
	name: `Contacts`,
	data: () => ({
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => (v && v.length <= 24) || 'Name must be less than 24 characters',
		],
		email: '',
		emailRules: [
			v => !!v || 'Email is required',
			v => /.+@.+\..+/.test(v) || 'Email must be valid',
		],
		message: '',
		messageRules: [
			v => !!v || 'Message is required',
			v => (v && v.length >= 10) || 'Message must be more than 10 characters',
		],
		valid: true
	}),

	methods: {
		validate() {
			if (this.$refs.form.validate()) {
				this.snackbar = true;
				alert('Data sent successfully');
				this.$refs.form.reset();
			}
		},
		reset() {
			this.$refs.form.reset();
		}
	},
}
</script>

<template>
	<v-main tag="div">
		<div class="staticHero">
			<v-img
				src="../assets/images/hero/static/img2.jpg"
			>
				<v-row align="end" class="lightbox white--text pa-2 fill-height">
					<v-col>
						<v-container>
							<div
								class="headline title"
								:class="{'text-md-h1 text-sm-h2': $resize && $mq.above(769)}"
							>
								Contact Us
							</div>
						</v-container>
					</v-col>
				</v-row>
			</v-img>
		</div>
		<div class="block">
			<v-container>
				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
				>
					<v-text-field
						v-model="name"
						:counter="24"
						:rules="nameRules"
						label="Name"
						required
					></v-text-field>

					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						required
					></v-text-field>

					<v-textarea
						v-model="message"
						:rules="messageRules"
						clearable
						label="Message"
						variant="underlined"
						aria-required="true"
					></v-textarea>

					<div class="d-flex" style="gap: 14px">
						<v-btn
							:disabled="!valid"
							class="mt-4"
							color="success"
							@click="validate"
							:class="{'flex-fill': $resize && !$mq.above(425)}"
						>
							Submit
						</v-btn>

						<v-btn
							class="mt-4"
							color="error"
							@click="reset"
							:class="{'flex-fill': $resize && !$mq.above(425)}"
						>
							Reset
						</v-btn>
					</div>
				</v-form>
			</v-container>
		</div>
		<div class="googlemap">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518364216!2d-0.26640249195601934!3d51.528526204687665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1722715599589!5m2!1sru!2sua"
				width="100%" height="450" style="border:0;" loading="lazy"
			></iframe>
		</div>
	</v-main>
</template>
