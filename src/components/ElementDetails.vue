<template>
    <l-icon ref="icon">
      <img 
        class="maison-icon" 
        :src="element.images"
      />
      {{ element.images }}
    </l-icon>
</template>

<script>
import { LIcon } from 'vue2-leaflet'

export default {
  components: { LIcon },
  props: {
    element: {
      type: Object,
      required: true
    }
  },

}
</script>

<style>
  .maison-icon {
    height: 50px;
    width: auto;
  }
</style>