<template>
  <div class="q-pa-md" style="max-width: 200px">
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <btns></btns>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import Btns from './Btns.vue'
export default {
  components: { Btns },
  data () {
    return {
      counter: 0
    }
  },

  methods: {
    startCounting () {
      this.timer = setInterval(() => {
        this.counter++
      }, 1000)
    },

    stopCounting () {
      clearInterval(this.timer)
    }
  },

  beforeDestroy () {
    this.stopCounting()
  }
}
</script>