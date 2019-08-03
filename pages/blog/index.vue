<template>
  <ul class="view-Horizontal view-Blog post-List">
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
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    PostPreview: PostPreview
  },
  data: function() {
    return {
      hover: false,
      click: false,
      menu: false
    }
  },
  methods: {
    mouseOver: function() {
      this.hover = true
    },
    mouseClick: function() {
      this.click = !this.click
    },
    menuToggle: function() {
      this.menu = !this.menu
    },
    ...mapMutations(['slideToggle'])
  },
  computed: mapState({
    projects: state => state.projects.list,
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    }
  })
}
</script>
