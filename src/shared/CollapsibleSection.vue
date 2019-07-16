<template>
  <div>
    <div class="header">
      <md-button
        class="md-raised md-primary toggle-text"
        v-if="open"
        @click="open = !open">
        Hide
      </md-button>
      <md-button
        class="md-raised md-primary toggle-text"
        v-if="!open"
        @click="open = !open">
        Show
      </md-button>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CollapsibleSection",
  data(){
    return {
      open: true
    };
  }
}
</script>

<style scoped lang="scss">
  .header {
    button {
      width: 100%;
      margin: 0;
    }
  }
</style>
