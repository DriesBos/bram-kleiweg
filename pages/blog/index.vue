<template>
  <ul class="view-Horizontal view-Blog post-List" :class="[{slider: slider}]">
    <PostPreview
      v-for="post in projects"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail"
    />
  </ul>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
import { mapState } from 'vuex'

export default {
  components: {
    PostPreview: PostPreview
  },
  computed: mapState({
    projects: state => state.projects.list,
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    },
    slider: state => state.slider.slider
  })
}
</script>
