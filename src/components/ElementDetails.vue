<template>
  <div>
      <div>
      <button @click='changeBtn()'>btn test</button><br><br>
      <button>{{ btnTest }}</button>
    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  props: {
    btnTest: String
  },
  methods: {
   changeBtn() {
     this.$emit('changeBtn', 'nextBtn')
   }
 }
}
</script>

<style>
  .maison-icon {
    height: 50px;
    width: auto;
  }
</style>