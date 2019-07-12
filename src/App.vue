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
  }
</style>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1200px;
  }
  main {
    background: white;
    width: 100%;
    min-height: 300px;
  }
  header {
    background-color: white;
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

<link
  rel="stylesheet"
  href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
