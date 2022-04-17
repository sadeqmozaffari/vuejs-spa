<template>
<Navbar class="mb-5"/>
  <!-- {{$store.state}} -->
  <router-view class=""/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components: {
    Navbar,
},
mounted(){
  this.$store.commit("onStart")
},
watch:{
  $route(){
    this.$store.commit("onSta")
  }
}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
// .navbar-brand{
//   color:#2c3e50 !important;
// }
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
