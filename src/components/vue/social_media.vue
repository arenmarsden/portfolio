<template>
    <div class="bg-gray-800 rounded-lg shadow-md p-4">
        <div class="flex items-center">
            <img src="social_media_image.jpg" alt="Social Media Image" class="w-12 h-12 rounded-full">
            <div class="ml-4">
                <h2 class="text-lg font-semibold">John Doe</h2>
                <p class="text-gray-500">@johndoe</p>
            </div>
        </div>
        <p class="mt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc id aliquam ultricies, nisl nunc ultrices nunc, ac tincidunt nunc nunc id mauris.</p>
        <div class="flex justify-between mt-4">
            <a href="#" class="text-blue-500 hover:text-blue-700">Follow</a>
            <a href="#" class="text-gray-500 hover:text-gray-700">View Profile</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialMedia',
}
</script>

<style>
/* Add any custom styles here */
</style>