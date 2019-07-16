<template>
  <div class="box">
    <div class="box__robot">
      <img class="box__image" src="../assets/robot-home.png" alt="" aria-hidden="true">
    </div>
    <div class="box__start">
      <router-link
        tag="md-button"
        class="md-raised md-primary"
        to="/build">
        Get started
      </router-link>
      Let build some robots!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .box {
    text-align: center;

    &__start {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: aliceblue;
      border-top: solid 1px lightgrey;
    }
    &__robot {
      padding: 1rem;
    }
    &__image {
      height: 300px;
    }
  }
</style>
