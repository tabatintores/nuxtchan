<template>
    <div class="board">
        <h2 class="h2">{{board.BoardName}}</h2>
        <h3 v-html="board.BoardInfo"></h3>
        <RecycleScroller
            class="scroller"
            :items="board.threads"
            :item-size="10"
            key-field="num"
            v-slot="{item}"
        >
                <!--<thread-preview class="item" :thread="item">
                    <div style="width: 100%; height: 3px; background: #555; margin: 25px 0; display: flex;"></div>
                </thread-preview>-->
            {{item.num}}
        </RecycleScroller>
    </div>
</template>

<script>
    import ThreadPreview from "@/components/thread/ThreadPreview";
    import { RecycleScroller } from 'vue-virtual-scroller';
    import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
    export default {
        components: {
            ThreadPreview,
            RecycleScroller
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
    }
</script>

<style lang="scss">
    @import "@/assets/scss/style";
    .board {
        max-width: 100%-$sidebar-width;
        padding: 30px 15px;
        margin-left: $sidebar-width;
    }
    .scroller {
        height: 100%;
    }
    .item {
        height: 100px;
        min-height: 250px;
        margin-bottom: 100px;
    }
</style>
