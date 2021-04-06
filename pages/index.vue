<template>
  <div>
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
    </div>
    <div
      class="jumbotron text-white text-center mt-5"
      style="background-color: #003060"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>About Me</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-12 mt-5 p-3">
            <img src="img/me.jpg" class="img-thumbnail" />
          </div>
          <div class="col-md-6 col-12 mt-5 p-3">
            <h4 class="text-justify">
              My name is <b>Abdelrahman</b>, I'm a senior software engineer From
              From <b>Egypt</b>. I can build you a professional website using
              the cutting edge technologies
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5 pt-5">
        <div class="col-12 mb-3 text-center">
          <h2>Recent Posts</h2>
        </div>
        <div
          v-for="article in articles"
          :key="article.slug"
          class="col-12 col-md-4 p-1"
        >
          <b-card :title="article.title">
            <small class="text-muted">{{
              formatDate(article.updatedAt)
            }}</small>
            <b-card-text>
              {{ article.description }}
            </b-card-text>
            <nuxt-link :to="article.path" variant="primary"
              >Read More</nuxt-link
            >
          </b-card>
        </div>
      </div>
    </div>
    <div
      class="jumbotron mb-0 text-center text-white mt-5"
      style="background-color: #0074b7"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Technologies</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/core.jpg"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/laravel.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/symfony.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/wordpress.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/logo.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/nuxtjs.jpg"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/react.webp"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/rest.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div class="col-4 mt-2 p-1">
            <div class="card">
              <div class="card-body">
                <img
                  src="img/graphql.png"
                  class="img-thumbnail"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
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
.col-4 .card .card-body {
  height: 150px;
}
.col-4 .card .card-body img {
  height: 100%;
}
@media screen and (max-width: 996px) {
  .col-4 .card .card-body {
    height: 100px;
  }
}
</style>
