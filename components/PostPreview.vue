<template>
  <nuxt-link :to="'/blog/' + id" tag="li" class="post-Item">
    <figcaption v-if="title" class="post-Info">{{ title }}</figcaption>
    <img v-if="thumbnail" class="post-Thumbnail" :src="thumbnail" />
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
