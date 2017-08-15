<template lang="html">
  <div class="col-md-9">
    <div class="list-group">
      <Articlesummary v-for="(article, index) in articles" :article="article" :key="index">
      </Articlesummary>
    </div>
  </div>
</template>

<script>
import Articlesummary from '@/components/Articlesummary'
export default {
  components: {
    Articlesummary
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="css">
</style>
