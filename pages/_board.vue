<template>
    <div class="board">
        <h2 class="h2">{{board.BoardName}}</h2>
        <h3 v-html="board.BoardInfo"></h3>
        <div v-for="thread of board.threads" :key="thread.num">
            <a class="image" v-for="file of thread.files" :href="`https://2ch.hk${file.path}`" target="_blank">
                <img :src="`https://2ch.hk${file.thumbnail}`" alt="">
            </a>
            <br>
            <a target="_blank" :href="`https://2ch.hk/${board.Board}/res/${thread.num}.html`">В тред</a>
            <div v-html="thread.comment"/>
            <div style="width: 100%; height: 3px; background: #555; margin: 25px 0; display: flex;"></div>
        </div>


    </div>
</template>

<script>
    export default {
        async fetch({params, store, error}) {
            if (!store.getters[`boards/boardsIds`].length)
                await store.dispatch(`boards/fetch`);

            if (!store.getters[`boards/boardsIds`].includes(params.board)) {
                error({ statusCode: 401})
            } else {
                await store.dispatch('board/getData', params.board);
            }
        },
        async validate({params}) {
            return /^[a-z]+$/.test(params.board);
        },
        computed: {
            board() {
                return this.$store.getters['board/boardData'](this.$route.params.board);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/style";
    .board {
        max-width: 100%-$sidebar-width;
        padding: 30px 15px;
        margin-left: $sidebar-width;
    }
    .image {
        &:nth-child(n+2) {
            margin-left: 10px;
        }
    }
</style>
