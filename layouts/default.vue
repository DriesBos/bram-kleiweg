<template>
  <div class="view-General">
    <transition name="page" mode="out-in">
      <nuxt />
    </transition>
    <TheSlide />
  </div>
</template>

<script>
import TheSlide from '~/components/TheSlide.vue'

export default {
  components: {
    TheSlide: TheSlide
  }
}
</script>
