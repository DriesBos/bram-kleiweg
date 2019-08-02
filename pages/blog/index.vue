<template>
  <div class="view-General">
    <ul class="view-Horizontal view-Blog post-List">
      <PostPreview
        v-for="post in projects"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :thumbnail="post.thumbnail"
      />
    </ul>
    <section class="view-Landing" :class="{ hover, click, menu}">
      <div @mouseover="mouseOver" @click="mouseClick">
        <h1 class="logo">bram kleiweg</h1>
      </div>

      <div v-if="!menu && click" class="menu-Toggle menu-Collapsed">
        <ul>
          <li @click="mouseClick">
            <p class="logo">bram kleiweg</p>
          </li>
          <li @click="menuToggle">
            <img class="icon icon-Close" src="@/assets/images/close.svg" />
          </li>
        </ul>
      </div>

      <div v-if="menu" class="menu-Toggle menu-Open">
        <ul>
          <li @click="mouseClick">
            <p class="logo">bram kleiweg</p>
          </li>
          <li @click="menuToggle">
            <p class="logo">menu toggle</p>
          </li>
          <ul class="header-Filter">
            <li>
              <p>Projects</p>
            </li>
            <nuxt-link tag="li" to="/blog" v-bind:class="{active: !selectedCategory}">
              <a>All Projects</a>
            </nuxt-link>
            <li
              v-for="category in categories"
              v-bind:class="{active: selectedCategory == category.id}"
              v-bind:key="category.id"
            >
              <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
            </li>
          </ul>
          <nuxt-link class="header-About header-Item" tag="li" to="/about">
            <p>About</p>
          </nuxt-link>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
import { mapState } from 'vuex'

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
    }
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
