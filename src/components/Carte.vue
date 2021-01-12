<template>
  <l-map
    :center="center"
    :zoom="zoom"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
  > 
    <l-tile-layer :url="url" />
 
    <l-control position="bottomleft"></l-control>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LControl } from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';

export default {
  components: {
    LMap,
    LTileLayer,
    LControl
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 49.1193089, 6.1757156 ],
      zoom: 12,
    }
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    }
  },
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