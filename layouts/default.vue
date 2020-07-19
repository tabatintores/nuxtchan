<template>
    <div>
        <Navbar></Navbar>
        <main>
            <Nuxt/>
        </main>
    </div>
</template>
<script>
    import Navbar from "../components/Navbar";

    export default {
        components: {
            Navbar
        }
    }
</script>
<style>

</style>
