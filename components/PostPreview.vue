<template>
  <nuxt-link :to="'/blog/' + id" tag="li" class="post-Item">
    <div v-if="title" class="post-Info">
      <h1>{{ title }}</h1>
    </div>
    <div v-if="thumbnail" class="post-Thumbnail">
      <img :src="thumbnail">
    </div>
  </nuxt-link>
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
