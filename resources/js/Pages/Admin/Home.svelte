<script>
    import AppLayout from "../../Layouts/AppLayout.svelte";
    export let message;
</script>

<AppLayout>
    <h1 class="text-2xl font-bold">{message}</h1>
</AppLayout>