<template lang="html">
  <a href="#" class="list-group-item">
    <div class="row">
      <div class="col-md-8">
        <router-link :to="'/blog/' + article.id">
          <h4 class="list-group-item-heading">
            {{ article.title }}
          </h4>
        </router-link>
        <p class="list-group-item-text">
          {{ article.article_content.substring(0, 30) }} ...
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
