<template>
  <ul id="scroll" class="view-Horizontal view-Blog post-List">
    <PostPreview
      v-for="post in projects"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :slider="slider"
    />
  </ul>
</template>

<script>
import $ from 'jquery'
import PostPreview from '~/components/PostPreview.vue'
import { mapState } from 'vuex'

export default {
  components: {
    PostPreview: PostPreview
  },
  mounted() {
    $('#scroll').on('mousewheel', function(e) {
      e.preventDefault()
      const delta = 40 * (parseInt(e.originalEvent.deltaY) / 33)
      const scto = $(this).scrollLeft() + delta
      $(this).scrollLeft(scto)
    })
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
