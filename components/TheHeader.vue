<template>
  <header>
    <ul
      v-if="this.$route.name === 'blog' || this.$route.name === 'category-categoryId'"
      class="header-Horizontal"
    >
      <nuxt-link class="header-Logo header-Item" tag="li" to="/">
        <p class="logo">bram kleiweg</p>
      </nuxt-link>

      <li
        v-for="category in categories"
        v-bind:class="{active: selectedCategory == category.id}"
        class="header-Filter"
        v-bind:key="category.id"
      >
        <router-link
          tag="a"
          :to="'/category/' + category.id"
          class="header-Item"
        >{{ category.name }}</router-link>
      </li>

      <nuxt-link class="header-About header-Item" tag="li" to="/about">
        <p>About</p>
      </nuxt-link>

      <!-- <li v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'">
        <p>&nbsp;</p>
      </li>-->
    </ul>
    <ul
      v-if="this.$route.name === 'blog-postId' || this.$route.name === 'about'"
      class="header-Vertical"
    >
      <nuxt-link class="header-Item" tag="li" to="/blog">
        <img class="icon-Close" src="@/assets/images/close.svg" />
      </nuxt-link>
      <nuxt-link v-if="this.$route.name === 'abouttwo'" class="header-Item" tag="li" to="/blog">
        <img class="icon-Close" src="@/assets/images/close-white.svg" />
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    }
  })
}
</script>
