<script>
    import { Link } from "@inertiajs/svelte";
    import { page } from "@inertiajs/svelte";

    let mobileMenuOpen = false;

    function isActive(path) {
        return $page.url === path || $page.url.startsWith(path + "/");
    }

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
</script>

<nav class="bg-primary shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <Link href="/" class="text-white text-xl font-bold">
                        MyApp
                    </Link>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                        href="/"
                        class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                            {isActive('/') && $page.url === '/'
                            ? 'border-indigo-500 text-white'
                            : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'}"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                            {isActive('/about')
                            ? 'border-indigo-500 text-white'
                            : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'}"
                    >
                        About
                    </Link>

                    <Link
                        href="/services"
                        class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                            {isActive('/services')
                            ? 'border-indigo-500 text-white'
                            : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'}"
                    >
                        Services
                    </Link>

                    <Link
                        href="/contact"
                        class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors
                            {isActive('/contact')
                            ? 'border-indigo-500 text-white'
                            : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white'}"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <!-- Right side -->
            <div class="hidden sm:flex sm:items-center">
                {#if $page.props.auth?.user}
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-300 text-sm">
                            {$page.props.auth.user.name}
                        </span>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Logout
                        </Link>
                    </div>
                {:else}
                    <div class="flex items-center space-x-4">
                        <Link
                            href="/login"
                            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Register
                        </Link>
                    </div>
                {/if}
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center sm:hidden">
                <button
                    on:click={toggleMobileMenu}
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                >
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {#if mobileMenuOpen}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        {:else}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        {/if}
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
        <div class="sm:hidden">
            <div class="pt-2 pb-3 space-y-1">
                <Link
                    href="/"
                    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                        {isActive('/') && $page.url === '/'
                        ? 'bg-gray-900 border-indigo-500 text-white'
                        : 'border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white'}"
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                        {isActive('/about')
                        ? 'bg-gray-900 border-indigo-500 text-white'
                        : 'border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white'}"
                >
                    About
                </Link>
                <Link
                    href="/services"
                    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                        {isActive('/services')
                        ? 'bg-gray-900 border-indigo-500 text-white'
                        : 'border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white'}"
                >
                    Services
                </Link>
                <Link
                    href="/contact"
                    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                        {isActive('/contact')
                        ? 'bg-gray-900 border-indigo-500 text-white'
                        : 'border-transparent text-gray-300 hover:bg-gray-700 hover:border-gray-300 hover:text-white'}"
                >
                    Contact
                </Link>
            </div>
        </div>
    {/if}
</nav>