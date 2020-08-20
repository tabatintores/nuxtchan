<template>
    <div class="content board" :id="`board_${board.Board}`">
        <h2 class="h2">{{board.BoardName}}</h2>
        <h3 v-html="board.BoardInfo"></h3>
        <thread-preview v-for="thread of board.threads.slice(0, offset)" :thread="thread" :key="thread.num" :id="thread.num"/>
        <infinite-loading
            spinner="spiral"
            @infinite="infiniteScroll"
        >
            <div slot="no-more"></div>
        </infinite-loading>
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
        data() {
            return {
                offset: 10
            }
        },
        computed: {
            board() {
                return this.$store.getters['board/boardData'](this.$route.params.board);
            },
        },
        methods: {
            infiniteScroll($state) {
                if (this.offset < this.board.threads.length) {
                    setTimeout(() => {
                        this.offset += 10;
                        $state.loaded();
                    }, 500)
                } else {
                    $state.complete();
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/scss/style";
</style>
