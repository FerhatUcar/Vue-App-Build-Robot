<template>
  <div class="part-info">
    <h1>{{part.title}}</h1>
    <div>{{part.description}}</div>
  </div>
</template>

<script>
/* eslint-disable */
import parts from '../data/parts';

export default {
  name: 'PartInfo',
    props: {
    partType: { type: String },
    id: {
      type: Number,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return parts[partType].find(part => part.id === +id);
    },
  },
};
</script>

<style scoped>
  .part-info {
    padding: 1rem;
  }
</style>
