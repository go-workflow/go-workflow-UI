<template>
  <div id="app">
    <Main :data="data" />
  </div>
</template>

<script>
import Main from './components/Main.vue'
// import styleview from './components/Styleview'
export default {
  name: 'App',
  components: {
    Main
    // styleview
  },
  data () {
    return {
      data: undefined
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
