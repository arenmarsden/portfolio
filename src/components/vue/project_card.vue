<template>
    <a :href="project.url" class="block bg-gray-700 shadow-lg rounded-lg overflow-hidden border border-gray-900 hover:bg-gray-800">
        <!-- <img class="w-full h-48 object-cover" :src="project.image" alt="Project Image"> !-->
        <div class="p-4">
            <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
            <p class="text-white">{{ project.description }}</p>
            <div class="flex items-center mt-4">
                <span class="text-gray-700 mr-2 text-white">Language:</span>
                <span class="text-gray-600 text-white">{{ project.language }}</span>
            </div>
            <div class="flex items-center mt-2">
                <span class="text-gray-700 mr-2 text-white">Stars:</span>
                <span class="text-gray-600 text-white">{{ project.stars }}</span>
            </div>
            <div class="flex items-center mt-2">
                <span class="text-gray-700 mr-2 text-white">Last Updated:</span>
                <span class="text-gray-600 text-white">{{ project.lastUpdated }}</span>
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