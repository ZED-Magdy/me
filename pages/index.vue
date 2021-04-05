<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-7">
        <img class="header-image" src="/img/header.svg" />
      </div>
      <div class="col-12 col-md-5">
        <div class="row">
          <div class="col-12">
            <h1 class="mt-3 text-primary title">Hi, my name is ZED</h1>
            <h4 class="description">
              I can build you a professional website that fits your needs.
            </h4>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-3">
            <img src="/img/dotnet.png" alt="dotnet logo" />
          </div>
          <div class="col-3">
            <img src="/img/logo.png" alt="vue logo" />
          </div>
          <div class="col-3">
            <img src="/img/symfony.png" alt="symfony logo" />
          </div>
          <div class="col-3">
            <img src="/img/Laravel.png" alt="laravel logo" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <a class="btn btn-primary btn-lg" href="#">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 pt-5">
      <div class="col-12 mb-3">
        <h3>Recent Posts</h3>
      </div>
      <div
        v-for="article in articles"
        :key="article.slug"
        class="col-12 col-md-4"
      >
        <b-card :title="article.title">
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
