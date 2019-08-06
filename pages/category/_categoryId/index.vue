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
    projects(state) {
      const category = state.categories.list.find(
        category => category.id === this.$route.params.categoryId
      )
      return state.projects.list.filter(
        project => project.tag_list.indexOf(category.name) > -1
      )
    },
    slider: state => state.slider.slider
  })
}
</script>
