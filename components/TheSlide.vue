<template>
  <section class="theSlide" :class="[{slider: slider}, {peek: peek}, {menu: menu}]">
    <!-- Landing text -->
    <div v-if="slider" @click="toggleSlider" @mouseover="peek = true" @mouseleave="peek = false">
      <h1 class="logo">bram kleiweg</h1>
    </div>

    <!-- Menu -->
    <div
      v-if="!slider"
      @mouseover="menu = true"
      @mouseleave="menu = false"
      class="menu-Slider menu-Open"
    >
      <ul>
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
        <nuxt-link class="header-About header-Item" tag="li" to="/about">
          <p>About</p>
        </nuxt-link>
      </ul>
    </div>

    <!-- Toggle -->
    <div
      v-if="!slider"
      @click="toggleSliderMenu"
      @mouseover="menu = true"
      class="menu-Slider menu-Toggle"
    >
      <ul>
        <li v-if="menu">
          <img class="icon icon-Close" src="@/assets/images/close.svg" />
        </li>
        <li v-if="!menu">
          <img class="icon icon-Close" src="@/assets/images/close-half.svg" />
        </li>
      </ul>
    </div>

    <!-- Logo -->
    <div
      v-if="!slider"
      @click="toggleSlider"
      @mouseover="menu = true"
      class="menu-Slider menu-Logo"
    >
      <ul>
        <li>
          <p class="logo">bram kleiweg</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: function() {
    return {
      slider: true,
      peek: false,
      menu: false
    }
  },
  methods: {
    toggleSlider: function() {
      this.slider = !this.slider
      this.menu = false
      this.peek = false
    },
    toggleSliderPeek: function() {
      this.peek = !this.peek
    },
    toggleSliderMenu: function() {
      this.menu = !this.menu
    }
  },
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    }
  })
}
</script>
