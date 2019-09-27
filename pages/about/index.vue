<template>
  <ul class="view-Vertical view-Profile post-List">
    <li class="post-Item" :class="{slider: slider}">
      <div v-if="title" class="post-Info">
        <h1 class="logo">{{ title }}</h1>
      </div>
      <div v-if="thumbnail" class="post-Thumbnail lazy" v-lazy-container="{ selector: 'img' }">
        <img :data-src="thumbnail" />
      </div>
      <MarkdownItem v-if="content" :input="content" class="post-Content" />
    </li>
    <div class="post-Navigation_Wrapper">
      <router-link class="post-Navigation post-Navigation_Close" tag="a" to="/">
        <img class="icon icon-Close" src="@/assets/images/close.svg" />
      </router-link>
    </div>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import MarkdownItem from '~/components/MarkdownItem.vue'

export default {
  scrollToTop: true,
  components: {
    MarkdownItem
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          thumbnail: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  },
  computed: mapState({
    slider: state => state.slider.slider
  })
}
</script>
