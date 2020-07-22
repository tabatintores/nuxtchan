<template>
    <section class="sidebar">
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
        computed: {
            boardsList() {
                return this.$store.getters['boards/boardsList']
            }
        },
        mounted() {
            Object.entries(this.boardsList).forEach((key, value) => {
                console.log(key[1])
            })
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
