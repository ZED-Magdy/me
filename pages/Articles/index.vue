<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>Recent Posts</h1>
      </div>
      <div class="col-12 col-md-3 offset-md-3 mt-3">
        <form @submit.prevent="search">
          <input
            v-model="query"
            class="form-control"
            style="border-radius: 20px"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-12">
        <ul class="list-unstyled">
          <b-media
            v-for="article in articles"
            :key="article.path"
            right-align
            class="mb-3 p-3"
            tag="li"
          >
            <template #aside>
              <b-img
                thumbnail
                fluid
                :src="article.img"
                alt="placeholder"
              ></b-img>
            </template>
            <h5 class="mt-2 mb-1">
              <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
            </h5>
            <small class="text-muted"
              >{{ formatDate(article.updatedAt) }} | by Zed Magdy</small
            >
            <p class="mb-0">
              {{ article.description }}
            </p>
          </b-media>
        </ul>
      </div>
      <div v-if="articles.length === 0" class="col-12 text-center">
        <p>No Articles Found!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'path', 'img', 'description', 'updatedAt'])
      .sortBy('date')
      .fetch()
    return {
      articles,
    }
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    async search() {
      if (this.query !== '') {
        this.articles = await this.$content('articles')
          .search(this.query)
          .only(['title', 'path', 'img', 'description', 'updatedAt'])
          .sortBy('date')
          .limit(3)
          .fetch()
      } else {
        this.articles = await this.$content('articles')
          .only(['title', 'path', 'img', 'description', 'updatedAt'])
          .sortBy('date')
          .fetch()
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.container {
  min-height: 400px !important;
}
.media-aside-right img {
  width: 128px !important;
  height: 128px !important;
}
@media screen and (max-width: 996px) {
  .container {
    min-height: 600px !important;
  }
  .media-aside-right img {
    width: 64px !important;
    height: 64px !important;
  }
}
</style>
