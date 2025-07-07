<template>
    <nav class="bg-gray-800 w-full overflow-x-hidden">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo / Brand -->
                <div class="flex-shrink-0">
                    <span class="text-2xl font-semibold text-white">Aren M</span>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden space-x-8 md:flex">
                    <a href="/" class="text-lg font-medium text-gray-300 hover:text-white px-1 py-2 rounded-md">Home</a>
                    <a href="/background"
                        class="text-lg font-medium text-gray-300 hover:text-white px-1 py-2 rounded-md">Background</a>
                    <a href="/projects"
                        class="text-lg font-medium text-gray-300 hover:text-white px-1 py-2 rounded-md">Projects</a>

                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button type="button" @click="mobileMenuOpen = !mobileMenuOpen"
                        class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white overflow-hidden"
                        aria-expanded="false" aria-label="Toggle menu">
                        <!-- Show hamburger or close icon -->
                        <svg v-if="!mobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-700">
            <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">Home</a>
            <a href="/background"
                class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">Background</a>
            <a href="/projects"
                class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600">Projects</a>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            mobileMenuOpen: false,
        };
    },
};
</script>
