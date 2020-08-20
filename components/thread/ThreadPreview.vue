<template>
    <div class="thread-preview">
        <div class="thread-preview__info">
            <span class="thread-preview__meta thread-preview__name">{{thread.name}}</span>
            <span class="thread-preview__meta thread-preview__date">{{thread.date}}</span>
            <span class="thread-preview__meta thread-preview__num">№{{thread.num}}</span>
<!--            <nuxt-link to="" tag="span" class="thread-preview__open link">В тред</nuxt-link>-->
            <a :href="`https://2ch.hk/${$route.params.board}/res/${thread.num}.html`" target="_blank" class="link">В тред</a>
        </div>
        <div class="thread-preview__wrap" :class="{'thread-preview__wrap--alone':thread.files.length === 1}">
            <div class="thread-preview__gallery">
                <a
                    class="thread-preview__image"
                    v-for="file of thread.files"
                    :href="`https://2ch.hk${file.path}`"
                    target="_blank"
                >
                    <img :src="`https://2ch.hk${file.thumbnail}`" alt="">
                </a>
            </div>
            <div class="thread-preview__data">
                <nuxt-link to="" class="thread-preview__subject" v-if="thread.subject">{{thread.subject}}</nuxt-link>
                <div class="thread-preview__content">
                    <div v-html="thread.comment"></div>
                </div>
            </div>
            <!--        <a target="_blank" :href="`https://2ch.hk/${board.Board}/res/${thread.num}.html`">В тред</a>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "ThreadPreview",
        props: {
            thread: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/style";
    .thread-preview {
        box-shadow: rgb(220, 222, 227) 0px 0px 0px 1px inset, rgba(149, 156, 163, 0.15) 0px 0.01px 2px 0px, rgba(149, 156, 163, 0.15) 0px 2px 15px 0px;
        padding: 20px;
        background-color: #FAFAFA;
        display: flex;
        flex-direction: column;
        &:nth-of-type(n+2) {
            margin-top: 30px;
        }
        &__data {
            margin-top: 20px;
        }
        &__wrap {
            display: flex;
            flex-direction: column;
            &--alone {
                display: block;
                flex-direction: row;
                .thread-preview {
                    &__data {
                        margin-top: 0;
                    }
                    &__gallery {
                        display: block;
                        float: left;
                    }
                    &__image {
                        margin-right: 20px;
                    }
                }
            }
        }
        &__content {
            word-break: break-word;
        }
        &__info {
            display: flex;
            align-items: baseline;
            margin-bottom: 20px;
            font-size: 1rem;
            & > * {
                &:nth-child(n+2) {
                    margin-left: 10px;
                }
            }
        }
        &__meta {
            color: $meta-color;
            font-size: 0.95rem;
        }
        &__subject {
            font-weight: 600;
            color: $theme-color;
            font-size: 1.125rem;
            margin-bottom: 20px;
            &:hover {
                color: #005dc3;
            }
        }
        /*&:nth-child(odd) {
            background: red;
        }
        &:nth-child(even) {
            background: blue;
        }*/
        &__image {
            &:nth-child(n+2) {
                margin-left: 10px;
            }
        }
        &__gallery {
            display: flex;
            flex-wrap: wrap;
        }
    }

    #board_b {
        .thread-preview__subject {
            display: none;
        }
    }
</style>
