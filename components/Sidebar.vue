<template>
    <section class="sidebar">
        <div class="sidebar__controls">
            <nuxt-link to="/" tag="i" class="sidebar__icon sidebar__icon--home" exact/>
            <i class="sidebar__icon sidebar__icon--refresh" @click="updateBoard"></i>
            <!--            <a href="javascript:void(0)" @click="updateBoard">Обновить</a>-->
        </div>
        <div class="sidebar__search">
            <input
                class="sidebar__search-input"
                type="text"
                v-model="search"
                placeholder="Поиск доски"
            >
        </div>
        <ul class="sidebar__categories">
            <li class="sidebar__category" v-for="(category, boards) of Object.entries(boardsList)" :key="category[0]">
                <ul class="sidebar__boards">
                    <li class="sidebar__category-title">{{ category[0] }}</li>
                    <nuxt-link
                        tag="li"
                        v-for="board in category[1]"
                        :to="`/${board.id}`"
                        class="sidebar__board"
                        :key="board.id"
                    >
                        /{{ board.id }}/ - {{ board.name }}
                    </nuxt-link>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            timer: null,
            search: ''
        }
    },
    computed: {
        boardsList() {
            if (this.search.length) {
                let boards = Object.values(this.$store.getters[`boards/boardsList`]).flat()
                let filteredBoards = boards.filter(board => board.name.toLowerCase().includes(this.search.toLowerCase()) || board.id.toLowerCase().includes(this.search.toLowerCase()))
                filteredBoards = filteredBoards.reduce((acc,cur) => {
                    acc[cur.category] = acc[cur.category] || [];
                    acc[cur.category].push(cur)
                    return acc
                }, {});
                return filteredBoards;
            } else {
                return this.$store.getters['boards/boardsList']
            }
        }
    },
    methods: {
        updateBoard() {
            clearTimeout(this.timer);
            this.timer = setTimeout(async () => {
                await this.$store.dispatch('board/updateData', this.$route.params.board);
            }, 500);
        }
    },
    async created() {
        if (!this.$store.getters[`boards/boardsList`].length) {
            await this.$store.dispatch(`boards/fetch`);
        }
    },
    /*mounted() {
        let boards = Object.values(this.$store.getters[`boards/boardsList`]).flat()
        let filteredBoards = boards.filter(board => board.name.includes('Трапы'))
        filteredBoards = filteredBoards.reduce((acc,cur) => {
            acc[cur.category] = acc[cur.category] || [];
            acc[cur.category].push(cur)
            return acc
        }, {});
        console.log(filteredBoards)
    }*/
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
    border-right: 1px solid rgba(0, 0, 0, 0.11);
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

    &__search {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;

        &-input {
            width: 100%;
            height: 35px;
            border: 1px solid #b5b5b5;
            outline: none;
            padding-left: 10px;

            &:focus {
                border: 1px solid #e0e0e0;
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
