<template>
    <div>
        <h1>{{board.BoardName}}</h1>
        <h3 v-html="board.BoardInfo"></h3>
        <div v-for="thread of board.threads">
            <a v-for="file of thread.files" :href="`https://2ch.hk${file.path}`" target="_blank">
                <img :src="`https://2ch.hk${file.thumbnail}`" alt="">
            </a>
            <div v-html="thread.comment"/>
            <div style="width: 100%; height: 3px; background: #555; margin: 25px 0; display: flex;"></div>
        </div>


    </div>
</template>

<script>
    export default {
        async fetch({params, store}) {
            await store.dispatch('board/getData', params.board)
        },
        async validate({params, store}) {
            await store.dispatch('boards/fetch');
            return store.getters[`boards/boardsIds`].includes(params.board);
        },
        computed: {
            board() {
                return this.$store.getters['board/boardData'];
            }
        },
    }
</script>

<style scoped>

</style>
