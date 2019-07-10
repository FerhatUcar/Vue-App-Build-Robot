<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo">
            Build-a-Bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder/>
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'app',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
  body {
    background: linear-gradient(to bottom, #555, #999) fixed;
    margin: 2rem;
  }
</style>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  main {
    margin: 0 auto;
    background: white;
    width: 100%;
    min-height: 300px;
  }
  header {
    background-color: #999;
    margin: 0 auto;
  }
  ul {
    padding: 0;
    display: flex;
  }
  .nav-item {
    display: inline-block;
    padding: 5px 10px;
    font-size: 22px;
    border-right: 1px solid #bbb;
  }
  .logo {
    vertical-align: middle;
    height: 30px;
  }
</style>
