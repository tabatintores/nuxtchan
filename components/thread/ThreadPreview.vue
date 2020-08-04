<template>
    <div class="thread-preview" :class="{'thread-preview--alone':thread.files.length === 1}">
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
        <div class="thread-preview__content" v-html="thread.comment"/>
<!--        <a target="_blank" :href="`https://2ch.hk/${board.Board}/res/${thread.num}.html`">В тред</a>-->
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
    .thread-preview {
        box-shadow: rgb(220, 222, 227) 0px 0px 0px 1px inset, rgba(149, 156, 163, 0.15) 0px 0.01px 2px 0px, rgba(149, 156, 163, 0.15) 0px 2px 15px 0px;
        padding: 20px;
        background-color: #FAFAFA;
        display: flex;
        flex-direction: column;
        height: 20%;
        .thread-preview__content {
            margin-top: 20px;
        }
        &--alone {
            flex-direction: row;
            .thread-preview__content {
                margin-left: 20px;
                margin-top: 0;
            }
        }
        &:nth-child(n+2) {
            margin-top: 30px;
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
        }
    }
</style>
