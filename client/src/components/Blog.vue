<template lang="html">
  <div class="container">
    <div class="row">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Maincontent from '@/components/Maincontent'
export default {
  components: {
    Sidebar,
    Maincontent
  },
  created () {
    this.$store.dispatch('getAllArticles')
  }
}
</script>

<style lang="css">
</style>
