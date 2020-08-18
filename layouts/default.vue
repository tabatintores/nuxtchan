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
        },
        async fetch({params, store, error}) {
            if (!store.getters[`boards/boardsIds`].length)
                await store.dispatch(`boards/fetch`);
        }
    }
</script>
<style lang="scss">
    @import "@/assets/scss/style";
    .app {
        display: flex;
        background-color: #FFF;
        min-height: 100vh;
        width: 100%;
        /*width: 100%;
        position: relative;*/
    }
</style>
