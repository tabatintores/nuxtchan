<template>
    <div class="lazy-img" :style="wrapStyle">
        <img
            v-show="isLoaded"
            :src="lazySrc"
            alt=""
            ref="lazyImg"
            class="lazy-img__img"
            crossorigin="anonymous"
        >
    </div>
</template>

<script>
    import ColorThief from 'colorthief';
    export default {
        name: "LazyImg",
        props: {
            height: {
                type: Number,
                required: false
            },
            width: {
                type: Number,
                required: false
            },
            lazySrc: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isLoaded: false,
                bgColor: []
            }
        },
        computed: {
            wrapStyle() {
                return {
                    height: `${this.height}px`,
                    width: `${this.width}px`,
                    backgroundColor: `rgba(${this.bgColor.join(',')})`
                }
            }
        },
        methods: {
            rgbToHex() {

            }
        },
        mounted() {
            this.$nextTick(() => {
                const colorThief = new ColorThief();
                const palette = colorThief.getColor(this.$refs.lazyImg);
                console.log(palette.join(','))
                this.bgColor = palette;
                setTimeout(() => {
                    this.isLoaded = true;
                }, 2000)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .lazy-img {
        margin-right: 20px;
        &__img {
            height: 100%;
            width: 100%;
        }
    }
</style>
