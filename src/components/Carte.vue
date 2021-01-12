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

    <elements-details
    v-for="element in $store.getters.elements"
      :key="element.id"
      :element="element.name"
      />

    <l-control position="bottomright">
        <btn-type-3></btn-type-3>
    </l-control>

    <l-control position="bottomright">
        <btn-type-2></btn-type-2>
    </l-control>

    <l-control position="bottomright">
        <btn-type-1></btn-type-1>
    </l-control>

  </l-map>
</template>

<script>
import { LMap, LTileLayer, LControl } from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';
import BtnType1 from './BtnType1.vue';
import BtnType2 from './BtnType2.vue';
import BtnType3 from './BtnType3.vue';


export default {
  components: {
    LMap,
    LTileLayer,
    LControl,
    BtnType1,
    BtnType2,
    BtnType3
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