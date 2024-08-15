<template>
    <nav class="bg-gray-800" style="padding-bottom: 2%;">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex flex-shrink-0 items-center pl-4">
                    <!-- <img class="h-8 w-8" src="/logo.png" alt="Logo" /> -->
                    <span class="ml-2 text-lg font-semibold text-white">Aren M</span>
                </div>
                <div class="md:hidden">
                    <button
                        @click="toggleMobileMenu"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
                        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
                    >
                        <span class="sr-only">Open menu</span>
                        <svg
                            class="block h-6 w-6"
                            :class="{ 'hidden': isMobileMenuOpen }"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            class="hidden h-6 w-6"
                            :class="{ 'block': isMobileMenuOpen }"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a
                            href="/"
                            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            :class="{ 'bg-gray-700 text-white': activePage === '/' }"
                            >Home</a
                        >
                        <a
                            href="#"
                            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            :class="{ 'bg-gray-700 text-white': activePage === '/about' }"
                            >About</a
                        >
                        <a
                            href="/projects"
                            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            :class="{ 'bg-gray-700 text-white': activePage === '/projects' }"
                            >Projects</a
                        >
                        <a
                            href="#"
                            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            :class="{ 'bg-gray-700 text-white': activePage === '/contacts' }"
                            >Contact</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div
            v-show="isMobileMenuOpen"
            class="md:hidden"
            :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
        >
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    :class="{ 'bg-gray-700 text-white': activePage === '/' }"
                    >Home</a
                >
                <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    :class="{ 'bg-gray-700 text-white': activePage === '/about' }"
                    >About</a
                >
                <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    :class="{ 'bg-gray-700 text-white': activePage === '/projects' }"
                    >Projects</a
                >
                <a
                    href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    :class="{ 'bg-gray-700 text-white': activePage === '/contacts' }"
                    >Contact</a
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            activePage: 'home', // Set the active page
            isMobileMenuOpen: false // Track mobile menu state
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
