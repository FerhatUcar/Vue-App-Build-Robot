<template>
  <div class="robot-box">
    <div class="content">
      <div class="robot">
        <div class="robot__name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="robot__sale">Sale!</span>
        </div>
        <div class="top-row">
          <PartSelector
            :parts="availableParts.heads"
            position="top"
            @partSelected="part => selectedRobot.head = part"
          />
        </div>
        <div class="middle-row">
          <PartSelector
            :parts="availableParts.arms"
            position="left"
            @partSelected="part => selectedRobot.leftArm = part"
          />
          <PartSelector
            :parts="availableParts.torsos"
            position="center"
            @partSelected="part => selectedRobot.torso = part"
          />
          <PartSelector
            :parts="availableParts.arms"
            position="right"
            @partSelected="part => selectedRobot.rightArm = part"
          />
        </div>
        <div class="bottom-row">
          <PartSelector
            :parts="availableParts.bases"
            position="bottom"
            @partSelected="part => selectedRobot.base = part"
          />
        </div>
      </div>
    </div>
    <div class="preview">
      <transition name="slide">
        <CollapsibleSection>
          <div class="preview-content">
            <div class="top-row">
              <img :src="selectedRobot.head.src" alt=""/>
            </div>
            <div class="middle-row">
              <img :src="selectedRobot.leftArm.src" alt="" class="rotate-left"/>
              <img :src="selectedRobot.torso.src" alt=""/>
              <img :src="selectedRobot.rightArm.src" alt="" class="rotate-right"/>
            </div>
            <div class="bottom-row">
              <img :src="selectedRobot.base.src" alt=""/>
            </div>
          </div>
        </CollapsibleSection>
      </transition>
      <md-button class="md-raised md-primary add-to-cart" @click="addToCart()">
        Add to cart
      </md-button>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <md-divider></md-divider>
      <transition-group tag="md-table" name="fade" class="cart-content">
        <md-table-row key="headerTable">
          <md-table-head>Robot</md-table-head>
          <md-table-head class="cost">Cost</md-table-head>
        </md-table-row>
        <md-table-row v-for="(robot, index) in cart" :key="`${index}-${robot.id}`">
          <md-table-cell key="head">{{robot.head.title}}</md-table-cell>
          <md-table-cell key="cost" class="right">{{robot.cost | toCurrency}}</md-table-cell>
        </md-table-row>
      </transition-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import availableParts from '../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

import toCurrency from '../filter/currency.js';

export default {
  name: "RobotBuilder",
  components: {
    PartSelector,
    CollapsibleSection
  },
  filters: {
    toCurrency,
  },
  data() {
    return {
      availableParts,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      }
    };
  },
  methods: {
    addToCart(){
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      this.cart.push(Object.assign({}, robot, {cost}));
    },
  }
};
</script>

<style scoped lang="scss">

  // ----- animations

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }

  .rotate-right {
    transform: rotate(90deg);
  }

  .rotate-left {
    transform: rotate(-90deg);
  }

  // ----- main styles

  .robot-box {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to top, #ffffff, #cccccc) fixed;
  }

  .content {
    padding: 1rem;
  }

  .robot {
    width: 525px;

    &__name {
      text-align: center;
      width: 100%;
      font-family: "Hiragino Kaku Gothic Pro", sans-serif;
      font-style: normal;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    &__sale {
      color: red;
    }
  }

  .sale-border {
    border: solid 3px darkred !important;
  }

  .add-to-cart {
    width: 100%;
    margin: 0;
  }

  .part {
    position: relative;
    width:165px;
    height:165px;

    img {
      width:165px;
    }
  }

  .right {
    text-align: right;
  }

  .top-row {
    display:flex;
    justify-content: space-around;
  }

  .middle-row {
    display:flex;
    justify-content: center;
  }

  .bottom-row {
    display:flex;
    justify-content: space-around;
    border-top: none;
  }

  .head {
    border-bottom: none;
  }

  .left {
    border-right: none;

    img {
      transform: rotate(-90deg);
    }
  }

  .right {
    border-left: none;

    img {
      transform: rotate(90deg);
    }
  }

  .bottom {
    border-top: none;
  }

  .prev-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
  }
  .next-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
  }

  .center {
    .prev-selector,
    .next-selector {
      opacity: 0.5;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .left {
    .prev-selector {
      top: -28px;
      left: -3px;
      width: 144px;
      height: 25px;
    }
    .next-selector {
      top: auto;
      bottom: -28px;
      left: -3px;
      width: 144px;
      height: 25px;
    }
  }

  .right {
    .prev-selector {
      top: -28px;
      left: 24px;
      width: 144px;
      height: 25px;
    }

    .next-selector {
      top: auto;
      bottom: -28px;
      left: 24px;
      width: 144px;
      height: 25px;
      right: -3px;
    }
  }

  .cost {
    text-align: right;
  }
  .cart {
    background: white;
    padding: 0 0 1rem 0;
    width: 100%;

    table {
      padding: 0 1rem;

      thead {
        font-weight: bold;
      }
    }

    h2 {
      padding: 0 1rem;
    }
  }
  .cart-content {
    width: 100%;
  }
  .preview {
    padding: 1rem;
    min-width: 250px;
    background-color: #686868;

    img {
      width: 75px;
      height: 75px;
    }
  }

  .preview-content {
    padding: 1rem;
  }
</style>
