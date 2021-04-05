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
          <div
            v-for="article in articles"
            :key="article.path"
            class="card mt-1"
          >
            <div class="card-body">
              <b-media class="mb-3" tag="li">
                <template #aside>
                  <b-img
                    blank
                    blank-color="#abc"
                    width="64"
                    alt="placeholder"
                  ></b-img>
                </template>
                <h5 class="mt-0 mb-1">
                  <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
                </h5>
                <p class="mb-0">
                  {{ article.description }}
                </p>
              </b-media>
            </div>
          </div>
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
      .only(['title', 'path', 'description', 'updatedAt'])
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
          .only(['title', 'path', 'description', 'updatedAt'])
          .sortBy('date')
          .limit(3)
          .fetch()
      } else {
        this.articles = await this.$content('articles')
          .only(['title', 'path', 'description', 'updatedAt'])
          .sortBy('date')
          .fetch()
      }
    },
  },
}
</script>

<style scoped>
.container {
  min-height: 400px !important;
}
@media screen and (max-width: 996px) {
  .container {
    min-height: 600px !important;
  }
}
</style>
