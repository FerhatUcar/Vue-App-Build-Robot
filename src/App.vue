<template>
  <div id="app">
    <header>
      <nav>
        <router-link
          tag="md-button"
          active-class="active-link"
          :to="{name: 'Home'}"
          exact>
          Home
        </router-link>
        <router-link
          tag="md-button"
          active-class="active-link"
          :to="{name: 'Build'}"
          exact>
          Build
        </router-link>
      </nav>
    </header>
    <div class="container">
      <aside>
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

export default {
  name: 'app',
};
</script>

<style>
  body {
    background: linear-gradient(to bottom, #555, #999) fixed;
  }
</style>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    padding: 1rem;
    margin: 0 auto;
    max-width: 1200px;
  }
  .md-button {
    margin: 0;
    border-right: solid 1px #c7c7c7;
    border-radius: 0;
  }
  .container {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
  }
  aside {
    padding: 1rem;
    background-color: #686868;
    width: 100px;
    min-height: 300px;
  }
  main {
    background: white;
    width: 100%;
    min-height: 300px;
  }
  header {
    background-color: white;
  }
  nav {
    margin-bottom: 1rem;
  }
  .logo {
    vertical-align: middle;
    height: 30px;
  }
  .active-link {
    color: white !important;
    background-color: #448aff;
  }
</style>

<link
  rel="stylesheet"
  href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
