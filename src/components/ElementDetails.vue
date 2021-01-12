<template>
  
  <l-marker
    :key="element.id"
  >
    <l-icon ref="icon">
      <img 
        class="maison-icon" 
        :src="element.images"
      />
      {{ element }}
    </l-icon>
    <l-popup 
      :content="element"
    >
    </l-popup>
  </l-marker>
</template>

<script>
import { LIcon, LMarker, LPopup } from 'vue2-leaflet'

export default {
  components: { LIcon, LMarker, LPopup },
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