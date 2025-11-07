<script>
    export let children = "";
</script>

<nav class="bg-gray-800 text-white p-4">
    <a href="/" class="mr-4">Home</a>
    <a href="/about" class="mr-4">About</a>
</nav>

<div class="p-6">
    {#if children}
        {children}
    {/if}
</div>