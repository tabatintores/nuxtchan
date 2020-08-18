<template>
    <div class="content board" :id="`board_${board.Board}`">
        <h2 class="h2">{{board.BoardName}}</h2>
        <h3 v-html="board.BoardInfo"></h3>
        <thread-preview v-for="thread of board.threads.slice(0)" :thread="thread" :key="thread.num"></thread-preview>
    </div>
</template>

<script>
    import ThreadPreview from "@/components/thread/ThreadPreview";
    export default {
        components: {
            ThreadPreview
        },
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
        methods: {
            updateBoardData() {

            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/scss/style";
</style>
