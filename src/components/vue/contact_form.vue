<template>
	<div class="bg-gray-800">
		<form class="mx-auto max-w-md p-4" method="POST">
			<div class="mb-4">
				<label for="name" class="text-white">Name</label>
				<input
					type="text"
					id="name"
					class="w-full rounded-md bg-gray-700 px-3 py-2 text-white"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="email" class="text-white">Email</label>
				<input
					type="email"
					id="email"
					class="w-full rounded-md bg-gray-700 px-3 py-2 text-white"
					required
				/>
			</div>
			<div class="mb-4">
				<label for="message" class="text-white">Message</label>
				<textarea
					id="message"
					class="w-full rounded-md bg-gray-700 px-3 py-2 text-white"
					required
				></textarea>
			</div>
			<button type="submit" class="rounded-md bg-gray-700 px-4 py-2 text-white">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'ContactForm'
	// Component logic goes here
}
</script>

<style scoped>
/* Component styles go here */
</style>
