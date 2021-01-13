<template>
    <div>
        <l-map
        class="map"
        ref="map">
            <div v-for="shape in shapes" :key="shape.id">
            <l-marker :lat-lng="shape.geometry.coordinates">
            <h3>Shapes</h3>

                    {{ shape.id }}
                
            </l-marker>
            </div>
        </l-map>
    </div>
</template>

<script>
import { LMap, LMarker } from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';
export default {
    components: {
    LMap,
    LMarker
  },
    data () {
        return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        center: [ 50.64093925317058, 3.0445486307144165 ],
        zoom: 12,
    }
  },
  methods:  {
      shapes() {
        this.$store.dispatch('shapes/chargerShapes')
      }
  }
}
</script>

<style>
 .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow :hidden
  }
</style>