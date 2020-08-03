<template>
    <div class="board board--error">
        <h1>Страница не найдена</h1>
    </div>
</template>

<script>
    export default {
        name: "error",
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/style";
    .board {
        max-width: 100%-$sidebar-width;
        padding: 30px 15px;
        margin-left: $sidebar-width;
        &--error {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
</style>
