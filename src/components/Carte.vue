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
    
    <l-control position="bottomleft">
      <elements />
    </l-control>
    <l-control position="topright">
       <btn-nav></btn-nav>
    </l-control>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LControl } from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';

import BtnNav from './BtnNav.vue';
import Elements from './Elements.vue';



export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    BtnNav,
    Elements
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 50.64093925317058, 3.0445486307144165 ],
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