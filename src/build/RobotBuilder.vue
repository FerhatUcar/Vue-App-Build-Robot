<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to cart</button>

    <div class="robot-name">
      {{selectedRobot.head.title}}
      <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
    </div>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <transition name="slide-fade">
          <img :src="selectedRobot.head.src" title="head"/>
        </transition>
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.arms.src" title="left arm"/>
        <button @click="selectPreviousArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm"/>
        <button @click="selectNextTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectPreviousTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.arms.src" title="left arm"/>
        <button @click="selectPreviousArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm"/>
        <button @click="selectNextBase()" class="prev-selector">&#9668;</button>
        <button @click="selectPreviousBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <table>
        <thead>
        <tr>
          <td>Robot</td>
          <td class="cost">Cost</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{robot.head.title}}</td>
          <td class="cost">{{robot.cost}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import availableParts from '../data/parts';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "RobotBuilder",
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0
    };
  },
  computed: {
    saleBorderClass(){
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        arms: availableParts.arms[this.selectedArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        base: availableParts.bases[this.selectedBaseIndex],
      }
    }
  },
  methods: {
    addToCart(){
      const robot = this.selectedRobot;
      const cost = robot.head.cost +
        robot.arms.cost +
        robot.torso.cost +
        robot.base.cost;
      this.cart.push(Object.assign({}, robot, {cost}));
    },
    selectNextHead() {
      this.selectedHeadIndex =
        getNextValidIndex(
          this.selectedHeadIndex,
          availableParts.heads.length
        );
    },
    selectPreviousHead() {
      this.selectedHeadIndex =
        getPreviousValidIndex(
          this.selectedHeadIndex,
          availableParts.heads.length
        );
    },
    selectNextArm() {
      this.selectedArmIndex =
        getNextValidIndex(
          this.selectedArmIndex,
          availableParts.arms.length
        )
    },
    selectPreviousArm() {
      this.selectedArmIndex =
        getPreviousValidIndex(
          this.selectedArmIndex,
          availableParts.arms.length
        )
    },
    selectNextTorso() {
      this.selectedTorsoIndex =
        getNextValidIndex(
          this.selectedTorsoIndex,
          availableParts.torsos.length
        )
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex =
        getPreviousValidIndex(
          this.selectedTorsoIndex,
          availableParts.torsos.length
        )
    },
    selectNextBase() {
      this.selectedBaseIndex =
        getNextValidIndex(
          this.selectedBaseIndex,
          availableParts.bases.length
        )
    },
    selectPreviousBase() {
      this.selectedBaseIndex =
        getPreviousValidIndex(
          this.selectedBaseIndex,
          availableParts.bases.length
        )
    }
  }
};
</script>

<style scoped>
  .content {
    position: relative;
    padding: 2rem;
    background: linear-gradient(to top, #e2e2e2, #c2c2c2) fixed;;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
  }
  .robot-name {
    text-align: center;
    width: 100%;
    font-family: "Hiragino Kaku Gothic Pro", sans-serif;
    font-style: normal;
    font-weight: bold;
  }
  .sale {
    color: darkred;
  }
  .sale-border {
    border: solid 3px darkred !important;
  }
  .add-to-cart {
    position: absolute;
    right: 30px;
    width: 200px;
    height: 30px;
    font-size: 1rem;
  }
  .part {
    position: relative;
    width:165px;
    height:165px;
    border: 3px solid #aaa;
  }
  .part img {
    width:165px;
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
    padding: 0.25rem 1rem 1rem 1rem;
    margin-top: 1rem;
  }
</style>
