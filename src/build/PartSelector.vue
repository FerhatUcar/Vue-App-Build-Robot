<template>
  <div class="part" :class="position">
    <img alt="robot" :src="selectedPart.src" title="robot"/>
    <md-button
      class="md-raised prev-selector"
      @click="selectPreviousPart()"
    ></md-button>
    <md-button
      @click="selectNextPart()"
      class="next-selector md-raised"
    ></md-button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
/* eslint-disable */
function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  props: {
    parts: {
      type: Array,
      required: true
    },
    position: {
      type: String,
      required: true,
      validator(value){
        return ['left', 'right', 'top', 'bottom', 'center'].includes(value);
      }
    }
  },
  data() {
    return {
      selectedPartIndex: 0
    };
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created(){
    this.emitSelectedPart();
  },
  updated(){
    this.emitSelectedPart();
  },
  methods: {
    emitSelectedPart(){
      this.$emit('partSelected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
  },
};
</script>

<style scoped>
  .part {
    position: relative;
    width:165px;
    height:165px;
  }
  .sale {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: white;
    background-color: red;
    padding: 3px;
  }
  .part-title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: red;
    padding-top: 5px;
    top: -25px;
  }
  .part img {
    width:165px;
  }
  .top {
    border-bottom: none;
  }
  .left {
    border-right: none;
  }
  .right {
    border-left: none;
  }
  .bottom {
    border-top: none;
  }
  .left img {
    transform: rotate(-90deg);
  }
  .right img {
    transform: rotate(90deg);
  }
  .prev-selector {
    position: absolute;
    z-index:1;
    left: -28px;
    width: 25px;
    height: 160px;
    min-width: 0;
    margin: 0;
  }
  .next-selector {
    position: absolute;
    z-index:1;
    right: -28px;
    width: 25px;
    height: 160px;
    margin: 0;
    min-width: 0;
  }
  .left .prev-selector:after,  .right .prev-selector:after{
    content: '\25B2';
    position: relative;
    bottom: 22px;
  }
  .left .next-selector:after, .right .next-selector:after {
    content: '\25BC';
    position: relative;
    bottom: 22px;
  }
  .top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
    content: '\25C4';
    position: relative;
    bottom: 85px;
  }
  .top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
    content: '\25BA';
    position: relative;
    bottom: 85px;
  }
  .center .prev-selector, .center .next-selector {
    opacity:0.8;
  }
  .left .prev-selector {
    top: -30px;
    left: -6px;
    width: 138px;
    height: 25px;
  }
  .left .next-selector {
    top: auto;
    bottom: -25px;
    left: -6px;
    width: 138px;
    height: 25px;
  }
  .right .prev-selector {
    top: -30px;
    left: 33px;
    width: 138px;
    height: 25px;
  }
  .right .next-selector {
    top: auto;
    bottom: -25px;
    left: 33px;
    width: 138px;
    height: 25px;
  }
  .highlight {
    border: 1px solid red;
  }
</style>
