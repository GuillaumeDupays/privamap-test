<template>
  <div>
    <q-btn 
      v-for="btn in types" 
      :key="btn.id"
      flat
      outline rounded
      :label="btn.name"
      dense
    >
    </q-btn>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed : {
    ...mapState('elements', ['types']),
  },
  created() {
    this.$store.dispatch('elements/chargerTypes')
  }
}
</script>

<style>

</style>