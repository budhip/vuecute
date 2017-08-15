<template lang="html">
  <div class="col-md-9">
    <h2>{{ article.title }}</h2>
    <div class="row">
      <div id="article-content" class="col-md-12">
        <p>{{ article.article_content}}</p>
        <p>{{ article.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {}
    }
  },
  watch: {
    id: function () {
      this.getDetailArticle()
    }
  },
  methods: {
    getDetailArticle (id) {
      this.$http.get('/articles/' + id)
      .then(({data}) => {
        this.article = data
      })
      .catch((err) => console.log(err))
    }
  },
  created () {
    this.getDetailArticle(this.id)
  }
  // watch: {
  //   id: function () {
  //     this.getDetailArticle()
  //   }
  // }
}
</script>

<style lang="css" scoped>
h2 {
  margin-top: 0px;
}
#article-content {
  margin-top: 16px;
}
</style>
