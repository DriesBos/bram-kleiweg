<template>
  <section class="view-Landing" :class="{ hover }">
    <div @mouseover="mouseOver">
      <nuxt-link tag="h1" to="/blog" class="logo">bram kleiweg</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      hover: false
    }
  },
  methods: {
    mouseOver: function() {
      this.hover = true
    }
  }
}
</script>
