<template>
  <section class="view-Vertical view-Post">
    <ul class="post-List">
      <li class="post-Item">
        <div v-if="title" class="post-Info post-Title">
          <h1>{{ title }}</h1>
        </div>
        <div v-if="thumbnail" class="post-Thumbnail">
          <img :src="thumbnail" />
        </div>
        <MarkdownItem v-if="content" :input="content" class="post-Content" />
        <div v-if="image_0" class="post-Images">
          <img v-if="image_0" :src="image_0" />
          <img v-if="image_1" :src="image_1" />
          <img v-if="image_2" :src="image_2" />
          <img v-if="image_3" :src="image_3" />
          <img v-if="image_4" :src="image_4" />
          <img v-if="image_5" :src="image_5" />
          <img v-if="image_6" :src="image_6" />
          <img v-if="image_7" :src="image_7" />
          <img v-if="image_8" :src="image_8" />
          <img v-if="image_9" :src="image_9" />
        </div>
      </li>
    </ul>
    <div @click="navigateToPost(previousPostId())" class="post-Navigation post-Navigation_Left">
      <img class="icon-Left" src="@/assets/images/left.svg" />
    </div>
    <div @click="navigateToPost(nextPostId())" class="post-Navigation post-Navigation_Right">
      <img class="icon-Right" src="@/assets/images/right.svg" />
    </div>
  </section>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'

export default {
  components: {
    MarkdownItem
  },
  data() {
    return {
      pageNumber: 0
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          thumbnail: res.data.story.content.thumbnail,
          image_0: res.data.story.content.image_0,
          image_1: res.data.story.content.image_1,
          image_2: res.data.story.content.image_2,
          image_3: res.data.story.content.image_3,
          image_4: res.data.story.content.image_4,
          image_5: res.data.story.content.image_5,
          image_6: res.data.story.content.image_6,
          image_7: res.data.story.content.image_7,
          image_8: res.data.story.content.image_8,
          image_9: res.data.story.content.image_9
        }
      })
  },
  methods: {
    previousPostId() {
      const post = this.posts[this.getPostIndex() - 1]
      if (post) {
        return post.postId
      } else {
        return null
      }
    },
    nextPostId() {
      const post = this.posts[this.getPostIndex() + 1]
      if (post) {
        return post.postId
      } else {
        return null
      }
    },
    navigateToPost(postId) {
      this.$router.push({ path: `/blog/${postId}` })
    },
    getPostIndex() {
      console.log('console log', this.posts)
      const index = this.posts.findIndex(
        element => element.id === this.$route.params.postId
      )
      return index === -1 ? 0 : index
    }
  }
}
</script>

<style lang="sass" scoped>
.view-Project
  margin-top: 100px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.project-List
  display: flex
  flex-direction: column
  width: 500px
  li
    background: lightblue
    margin-bottom: 100px
  img
    width: 100%
    height: auto
</style>
