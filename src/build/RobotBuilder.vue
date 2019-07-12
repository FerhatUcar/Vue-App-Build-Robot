<template>
  <div class="container">
    <div class="content">
      <div class="robot">
        <div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
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
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </CollapsibleSection>
      <md-button
        class="md-raised md-primary add-to-cart"
        @click="addToCart()">
        Add to cart
      </md-button>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <md-divider></md-divider>

      <md-table class="cart-content">

        <md-table-row>
          <md-table-head>Robot</md-table-head>
          <md-table-head class="cost">Cost</md-table-head>
        </md-table-row>

        <md-table-row v-for="(robot, index) in cart" :key="index">
          <md-table-cell>{{robot.head.title}}</md-table-cell>
          <md-table-cell class="cost">{{robot.cost}}</md-table-cell>
        </md-table-row>

      </md-table>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import availableParts from '../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);

export default {
  name: "RobotBuilder",
  components: { PartSelector, CollapsibleSection },
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
  computed: {
    // saleBorderClass(){
    //   return this.selectedRobot.head.onSale ? 'sale-border' : '';
    // },
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
  .container {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to top, #e2e2e2, #c2c2c2) fixed;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
  }
  .content {
    padding: 1rem;
  }
  .robot {
    width: 525px;
  }
  .robot-name {
    text-align: center;
    width: 100%;
    font-family: "Hiragino Kaku Gothic Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .sale {
    color: red;
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
  }
  .right {
    border-left: none;
  }
  .left img {
    transform: rotate(-90deg);
  }
  .right img {
    transform: rotate(90deg);
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
  .center .prev-selector,
  .center .next-selector {
    opacity: 0.5;
  }
  .center .prev-selector:hover, 
  .center .next-selector:hover {
    opacity: 0.9;
  }
  .left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .right .next-selector {
    right: -3px;
  }
  td, th {
    text-align: left;
    padding: 5px 20px 5px 0;
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
    min-width: 230px;
    background-color: #686868;
  }
  .preview-content {
    padding: 1rem;
  }
  .preview img {
    width: 50px;
    height: 50px;
  }
  .rotate-right {
    transform: rotate(90deg);
  }
  .rotate-left {
    transform: rotate(-90deg);
  }
</style>
