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
import { mapState } from 'vuex'

export default {
  components: {
    PostPreview: PostPreview
  },
  computed: mapState({
    projects: state => state.projects.list
  })
}
</script>
