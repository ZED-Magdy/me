<template>
  <div class="container">
    <h1>Recent Posts</h1>
    <br />
    <ul class="list-unstyled">
      <b-media
        v-for="article in articles"
        :key="article.path"
        class="mb-3"
        tag="li"
      >
        <template #aside>
          <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">
          <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        </h5>
        <p class="mb-0">
          {{ article.description }}
        </p>
      </b-media>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'path', 'description', 'updatedAt'])
      .sortBy('date')
      .fetch()
    // eslint-disable-next-line no-console
    console.log(articles)
    return {
      articles,
    }
  },
}
</script>

<style></style>
