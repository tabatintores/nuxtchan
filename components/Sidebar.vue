<template>
    <section class="sidebar">
        <div class="sidebar__controls">
            <nuxt-link to="/" tag="i" class="sidebar__icon sidebar__icon--home" exact/>
            <i class="sidebar__icon sidebar__icon--refresh" @click="updateBoard"></i>
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
                clearTimeout(this.timer);
                this.timer = setTimeout(async () => {
                    await this.$store.dispatch('board/updateData', this.$route.params.board);
                }, 500);
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
    $icon-size: 20px;
    .sidebar {
        position: fixed;
        height: 100%;
        width: $sidebar-width;
        /*background-color: #FAFAFA;*/
        top: 0;
        left: 0;
        border-right: 1px solid rgba(0,0,0,0.11);
        padding: 10px;
        overflow-x: hidden;
        user-select: none;
        &__icon {
            cursor: pointer;
            transition: all .25s ease-in-out;
            &--home {
                @include icon($lightning-icon, 24px);
            }
            &--refresh {
                @include icon($refresh-icon, $icon-size);
            }
            &:hover {
                transform: scale(1.2);
            }
            &:nth-child(n+2) {
                margin-left: 5px;
            }
        }
        &__controls {
            padding-bottom: 10px;
            display: flex;
            align-items: center;
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
                color: #000;
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
