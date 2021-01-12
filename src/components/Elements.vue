<template>
    <div>
        <h4>Elements</h4>
        <select v-model="$store.state.selected">
            <option 
                v-for="element in elements" 
                :key="element.id"
                :data="element"
            >
                {{ element.name }}
            </option>
        </select>
        <element-details>
            {{ $store.state.selected }}
        </element-details>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ElementDetails from './ElementDetails'

export default {
  computed: {
      ...mapState('elements', ['elements']),
  },
  created() {
      this.$store.dispatch('elements/chargerElements')
  }
}
</script>

<style>

</style>