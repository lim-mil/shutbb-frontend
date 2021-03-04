<template>
  <div id="portal" class="mt-1 columns">
    <News></News>
    <div class="column is-4">
      <RecentTopic></RecentTopic>
      <Data></Data>
    </div>
  </div>
</template>

<script>
  import News from "../components/News";
  import RecentTopic from "../components/RecentTopic";
  import Data from "../components/Data";
  export default {
    name: "Portal",
    components: {Data, RecentTopic, News},
  }
</script>

<style lang="stylus">

</style>