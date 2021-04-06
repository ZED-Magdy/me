<template>
  <div class="container">
    <img :src="doc.img" class="w-100" />
    <h1 class="article-title">{{ doc.title }}</h1>
    <h2 class="mt-5">Table of contnets</h2>
    <b-nav vertical class="mb-5">
      <b-nav-item
        v-for="item in doc.toc"
        :key="item.id"
        :to="'#' + item.id"
        replace
        >{{ item.text }}</b-nav-item
      >
    </b-nav>
    <nuxt-content class="text-justify" :document="doc"></nuxt-content>
    <div class="row mt-5">
      <div class="col-6">
        <span v-if="prev">
          <nuxt-link class="btn btn-outline-primary" :to="prev.path"
            >Previous</nuxt-link
          >
        </span>
      </div>
      <div class="col-6 text-right">
        <span v-if="next">
          <nuxt-link class="btn btn-outline-primary" :to="next.path"
            >Next</nuxt-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content('articles/' + params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'path'])
      .sortBy('date')
      .surround(params.slug)
      .fetch()
    return { doc, prev, next }
  },
}
</script>
<style>
.article-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.nuxt-content {
  line-height: 2.5rem !important;
}
.nuxt-content p {
  font-size: 20px;
}
</style>
