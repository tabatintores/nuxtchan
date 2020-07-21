<template>
    <main class="app">
        <Sidebar />
        <Nuxt/>
    </main>
</template>
<script>
    import Sidebar from "@/components/Sidebar";

    export default {
        components: {
            Sidebar
        }
    }
</script>
<style lang="scss">
    @import "@/assets/scss/style";
    .app {
        display: flex;
        /*width: 100%;
        position: relative;*/
    }
</style>
