<template>
	<a
		:href="project.url"
		class="animate-fade block overflow-hidden rounded-lg border border-gray-900 bg-gray-700 shadow-lg hover:bg-gray-800"
	>
		<!-- <img class="w-full h-48 object-cover" :src="project.image" alt="Project Image"> !-->
		<div class="p-4">
			<h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
			<p class="text-white">{{ project.description }}</p>
			<div class="mt-4 flex items-center">
				<span class="mr-2 font-semibold text-white">Language:</span>
				<span class="text-white">{{ project.language }}</span>
			</div>
			<div class="mt-2 flex items-center">
				<span class="mr-2 font-semibold text-white">Stars:</span>
				<span class="text-white">{{ project.stars }}</span>
			</div>
			<div class="mt-2 flex items-center">
				<span class="mr-2 font-semibold text-white">Last Updated:</span>
				<span class="text-white">{{ project.lastUpdated }}</span>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		project: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>