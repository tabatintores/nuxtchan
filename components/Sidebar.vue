<template>
    <section class="sidebar">
        <div class="sidebar__controls">
            <svg @click="updateBoard" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" class="sidebar__controls-update svg-inline--fa fa-redo fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"/></svg>
<!--            <a href="javascript:void(0)" @click="updateBoard">Обновить</a>-->
        </div>
        <ul class="sidebar__categories">
            <li class="sidebar__category" v-for="(category, boards) of Object.entries(boardsList)" :key="category[0]">
                <ul class="sidebar__boards">
                    <li class="sidebar__category-title">{{category[0]}}</li>
                    <nuxt-link
                        tag="li"
                        v-for="board in category[1]"
                        :to="`/${board.id}`"
                        class="sidebar__board"
                        :key="board.id"
                    >
                        /{{board.id}}/ - {{board.name}}
                    </nuxt-link>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Sidebar",
        async fetch({params, store, error}) {
            if (!store.getters[`boards/boardsIds`].length) {
                console.log('No boards!')
                await store.dispatch(`boards/fetch`);
            }
            console.log(store.getters['boards/boardsList'])
        },
        data() {
            return {
                timer: null
            }
        },
        computed: {
            boardsList() {
                return this.$store.getters['boards/boardsList']
            }
        },
        async created() {
            await this.$store.dispatch(`boards/fetch`);
        },
        methods: {
            updateBoard() {
                clearTimeout(this.timer)
                this.timer = setTimeout(async () => {
                    await this.$store.dispatch('board/updateData', this.$route.params.board);
                    console.log('Список тредов обновлён!');
                }, 500)
            }
        },
        mounted() {
            /*Object.entries(this.boardsList).forEach((key, value) => {
                console.log(key[1])
            })*/
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/style";
    .sidebar {
        position: fixed;
        height: 100%;
        width: $sidebar-width;
        top: 0;
        left: 0;
        border-right: 1px solid rgba(0,0,0,0.11);
        padding: 10px;
        overflow-x: hidden;
        &__controls {
            padding-bottom: 10px;
            &-update {
                height: 20px;
                cursor: pointer;
                &:hover {
                    opacity: 0.7;
                }
            }
        }
        &__category {
            &-title {
                font-weight: 600;
                padding: 5px;
                width: 100%;
                background: rgba(222, 219, 219, 0.97);
            }
            &:nth-child(n+2) {
                margin-top: 10px;
            }
        }
        &__board {
            margin: 5px 0;
            &:hover {
                color: orange;
                cursor: pointer;
            }
        }
    }
</style>
