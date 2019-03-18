<template>
  <div class="view-General">
    <TheHeader/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader: TheHeader
  }
}
</script>
