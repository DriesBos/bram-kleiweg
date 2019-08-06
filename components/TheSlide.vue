<template>
  <section class="theSlide" :class="[{slider: slider}, {peek: peek}, {menu: menu}]">
    <!-- Landing text -->
    <div
      v-if="slider"
      @click="toggleSliderStore"
      @mouseover="toTruePeekStore"
      @mouseleave="toFalsePeekStore"
    >
      <h1 class="logo">bram kleiweg</h1>
    </div>

    <!-- Collapsed -->
    <transition name="menuFade">
      <div
        v-if="!slider && !menu"
        @mouseover="menu = true"
        @click="menu = true"
        class="theSlide-Menu theSlide-Collapsed"
      >
        <div class="theSlide-Collapsed_Toggle">
          <img class="icon icon-Close" src="@/assets/images/hamburger.svg" />
        </div>
      </div>
    </transition>

    <!-- Menu -->
    <transition name="menuFade">
      <div v-if="menu && !slider" class="theSlide-Menu theSlide-Open" @mouseleave="menu = false">
        <ul>
          <nuxt-link tag="li" to="/" v-bind:class="{active: !selectedCategory}">
            <a>All Projects</a>
          </nuxt-link>
          <li
            v-for="category in categories"
            v-bind:class="{active: selectedCategory == category.id}"
            v-bind:key="category.id"
          >
            <router-link tag="a" :to="'/category/' + category.id">{{ category.name }}</router-link>
          </li>
          <nuxt-link tag="li" to="/about">
            <a>About</a>
          </nuxt-link>
          <li></li>
        </ul>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      menu: false
    }
  },
  computed: mapState({
    categories: state => state.categories.list,
    selectedCategory(state) {
      return this.$route.params.categoryId
    },
    slider: state => state.slider.slider,
    peek: state => state.slider.peek
  }),
  methods: mapMutations({
    toggleSliderStore: 'slider/toggleSlider',
    toTruePeekStore: 'slider/peekToTrue',
    toFalsePeekStore: 'slider/peekToFalse'
  })
}
</script>
