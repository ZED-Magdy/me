<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <img class="header-image" src="img/header.svg" />
      </div>
      <div class="col-12 text-center">
        <div class="row">
          <div class="col-12">
            <h1 class="mt-3 text-primary title">ZED Magdy</h1>
            <h4 class="description">
              Software Engineer, Fullstack Web developer.
            </h4>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 text-center">
            <a
              class="btn btn-primary btn-lg"
              href="https://twitter.com/ZedMagdy"
              target="_blank"
              >Get in touch</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 pt-5">
      <div class="col-12 mb-3 text-center">
        <h2>Recent Posts</h2>
      </div>
      <div
        v-for="article in articles"
        :key="article.slug"
        class="col-12 col-md-4"
      >
        <b-card :title="article.title">
          <small class="text-muted">{{ formatDate(article.updatedAt) }}</small>
          <b-card-text>
            {{ article.description }}
          </b-card-text>
          <nuxt-link :to="article.path" variant="primary">Read More</nuxt-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .limit(3)
      .only(['title', 'path', 'description', 'updatedAt'])
      .sortBy('date')
      .fetch()
    return { articles }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.header-image {
  width: 100%;
  height: 100%;
  position: relative;
}
.col-3 img {
  width: 100%;
  height: 100%;
}
</style>
