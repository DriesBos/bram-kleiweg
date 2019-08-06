<template>
  <nuxt-link :to="'/blog/' + id" tag="li" class="post-Item" :class="{slider: slider}">
    <figcaption v-if="title" class="post-Info">{{ title }}</figcaption>
    <img v-if="thumbnail" class="post-Thumbnail" :src="thumbnail" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    thumbnail: String,
    id: String,
    slider: Boolean
  }
}
</script>
