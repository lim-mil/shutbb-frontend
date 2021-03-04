<template>
  <div id="app">
    <div class="columns pt-2">
      <div class="column is-10 is-offset-1">
        <Navbar></Navbar>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="stylus">
  @import "assets/css/base.styl"
  @import "assets/css/mystyle.styl"

</style>

<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";

  export default {
    components: {Navbar, Footer}
  }
</script>