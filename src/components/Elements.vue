<template>
    <div>
        <select v-model="$store.state.selected">
            <option 
                v-for="element in types" 
                :key="element.id"
                :data="element"
            >
                {{ element.name }}
            </option>
        </select>
        <div>
            {{ $store.state.selected }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ElementDetails from './ElementDetails'

export default {
  computed: {
      ...mapState('elements', ['types']),
  },
  created() {
      this.$store.dispatch('elements/chargerTypes', 'elements/chargerElements')
  }
}
</script>

<style>

</style>