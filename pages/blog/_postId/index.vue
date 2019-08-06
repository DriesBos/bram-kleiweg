<template>
  <ul class="view-Vertical view-Post post-List">
    <li class="post-Item" :class="{slider: slider}">
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

    <div class="post-Navigation_Wrapper">
      <router-link
        v-if="previous_url"
        class="post-Navigation post-Navigation_Left"
        tag="a"
        :to="previous_url"
      >
        <img class="icon icon-Left" src="@/assets/images/arrow-left.svg" />
      </router-link>
      <router-link
        v-if="next_url"
        class="post-Navigation post-Navigation_Right"
        tag="a"
        :to="next_url"
      >
        <img class="icon icon-Right" src="@/assets/images/arrow-right.svg" />
      </router-link>
      <router-link class="post-Navigation post-Navigation_Close" tag="a" to="/">
        <img class="icon icon-Close" src="@/assets/images/close.svg" />
      </router-link>
    </div>
  </ul>
</template>

<script>
import MarkdownItem from '~/components/MarkdownItem.vue'
import { mapState } from 'vuex'

/* eslint-disable */

function getProjectIndex(projects, id) {
  const index = projects.findIndex(element => element.id === id)
  return index === -1 ? 0 : index
}

export default {
  scrollToTop: true,
  components: {
    MarkdownItem
  },
  asyncData({ app, store, params }) {
    return app.$storyapi
      .get('cdn/stories/blog/' + params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        let previous =
            store.state.projects.list[
              getProjectIndex(store.state.projects.list, params.postId) - 1
            ],
          next =
            store.state.projects.list[
              getProjectIndex(store.state.projects.list, params.postId) + 1
            ]
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
          image_9: res.data.story.content.image_9,
          previous_url: previous ? '/blog/' + previous.id : null,
          next_url: next ? '/blog/' + next.id : null
        }
      })
  },
  computed: mapState({
    slider: state => state.slider.slider
  }),
  methods: {
    navigateToProject(id) {
      this.$router.push({ path: `/blog/${id}` })
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
