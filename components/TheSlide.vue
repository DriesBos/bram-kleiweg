<template>
  <section class="theSlide" :class="[{slider: slider}, {peek: peek}, {menu: menu}]">
    <!-- Landing text -->
    <div v-if="slider" @click="toggleSliderStore">
      <h1 @mouseover="peek = true" @mouseleave="peek = false" class="logo">bram kleiweg</h1>
    </div>

    <!-- Collapsed -->
    <transition name="menuFade">
      <div class="theSlide-Menu theSlide-Collapsed"></div>
    </transition>

    <!-- Menu -->
    <transition name="menuFade">
      <div v-if="menu && !slider" class="theSlide-Menu theSlide-Open">
        <ul>
          <nuxt-link
            tag="li"
            to="/"
            v-bind:class="{active: !selectedCategory && this.$route.name != 'about'}"
            class="nobreak"
          >
            <a class="nobreak">All Projects</a>
          </nuxt-link>
          <li
            v-for="category in categories"
            v-bind:class="{active: selectedCategory == category.id}"
            v-bind:key="category.id"
          >
            <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
          </li>
          <nuxt-link tag="li" to="/about" v-bind:class="{active: this.$route.name == 'about'}">
            <a>About</a>
          </nuxt-link>
        </ul>
      </div>
    </transition>

    <!-- Toggle -->
    <div v-if="!slider" class="theSlide-Toggle" @click="menu = !menu">
      <img v-if="!menu" class="icon" src="@/assets/images/hamburger.svg" />
      <img v-else class="icon" src="@/assets/images/close.svg" />
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      menu: false,
      peek: false
    }
  },
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    },
    slider: state => state.slider.slider
  }),
  methods: mapMutations({
    toggleSliderStore: 'slider/toggleSlider'
  })
}
</script>
