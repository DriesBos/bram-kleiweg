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
import { mapState } from 'vuex'
import PostPreview from '~/components/PostPreview.vue'

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
