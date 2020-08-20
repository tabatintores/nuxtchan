<template>
  <div class="content main-page">
      <img class="main-page__img" src="@/assets/img/tyan.png" alt="">
      <h1 class="h1 main-page__title">Nuxtchan</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .main-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        &__img {
            max-width: 50%;
            width: 100%;
        }
        &__title {
            margin-top: 20px;
        }
    }
</style>
