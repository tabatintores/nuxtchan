<template>
    <div>
        <h1>{{board.BoardName}}</h1>
        <h3 v-html="board.BoardInfo"></h3>
    </div>
</template>

<script>
    export default {
        asyncData() {
            return {
                board: {},
                allBoards: []
            }
        },
        methods: {
            checkIfValid(board) {
                return this.allBoards.includes(board);
            }
        },
        async created() {
            const req = await this.$axios.get(`https://2ch.hk/${this.$route.params.board}/catalog.json`);
            this.board = req.data;

            let kek = await this.$axios.get(`https://2ch.hk/makaba/mobile.fcgi?task=get_boards`);


            const allBoards = Object.values(kek.data).reduce((acc,cur )=> {
                cur.map(item => {
                    acc.push(item.id);
                })
                return acc;
            }, [])
        },
        validate({params}) {
            return true;
        },
    }
</script>

<style scoped>

</style>
