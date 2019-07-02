<template>
  <li class="post-Item">
    <nuxt-link :to="'/blog/' + id" v-if="title" tag="div" class="post-Info">
      <h1>{{ title }}</h1>
    </nuxt-link>
    <nuxt-link :to="'/blog/' + id" tag="div" v-if="thumbnail" class="post-Thumbnail">
      <img :src="thumbnail" />
    </nuxt-link>
    <nuxt-link :to="'/blog/' + id" tag="div" class="post-Category">
      <h1>Category</h1>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>
