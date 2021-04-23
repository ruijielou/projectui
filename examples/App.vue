<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld style="display: none" msg="Welcome to Your Vue.js App" />
    <l-layout>
      <span> {{ person.firstName }}</span>
    </l-layout> -->
    <l-login :$t="(e) => e" :uiConfig="{}" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      list: [1, 2],
      person: { firstName: "admin" },
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  height: 100%;
  width: 100%;
}
</style>
